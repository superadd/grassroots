// Compiled by ClojureScript 0.0-2277
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
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__17684,args){var map__17686 = p__17684;var map__17686__$1 = ((cljs.core.seq_QMARK_.call(null,map__17686))?cljs.core.apply.call(null,cljs.core.hash_map,map__17686):map__17686);var debug = cljs.core.get.call(null,map__17686__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__17684,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__17684,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__17687){
var p__17684 = cljs.core.first(arglist__17687);
var args = cljs.core.rest(arglist__17687);
return log__delegate(p__17684,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__17688){var map__17690 = p__17688;var map__17690__$1 = ((cljs.core.seq_QMARK_.call(null,map__17690))?cljs.core.apply.call(null,cljs.core.hash_map,map__17690):map__17690);var websocket_url = cljs.core.get.call(null,map__17690__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__17691,callback){var map__17693 = p__17691;var map__17693__$1 = ((cljs.core.seq_QMARK_.call(null,map__17693))?cljs.core.apply.call(null,cljs.core.hash_map,map__17693):map__17693);var msg = map__17693__$1;var dependency_file = cljs.core.get.call(null,map__17693__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__17693__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__17693__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__10364__auto__ = dependency_file;if(cljs.core.truth_(or__10364__auto__))
{return or__10364__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__17693,map__17693__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__17693,map__17693__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__17694,p__17695){var map__17698 = p__17694;var map__17698__$1 = ((cljs.core.seq_QMARK_.call(null,map__17698))?cljs.core.apply.call(null,cljs.core.hash_map,map__17698):map__17698);var opts = map__17698__$1;var url_rewriter = cljs.core.get.call(null,map__17698__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__17699 = p__17695;var map__17699__$1 = ((cljs.core.seq_QMARK_.call(null,map__17699))?cljs.core.apply.call(null,cljs.core.hash_map,map__17699):map__17699);var d = map__17699__$1;var file = cljs.core.get.call(null,map__17699__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__17700,p__17701){var map__17742 = p__17700;var map__17742__$1 = ((cljs.core.seq_QMARK_.call(null,map__17742))?cljs.core.apply.call(null,cljs.core.hash_map,map__17742):map__17742);var opts = map__17742__$1;var on_jsload = cljs.core.get.call(null,map__17742__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__17742__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__17743 = p__17701;var map__17743__$1 = ((cljs.core.seq_QMARK_.call(null,map__17743))?cljs.core.apply.call(null,cljs.core.hash_map,map__17743):map__17743);var files = cljs.core.get.call(null,map__17743__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__13576__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13576__auto__,map__17742,map__17742__$1,opts,on_jsload,before_jsload,map__17743,map__17743__$1,files){
return (function (){var f__13577__auto__ = (function (){var switch__13511__auto__ = ((function (c__13576__auto__,map__17742,map__17742__$1,opts,on_jsload,before_jsload,map__17743,map__17743__$1,files){
return (function (state_17765){var state_val_17766 = (state_17765[(1)]);if((state_val_17766 === (6)))
{var inst_17748 = (state_17765[(7)]);var inst_17757 = (state_17765[(2)]);var inst_17758 = [inst_17748];var inst_17759 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17758,null));var inst_17760 = cljs.core.apply.call(null,on_jsload,inst_17759);var state_17765__$1 = (function (){var statearr_17767 = state_17765;(statearr_17767[(8)] = inst_17757);
return statearr_17767;
})();var statearr_17768_17782 = state_17765__$1;(statearr_17768_17782[(2)] = inst_17760);
(statearr_17768_17782[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17766 === (5)))
{var inst_17763 = (state_17765[(2)]);var state_17765__$1 = state_17765;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17765__$1,inst_17763);
} else
{if((state_val_17766 === (4)))
{var state_17765__$1 = state_17765;var statearr_17769_17783 = state_17765__$1;(statearr_17769_17783[(2)] = null);
(statearr_17769_17783[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17766 === (3)))
{var inst_17748 = (state_17765[(7)]);var inst_17751 = console.debug("Figwheel: loaded these files");var inst_17752 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_17748);var inst_17753 = cljs.core.prn_str.call(null,inst_17752);var inst_17754 = console.log(inst_17753);var inst_17755 = cljs.core.async.timeout.call(null,(10));var state_17765__$1 = (function (){var statearr_17770 = state_17765;(statearr_17770[(9)] = inst_17754);
(statearr_17770[(10)] = inst_17751);
return statearr_17770;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17765__$1,(6),inst_17755);
} else
{if((state_val_17766 === (2)))
{var inst_17748 = (state_17765[(7)]);var inst_17748__$1 = (state_17765[(2)]);var inst_17749 = cljs.core.not_empty.call(null,inst_17748__$1);var state_17765__$1 = (function (){var statearr_17771 = state_17765;(statearr_17771[(7)] = inst_17748__$1);
return statearr_17771;
})();if(cljs.core.truth_(inst_17749))
{var statearr_17772_17784 = state_17765__$1;(statearr_17772_17784[(1)] = (3));
} else
{var statearr_17773_17785 = state_17765__$1;(statearr_17773_17785[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17766 === (1)))
{var inst_17744 = before_jsload.call(null,files);var inst_17745 = figwheel.client.add_request_urls.call(null,opts,files);var inst_17746 = figwheel.client.load_all_js_files.call(null,inst_17745);var state_17765__$1 = (function (){var statearr_17774 = state_17765;(statearr_17774[(11)] = inst_17744);
return statearr_17774;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17765__$1,(2),inst_17746);
} else
{return null;
}
}
}
}
}
}
});})(c__13576__auto__,map__17742,map__17742__$1,opts,on_jsload,before_jsload,map__17743,map__17743__$1,files))
;return ((function (switch__13511__auto__,c__13576__auto__,map__17742,map__17742__$1,opts,on_jsload,before_jsload,map__17743,map__17743__$1,files){
return (function() {
var state_machine__13512__auto__ = null;
var state_machine__13512__auto____0 = (function (){var statearr_17778 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17778[(0)] = state_machine__13512__auto__);
(statearr_17778[(1)] = (1));
return statearr_17778;
});
var state_machine__13512__auto____1 = (function (state_17765){while(true){
var ret_value__13513__auto__ = (function (){try{while(true){
var result__13514__auto__ = switch__13511__auto__.call(null,state_17765);if(cljs.core.keyword_identical_QMARK_.call(null,result__13514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13514__auto__;
}
break;
}
}catch (e17779){if((e17779 instanceof Object))
{var ex__13515__auto__ = e17779;var statearr_17780_17786 = state_17765;(statearr_17780_17786[(5)] = ex__13515__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17765);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17779;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17787 = state_17765;
state_17765 = G__17787;
continue;
}
} else
{return ret_value__13513__auto__;
}
break;
}
});
state_machine__13512__auto__ = function(state_17765){
switch(arguments.length){
case 0:
return state_machine__13512__auto____0.call(this);
case 1:
return state_machine__13512__auto____1.call(this,state_17765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13512__auto____0;
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13512__auto____1;
return state_machine__13512__auto__;
})()
;})(switch__13511__auto__,c__13576__auto__,map__17742,map__17742__$1,opts,on_jsload,before_jsload,map__17743,map__17743__$1,files))
})();var state__13578__auto__ = (function (){var statearr_17781 = f__13577__auto__.call(null);(statearr_17781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13576__auto__);
return statearr_17781;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13578__auto__);
});})(c__13576__auto__,map__17742,map__17742__$1,opts,on_jsload,before_jsload,map__17743,map__17743__$1,files))
);
return c__13576__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__17788,link_href){var map__17790 = p__17788;var map__17790__$1 = ((cljs.core.seq_QMARK_.call(null,map__17790))?cljs.core.apply.call(null,cljs.core.hash_map,map__17790):map__17790);var request_url = cljs.core.get.call(null,map__17790__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__17790__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
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
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__13576__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13576__auto__,parent){
return (function (){var f__13577__auto__ = (function (){var switch__13511__auto__ = ((function (c__13576__auto__,parent){
return (function (state_17811){var state_val_17812 = (state_17811[(1)]);if((state_val_17812 === (2)))
{var inst_17808 = (state_17811[(2)]);var inst_17809 = parent.removeChild(orig_link);var state_17811__$1 = (function (){var statearr_17813 = state_17811;(statearr_17813[(7)] = inst_17808);
return statearr_17813;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17811__$1,inst_17809);
} else
{if((state_val_17812 === (1)))
{var inst_17806 = cljs.core.async.timeout.call(null,(200));var state_17811__$1 = state_17811;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17811__$1,(2),inst_17806);
} else
{return null;
}
}
});})(c__13576__auto__,parent))
;return ((function (switch__13511__auto__,c__13576__auto__,parent){
return (function() {
var state_machine__13512__auto__ = null;
var state_machine__13512__auto____0 = (function (){var statearr_17817 = [null,null,null,null,null,null,null,null];(statearr_17817[(0)] = state_machine__13512__auto__);
(statearr_17817[(1)] = (1));
return statearr_17817;
});
var state_machine__13512__auto____1 = (function (state_17811){while(true){
var ret_value__13513__auto__ = (function (){try{while(true){
var result__13514__auto__ = switch__13511__auto__.call(null,state_17811);if(cljs.core.keyword_identical_QMARK_.call(null,result__13514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13514__auto__;
}
break;
}
}catch (e17818){if((e17818 instanceof Object))
{var ex__13515__auto__ = e17818;var statearr_17819_17821 = state_17811;(statearr_17819_17821[(5)] = ex__13515__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17811);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17818;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17822 = state_17811;
state_17811 = G__17822;
continue;
}
} else
{return ret_value__13513__auto__;
}
break;
}
});
state_machine__13512__auto__ = function(state_17811){
switch(arguments.length){
case 0:
return state_machine__13512__auto____0.call(this);
case 1:
return state_machine__13512__auto____1.call(this,state_17811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13512__auto____0;
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13512__auto____1;
return state_machine__13512__auto__;
})()
;})(switch__13511__auto__,c__13576__auto__,parent))
})();var state__13578__auto__ = (function (){var statearr_17820 = f__13577__auto__.call(null);(statearr_17820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13576__auto__);
return statearr_17820;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13578__auto__);
});})(c__13576__auto__,parent))
);
return c__13576__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__17823){var map__17825 = p__17823;var map__17825__$1 = ((cljs.core.seq_QMARK_.call(null,map__17825))?cljs.core.apply.call(null,cljs.core.hash_map,map__17825):map__17825);var f_data = map__17825__$1;var request_url = cljs.core.get.call(null,map__17825__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__17825__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__17826,files_msg){var map__17848 = p__17826;var map__17848__$1 = ((cljs.core.seq_QMARK_.call(null,map__17848))?cljs.core.apply.call(null,cljs.core.hash_map,map__17848):map__17848);var opts = map__17848__$1;var on_cssload = cljs.core.get.call(null,map__17848__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__17849_17869 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__17850_17870 = null;var count__17851_17871 = (0);var i__17852_17872 = (0);while(true){
if((i__17852_17872 < count__17851_17871))
{var f_17873 = cljs.core._nth.call(null,chunk__17850_17870,i__17852_17872);figwheel.client.reload_css_file.call(null,f_17873);
{
var G__17874 = seq__17849_17869;
var G__17875 = chunk__17850_17870;
var G__17876 = count__17851_17871;
var G__17877 = (i__17852_17872 + (1));
seq__17849_17869 = G__17874;
chunk__17850_17870 = G__17875;
count__17851_17871 = G__17876;
i__17852_17872 = G__17877;
continue;
}
} else
{var temp__4126__auto___17878 = cljs.core.seq.call(null,seq__17849_17869);if(temp__4126__auto___17878)
{var seq__17849_17879__$1 = temp__4126__auto___17878;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17849_17879__$1))
{var c__11120__auto___17880 = cljs.core.chunk_first.call(null,seq__17849_17879__$1);{
var G__17881 = cljs.core.chunk_rest.call(null,seq__17849_17879__$1);
var G__17882 = c__11120__auto___17880;
var G__17883 = cljs.core.count.call(null,c__11120__auto___17880);
var G__17884 = (0);
seq__17849_17869 = G__17881;
chunk__17850_17870 = G__17882;
count__17851_17871 = G__17883;
i__17852_17872 = G__17884;
continue;
}
} else
{var f_17885 = cljs.core.first.call(null,seq__17849_17879__$1);figwheel.client.reload_css_file.call(null,f_17885);
{
var G__17886 = cljs.core.next.call(null,seq__17849_17879__$1);
var G__17887 = null;
var G__17888 = (0);
var G__17889 = (0);
seq__17849_17869 = G__17886;
chunk__17850_17870 = G__17887;
count__17851_17871 = G__17888;
i__17852_17872 = G__17889;
continue;
}
}
} else
{}
}
break;
}
var c__13576__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13576__auto__,map__17848,map__17848__$1,opts,on_cssload){
return (function (){var f__13577__auto__ = (function (){var switch__13511__auto__ = ((function (c__13576__auto__,map__17848,map__17848__$1,opts,on_cssload){
return (function (state_17859){var state_val_17860 = (state_17859[(1)]);if((state_val_17860 === (2)))
{var inst_17855 = (state_17859[(2)]);var inst_17856 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_17857 = on_cssload.call(null,inst_17856);var state_17859__$1 = (function (){var statearr_17861 = state_17859;(statearr_17861[(7)] = inst_17855);
return statearr_17861;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17859__$1,inst_17857);
} else
{if((state_val_17860 === (1)))
{var inst_17853 = cljs.core.async.timeout.call(null,(100));var state_17859__$1 = state_17859;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17859__$1,(2),inst_17853);
} else
{return null;
}
}
});})(c__13576__auto__,map__17848,map__17848__$1,opts,on_cssload))
;return ((function (switch__13511__auto__,c__13576__auto__,map__17848,map__17848__$1,opts,on_cssload){
return (function() {
var state_machine__13512__auto__ = null;
var state_machine__13512__auto____0 = (function (){var statearr_17865 = [null,null,null,null,null,null,null,null];(statearr_17865[(0)] = state_machine__13512__auto__);
(statearr_17865[(1)] = (1));
return statearr_17865;
});
var state_machine__13512__auto____1 = (function (state_17859){while(true){
var ret_value__13513__auto__ = (function (){try{while(true){
var result__13514__auto__ = switch__13511__auto__.call(null,state_17859);if(cljs.core.keyword_identical_QMARK_.call(null,result__13514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13514__auto__;
}
break;
}
}catch (e17866){if((e17866 instanceof Object))
{var ex__13515__auto__ = e17866;var statearr_17867_17890 = state_17859;(statearr_17867_17890[(5)] = ex__13515__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17859);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17866;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17891 = state_17859;
state_17859 = G__17891;
continue;
}
} else
{return ret_value__13513__auto__;
}
break;
}
});
state_machine__13512__auto__ = function(state_17859){
switch(arguments.length){
case 0:
return state_machine__13512__auto____0.call(this);
case 1:
return state_machine__13512__auto____1.call(this,state_17859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13512__auto____0;
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13512__auto____1;
return state_machine__13512__auto__;
})()
;})(switch__13511__auto__,c__13576__auto__,map__17848,map__17848__$1,opts,on_cssload))
})();var state__13578__auto__ = (function (){var statearr_17868 = f__13577__auto__.call(null);(statearr_17868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13576__auto__);
return statearr_17868;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13578__auto__);
});})(c__13576__auto__,map__17848,map__17848__$1,opts,on_cssload))
);
return c__13576__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__17892){var map__17897 = p__17892;var map__17897__$1 = ((cljs.core.seq_QMARK_.call(null,map__17897))?cljs.core.apply.call(null,cljs.core.hash_map,map__17897):map__17897);var opts = map__17897__$1;var on_compile_fail = cljs.core.get.call(null,map__17897__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__17897__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__17897__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__17897__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__17897,map__17897__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__17898 = cljs.core._EQ_;var expr__17899 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__17898.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__17899)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__17898.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__17899)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__17898.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__17899)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__17897,map__17897__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__17897,map__17897__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__17897,map__17897__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__17897,map__17897__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__17897,map__17897__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__17897,map__17897__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__17897,map__17897__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__17897,map__17897__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__17897,map__17897__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj17904 = {"detail":url};return obj17904;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__17905){var map__17907 = p__17905;var map__17907__$1 = ((cljs.core.seq_QMARK_.call(null,map__17907))?cljs.core.apply.call(null,cljs.core.hash_map,map__17907):map__17907);var class$ = cljs.core.get.call(null,map__17907__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__17907__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__17908){var map__17914 = p__17908;var map__17914__$1 = ((cljs.core.seq_QMARK_.call(null,map__17914))?cljs.core.apply.call(null,cljs.core.hash_map,map__17914):map__17914);var ed = map__17914__$1;var exception_data = cljs.core.get.call(null,map__17914__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__17914__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__17915_17919 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__17916_17920 = null;var count__17917_17921 = (0);var i__17918_17922 = (0);while(true){
if((i__17918_17922 < count__17917_17921))
{var msg_17923 = cljs.core._nth.call(null,chunk__17916_17920,i__17918_17922);console.log(msg_17923);
{
var G__17924 = seq__17915_17919;
var G__17925 = chunk__17916_17920;
var G__17926 = count__17917_17921;
var G__17927 = (i__17918_17922 + (1));
seq__17915_17919 = G__17924;
chunk__17916_17920 = G__17925;
count__17917_17921 = G__17926;
i__17918_17922 = G__17927;
continue;
}
} else
{var temp__4126__auto___17928 = cljs.core.seq.call(null,seq__17915_17919);if(temp__4126__auto___17928)
{var seq__17915_17929__$1 = temp__4126__auto___17928;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17915_17929__$1))
{var c__11120__auto___17930 = cljs.core.chunk_first.call(null,seq__17915_17929__$1);{
var G__17931 = cljs.core.chunk_rest.call(null,seq__17915_17929__$1);
var G__17932 = c__11120__auto___17930;
var G__17933 = cljs.core.count.call(null,c__11120__auto___17930);
var G__17934 = (0);
seq__17915_17919 = G__17931;
chunk__17916_17920 = G__17932;
count__17917_17921 = G__17933;
i__17918_17922 = G__17934;
continue;
}
} else
{var msg_17935 = cljs.core.first.call(null,seq__17915_17929__$1);console.log(msg_17935);
{
var G__17936 = cljs.core.next.call(null,seq__17915_17929__$1);
var G__17937 = null;
var G__17938 = (0);
var G__17939 = (0);
seq__17915_17919 = G__17936;
chunk__17916_17920 = G__17937;
count__17917_17921 = G__17938;
i__17918_17922 = G__17939;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__10364__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__10364__auto__))
{return or__10364__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__17940){var map__17942 = p__17940;var map__17942__$1 = ((cljs.core.seq_QMARK_.call(null,map__17942))?cljs.core.apply.call(null,cljs.core.hash_map,map__17942):map__17942);var opts = map__17942__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__17940 = null;if (arguments.length > 0) {
  p__17940 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__17940);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__17943){
var p__17940 = cljs.core.seq(arglist__17943);
return watch_and_reload__delegate(p__17940);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map