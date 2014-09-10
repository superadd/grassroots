// Compiled by ClojureScript 0.0-2277
goog.provide('grassrootsapp.maps');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
grassrootsapp.maps._STAR_map_STAR_ = null;
grassrootsapp.maps._STAR_directions_display_STAR_ = (new google.maps.DirectionsRenderer());
grassrootsapp.maps._STAR_directions_service_STAR_ = (new google.maps.DirectionsService());
grassrootsapp.maps.my_opts = new cljs.core.PersistentArrayMap(null, 3, ["zoom",(14),"mapTypeId",google.maps.MapTypeId.ROADMAP,"center",(new google.maps.LatLng(52.419,-2.219))], null);
grassrootsapp.maps.request = new cljs.core.PersistentArrayMap(null, 4, ["origin",52.3591317,-2.2705797,"destination",52.419,-2.219,"travelMode",google.maps.TravelMode.DRIVING], null);
