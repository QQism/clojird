(defproject clojird "0.1.0-SNAPSHOT"
  :description "Flappy bird with time manipulation"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2311"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "clojird"
              :source-paths ["src"]
              :compiler {
                :output-to "clojird.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
