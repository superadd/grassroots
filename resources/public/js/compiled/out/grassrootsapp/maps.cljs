(ns grassrootsapp.maps
  (:require [om.core :as om :include-macros true]
            [goog.dom :as dom]
            [goog.events :as events]))

(enable-console-print!)

(def *map* nil)

(def *directions-display* (google.maps.DirectionsRenderer.))

(def *directions-service* (google.maps.DirectionsService.))

(def my-opts
  {"zoom" 14
   "mapTypeId" google.maps.MapTypeId.ROADMAP
   "center" (google.maps.LatLng. 52.419,-2.219)})

(def request
  {"origin" 52.3591317,-2.2705797
   "destination" 52.419,-2.219
   "travelMode" google.maps.TravelMode.DRIVING})

(defn map-load []
  (let [elem (dom/getElement "map-canvas")]
    (set! *map* (google.maps.Map. elem (clj->js my-opts)))
    (.setMap *directions-display* *map*)
    (.route *directions-service* request (fn [result status]
                                           (println status google.maps.DirectionsStatus.OK)
                      (if (= status google.maps.DirectionsStatus.OK)
                             (.setDirections *directions-display* result))))))

(events/listen js/window "load"
               map-load)


