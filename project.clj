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
                 [figwheel "0.1.4-SNAPSHOT"]
                 [kioo "0.4.0"]
                 [om "0.7.1"]]

  :plugins [[lein-ring "0.8.11"]
            [lein-cljsbuild "1.0.3"]
            [lein-figwheel "0.1.4-SNAPSHOT"]]

  :source-paths ["src/app"]

  :ring {:handler grassrootsapp.core/routes
         :port 3001
         :auto-refresh? true}

  :cljsbuild {

        :builds [{:id "dev"
                  :source-paths ["src/ui"]
                  :compiler { :output-to "resources/public/js/compiled/app.js"
                              :output-dir "resources/public/js/compiled/out"
                              :optimizations :none
                              :source-map true }
                  :figwheel { :http-server-root "public" ;; this will be in resources/
                              :port 3449                 ;; default

                              ;; CSS reloading (optional)
                              ;; :css-dirs has no default value
                              ;; if :css-dirs is set figwheel will detect css file changes and
                              ;; send them to the browser
                              :css-dirs ["resources/public/css"]

                              ;; Server Ring Handler (optional)
                              ;; if you want to embed a ring handler into the figwheel http-kit
                              ;; server
                              :ring-handler grassrootsapp.core/routes}}
                 {:id "release"
                    :source-paths ["src/ui"]
                    :compiler { :output-to "resources/public/js/compiled/app.js"
                                :optimizations :advanced
                                :pretty-print false
                                :preamble ["react/react.min.js"]
                                :externs ["react/externs/react.js"]}}]}


  :main grassrootsapp.core)
