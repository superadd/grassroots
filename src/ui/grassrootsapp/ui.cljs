(ns grassrootsapp.ui
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [figwheel.client :as fw :include-macros true]
            [grassrootsapp.maps]))

(enable-console-print!)

(fw/watch-and-reload
;;;  :websocket-url "ws://localhost:3449/figwheel-ws" default
  :jsload-callback (fn [] (print "reloaded"))) ;; optional callback

