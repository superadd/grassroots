(defproject grass-roots-app "0.1.0-SNAPSHOT"
  :description "App for parents of Footballing children"
  :url "http://www.superadd.it"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [ring/ring "1.2.1"]
                 [compojure "1.1.6"]
                 [liberator "0.11.0"]
                 [fogus/ring-edn "0.2.0"]
                 [enlive "1.1.5"]
                 [com.datomic/datomic-free "0.9.4766"]
                 [org.clojure/clojurescript "0.0-2202"]
                 [org.clojure/core.async "0.1.301.0-deb34a-alpha"]
                 [om "0.6.2"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :source-paths ["src/clj" "src/cljs"]
  :resource-paths ["resources"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src/clj" "src/cljs"]
              :compiler {
                :output-to "resources/public/js/main.js"
                :output-dir "resources/public/js/out"
                :optimizations :none
                :source-map true}}]})
