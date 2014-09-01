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
                 [org.clojure/clojurescript "0.0-2173"]
                 [figwheel "0.1.2-2173-SNAPSHOT"]]

  :plugins [[lein-ring "0.8.10"]
            [lein-cljsbuild "1.0.2"]
            [lein-figwheel "0.1.2-2173-SNAPSHOT"]]

  :source-paths ["src/app"]

  :ring {:handler grassrootsapp.core/routes
         :port 3001}

  :cljsbuild {

        :builds [{:id "dev"
                  :source-paths ["src/ui"]
                  :compiler { :output-to "resources/public/js/compiled/app.js"
                              :output-dir "resources/public/js/compiled/out"
                              ;;:externs ["resources/public/js/externs/jquery-1.9.js"]
                              :optimizations :none
                              :source-map true }}]}

  :main grassrootsapp.core)
