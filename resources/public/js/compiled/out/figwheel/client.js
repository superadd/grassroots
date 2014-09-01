// Compiled by ClojureScript 0.0-2173
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
figwheel.client.log = (function log(_message){return console.log(_message);
});
/**
* @param {...*} var_args
*/
figwheel.client.dlog = (function() { 
var dlog__delegate = function (p__13724,args){var map__13726 = p__13724;var map__13726__$1 = ((cljs.core.seq_QMARK_.call(null,map__13726))?cljs.core.apply.call(null,cljs.core.hash_map,map__13726):map__13726);var debug = cljs.core.get.call(null,map__13726__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var dlog = function (p__13724,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dlog__delegate.call(this,p__13724,args);};
dlog.cljs$lang$maxFixedArity = 1;
dlog.cljs$lang$applyTo = (function (arglist__13727){
var p__13724 = cljs.core.first(arglist__13727);
var args = cljs.core.rest(arglist__13727);
return dlog__delegate(p__13724,args);
});
dlog.cljs$core$IFn$_invoke$arity$variadic = dlog__delegate;
return dlog;
})()
;
figwheel.client.add_cache_buster = (function add_cache_buster(url){return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__13728,callback){var map__13730 = p__13728;var map__13730__$1 = ((cljs.core.seq_QMARK_.call(null,map__13730))?cljs.core.apply.call(null,cljs.core.hash_map,map__13730):map__13730);var msg = map__13730__$1;var dependency_file = cljs.core.get.call(null,map__13730__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__13730__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var file = cljs.core.get.call(null,map__13730__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core.truth_((function (){var or__7801__auto__ = dependency_file;if(cljs.core.truth_(or__7801__auto__))
{return or__7801__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,file)).addCallback((function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file], null));
}));
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,(function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
}));
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.reload_js_files = (function reload_js_files(p__13731,callback){var map__13767 = p__13731;var map__13767__$1 = ((cljs.core.seq_QMARK_.call(null,map__13767))?cljs.core.apply.call(null,cljs.core.hash_map,map__13767):map__13767);var files = cljs.core.get.call(null,map__13767__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__10182__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10183__auto__ = (function (){var switch__10112__auto__ = (function (state_13786){var state_val_13787 = (state_13786[1]);if((state_val_13787 === 6))
{var inst_13770 = (state_13786[7]);var inst_13778 = (state_13786[2]);var inst_13779 = [inst_13770];var inst_13780 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_13779,null));var inst_13781 = cljs.core.apply.call(null,callback,inst_13780);var state_13786__$1 = (function (){var statearr_13788 = state_13786;(statearr_13788[8] = inst_13778);
return statearr_13788;
})();var statearr_13789_13802 = state_13786__$1;(statearr_13789_13802[2] = inst_13781);
(statearr_13789_13802[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13787 === 5))
{var inst_13784 = (state_13786[2]);var state_13786__$1 = state_13786;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13786__$1,inst_13784);
} else
{if((state_val_13787 === 4))
{var state_13786__$1 = state_13786;var statearr_13790_13803 = state_13786__$1;(statearr_13790_13803[2] = null);
(statearr_13790_13803[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13787 === 3))
{var inst_13770 = (state_13786[7]);var inst_13773 = figwheel.client.log.call(null,"Figwheel: loaded these files");var inst_13774 = cljs.core.prn_str.call(null,inst_13770);var inst_13775 = figwheel.client.log.call(null,inst_13774);var inst_13776 = cljs.core.async.timeout.call(null,10);var state_13786__$1 = (function (){var statearr_13791 = state_13786;(statearr_13791[9] = inst_13775);
(statearr_13791[10] = inst_13773);
return statearr_13791;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13786__$1,6,inst_13776);
} else
{if((state_val_13787 === 2))
{var inst_13770 = (state_13786[7]);var inst_13770__$1 = (state_13786[2]);var inst_13771 = cljs.core.not_empty.call(null,inst_13770__$1);var state_13786__$1 = (function (){var statearr_13792 = state_13786;(statearr_13792[7] = inst_13770__$1);
return statearr_13792;
})();if(cljs.core.truth_(inst_13771))
{var statearr_13793_13804 = state_13786__$1;(statearr_13793_13804[1] = 3);
} else
{var statearr_13794_13805 = state_13786__$1;(statearr_13794_13805[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13787 === 1))
{var inst_13768 = figwheel.client.load_all_js_files.call(null,files);var state_13786__$1 = state_13786;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13786__$1,2,inst_13768);
} else
{return null;
}
}
}
}
}
}
});return ((function (switch__10112__auto__){
return (function() {
var state_machine__10113__auto__ = null;
var state_machine__10113__auto____0 = (function (){var statearr_13798 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13798[0] = state_machine__10113__auto__);
(statearr_13798[1] = 1);
return statearr_13798;
});
var state_machine__10113__auto____1 = (function (state_13786){while(true){
var ret_value__10114__auto__ = (function (){try{while(true){
var result__10115__auto__ = switch__10112__auto__.call(null,state_13786);if(cljs.core.keyword_identical_QMARK_.call(null,result__10115__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10115__auto__;
}
break;
}
}catch (e13799){if((e13799 instanceof Object))
{var ex__10116__auto__ = e13799;var statearr_13800_13806 = state_13786;(statearr_13800_13806[5] = ex__10116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13786);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13799;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10114__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13807 = state_13786;
state_13786 = G__13807;
continue;
}
} else
{return ret_value__10114__auto__;
}
break;
}
});
state_machine__10113__auto__ = function(state_13786){
switch(arguments.length){
case 0:
return state_machine__10113__auto____0.call(this);
case 1:
return state_machine__10113__auto____1.call(this,state_13786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10113__auto____0;
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10113__auto____1;
return state_machine__10113__auto__;
})()
;})(switch__10112__auto__))
})();var state__10184__auto__ = (function (){var statearr_13801 = f__10183__auto__.call(null);(statearr_13801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10182__auto__);
return statearr_13801;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10184__auto__);
}));
return c__10182__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(css_path,link_href){return cljs.core._EQ_.call(null,css_path,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,link_href,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),location.host,""));
});
figwheel.client.get_correct_link = (function get_correct_link(css_path){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,css_path,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[0]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__10182__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10183__auto__ = (function (){var switch__10112__auto__ = (function (state_13828){var state_val_13829 = (state_13828[1]);if((state_val_13829 === 2))
{var inst_13825 = (state_13828[2]);var inst_13826 = parent.removeChild(orig_link);var state_13828__$1 = (function (){var statearr_13830 = state_13828;(statearr_13830[7] = inst_13825);
return statearr_13830;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13828__$1,inst_13826);
} else
{if((state_val_13829 === 1))
{var inst_13823 = cljs.core.async.timeout.call(null,200);var state_13828__$1 = state_13828;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13828__$1,2,inst_13823);
} else
{return null;
}
}
});return ((function (switch__10112__auto__){
return (function() {
var state_machine__10113__auto__ = null;
var state_machine__10113__auto____0 = (function (){var statearr_13834 = [null,null,null,null,null,null,null,null];(statearr_13834[0] = state_machine__10113__auto__);
(statearr_13834[1] = 1);
return statearr_13834;
});
var state_machine__10113__auto____1 = (function (state_13828){while(true){
var ret_value__10114__auto__ = (function (){try{while(true){
var result__10115__auto__ = switch__10112__auto__.call(null,state_13828);if(cljs.core.keyword_identical_QMARK_.call(null,result__10115__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10115__auto__;
}
break;
}
}catch (e13835){if((e13835 instanceof Object))
{var ex__10116__auto__ = e13835;var statearr_13836_13838 = state_13828;(statearr_13836_13838[5] = ex__10116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13828);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13835;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10114__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13839 = state_13828;
state_13828 = G__13839;
continue;
}
} else
{return ret_value__10114__auto__;
}
break;
}
});
state_machine__10113__auto__ = function(state_13828){
switch(arguments.length){
case 0:
return state_machine__10113__auto____0.call(this);
case 1:
return state_machine__10113__auto____1.call(this,state_13828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10113__auto____0;
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10113__auto____1;
return state_machine__10113__auto__;
})()
;})(switch__10112__auto__))
})();var state__10184__auto__ = (function (){var statearr_13837 = f__10183__auto__.call(null);(statearr_13837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10182__auto__);
return statearr_13837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10184__auto__);
}));
return c__10182__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__13840){var map__13842 = p__13840;var map__13842__$1 = ((cljs.core.seq_QMARK_.call(null,map__13842))?cljs.core.apply.call(null,cljs.core.hash_map,map__13842):map__13842);var file = cljs.core.get.call(null,map__13842__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4090__auto__ = figwheel.client.get_correct_link.call(null,file);if(cljs.core.truth_(temp__4090__auto__))
{var link = temp__4090__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,file));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,file));
}
});
figwheel.client.reload_css_files = (function reload_css_files(files_msg,jsload_callback){var seq__13847_13851 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg));var chunk__13848_13852 = null;var count__13849_13853 = 0;var i__13850_13854 = 0;while(true){
if((i__13850_13854 < count__13849_13853))
{var f_13855 = cljs.core._nth.call(null,chunk__13848_13852,i__13850_13854);figwheel.client.reload_css_file.call(null,f_13855);
{
var G__13856 = seq__13847_13851;
var G__13857 = chunk__13848_13852;
var G__13858 = count__13849_13853;
var G__13859 = (i__13850_13854 + 1);
seq__13847_13851 = G__13856;
chunk__13848_13852 = G__13857;
count__13849_13853 = G__13858;
i__13850_13854 = G__13859;
continue;
}
} else
{var temp__4092__auto___13860 = cljs.core.seq.call(null,seq__13847_13851);if(temp__4092__auto___13860)
{var seq__13847_13861__$1 = temp__4092__auto___13860;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13847_13861__$1))
{var c__8549__auto___13862 = cljs.core.chunk_first.call(null,seq__13847_13861__$1);{
var G__13863 = cljs.core.chunk_rest.call(null,seq__13847_13861__$1);
var G__13864 = c__8549__auto___13862;
var G__13865 = cljs.core.count.call(null,c__8549__auto___13862);
var G__13866 = 0;
seq__13847_13851 = G__13863;
chunk__13848_13852 = G__13864;
count__13849_13853 = G__13865;
i__13850_13854 = G__13866;
continue;
}
} else
{var f_13867 = cljs.core.first.call(null,seq__13847_13861__$1);figwheel.client.reload_css_file.call(null,f_13867);
{
var G__13868 = cljs.core.next.call(null,seq__13847_13861__$1);
var G__13869 = null;
var G__13870 = 0;
var G__13871 = 0;
seq__13847_13851 = G__13868;
chunk__13848_13852 = G__13869;
count__13849_13853 = G__13870;
i__13850_13854 = G__13871;
continue;
}
}
} else
{}
}
break;
}
figwheel.client.log.call(null,"Figwheel: loaded CSS files");
return figwheel.client.log.call(null,cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg))));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__13872){var map__13877 = p__13872;var map__13877__$1 = ((cljs.core.seq_QMARK_.call(null,map__13877))?cljs.core.apply.call(null,cljs.core.hash_map,map__13877):map__13877);var opts = map__13877__$1;var jsload_callback = cljs.core.get.call(null,map__13877__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__13877__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__13877__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));figwheel.client.log.call(null,"Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__13878 = cljs.core._EQ_;var expr__13879 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__13878.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__13879)))
{return figwheel.client.reload_js_files.call(null,msg,jsload_callback);
} else
{if(cljs.core.truth_(pred__13878.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__13879)))
{return figwheel.client.reload_css_files.call(null,msg,jsload_callback);
} else
{return null;
}
}
});
socket.onopen = (function (x){figwheel.client.patch_goog_base.call(null);
return figwheel.client.log.call(null,"Figwheel: socket connection established");
});
socket.onclose = (function (x){figwheel.client.dlog.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout((function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
}),2000);
} else
{return null;
}
});
return socket.onerror = (function (x){return figwheel.client.dlog.call(null,opts,"Figwheel: socket error ");
});
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__13881){var map__13885 = p__13881;var map__13885__$1 = ((cljs.core.seq_QMARK_.call(null,map__13885))?cljs.core.apply.call(null,cljs.core.hash_map,map__13885):map__13885);var opts = map__13885__$1;var jsload_callback = cljs.core.get.call(null,map__13885__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__13885__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__13885__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),(function (url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj13887 = {"detail":url};return obj13887;
})())));
}),new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131),[cljs.core.str("ws:"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
};
var watch_and_reload = function (var_args){
var p__13881 = null;if (arguments.length > 0) {
  p__13881 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__13881);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__13888){
var p__13881 = cljs.core.seq(arglist__13888);
return watch_and_reload__delegate(p__13881);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map