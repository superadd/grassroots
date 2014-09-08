(ns grassrootsapp.core
  (:require [compojure.core :refer [defroutes ANY GET POST PUT DELETE]]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.middleware.params :refer [wrap-params]]
            [ring.adapter.jetty :as ring]
            [ring.handler.dump :refer [handle-dump]]
            [ring.util.response :refer [response]]
            [net.cgrand.enlive-html :as html]))

(html/deftemplate index "public/index.html" [body]
                  [:#wrapper]
                  (html/content body))

(defroutes routes
  (GET "/" request (reduce str (index "test")))
  (ANY "/test" [] handle-dump)
  (route/not-found "<h1>Page not found</h1>"))

(def app
  (-> routes
    (wrap-params)))

(defn -main []
  (ring/run-jetty #'app {:port 3000 :join? false}))
