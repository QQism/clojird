(defproject clojird "0.1.0-SNAPSHOT"
  :description "Flappy bird with time manipulation"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.76"]]

  :plugins [[lein-cljsbuild "1.1.3"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "clojird"
              :source-paths ["src"]
              :compiler {
                :output-to "clojird.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
