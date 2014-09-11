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
grassrootsapp.maps._STAR_dest_lat_lng_STAR_ = (new google.maps.LatLng("52.419 -2.219"));
grassrootsapp.maps._STAR_directions_display_STAR_ = (new google.maps.DirectionsRenderer());
grassrootsapp.maps._STAR_directions_service_STAR_ = (new google.maps.DirectionsService());
grassrootsapp.maps._STAR_marker_STAR_ = (new google.maps.Marker(grassrootsapp.maps._STAR_dest_lat_lng_STAR_));
grassrootsapp.maps.my_opts = new cljs.core.PersistentArrayMap(null, 3, ["zoom",(14),"mapTypeId",google.maps.MapTypeId.ROADMAP,"center",grassrootsapp.maps._STAR_dest_lat_lng_STAR_], null);
grassrootsapp.maps.request = new cljs.core.PersistentArrayMap(null, 3, ["origin","52.3591317 -2.2705797","destination","52.419 -2.219","travelMode",google.maps.TravelMode.DRIVING], null);
grassrootsapp.maps.map_load = (function map_load(){var elem = goog.dom.getElement("map-canvas");grassrootsapp.maps._STAR_map_STAR_ = (new google.maps.Map(elem,cljs.core.clj__GT_js.call(null,grassrootsapp.maps.my_opts)));
grassrootsapp.maps._STAR_directions_display_STAR_.setMap(grassrootsapp.maps._STAR_map_STAR_);
return grassrootsapp.maps._STAR_directions_service_STAR_.route(cljs.core.clj__GT_js.call(null,grassrootsapp.maps.request),((function (elem){
return (function (result,status){if(cljs.core._EQ_.call(null,status,google.maps.DirectionsStatus.OK))
{return grassrootsapp.maps._STAR_directions_display_STAR_.setDirections(result);
} else
{return null;
}
});})(elem))
);
});
goog.events.listen(window,"load",grassrootsapp.maps.map_load);

//# sourceMappingURL=maps.js.map