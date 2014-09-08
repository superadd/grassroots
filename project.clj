(defproject grassrootsapp "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [ring "1.3.0-RC1"]
                 [ring/ring-jetty-adapter "1.3.0-RC1"]
                 [compojure "1.1.8"]
                 [liberator "0.11.0"]
                 [enlive "1.1.5"]
                 ;;; Frontend
                 [org.clojure/clojurescript "0.0-2277"]
                 [kioo "0.4.0"]
                 [om "0.7.1"]]

  :plugins [[lein-ring "0.8.10"]
            [lein-cljsbuild "1.0.3"]]

  :source-paths ["src/app"]

  :ring {:handler grassrootsapp.core/routes
         :port 3001}

  :cljsbuild {

        :builds [{:id "dev"
                  :source-paths ["src/ui"]
                  :compiler { :output-to "resources/public/js/compiled/out/app.js"
                              :output-dir "resources/public/js/compiled/out"
                              :optimizations :none
                              :source-map true }}
                 {:id "release"
                    :source-paths ["src/ui"]
                    :compiler { :output-to "resources/public/js/compiled/out/app.js"
                                :optimizations :advanced
                                :pretty-print false
                                :preamble ["react/react.min.js"]
                                :externs ["react/externs/react.js"]}}]}


  :main grassrootsapp.core)
