(ns grassrootsapp.maps
  (:require [om.core :as om :include-macros true]
            [goog.dom :as dom]
            [goog.events :as events]))

(enable-console-print!)

(def *map* nil)

(def *dest-lat-lng* (google.maps.LatLng. "52.419 -2.219"))

(def *directions-display* (google.maps.DirectionsRenderer.))

(def *directions-service* (google.maps.DirectionsService.))

(def *marker* (google.maps.Marker. *dest-lat-lng*))

(def my-opts
  {"zoom" 14
   "mapTypeId" google.maps.MapTypeId.ROADMAP
   "center" *dest-lat-lng*})

(def request
  {"origin" "52.3591317 -2.2705797"
   "destination" "52.419 -2.219"
   "travelMode" google.maps.TravelMode.DRIVING})

(defn map-load []
  (let [elem (dom/getElement "map-canvas")]
    (set! *map* (google.maps.Map. elem (clj->js my-opts)))
 ;;   (.setMap (google.maps.Marker. 52.419, -2.219) *map*)
 ;;   (.setMap *marker* *map*)
    (.setMap *directions-display* *map*)
    (.route *directions-service* (clj->js request) (fn [result status]
                      (if (= status google.maps.DirectionsStatus.OK)
                             (.setDirections *directions-display* result))))))

(events/listen js/window "load"
               map-load)


