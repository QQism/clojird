(ns clojird.core)

(enable-console-print!)

(println "This is Clojird Game.")

;;
;; Helpers
;;

(defn indices [pred coll]
   (keep-indexed #(when (pred %2) %1) coll))

(def assets-loaded-count (atom 0))
(def assets-count (atom 0))

(defn read-image [url]
  (let [image (new js/Image)]
    (swap! assets-count #(inc %))
    (set! (.-src image) url)
    (set! (.-onload image) (fn [e] (swap! assets-loaded-count #(inc %))))
    image))

;;
;; Data
;;

(def assets {:land-sprite (read-image "resources/land.png")
             :pipe-down-sprite (read-image "resources/PipeDown.png")
             :pipe-up-sprite (read-image "resources/PipeUp.png")
             :sky-sprite (read-image "resources/sky.png")
             :bird-sprites [(read-image "resources/bird/bird-01.png")
                            (read-image "resources/bird/bird-02.png")
                            (read-image "resources/bird/bird-03.png")
                            (read-image "resources/bird/bird-04.png")]
             :play-button (read-image "resources/play-button.png")})

(def game-settings (atom {:resolution {:width 550 :height 300}
                          :debug true
                          :pause true
                          :map-speed 150
                          :pipe-margin-x 160
                          :pipe-margin-y 250
                          :fps 60
                          :last-timestamp 0
                          :dt 0
                          :gravity 0.00039
                          :assets assets
                          }))

(def game-state (atom {:land {:sprite (:land-sprite (:assets @game-settings))
                              :offset 0
                              :velocity 1
                              :x 0
                              :y 70}
                       :sky {:sprite (:sky-sprite (:assets @game-settings))
                              :offset 0
                              :velocity 0.8
                              :x 0
                              :y 178}
                       :bird {:sprite (first (:bird-sprites (:assets @game-settings)))
                              :last-flipping-time 0
                              :x 200
                              :y 100
                              :y-velocity 0
                              }
                       :score 0
                       :background-color "#60B2BC"
                       :next-state (atom nil)
                       :prev-state (atom nil)
                       }))
;;
;; UI
;;

(defn draw-image [context sprite x y]
  (.drawImage context sprite x y)
  (.strokeRect context x y (.-width sprite) (.-height sprite)))

(defn draw-rotated-image [context sprite x y angle]
  (.save context)
  (.translate context x y)
  (.rotate context (* angle (/ js/Math.PI 180)))
  (draw-image context sprite (/ (.-width sprite) -2) (/ (.-height sprite) -2))
  (.restore context))
(defn clear-canvas [context width height] (.clearRect context 0 0 width height))

(defn draw-parallax [context state settings parallax]
  (let [{{sprite :sprite offset :offset sprite-x :x sprite-y :y} parallax} state
        {{canvas-width :width canvas-height :height} :resolution} settings
        x sprite-x
        y (- canvas-height sprite-y)]
      (draw-recur-parallax context sprite offset x y canvas-width)))

(defn draw-background [context state settings]
  (let [{color :background-color} state
        {{canvas-width :width canvas-height :height} :resolution} settings]
    (set! (.-fillStyle context) color)
    (.fillRect context 0 0 canvas-width canvas-height)))

(defn draw-recur-parallax [context sprite offset x y canvas-width]
  (.save context)
  (.translate context (- 0 offset) 0)
  ((fn [x]
     (draw-image context sprite x y)
     (cond (and (<= (- x offset) (.-width sprite)) (> (.-width sprite) 0)) (recur (+ x (.-width sprite))))
     ) x)
  (.restore context))

(defn draw-pipes [context state settings]
  (doseq [pipe (:pipes state)]
    (let [{sprite :sprite x :x y :y} pipe]
      (draw-image context sprite x y))))

(defn draw-bird [context state settings]
  (let [{{sprite :sprite x :x y :y velocity :y-velocity} :bird} state
        angle (velocity-to-angle velocity)
        ]
    (draw-rotated-image context sprite x y angle)
    ))

(defn draw-score [context state { {width :width height :height} :resolution}]
  (set! (.-font context) "23pt Comic Sans MS")
  (set! (.-fillStyle context) "#FFFFFF")
  (.fillText context (str (:score state)) (/ width 2) 50)
  )

(defn draw-pause-screen [context state { {width :width height :height} :resolution {play-button :play-button} :assets}]
  (.setFillColor context 0 0 0 0.5)
  (.fillRect context 0 0 width height)
  (set! (.-font context) "10pt Comic Sans MS")
  (set! (.-fillStyle context) "#FFFFFF")
  (.fillText context "'z' time backward" (/ width 7) (* height 0.82))
  (.fillText context "'x' time forward" (/ width 7) (* height 0.89))
  (.fillText context "'Enter' Play/Pause/Resume" (/ width 2) (* height 0.82))
  (.fillText context "'Space' Jump" (/ width 2) (* height 0.89))
  ;(draw-image context play-button (- (/ width 2) (/ (.-width play-button) 2)) (- (/ height 2) (/ (.-height play-button) 2)))
  )

(defn draw-game [dt context state settings]
  (let [{{canvas-width :width canvas-height :height} :resolution pause :pause} settings]
    (clear-canvas context canvas-width canvas-height)
    (draw-background context state settings)
    (draw-parallax context state settings :sky)
    (draw-pipes context state settings)
    (draw-parallax context state settings :land)
    (if pause (draw-pause-screen context state settings))
    (draw-bird context state settings)
    (draw-score context state settings)
    ))


;;
;; Logic
;;

(defn velocity-to-angle [velocity]
  (let [max-velocity 0.25
        ;min-velocity -0.125
        max-angle 90
        min-angle -30
        ]
    (cond (<= velocity min-velocity) min-angle
          (>= velocity max-velocity) max-angle
          (> velocity 0) (/ (* velocity max-angle) max-velocity)
          ;(< velocity 0) (/ (* velocity min-angle) min-velocity)
          :else min-angle
          ))
  )

(defn key-press [event state settings]
  """
  Handle key presses in game
    """
  (case (.-which event)
    ; ENTER -> pause game
    13 (toogle-game-pause state settings)
    ; z -> rewind
    122 (shift-history state :prev-state)
    ; x -> forward
    120 (shift-history state :next-state)
    ; Space -> jump
    32 (touch nil state settings)
    nil))

(defn toogle-game-pause [state settings]
  ;(println "PAUSE")
  (swap! settings #(assoc % :pause (not (:pause %)))))

(defn shift-history [state action]
  (if-let [target-state (deref (action @state))]
    (reset! state target-state)
    nil))

(defn update-parallax [state settings parallax]
  (let [{{canvas-width :width canvas-height :height} :resolution fps :fps map-speed :map-speed} settings
        {{velocity :velocity sprite :sprite} parallax} state]
    (update-in state [parallax :offset] (fn [offset]
                                          (cond (<= offset (.-width sprite)) (+ offset (/ (* velocity map-speed) fps))
                                                :else 0)))))

(defn save-history [state old-state-value]
  (let [old-state (atom old-state-value)
        prev-old-state (:prev-state @old-state)]
    (swap! state #(assoc % :next-state (atom nil)))
    (swap! state #(assoc % :prev-state old-state))
    (swap! old-state #(assoc % :next-state (atom @state)))
    (cond (deref prev-old-state)
          (swap! prev-old-state #(assoc % :next-state old-state)))))

(defn furthest-pipe-x [pipes]
  (apply max (map #(:x %) pipes)))

(defn pipe-position-state [pipe settings]
  (let [{sprite :sprite x :x y :y} pipe
        {{canvas-width :width canvas-height :height} :resolution} settings
        width (.-width sprite)]
    (cond (< (+ x (.-width sprite)) 0) :left-offscreen
          (> x canvas-width) :right-offscreen
          :else :onscreen)))

(defn pipe-up-at [x pipes]
  (get pipes (first (indices #(and (= (:x %) x) (= (:direction %) :pipe-up)) pipes))))

(defn new-pipe-down-y [pipe-down pipes settings]
  (let [x (:x pipe-down)
        pipe-up (pipe-up-at x pipes)
        up-y (:y pipe-up)
        {margin-y :pipe-margin-y} settings]
    (- up-y margin-y)))

(defn new-pipe-x [pipe pipes settings]
  (let [{sprite :sprite x :x} pipe
        {speed :map-speed fps :fps margin-x :pipe-margin-x} settings]
    (if (= (pipe-position-state pipe settings) :left-offscreen)
      (+ (furthest-pipe-x pipes) margin-x)
      (- (:x pipe) (/ speed fps)))))

(defn new-pipe-y [pipe pipes settings]
  (let [{sprite :sprite x :x y :y} pipe
        pipe-position-state (pipe-position-state pipe settings)
        is-pipe-up (= (:direction pipe) :pipe-up)]
    (cond (and (= pipe-position-state :left-offscreen) is-pipe-up) (random-pipe-up-y)
          (and (= pipe-position-state :right-offscreen) (not is-pipe-up)) (new-pipe-down-y pipe pipes settings)
          :else y)))

(defn update-pipes [state settings]
  (update-in state [:pipes] (fn [pipes]
                              (vec (map #(let [new-x (new-pipe-x % pipes settings)
                                          new-y (new-pipe-y % pipes settings)
                                          bird-x (:x (:bird state))
                                          next-status (next-pipe-status % bird-x)]
                                       (assoc % :x new-x :y new-y :status next-status))
                                      pipes)))))

(defn next-pipe-status [{:keys [x status sprite] :as pipe} bird-x]
  (let [edge-x (+ x (.-width sprite))]
    (cond
      (and (< edge-x bird-x) (= status :passing))
      :backward
      (and (< edge-x bird-x) (= status :forward))
      :passing
      (and (> edge-x bird-x) (= status :backward))
      :forward
      :else status)))

(defn next-bird-sprite [bird settings]
  (let [{{sprites :bird-sprites} :assets} settings
        {sprite :sprite x :x y :y} bird
        current-sprite-index (first (indices #(= % sprite) sprites))
        tmp-index (inc current-sprite-index)
        next-sprite-index (if (= tmp-index (count sprites)) 0 tmp-index)]
    (get sprites next-sprite-index)))

(defn bird-flipping [bird settings dt]
  (let [{last-flipping-time :last-flipping-time} bird
        {last-timestamp :last-timestamp} settings]
    (if (> (- last-timestamp last-flipping-time) 200) ; flipping for every 0.2s
      (assoc bird
             :sprite (next-bird-sprite bird settings)
             :last-flipping-time last-timestamp) bird)))

(defn bird-gravity [bird settings dt]
  (let [{y :y velocity :y-velocity} bird
        {gravity :gravity} settings]
    (if (<= y 210)
      (assoc bird
             :y (+ (* velocity dt) (:y bird))
             :y-velocity (+ velocity (* gravity dt))
             ) bird)))

(defn update-bird-flipping [state settings dt]
  (update-in state [:bird] bird-flipping settings dt))

(defn update-bird-gravity [state settings dt]
  (update-in state [:bird] bird-gravity settings dt)
  )

(defn update-bird-jump [state settings dt]
  (assoc-in state [:bird :y-velocity] -0.125)
  )

(defn bird-collisions [settings {bird :bird pipes :pipes} dt]
  (cond (bird-hit-ground? (:y bird)) (assoc settings :pause true)
        (bird-hit-pipe? bird pipes) (assoc settings :pause true)
        :else settings)
  )

(defn bird-hit-ground? [bird-y] (> bird-y 210))

(defn bird-hit-pipe? [bird pipes]
  (let [bird-vertices (bird-rotated-vertices bird)]
    (not (not-any? #(true? %)
              (map #(is-polygons-intersecting?
                      bird-vertices
                      (pipe-vertices %))
                   pipes)))))

(defn bird-rotated-vertices [bird]
  (let [{sprite :sprite x :x y :y velocity :y-velocity} bird
        rad-angle (* (velocity-to-angle velocity) (/ js/Math.PI 180))
        vertices (bird-vertices bird)
        ]
    (map #(convert-rotated-vertices % [x y] rad-angle) vertices)
    )
  )

(defn bird-vertices [bird]
  (let [{sprite :sprite x :x y :y} bird
        width (.-width sprite)
        height (.-height sprite)]
    [[(- x (/ width 2)) (- y (/ height 2))]
     [(- x (/ width 2)) (+ y (/ height 2))]
     [(+ x (/ width 2)) (- y (/ height 2))]
     [(+ x (/ width 2)) (+ y (/ height 2))]]))

(defn pipe-vertices [pipe]
  (let [{sprite :sprite x :x y :y} pipe
        width (.-width sprite)
        height (.-height sprite)]
    [[x y]
     [x (+ y height)]
     [(+ x width ) y]
     [(+ x width ) (+ y height)]]))

(defn convert-rotated-vertices [[point-x point-y] [pivot-x pivot-y] rad-angle]
  [(+ (- (* (- point-x pivot-x) (.cos js/Math rad-angle))
         (* (- point-y pivot-y) (.sin js/Math rad-angle)))
      pivot-x)
   (+ (+ (* (- point-x pivot-x) (.sin js/Math rad-angle))
         (* (- point-y pivot-y) (.cos js/Math rad-angle)))
      pivot-y)
   ])


(defn bird-pass-pipe [state]
  (let [{ {bird-y :y} :bird pipes :pipes} state]
    (update-in state [:score]
               (fn [score]
                 (+ score (/
                           (count (filter #(= % :passing)
                                          (map :status pipes)))
                           2)) ; there are 2 pipes at the same y-position
                 ))))

(defn is-polygons-intersecting? [a-vertices b-vertices]
  (let [vertices (distinct (into a-vertices b-vertices))
        a-normals (calculate-polygon-normals a-vertices)
        b-normals (calculate-polygon-normals b-vertices)
        a-a-projections (map #(polygon-projection-on-normal a-vertices %) a-normals)
        b-a-projections (map #(polygon-projection-on-normal b-vertices %) a-normals)
        a-b-projections (map #(polygon-projection-on-normal a-vertices %) b-normals)
        b-b-projections (map #(polygon-projection-on-normal b-vertices %) b-normals)
        a-projections (map vector a-a-projections b-a-projections)
        b-projections (map vector a-b-projections b-b-projections)
        a-overlaps (map (fn [[projections1 projections2]]
                       (projections-overlap? projections1 projections2))
                     a-projections)
        b-overlaps (map (fn [[projections1 projections2]]
                       (projections-overlap? projections1 projections2))
                     b-projections)]
    (and (not-any? #(not %) a-overlaps) (not-any? #(not %) b-overlaps))))

(defn calculate-normal [[a-x a-y] [b-x b-y]]
  [(- b-y a-y) (- a-x b-x)])


(defn calculate-polygon-normals [vertices]
  (map-indexed
    (fn [index vertex]
      (calculate-normal vertex
                        (nth vertices (mod (inc index) (count vertices)))))
    vertices)
  )

(defn polygon-projection-on-normal [vertices normal]
  (map #(point-projection-on-normal % normal) vertices)
  )

(defn point-projection-on-normal [[x y] [normal-x normal-y]]
  (+ (* x normal-x) (* y normal-y)))

(defn projections-overlap? [a-projections b-projections]
  (let [min-a (apply min a-projections)
        min-b (apply min b-projections)
        max-a (apply max a-projections)
        max-b (apply max b-projections)]
    (if (or (< max-a min-b) (< max-b min-a)) false true)))


(defn update-state [state settings dt]
  (swap! state update-parallax settings :land)
  (swap! state update-parallax settings :sky)
  (swap! state update-pipes settings)
  (swap! state update-bird-flipping settings dt)
  (swap! state update-bird-gravity settings dt)
  (swap! state bird-pass-pipe settings dt)
  )

(defn random-pipe-up-y []
  (+ (rand-int 131) 100))

(defn generate-pipe [settings direction x y]
  {:sprite ((if (= direction :pipe-up) :pipe-up-sprite :pipe-down-sprite) (:assets settings))
   :x x
   :y y
   :direction direction
   :status :forward ; backward, :passing
   })

(defn generate-pipe-pair [state settings no]
  (let [{{width :width} :resolution margin-x :pipe-margin-x margin-y :pipe-margin-y} settings
        x (+ width (* margin-x no))
        up-y (random-pipe-up-y) ;70 - 220
        down-y (- up-y margin-y); (- up-y 220)
        ]
   (update-in state [:pipes]
              conj (generate-pipe settings :pipe-up x up-y) (generate-pipe settings :pipe-down x down-y))))

(defn generate-pipes-pairs [state settings]
  (let [{{canvas-width :width} :resolution margin-x :pipe-margin-x} settings
        pairs-count (.ceil js/Math (/ canvas-width margin-x))]
    (swap! state #(assoc % :pipes [])) ; cleanup before generating new pipes
    (dotimes [no pairs-count] (swap! state generate-pipe-pair settings no))))

(defn touch [e state settings]
  (if-not (:pause @settings) (swap! state update-bird-jump settings (:dt @settings)))
  ;(println "Click X: " (- (.-pageX e) 8) " Y:" (- (.-pageY e) 8))
  )

(defn save-timestamp [settings timestamp dt]
  (assoc settings :last-timestamp timestamp :dt dt))

(defn update [timestamp context state settings]
  """
  Game update function
    """
  (let [{{canvas-width :width canvas-height :height} :resolution pause :pause last-timestamp :last-timestamp} @settings
        dt (- timestamp last-timestamp)] ; delta-time

    (if-not pause (let [old-state-value @state]
                    ;(swap! bird-buffer-frames #(empty %))
                    (update-state state @settings dt)
                    (save-history state old-state-value)))
    (swap! settings bird-collisions @state dt)
    (draw-game dt context @state @settings)
    (swap! settings save-timestamp timestamp dt)
    (.requestAnimationFrame js/window #(update % context state settings))))

(defn assets-loading [timestamp context state settings]
  (if (= @assets-loaded-count  @assets-count)
    (update timestamp context state settings)
    (.requestAnimationFrame js/window #(assets-loading % context state settings))
    )
  )

(defn create-canvas [width height]
  (let [canvas (.createElement js/document "canvas")]
    (set! (.-width canvas) width)
    (set! (.-height canvas) height)
    canvas))

(defn main [state settings]
  """
  Main Function
    """
  (let [{{canvas-width :width canvas-height :height} :resolution last-timestamp :last-timestamp} @settings
        canvas (create-canvas canvas-width canvas-height)
        context (.getContext canvas "2d")]
    (.appendChild (.-body js/document) canvas)
    (set! (.-onkeypress js/window) #(key-press % state settings))
    (set! (.-onclick js/window) #(touch % state settings))

    (generate-pipes-pairs state @settings)
    ;(update last-timestamp context state settings)
    (assets-loading last-timestamp context state settings)
    ))

(main game-state game-settings)
