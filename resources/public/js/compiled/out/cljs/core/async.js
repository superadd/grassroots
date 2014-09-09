// Compiled by ClojureScript 0.0-2277
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t18072 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18072 = (function (f,fn_handler,meta18073){
this.f = f;
this.fn_handler = fn_handler;
this.meta18073 = meta18073;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18072.cljs$lang$type = true;
cljs.core.async.t18072.cljs$lang$ctorStr = "cljs.core.async/t18072";
cljs.core.async.t18072.cljs$lang$ctorPrWriter = (function (this__10931__auto__,writer__10932__auto__,opt__10933__auto__){return cljs.core._write.call(null,writer__10932__auto__,"cljs.core.async/t18072");
});
cljs.core.async.t18072.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18072.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t18072.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t18072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18074){var self__ = this;
var _18074__$1 = this;return self__.meta18073;
});
cljs.core.async.t18072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18074,meta18073__$1){var self__ = this;
var _18074__$1 = this;return (new cljs.core.async.t18072(self__.f,self__.fn_handler,meta18073__$1));
});
cljs.core.async.__GT_t18072 = (function __GT_t18072(f__$1,fn_handler__$1,meta18073){return (new cljs.core.async.t18072(f__$1,fn_handler__$1,meta18073));
});
}
return (new cljs.core.async.t18072(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__18076 = buff;if(G__18076)
{var bit__11014__auto__ = null;if(cljs.core.truth_((function (){var or__10364__auto__ = bit__11014__auto__;if(cljs.core.truth_(or__10364__auto__))
{return or__10364__auto__;
} else
{return G__18076.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__18076.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18076);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18076);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_18077 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_18077);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_18077,ret){
return (function (){return fn1.call(null,val_18077);
});})(val_18077,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__11220__auto___18078 = n;var x_18079 = (0);while(true){
if((x_18079 < n__11220__auto___18078))
{(a[x_18079] = (0));
{
var G__18080 = (x_18079 + (1));
x_18079 = G__18080;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__18081 = (i + (1));
i = G__18081;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t18085 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18085 = (function (flag,alt_flag,meta18086){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18086 = meta18086;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18085.cljs$lang$type = true;
cljs.core.async.t18085.cljs$lang$ctorStr = "cljs.core.async/t18085";
cljs.core.async.t18085.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__10931__auto__,writer__10932__auto__,opt__10933__auto__){return cljs.core._write.call(null,writer__10932__auto__,"cljs.core.async/t18085");
});})(flag))
;
cljs.core.async.t18085.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18085.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t18085.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t18085.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18087){var self__ = this;
var _18087__$1 = this;return self__.meta18086;
});})(flag))
;
cljs.core.async.t18085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18087,meta18086__$1){var self__ = this;
var _18087__$1 = this;return (new cljs.core.async.t18085(self__.flag,self__.alt_flag,meta18086__$1));
});})(flag))
;
cljs.core.async.__GT_t18085 = ((function (flag){
return (function __GT_t18085(flag__$1,alt_flag__$1,meta18086){return (new cljs.core.async.t18085(flag__$1,alt_flag__$1,meta18086));
});})(flag))
;
}
return (new cljs.core.async.t18085(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t18091 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18091 = (function (cb,flag,alt_handler,meta18092){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18092 = meta18092;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18091.cljs$lang$type = true;
cljs.core.async.t18091.cljs$lang$ctorStr = "cljs.core.async/t18091";
cljs.core.async.t18091.cljs$lang$ctorPrWriter = (function (this__10931__auto__,writer__10932__auto__,opt__10933__auto__){return cljs.core._write.call(null,writer__10932__auto__,"cljs.core.async/t18091");
});
cljs.core.async.t18091.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18091.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t18091.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t18091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18093){var self__ = this;
var _18093__$1 = this;return self__.meta18092;
});
cljs.core.async.t18091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18093,meta18092__$1){var self__ = this;
var _18093__$1 = this;return (new cljs.core.async.t18091(self__.cb,self__.flag,self__.alt_handler,meta18092__$1));
});
cljs.core.async.__GT_t18091 = (function __GT_t18091(cb__$1,flag__$1,alt_handler__$1,meta18092){return (new cljs.core.async.t18091(cb__$1,flag__$1,alt_handler__$1,meta18092));
});
}
return (new cljs.core.async.t18091(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18094_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18094_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18095_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18095_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__10364__auto__ = wport;if(cljs.core.truth_(or__10364__auto__))
{return or__10364__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__18096 = (i + (1));
i = G__18096;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__10364__auto__ = ret;if(cljs.core.truth_(or__10364__auto__))
{return or__10364__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__10352__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__10352__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__10352__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__18097){var map__18099 = p__18097;var map__18099__$1 = ((cljs.core.seq_QMARK_.call(null,map__18099))?cljs.core.apply.call(null,cljs.core.hash_map,map__18099):map__18099);var opts = map__18099__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__18097 = null;if (arguments.length > 1) {
  p__18097 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__18097);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18100){
var ports = cljs.core.first(arglist__18100);
var p__18097 = cljs.core.rest(arglist__18100);
return alts_BANG___delegate(ports,p__18097);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t18108 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18108 = (function (ch,f,map_LT_,meta18109){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18109 = meta18109;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18108.cljs$lang$type = true;
cljs.core.async.t18108.cljs$lang$ctorStr = "cljs.core.async/t18108";
cljs.core.async.t18108.cljs$lang$ctorPrWriter = (function (this__10931__auto__,writer__10932__auto__,opt__10933__auto__){return cljs.core._write.call(null,writer__10932__auto__,"cljs.core.async/t18108");
});
cljs.core.async.t18108.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18108.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t18108.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18108.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t18111 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18111 = (function (fn1,_,meta18109,ch,f,map_LT_,meta18112){
this.fn1 = fn1;
this._ = _;
this.meta18109 = meta18109;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18112 = meta18112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18111.cljs$lang$type = true;
cljs.core.async.t18111.cljs$lang$ctorStr = "cljs.core.async/t18111";
cljs.core.async.t18111.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__10931__auto__,writer__10932__auto__,opt__10933__auto__){return cljs.core._write.call(null,writer__10932__auto__,"cljs.core.async/t18111");
});})(___$1))
;
cljs.core.async.t18111.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18111.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t18111.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t18111.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__18101_SHARP_){return f1.call(null,(((p1__18101_SHARP_ == null))?null:self__.f.call(null,p1__18101_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t18111.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18113){var self__ = this;
var _18113__$1 = this;return self__.meta18112;
});})(___$1))
;
cljs.core.async.t18111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18113,meta18112__$1){var self__ = this;
var _18113__$1 = this;return (new cljs.core.async.t18111(self__.fn1,self__._,self__.meta18109,self__.ch,self__.f,self__.map_LT_,meta18112__$1));
});})(___$1))
;
cljs.core.async.__GT_t18111 = ((function (___$1){
return (function __GT_t18111(fn1__$1,___$2,meta18109__$1,ch__$2,f__$2,map_LT___$2,meta18112){return (new cljs.core.async.t18111(fn1__$1,___$2,meta18109__$1,ch__$2,f__$2,map_LT___$2,meta18112));
});})(___$1))
;
}
return (new cljs.core.async.t18111(fn1,___$1,self__.meta18109,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__10352__auto__ = ret;if(cljs.core.truth_(and__10352__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__10352__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t18108.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18108.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18108.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t18108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18110){var self__ = this;
var _18110__$1 = this;return self__.meta18109;
});
cljs.core.async.t18108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18110,meta18109__$1){var self__ = this;
var _18110__$1 = this;return (new cljs.core.async.t18108(self__.ch,self__.f,self__.map_LT_,meta18109__$1));
});
cljs.core.async.__GT_t18108 = (function __GT_t18108(ch__$1,f__$1,map_LT___$1,meta18109){return (new cljs.core.async.t18108(ch__$1,f__$1,map_LT___$1,meta18109));
});
}
return (new cljs.core.async.t18108(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t18117 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18117 = (function (ch,f,map_GT_,meta18118){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta18118 = meta18118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18117.cljs$lang$type = true;
cljs.core.async.t18117.cljs$lang$ctorStr = "cljs.core.async/t18117";
cljs.core.async.t18117.cljs$lang$ctorPrWriter = (function (this__10931__auto__,writer__10932__auto__,opt__10933__auto__){return cljs.core._write.call(null,writer__10932__auto__,"cljs.core.async/t18117");
});
cljs.core.async.t18117.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18117.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t18117.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18117.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18117.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18117.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18119){var self__ = this;
var _18119__$1 = this;return self__.meta18118;
});
cljs.core.async.t18117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18119,meta18118__$1){var self__ = this;
var _18119__$1 = this;return (new cljs.core.async.t18117(self__.ch,self__.f,self__.map_GT_,meta18118__$1));
});
cljs.core.async.__GT_t18117 = (function __GT_t18117(ch__$1,f__$1,map_GT___$1,meta18118){return (new cljs.core.async.t18117(ch__$1,f__$1,map_GT___$1,meta18118));
});
}
return (new cljs.core.async.t18117(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t18123 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18123 = (function (ch,p,filter_GT_,meta18124){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta18124 = meta18124;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18123.cljs$lang$type = true;
cljs.core.async.t18123.cljs$lang$ctorStr = "cljs.core.async/t18123";
cljs.core.async.t18123.cljs$lang$ctorPrWriter = (function (this__10931__auto__,writer__10932__auto__,opt__10933__auto__){return cljs.core._write.call(null,writer__10932__auto__,"cljs.core.async/t18123");
});
cljs.core.async.t18123.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18123.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t18123.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18123.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18123.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18123.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18123.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t18123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18125){var self__ = this;
var _18125__$1 = this;return self__.meta18124;
});
cljs.core.async.t18123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18125,meta18124__$1){var self__ = this;
var _18125__$1 = this;return (new cljs.core.async.t18123(self__.ch,self__.p,self__.filter_GT_,meta18124__$1));
});
cljs.core.async.__GT_t18123 = (function __GT_t18123(ch__$1,p__$1,filter_GT___$1,meta18124){return (new cljs.core.async.t18123(ch__$1,p__$1,filter_GT___$1,meta18124));
});
}
return (new cljs.core.async.t18123(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13576__auto___18208 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13576__auto___18208,out){
return (function (){var f__13577__auto__ = (function (){var switch__13511__auto__ = ((function (c__13576__auto___18208,out){
return (function (state_18187){var state_val_18188 = (state_18187[(1)]);if((state_val_18188 === (7)))
{var inst_18183 = (state_18187[(2)]);var state_18187__$1 = state_18187;var statearr_18189_18209 = state_18187__$1;(statearr_18189_18209[(2)] = inst_18183);
(statearr_18189_18209[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18188 === (1)))
{var state_18187__$1 = state_18187;var statearr_18190_18210 = state_18187__$1;(statearr_18190_18210[(2)] = null);
(statearr_18190_18210[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18188 === (4)))
{var inst_18169 = (state_18187[(7)]);var inst_18169__$1 = (state_18187[(2)]);var inst_18170 = (inst_18169__$1 == null);var state_18187__$1 = (function (){var statearr_18191 = state_18187;(statearr_18191[(7)] = inst_18169__$1);
return statearr_18191;
})();if(cljs.core.truth_(inst_18170))
{var statearr_18192_18211 = state_18187__$1;(statearr_18192_18211[(1)] = (5));
} else
{var statearr_18193_18212 = state_18187__$1;(statearr_18193_18212[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18188 === (6)))
{var inst_18169 = (state_18187[(7)]);var inst_18174 = p.call(null,inst_18169);var state_18187__$1 = state_18187;if(cljs.core.truth_(inst_18174))
{var statearr_18194_18213 = state_18187__$1;(statearr_18194_18213[(1)] = (8));
} else
{var statearr_18195_18214 = state_18187__$1;(statearr_18195_18214[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18188 === (3)))
{var inst_18185 = (state_18187[(2)]);var state_18187__$1 = state_18187;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18187__$1,inst_18185);
} else
{if((state_val_18188 === (2)))
{var state_18187__$1 = state_18187;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18187__$1,(4),ch);
} else
{if((state_val_18188 === (11)))
{var inst_18177 = (state_18187[(2)]);var state_18187__$1 = state_18187;var statearr_18196_18215 = state_18187__$1;(statearr_18196_18215[(2)] = inst_18177);
(statearr_18196_18215[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18188 === (9)))
{var state_18187__$1 = state_18187;var statearr_18197_18216 = state_18187__$1;(statearr_18197_18216[(2)] = null);
(statearr_18197_18216[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18188 === (5)))
{var inst_18172 = cljs.core.async.close_BANG_.call(null,out);var state_18187__$1 = state_18187;var statearr_18198_18217 = state_18187__$1;(statearr_18198_18217[(2)] = inst_18172);
(statearr_18198_18217[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18188 === (10)))
{var inst_18180 = (state_18187[(2)]);var state_18187__$1 = (function (){var statearr_18199 = state_18187;(statearr_18199[(8)] = inst_18180);
return statearr_18199;
})();var statearr_18200_18218 = state_18187__$1;(statearr_18200_18218[(2)] = null);
(statearr_18200_18218[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18188 === (8)))
{var inst_18169 = (state_18187[(7)]);var state_18187__$1 = state_18187;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18187__$1,(11),out,inst_18169);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13576__auto___18208,out))
;return ((function (switch__13511__auto__,c__13576__auto___18208,out){
return (function() {
var state_machine__13512__auto__ = null;
var state_machine__13512__auto____0 = (function (){var statearr_18204 = [null,null,null,null,null,null,null,null,null];(statearr_18204[(0)] = state_machine__13512__auto__);
(statearr_18204[(1)] = (1));
return statearr_18204;
});
var state_machine__13512__auto____1 = (function (state_18187){while(true){
var ret_value__13513__auto__ = (function (){try{while(true){
var result__13514__auto__ = switch__13511__auto__.call(null,state_18187);if(cljs.core.keyword_identical_QMARK_.call(null,result__13514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13514__auto__;
}
break;
}
}catch (e18205){if((e18205 instanceof Object))
{var ex__13515__auto__ = e18205;var statearr_18206_18219 = state_18187;(statearr_18206_18219[(5)] = ex__13515__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18187);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18205;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18220 = state_18187;
state_18187 = G__18220;
continue;
}
} else
{return ret_value__13513__auto__;
}
break;
}
});
state_machine__13512__auto__ = function(state_18187){
switch(arguments.length){
case 0:
return state_machine__13512__auto____0.call(this);
case 1:
return state_machine__13512__auto____1.call(this,state_18187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13512__auto____0;
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13512__auto____1;
return state_machine__13512__auto__;
})()
;})(switch__13511__auto__,c__13576__auto___18208,out))
})();var state__13578__auto__ = (function (){var statearr_18207 = f__13577__auto__.call(null);(statearr_18207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13576__auto___18208);
return statearr_18207;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13578__auto__);
});})(c__13576__auto___18208,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13576__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13576__auto__){
return (function (){var f__13577__auto__ = (function (){var switch__13511__auto__ = ((function (c__13576__auto__){
return (function (state_18386){var state_val_18387 = (state_18386[(1)]);if((state_val_18387 === (7)))
{var inst_18382 = (state_18386[(2)]);var state_18386__$1 = state_18386;var statearr_18388_18429 = state_18386__$1;(statearr_18388_18429[(2)] = inst_18382);
(statearr_18388_18429[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18387 === (20)))
{var inst_18352 = (state_18386[(7)]);var inst_18363 = (state_18386[(2)]);var inst_18364 = cljs.core.next.call(null,inst_18352);var inst_18338 = inst_18364;var inst_18339 = null;var inst_18340 = (0);var inst_18341 = (0);var state_18386__$1 = (function (){var statearr_18389 = state_18386;(statearr_18389[(8)] = inst_18363);
(statearr_18389[(9)] = inst_18339);
(statearr_18389[(10)] = inst_18338);
(statearr_18389[(11)] = inst_18340);
(statearr_18389[(12)] = inst_18341);
return statearr_18389;
})();var statearr_18390_18430 = state_18386__$1;(statearr_18390_18430[(2)] = null);
(statearr_18390_18430[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18387 === (1)))
{var state_18386__$1 = state_18386;var statearr_18391_18431 = state_18386__$1;(statearr_18391_18431[(2)] = null);
(statearr_18391_18431[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18387 === (4)))
{var inst_18327 = (state_18386[(13)]);var inst_18327__$1 = (state_18386[(2)]);var inst_18328 = (inst_18327__$1 == null);var state_18386__$1 = (function (){var statearr_18392 = state_18386;(statearr_18392[(13)] = inst_18327__$1);
return statearr_18392;
})();if(cljs.core.truth_(inst_18328))
{var statearr_18393_18432 = state_18386__$1;(statearr_18393_18432[(1)] = (5));
} else
{var statearr_18394_18433 = state_18386__$1;(statearr_18394_18433[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18387 === (15)))
{var state_18386__$1 = state_18386;var statearr_18398_18434 = state_18386__$1;(statearr_18398_18434[(2)] = null);
(statearr_18398_18434[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18387 === (21)))
{var state_18386__$1 = state_18386;var statearr_18399_18435 = state_18386__$1;(statearr_18399_18435[(2)] = null);
(statearr_18399_18435[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18387 === (13)))
{var inst_18339 = (state_18386[(9)]);var inst_18338 = (state_18386[(10)]);var inst_18340 = (state_18386[(11)]);var inst_18341 = (state_18386[(12)]);var inst_18348 = (state_18386[(2)]);var inst_18349 = (inst_18341 + (1));var tmp18395 = inst_18339;var tmp18396 = inst_18338;var tmp18397 = inst_18340;var inst_18338__$1 = tmp18396;var inst_18339__$1 = tmp18395;var inst_18340__$1 = tmp18397;var inst_18341__$1 = inst_18349;var state_18386__$1 = (function (){var statearr_18400 = state_18386;(statearr_18400[(9)] = inst_18339__$1);
(statearr_18400[(10)] = inst_18338__$1);
(statearr_18400[(11)] = inst_18340__$1);
(statearr_18400[(14)] = inst_18348);
(statearr_18400[(12)] = inst_18341__$1);
return statearr_18400;
})();var statearr_18401_18436 = state_18386__$1;(statearr_18401_18436[(2)] = null);
(statearr_18401_18436[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18387 === (22)))
{var state_18386__$1 = state_18386;var statearr_18402_18437 = state_18386__$1;(statearr_18402_18437[(2)] = null);
(statearr_18402_18437[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18387 === (6)))
{var inst_18327 = (state_18386[(13)]);var inst_18336 = f.call(null,inst_18327);var inst_18337 = cljs.core.seq.call(null,inst_18336);var inst_18338 = inst_18337;var inst_18339 = null;var inst_18340 = (0);var inst_18341 = (0);var state_18386__$1 = (function (){var statearr_18403 = state_18386;(statearr_18403[(9)] = inst_18339);
(statearr_18403[(10)] = inst_18338);
(statearr_18403[(11)] = inst_18340);
(statearr_18403[(12)] = inst_18341);
return statearr_18403;
})();var statearr_18404_18438 = state_18386__$1;(statearr_18404_18438[(2)] = null);
(statearr_18404_18438[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18387 === (17)))
{var inst_18352 = (state_18386[(7)]);var inst_18356 = cljs.core.chunk_first.call(null,inst_18352);var inst_18357 = cljs.core.chunk_rest.call(null,inst_18352);var inst_18358 = cljs.core.count.call(null,inst_18356);var inst_18338 = inst_18357;var inst_18339 = inst_18356;var inst_18340 = inst_18358;var inst_18341 = (0);var state_18386__$1 = (function (){var statearr_18405 = state_18386;(statearr_18405[(9)] = inst_18339);
(statearr_18405[(10)] = inst_18338);
(statearr_18405[(11)] = inst_18340);
(statearr_18405[(12)] = inst_18341);
return statearr_18405;
})();var statearr_18406_18439 = state_18386__$1;(statearr_18406_18439[(2)] = null);
(statearr_18406_18439[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18387 === (3)))
{var inst_18384 = (state_18386[(2)]);var state_18386__$1 = state_18386;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18386__$1,inst_18384);
} else
{if((state_val_18387 === (12)))
{var inst_18372 = (state_18386[(2)]);var state_18386__$1 = state_18386;var statearr_18407_18440 = state_18386__$1;(statearr_18407_18440[(2)] = inst_18372);
(statearr_18407_18440[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18387 === (2)))
{var state_18386__$1 = state_18386;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18386__$1,(4),in$);
} else
{if((state_val_18387 === (23)))
{var inst_18380 = (state_18386[(2)]);var state_18386__$1 = state_18386;var statearr_18408_18441 = state_18386__$1;(statearr_18408_18441[(2)] = inst_18380);
(statearr_18408_18441[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18387 === (19)))
{var inst_18367 = (state_18386[(2)]);var state_18386__$1 = state_18386;var statearr_18409_18442 = state_18386__$1;(statearr_18409_18442[(2)] = inst_18367);
(statearr_18409_18442[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18387 === (11)))
{var inst_18338 = (state_18386[(10)]);var inst_18352 = (state_18386[(7)]);var inst_18352__$1 = cljs.core.seq.call(null,inst_18338);var state_18386__$1 = (function (){var statearr_18410 = state_18386;(statearr_18410[(7)] = inst_18352__$1);
return statearr_18410;
})();if(inst_18352__$1)
{var statearr_18411_18443 = state_18386__$1;(statearr_18411_18443[(1)] = (14));
} else
{var statearr_18412_18444 = state_18386__$1;(statearr_18412_18444[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18387 === (9)))
{var inst_18374 = (state_18386[(2)]);var inst_18375 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_18386__$1 = (function (){var statearr_18413 = state_18386;(statearr_18413[(15)] = inst_18374);
return statearr_18413;
})();if(cljs.core.truth_(inst_18375))
{var statearr_18414_18445 = state_18386__$1;(statearr_18414_18445[(1)] = (21));
} else
{var statearr_18415_18446 = state_18386__$1;(statearr_18415_18446[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18387 === (5)))
{var inst_18330 = cljs.core.async.close_BANG_.call(null,out);var state_18386__$1 = state_18386;var statearr_18416_18447 = state_18386__$1;(statearr_18416_18447[(2)] = inst_18330);
(statearr_18416_18447[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18387 === (14)))
{var inst_18352 = (state_18386[(7)]);var inst_18354 = cljs.core.chunked_seq_QMARK_.call(null,inst_18352);var state_18386__$1 = state_18386;if(inst_18354)
{var statearr_18417_18448 = state_18386__$1;(statearr_18417_18448[(1)] = (17));
} else
{var statearr_18418_18449 = state_18386__$1;(statearr_18418_18449[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18387 === (16)))
{var inst_18370 = (state_18386[(2)]);var state_18386__$1 = state_18386;var statearr_18419_18450 = state_18386__$1;(statearr_18419_18450[(2)] = inst_18370);
(statearr_18419_18450[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18387 === (10)))
{var inst_18339 = (state_18386[(9)]);var inst_18341 = (state_18386[(12)]);var inst_18346 = cljs.core._nth.call(null,inst_18339,inst_18341);var state_18386__$1 = state_18386;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18386__$1,(13),out,inst_18346);
} else
{if((state_val_18387 === (18)))
{var inst_18352 = (state_18386[(7)]);var inst_18361 = cljs.core.first.call(null,inst_18352);var state_18386__$1 = state_18386;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18386__$1,(20),out,inst_18361);
} else
{if((state_val_18387 === (8)))
{var inst_18340 = (state_18386[(11)]);var inst_18341 = (state_18386[(12)]);var inst_18343 = (inst_18341 < inst_18340);var inst_18344 = inst_18343;var state_18386__$1 = state_18386;if(cljs.core.truth_(inst_18344))
{var statearr_18420_18451 = state_18386__$1;(statearr_18420_18451[(1)] = (10));
} else
{var statearr_18421_18452 = state_18386__$1;(statearr_18421_18452[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13576__auto__))
;return ((function (switch__13511__auto__,c__13576__auto__){
return (function() {
var state_machine__13512__auto__ = null;
var state_machine__13512__auto____0 = (function (){var statearr_18425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18425[(0)] = state_machine__13512__auto__);
(statearr_18425[(1)] = (1));
return statearr_18425;
});
var state_machine__13512__auto____1 = (function (state_18386){while(true){
var ret_value__13513__auto__ = (function (){try{while(true){
var result__13514__auto__ = switch__13511__auto__.call(null,state_18386);if(cljs.core.keyword_identical_QMARK_.call(null,result__13514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13514__auto__;
}
break;
}
}catch (e18426){if((e18426 instanceof Object))
{var ex__13515__auto__ = e18426;var statearr_18427_18453 = state_18386;(statearr_18427_18453[(5)] = ex__13515__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18386);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18426;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18454 = state_18386;
state_18386 = G__18454;
continue;
}
} else
{return ret_value__13513__auto__;
}
break;
}
});
state_machine__13512__auto__ = function(state_18386){
switch(arguments.length){
case 0:
return state_machine__13512__auto____0.call(this);
case 1:
return state_machine__13512__auto____1.call(this,state_18386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13512__auto____0;
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13512__auto____1;
return state_machine__13512__auto__;
})()
;})(switch__13511__auto__,c__13576__auto__))
})();var state__13578__auto__ = (function (){var statearr_18428 = f__13577__auto__.call(null);(statearr_18428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13576__auto__);
return statearr_18428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13578__auto__);
});})(c__13576__auto__))
);
return c__13576__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__13576__auto___18549 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13576__auto___18549){
return (function (){var f__13577__auto__ = (function (){var switch__13511__auto__ = ((function (c__13576__auto___18549){
return (function (state_18525){var state_val_18526 = (state_18525[(1)]);if((state_val_18526 === (7)))
{var inst_18521 = (state_18525[(2)]);var state_18525__$1 = state_18525;var statearr_18527_18550 = state_18525__$1;(statearr_18527_18550[(2)] = inst_18521);
(statearr_18527_18550[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18526 === (1)))
{var state_18525__$1 = state_18525;var statearr_18528_18551 = state_18525__$1;(statearr_18528_18551[(2)] = null);
(statearr_18528_18551[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18526 === (4)))
{var inst_18504 = (state_18525[(7)]);var inst_18504__$1 = (state_18525[(2)]);var inst_18505 = (inst_18504__$1 == null);var state_18525__$1 = (function (){var statearr_18529 = state_18525;(statearr_18529[(7)] = inst_18504__$1);
return statearr_18529;
})();if(cljs.core.truth_(inst_18505))
{var statearr_18530_18552 = state_18525__$1;(statearr_18530_18552[(1)] = (5));
} else
{var statearr_18531_18553 = state_18525__$1;(statearr_18531_18553[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18526 === (13)))
{var state_18525__$1 = state_18525;var statearr_18532_18554 = state_18525__$1;(statearr_18532_18554[(2)] = null);
(statearr_18532_18554[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18526 === (6)))
{var inst_18504 = (state_18525[(7)]);var state_18525__$1 = state_18525;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18525__$1,(11),to,inst_18504);
} else
{if((state_val_18526 === (3)))
{var inst_18523 = (state_18525[(2)]);var state_18525__$1 = state_18525;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18525__$1,inst_18523);
} else
{if((state_val_18526 === (12)))
{var state_18525__$1 = state_18525;var statearr_18533_18555 = state_18525__$1;(statearr_18533_18555[(2)] = null);
(statearr_18533_18555[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18526 === (2)))
{var state_18525__$1 = state_18525;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18525__$1,(4),from);
} else
{if((state_val_18526 === (11)))
{var inst_18514 = (state_18525[(2)]);var state_18525__$1 = state_18525;if(cljs.core.truth_(inst_18514))
{var statearr_18534_18556 = state_18525__$1;(statearr_18534_18556[(1)] = (12));
} else
{var statearr_18535_18557 = state_18525__$1;(statearr_18535_18557[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18526 === (9)))
{var state_18525__$1 = state_18525;var statearr_18536_18558 = state_18525__$1;(statearr_18536_18558[(2)] = null);
(statearr_18536_18558[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18526 === (5)))
{var state_18525__$1 = state_18525;if(cljs.core.truth_(close_QMARK_))
{var statearr_18537_18559 = state_18525__$1;(statearr_18537_18559[(1)] = (8));
} else
{var statearr_18538_18560 = state_18525__$1;(statearr_18538_18560[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18526 === (14)))
{var inst_18519 = (state_18525[(2)]);var state_18525__$1 = state_18525;var statearr_18539_18561 = state_18525__$1;(statearr_18539_18561[(2)] = inst_18519);
(statearr_18539_18561[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18526 === (10)))
{var inst_18511 = (state_18525[(2)]);var state_18525__$1 = state_18525;var statearr_18540_18562 = state_18525__$1;(statearr_18540_18562[(2)] = inst_18511);
(statearr_18540_18562[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18526 === (8)))
{var inst_18508 = cljs.core.async.close_BANG_.call(null,to);var state_18525__$1 = state_18525;var statearr_18541_18563 = state_18525__$1;(statearr_18541_18563[(2)] = inst_18508);
(statearr_18541_18563[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13576__auto___18549))
;return ((function (switch__13511__auto__,c__13576__auto___18549){
return (function() {
var state_machine__13512__auto__ = null;
var state_machine__13512__auto____0 = (function (){var statearr_18545 = [null,null,null,null,null,null,null,null];(statearr_18545[(0)] = state_machine__13512__auto__);
(statearr_18545[(1)] = (1));
return statearr_18545;
});
var state_machine__13512__auto____1 = (function (state_18525){while(true){
var ret_value__13513__auto__ = (function (){try{while(true){
var result__13514__auto__ = switch__13511__auto__.call(null,state_18525);if(cljs.core.keyword_identical_QMARK_.call(null,result__13514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13514__auto__;
}
break;
}
}catch (e18546){if((e18546 instanceof Object))
{var ex__13515__auto__ = e18546;var statearr_18547_18564 = state_18525;(statearr_18547_18564[(5)] = ex__13515__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18525);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18546;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18565 = state_18525;
state_18525 = G__18565;
continue;
}
} else
{return ret_value__13513__auto__;
}
break;
}
});
state_machine__13512__auto__ = function(state_18525){
switch(arguments.length){
case 0:
return state_machine__13512__auto____0.call(this);
case 1:
return state_machine__13512__auto____1.call(this,state_18525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13512__auto____0;
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13512__auto____1;
return state_machine__13512__auto__;
})()
;})(switch__13511__auto__,c__13576__auto___18549))
})();var state__13578__auto__ = (function (){var statearr_18548 = f__13577__auto__.call(null);(statearr_18548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13576__auto___18549);
return statearr_18548;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13578__auto__);
});})(c__13576__auto___18549))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13576__auto___18666 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13576__auto___18666,tc,fc){
return (function (){var f__13577__auto__ = (function (){var switch__13511__auto__ = ((function (c__13576__auto___18666,tc,fc){
return (function (state_18641){var state_val_18642 = (state_18641[(1)]);if((state_val_18642 === (7)))
{var inst_18637 = (state_18641[(2)]);var state_18641__$1 = state_18641;var statearr_18643_18667 = state_18641__$1;(statearr_18643_18667[(2)] = inst_18637);
(statearr_18643_18667[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18642 === (1)))
{var state_18641__$1 = state_18641;var statearr_18644_18668 = state_18641__$1;(statearr_18644_18668[(2)] = null);
(statearr_18644_18668[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18642 === (4)))
{var inst_18618 = (state_18641[(7)]);var inst_18618__$1 = (state_18641[(2)]);var inst_18619 = (inst_18618__$1 == null);var state_18641__$1 = (function (){var statearr_18645 = state_18641;(statearr_18645[(7)] = inst_18618__$1);
return statearr_18645;
})();if(cljs.core.truth_(inst_18619))
{var statearr_18646_18669 = state_18641__$1;(statearr_18646_18669[(1)] = (5));
} else
{var statearr_18647_18670 = state_18641__$1;(statearr_18647_18670[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18642 === (13)))
{var state_18641__$1 = state_18641;var statearr_18648_18671 = state_18641__$1;(statearr_18648_18671[(2)] = null);
(statearr_18648_18671[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18642 === (6)))
{var inst_18618 = (state_18641[(7)]);var inst_18624 = p.call(null,inst_18618);var state_18641__$1 = state_18641;if(cljs.core.truth_(inst_18624))
{var statearr_18649_18672 = state_18641__$1;(statearr_18649_18672[(1)] = (9));
} else
{var statearr_18650_18673 = state_18641__$1;(statearr_18650_18673[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18642 === (3)))
{var inst_18639 = (state_18641[(2)]);var state_18641__$1 = state_18641;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18641__$1,inst_18639);
} else
{if((state_val_18642 === (12)))
{var state_18641__$1 = state_18641;var statearr_18651_18674 = state_18641__$1;(statearr_18651_18674[(2)] = null);
(statearr_18651_18674[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18642 === (2)))
{var state_18641__$1 = state_18641;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18641__$1,(4),ch);
} else
{if((state_val_18642 === (11)))
{var inst_18618 = (state_18641[(7)]);var inst_18628 = (state_18641[(2)]);var state_18641__$1 = state_18641;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18641__$1,(8),inst_18628,inst_18618);
} else
{if((state_val_18642 === (9)))
{var state_18641__$1 = state_18641;var statearr_18652_18675 = state_18641__$1;(statearr_18652_18675[(2)] = tc);
(statearr_18652_18675[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18642 === (5)))
{var inst_18621 = cljs.core.async.close_BANG_.call(null,tc);var inst_18622 = cljs.core.async.close_BANG_.call(null,fc);var state_18641__$1 = (function (){var statearr_18653 = state_18641;(statearr_18653[(8)] = inst_18621);
return statearr_18653;
})();var statearr_18654_18676 = state_18641__$1;(statearr_18654_18676[(2)] = inst_18622);
(statearr_18654_18676[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18642 === (14)))
{var inst_18635 = (state_18641[(2)]);var state_18641__$1 = state_18641;var statearr_18655_18677 = state_18641__$1;(statearr_18655_18677[(2)] = inst_18635);
(statearr_18655_18677[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18642 === (10)))
{var state_18641__$1 = state_18641;var statearr_18656_18678 = state_18641__$1;(statearr_18656_18678[(2)] = fc);
(statearr_18656_18678[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18642 === (8)))
{var inst_18630 = (state_18641[(2)]);var state_18641__$1 = state_18641;if(cljs.core.truth_(inst_18630))
{var statearr_18657_18679 = state_18641__$1;(statearr_18657_18679[(1)] = (12));
} else
{var statearr_18658_18680 = state_18641__$1;(statearr_18658_18680[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13576__auto___18666,tc,fc))
;return ((function (switch__13511__auto__,c__13576__auto___18666,tc,fc){
return (function() {
var state_machine__13512__auto__ = null;
var state_machine__13512__auto____0 = (function (){var statearr_18662 = [null,null,null,null,null,null,null,null,null];(statearr_18662[(0)] = state_machine__13512__auto__);
(statearr_18662[(1)] = (1));
return statearr_18662;
});
var state_machine__13512__auto____1 = (function (state_18641){while(true){
var ret_value__13513__auto__ = (function (){try{while(true){
var result__13514__auto__ = switch__13511__auto__.call(null,state_18641);if(cljs.core.keyword_identical_QMARK_.call(null,result__13514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13514__auto__;
}
break;
}
}catch (e18663){if((e18663 instanceof Object))
{var ex__13515__auto__ = e18663;var statearr_18664_18681 = state_18641;(statearr_18664_18681[(5)] = ex__13515__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18641);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18663;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18682 = state_18641;
state_18641 = G__18682;
continue;
}
} else
{return ret_value__13513__auto__;
}
break;
}
});
state_machine__13512__auto__ = function(state_18641){
switch(arguments.length){
case 0:
return state_machine__13512__auto____0.call(this);
case 1:
return state_machine__13512__auto____1.call(this,state_18641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13512__auto____0;
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13512__auto____1;
return state_machine__13512__auto__;
})()
;})(switch__13511__auto__,c__13576__auto___18666,tc,fc))
})();var state__13578__auto__ = (function (){var statearr_18665 = f__13577__auto__.call(null);(statearr_18665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13576__auto___18666);
return statearr_18665;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13578__auto__);
});})(c__13576__auto___18666,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13576__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13576__auto__){
return (function (){var f__13577__auto__ = (function (){var switch__13511__auto__ = ((function (c__13576__auto__){
return (function (state_18729){var state_val_18730 = (state_18729[(1)]);if((state_val_18730 === (7)))
{var inst_18725 = (state_18729[(2)]);var state_18729__$1 = state_18729;var statearr_18731_18747 = state_18729__$1;(statearr_18731_18747[(2)] = inst_18725);
(statearr_18731_18747[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18730 === (6)))
{var inst_18718 = (state_18729[(7)]);var inst_18715 = (state_18729[(8)]);var inst_18722 = f.call(null,inst_18715,inst_18718);var inst_18715__$1 = inst_18722;var state_18729__$1 = (function (){var statearr_18732 = state_18729;(statearr_18732[(8)] = inst_18715__$1);
return statearr_18732;
})();var statearr_18733_18748 = state_18729__$1;(statearr_18733_18748[(2)] = null);
(statearr_18733_18748[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18730 === (5)))
{var inst_18715 = (state_18729[(8)]);var state_18729__$1 = state_18729;var statearr_18734_18749 = state_18729__$1;(statearr_18734_18749[(2)] = inst_18715);
(statearr_18734_18749[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18730 === (4)))
{var inst_18718 = (state_18729[(7)]);var inst_18718__$1 = (state_18729[(2)]);var inst_18719 = (inst_18718__$1 == null);var state_18729__$1 = (function (){var statearr_18735 = state_18729;(statearr_18735[(7)] = inst_18718__$1);
return statearr_18735;
})();if(cljs.core.truth_(inst_18719))
{var statearr_18736_18750 = state_18729__$1;(statearr_18736_18750[(1)] = (5));
} else
{var statearr_18737_18751 = state_18729__$1;(statearr_18737_18751[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18730 === (3)))
{var inst_18727 = (state_18729[(2)]);var state_18729__$1 = state_18729;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18729__$1,inst_18727);
} else
{if((state_val_18730 === (2)))
{var state_18729__$1 = state_18729;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18729__$1,(4),ch);
} else
{if((state_val_18730 === (1)))
{var inst_18715 = init;var state_18729__$1 = (function (){var statearr_18738 = state_18729;(statearr_18738[(8)] = inst_18715);
return statearr_18738;
})();var statearr_18739_18752 = state_18729__$1;(statearr_18739_18752[(2)] = null);
(statearr_18739_18752[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__13576__auto__))
;return ((function (switch__13511__auto__,c__13576__auto__){
return (function() {
var state_machine__13512__auto__ = null;
var state_machine__13512__auto____0 = (function (){var statearr_18743 = [null,null,null,null,null,null,null,null,null];(statearr_18743[(0)] = state_machine__13512__auto__);
(statearr_18743[(1)] = (1));
return statearr_18743;
});
var state_machine__13512__auto____1 = (function (state_18729){while(true){
var ret_value__13513__auto__ = (function (){try{while(true){
var result__13514__auto__ = switch__13511__auto__.call(null,state_18729);if(cljs.core.keyword_identical_QMARK_.call(null,result__13514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13514__auto__;
}
break;
}
}catch (e18744){if((e18744 instanceof Object))
{var ex__13515__auto__ = e18744;var statearr_18745_18753 = state_18729;(statearr_18745_18753[(5)] = ex__13515__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18729);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18744;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18754 = state_18729;
state_18729 = G__18754;
continue;
}
} else
{return ret_value__13513__auto__;
}
break;
}
});
state_machine__13512__auto__ = function(state_18729){
switch(arguments.length){
case 0:
return state_machine__13512__auto____0.call(this);
case 1:
return state_machine__13512__auto____1.call(this,state_18729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13512__auto____0;
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13512__auto____1;
return state_machine__13512__auto__;
})()
;})(switch__13511__auto__,c__13576__auto__))
})();var state__13578__auto__ = (function (){var statearr_18746 = f__13577__auto__.call(null);(statearr_18746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13576__auto__);
return statearr_18746;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13578__auto__);
});})(c__13576__auto__))
);
return c__13576__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13576__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13576__auto__){
return (function (){var f__13577__auto__ = (function (){var switch__13511__auto__ = ((function (c__13576__auto__){
return (function (state_18828){var state_val_18829 = (state_18828[(1)]);if((state_val_18829 === (7)))
{var inst_18810 = (state_18828[(2)]);var state_18828__$1 = state_18828;var statearr_18830_18853 = state_18828__$1;(statearr_18830_18853[(2)] = inst_18810);
(statearr_18830_18853[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18829 === (1)))
{var inst_18804 = cljs.core.seq.call(null,coll);var inst_18805 = inst_18804;var state_18828__$1 = (function (){var statearr_18831 = state_18828;(statearr_18831[(7)] = inst_18805);
return statearr_18831;
})();var statearr_18832_18854 = state_18828__$1;(statearr_18832_18854[(2)] = null);
(statearr_18832_18854[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18829 === (4)))
{var inst_18805 = (state_18828[(7)]);var inst_18808 = cljs.core.first.call(null,inst_18805);var state_18828__$1 = state_18828;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18828__$1,(7),ch,inst_18808);
} else
{if((state_val_18829 === (13)))
{var inst_18822 = (state_18828[(2)]);var state_18828__$1 = state_18828;var statearr_18833_18855 = state_18828__$1;(statearr_18833_18855[(2)] = inst_18822);
(statearr_18833_18855[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18829 === (6)))
{var inst_18813 = (state_18828[(2)]);var state_18828__$1 = state_18828;if(cljs.core.truth_(inst_18813))
{var statearr_18834_18856 = state_18828__$1;(statearr_18834_18856[(1)] = (8));
} else
{var statearr_18835_18857 = state_18828__$1;(statearr_18835_18857[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18829 === (3)))
{var inst_18826 = (state_18828[(2)]);var state_18828__$1 = state_18828;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18828__$1,inst_18826);
} else
{if((state_val_18829 === (12)))
{var state_18828__$1 = state_18828;var statearr_18836_18858 = state_18828__$1;(statearr_18836_18858[(2)] = null);
(statearr_18836_18858[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18829 === (2)))
{var inst_18805 = (state_18828[(7)]);var state_18828__$1 = state_18828;if(cljs.core.truth_(inst_18805))
{var statearr_18837_18859 = state_18828__$1;(statearr_18837_18859[(1)] = (4));
} else
{var statearr_18838_18860 = state_18828__$1;(statearr_18838_18860[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18829 === (11)))
{var inst_18819 = cljs.core.async.close_BANG_.call(null,ch);var state_18828__$1 = state_18828;var statearr_18839_18861 = state_18828__$1;(statearr_18839_18861[(2)] = inst_18819);
(statearr_18839_18861[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18829 === (9)))
{var state_18828__$1 = state_18828;if(cljs.core.truth_(close_QMARK_))
{var statearr_18840_18862 = state_18828__$1;(statearr_18840_18862[(1)] = (11));
} else
{var statearr_18841_18863 = state_18828__$1;(statearr_18841_18863[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18829 === (5)))
{var inst_18805 = (state_18828[(7)]);var state_18828__$1 = state_18828;var statearr_18842_18864 = state_18828__$1;(statearr_18842_18864[(2)] = inst_18805);
(statearr_18842_18864[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18829 === (10)))
{var inst_18824 = (state_18828[(2)]);var state_18828__$1 = state_18828;var statearr_18843_18865 = state_18828__$1;(statearr_18843_18865[(2)] = inst_18824);
(statearr_18843_18865[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18829 === (8)))
{var inst_18805 = (state_18828[(7)]);var inst_18815 = cljs.core.next.call(null,inst_18805);var inst_18805__$1 = inst_18815;var state_18828__$1 = (function (){var statearr_18844 = state_18828;(statearr_18844[(7)] = inst_18805__$1);
return statearr_18844;
})();var statearr_18845_18866 = state_18828__$1;(statearr_18845_18866[(2)] = null);
(statearr_18845_18866[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13576__auto__))
;return ((function (switch__13511__auto__,c__13576__auto__){
return (function() {
var state_machine__13512__auto__ = null;
var state_machine__13512__auto____0 = (function (){var statearr_18849 = [null,null,null,null,null,null,null,null];(statearr_18849[(0)] = state_machine__13512__auto__);
(statearr_18849[(1)] = (1));
return statearr_18849;
});
var state_machine__13512__auto____1 = (function (state_18828){while(true){
var ret_value__13513__auto__ = (function (){try{while(true){
var result__13514__auto__ = switch__13511__auto__.call(null,state_18828);if(cljs.core.keyword_identical_QMARK_.call(null,result__13514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13514__auto__;
}
break;
}
}catch (e18850){if((e18850 instanceof Object))
{var ex__13515__auto__ = e18850;var statearr_18851_18867 = state_18828;(statearr_18851_18867[(5)] = ex__13515__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18828);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18850;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18868 = state_18828;
state_18828 = G__18868;
continue;
}
} else
{return ret_value__13513__auto__;
}
break;
}
});
state_machine__13512__auto__ = function(state_18828){
switch(arguments.length){
case 0:
return state_machine__13512__auto____0.call(this);
case 1:
return state_machine__13512__auto____1.call(this,state_18828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13512__auto____0;
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13512__auto____1;
return state_machine__13512__auto__;
})()
;})(switch__13511__auto__,c__13576__auto__))
})();var state__13578__auto__ = (function (){var statearr_18852 = f__13577__auto__.call(null);(statearr_18852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13576__auto__);
return statearr_18852;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13578__auto__);
});})(c__13576__auto__))
);
return c__13576__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj18870 = {};return obj18870;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__10352__auto__ = _;if(and__10352__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__10352__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__10991__auto__ = (((_ == null))?null:_);return (function (){var or__10364__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10991__auto__)]);if(or__10364__auto__)
{return or__10364__auto__;
} else
{var or__10364__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__10364__auto____$1)
{return or__10364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj18872 = {};return obj18872;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__10352__auto__ = m;if(and__10352__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__10352__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__10991__auto__ = (((m == null))?null:m);return (function (){var or__10364__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10991__auto__)]);if(or__10364__auto__)
{return or__10364__auto__;
} else
{var or__10364__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__10364__auto____$1)
{return or__10364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__10352__auto__ = m;if(and__10352__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__10352__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__10991__auto__ = (((m == null))?null:m);return (function (){var or__10364__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10991__auto__)]);if(or__10364__auto__)
{return or__10364__auto__;
} else
{var or__10364__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__10364__auto____$1)
{return or__10364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__10352__auto__ = m;if(and__10352__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__10352__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__10991__auto__ = (((m == null))?null:m);return (function (){var or__10364__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10991__auto__)]);if(or__10364__auto__)
{return or__10364__auto__;
} else
{var or__10364__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__10364__auto____$1)
{return or__10364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t19094 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19094 = (function (cs,ch,mult,meta19095){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19095 = meta19095;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19094.cljs$lang$type = true;
cljs.core.async.t19094.cljs$lang$ctorStr = "cljs.core.async/t19094";
cljs.core.async.t19094.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10931__auto__,writer__10932__auto__,opt__10933__auto__){return cljs.core._write.call(null,writer__10932__auto__,"cljs.core.async/t19094");
});})(cs))
;
cljs.core.async.t19094.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t19094.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t19094.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t19094.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t19094.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19094.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t19094.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19096){var self__ = this;
var _19096__$1 = this;return self__.meta19095;
});})(cs))
;
cljs.core.async.t19094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19096,meta19095__$1){var self__ = this;
var _19096__$1 = this;return (new cljs.core.async.t19094(self__.cs,self__.ch,self__.mult,meta19095__$1));
});})(cs))
;
cljs.core.async.__GT_t19094 = ((function (cs){
return (function __GT_t19094(cs__$1,ch__$1,mult__$1,meta19095){return (new cljs.core.async.t19094(cs__$1,ch__$1,mult__$1,meta19095));
});})(cs))
;
}
return (new cljs.core.async.t19094(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13576__auto___19315 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13576__auto___19315,cs,m,dchan,dctr,done){
return (function (){var f__13577__auto__ = (function (){var switch__13511__auto__ = ((function (c__13576__auto___19315,cs,m,dchan,dctr,done){
return (function (state_19227){var state_val_19228 = (state_19227[(1)]);if((state_val_19228 === (7)))
{var inst_19223 = (state_19227[(2)]);var state_19227__$1 = state_19227;var statearr_19229_19316 = state_19227__$1;(statearr_19229_19316[(2)] = inst_19223);
(statearr_19229_19316[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (20)))
{var inst_19128 = (state_19227[(7)]);var inst_19138 = cljs.core.first.call(null,inst_19128);var inst_19139 = cljs.core.nth.call(null,inst_19138,(0),null);var inst_19140 = cljs.core.nth.call(null,inst_19138,(1),null);var state_19227__$1 = (function (){var statearr_19230 = state_19227;(statearr_19230[(8)] = inst_19139);
return statearr_19230;
})();if(cljs.core.truth_(inst_19140))
{var statearr_19231_19317 = state_19227__$1;(statearr_19231_19317[(1)] = (22));
} else
{var statearr_19232_19318 = state_19227__$1;(statearr_19232_19318[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (27)))
{var inst_19175 = (state_19227[(9)]);var inst_19170 = (state_19227[(10)]);var inst_19168 = (state_19227[(11)]);var inst_19099 = (state_19227[(12)]);var inst_19175__$1 = cljs.core._nth.call(null,inst_19168,inst_19170);var inst_19176 = cljs.core.async.put_BANG_.call(null,inst_19175__$1,inst_19099,done);var state_19227__$1 = (function (){var statearr_19233 = state_19227;(statearr_19233[(9)] = inst_19175__$1);
return statearr_19233;
})();if(cljs.core.truth_(inst_19176))
{var statearr_19234_19319 = state_19227__$1;(statearr_19234_19319[(1)] = (30));
} else
{var statearr_19235_19320 = state_19227__$1;(statearr_19235_19320[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (1)))
{var state_19227__$1 = state_19227;var statearr_19236_19321 = state_19227__$1;(statearr_19236_19321[(2)] = null);
(statearr_19236_19321[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (24)))
{var inst_19128 = (state_19227[(7)]);var inst_19145 = (state_19227[(2)]);var inst_19146 = cljs.core.next.call(null,inst_19128);var inst_19108 = inst_19146;var inst_19109 = null;var inst_19110 = (0);var inst_19111 = (0);var state_19227__$1 = (function (){var statearr_19237 = state_19227;(statearr_19237[(13)] = inst_19109);
(statearr_19237[(14)] = inst_19110);
(statearr_19237[(15)] = inst_19108);
(statearr_19237[(16)] = inst_19145);
(statearr_19237[(17)] = inst_19111);
return statearr_19237;
})();var statearr_19238_19322 = state_19227__$1;(statearr_19238_19322[(2)] = null);
(statearr_19238_19322[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (39)))
{var state_19227__$1 = state_19227;var statearr_19242_19323 = state_19227__$1;(statearr_19242_19323[(2)] = null);
(statearr_19242_19323[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (4)))
{var inst_19099 = (state_19227[(12)]);var inst_19099__$1 = (state_19227[(2)]);var inst_19100 = (inst_19099__$1 == null);var state_19227__$1 = (function (){var statearr_19243 = state_19227;(statearr_19243[(12)] = inst_19099__$1);
return statearr_19243;
})();if(cljs.core.truth_(inst_19100))
{var statearr_19244_19324 = state_19227__$1;(statearr_19244_19324[(1)] = (5));
} else
{var statearr_19245_19325 = state_19227__$1;(statearr_19245_19325[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (15)))
{var inst_19109 = (state_19227[(13)]);var inst_19110 = (state_19227[(14)]);var inst_19108 = (state_19227[(15)]);var inst_19111 = (state_19227[(17)]);var inst_19124 = (state_19227[(2)]);var inst_19125 = (inst_19111 + (1));var tmp19239 = inst_19109;var tmp19240 = inst_19110;var tmp19241 = inst_19108;var inst_19108__$1 = tmp19241;var inst_19109__$1 = tmp19239;var inst_19110__$1 = tmp19240;var inst_19111__$1 = inst_19125;var state_19227__$1 = (function (){var statearr_19246 = state_19227;(statearr_19246[(13)] = inst_19109__$1);
(statearr_19246[(14)] = inst_19110__$1);
(statearr_19246[(18)] = inst_19124);
(statearr_19246[(15)] = inst_19108__$1);
(statearr_19246[(17)] = inst_19111__$1);
return statearr_19246;
})();var statearr_19247_19326 = state_19227__$1;(statearr_19247_19326[(2)] = null);
(statearr_19247_19326[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (21)))
{var inst_19149 = (state_19227[(2)]);var state_19227__$1 = state_19227;var statearr_19251_19327 = state_19227__$1;(statearr_19251_19327[(2)] = inst_19149);
(statearr_19251_19327[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (31)))
{var inst_19175 = (state_19227[(9)]);var inst_19179 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_19180 = cljs.core.async.untap_STAR_.call(null,m,inst_19175);var state_19227__$1 = (function (){var statearr_19252 = state_19227;(statearr_19252[(19)] = inst_19179);
return statearr_19252;
})();var statearr_19253_19328 = state_19227__$1;(statearr_19253_19328[(2)] = inst_19180);
(statearr_19253_19328[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (32)))
{var inst_19170 = (state_19227[(10)]);var inst_19167 = (state_19227[(20)]);var inst_19168 = (state_19227[(11)]);var inst_19169 = (state_19227[(21)]);var inst_19182 = (state_19227[(2)]);var inst_19183 = (inst_19170 + (1));var tmp19248 = inst_19167;var tmp19249 = inst_19168;var tmp19250 = inst_19169;var inst_19167__$1 = tmp19248;var inst_19168__$1 = tmp19249;var inst_19169__$1 = tmp19250;var inst_19170__$1 = inst_19183;var state_19227__$1 = (function (){var statearr_19254 = state_19227;(statearr_19254[(10)] = inst_19170__$1);
(statearr_19254[(20)] = inst_19167__$1);
(statearr_19254[(11)] = inst_19168__$1);
(statearr_19254[(22)] = inst_19182);
(statearr_19254[(21)] = inst_19169__$1);
return statearr_19254;
})();var statearr_19255_19329 = state_19227__$1;(statearr_19255_19329[(2)] = null);
(statearr_19255_19329[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (40)))
{var inst_19195 = (state_19227[(23)]);var inst_19199 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_19200 = cljs.core.async.untap_STAR_.call(null,m,inst_19195);var state_19227__$1 = (function (){var statearr_19256 = state_19227;(statearr_19256[(24)] = inst_19199);
return statearr_19256;
})();var statearr_19257_19330 = state_19227__$1;(statearr_19257_19330[(2)] = inst_19200);
(statearr_19257_19330[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (33)))
{var inst_19186 = (state_19227[(25)]);var inst_19188 = cljs.core.chunked_seq_QMARK_.call(null,inst_19186);var state_19227__$1 = state_19227;if(inst_19188)
{var statearr_19258_19331 = state_19227__$1;(statearr_19258_19331[(1)] = (36));
} else
{var statearr_19259_19332 = state_19227__$1;(statearr_19259_19332[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (13)))
{var inst_19118 = (state_19227[(26)]);var inst_19121 = cljs.core.async.close_BANG_.call(null,inst_19118);var state_19227__$1 = state_19227;var statearr_19260_19333 = state_19227__$1;(statearr_19260_19333[(2)] = inst_19121);
(statearr_19260_19333[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (22)))
{var inst_19139 = (state_19227[(8)]);var inst_19142 = cljs.core.async.close_BANG_.call(null,inst_19139);var state_19227__$1 = state_19227;var statearr_19261_19334 = state_19227__$1;(statearr_19261_19334[(2)] = inst_19142);
(statearr_19261_19334[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (36)))
{var inst_19186 = (state_19227[(25)]);var inst_19190 = cljs.core.chunk_first.call(null,inst_19186);var inst_19191 = cljs.core.chunk_rest.call(null,inst_19186);var inst_19192 = cljs.core.count.call(null,inst_19190);var inst_19167 = inst_19191;var inst_19168 = inst_19190;var inst_19169 = inst_19192;var inst_19170 = (0);var state_19227__$1 = (function (){var statearr_19262 = state_19227;(statearr_19262[(10)] = inst_19170);
(statearr_19262[(20)] = inst_19167);
(statearr_19262[(11)] = inst_19168);
(statearr_19262[(21)] = inst_19169);
return statearr_19262;
})();var statearr_19263_19335 = state_19227__$1;(statearr_19263_19335[(2)] = null);
(statearr_19263_19335[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (41)))
{var inst_19186 = (state_19227[(25)]);var inst_19202 = (state_19227[(2)]);var inst_19203 = cljs.core.next.call(null,inst_19186);var inst_19167 = inst_19203;var inst_19168 = null;var inst_19169 = (0);var inst_19170 = (0);var state_19227__$1 = (function (){var statearr_19264 = state_19227;(statearr_19264[(10)] = inst_19170);
(statearr_19264[(20)] = inst_19167);
(statearr_19264[(11)] = inst_19168);
(statearr_19264[(21)] = inst_19169);
(statearr_19264[(27)] = inst_19202);
return statearr_19264;
})();var statearr_19265_19336 = state_19227__$1;(statearr_19265_19336[(2)] = null);
(statearr_19265_19336[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (43)))
{var state_19227__$1 = state_19227;var statearr_19266_19337 = state_19227__$1;(statearr_19266_19337[(2)] = null);
(statearr_19266_19337[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (29)))
{var inst_19211 = (state_19227[(2)]);var state_19227__$1 = state_19227;var statearr_19267_19338 = state_19227__$1;(statearr_19267_19338[(2)] = inst_19211);
(statearr_19267_19338[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (44)))
{var inst_19220 = (state_19227[(2)]);var state_19227__$1 = (function (){var statearr_19268 = state_19227;(statearr_19268[(28)] = inst_19220);
return statearr_19268;
})();var statearr_19269_19339 = state_19227__$1;(statearr_19269_19339[(2)] = null);
(statearr_19269_19339[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (6)))
{var inst_19159 = (state_19227[(29)]);var inst_19158 = cljs.core.deref.call(null,cs);var inst_19159__$1 = cljs.core.keys.call(null,inst_19158);var inst_19160 = cljs.core.count.call(null,inst_19159__$1);var inst_19161 = cljs.core.reset_BANG_.call(null,dctr,inst_19160);var inst_19166 = cljs.core.seq.call(null,inst_19159__$1);var inst_19167 = inst_19166;var inst_19168 = null;var inst_19169 = (0);var inst_19170 = (0);var state_19227__$1 = (function (){var statearr_19270 = state_19227;(statearr_19270[(10)] = inst_19170);
(statearr_19270[(20)] = inst_19167);
(statearr_19270[(29)] = inst_19159__$1);
(statearr_19270[(11)] = inst_19168);
(statearr_19270[(21)] = inst_19169);
(statearr_19270[(30)] = inst_19161);
return statearr_19270;
})();var statearr_19271_19340 = state_19227__$1;(statearr_19271_19340[(2)] = null);
(statearr_19271_19340[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (28)))
{var inst_19186 = (state_19227[(25)]);var inst_19167 = (state_19227[(20)]);var inst_19186__$1 = cljs.core.seq.call(null,inst_19167);var state_19227__$1 = (function (){var statearr_19272 = state_19227;(statearr_19272[(25)] = inst_19186__$1);
return statearr_19272;
})();if(inst_19186__$1)
{var statearr_19273_19341 = state_19227__$1;(statearr_19273_19341[(1)] = (33));
} else
{var statearr_19274_19342 = state_19227__$1;(statearr_19274_19342[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (25)))
{var inst_19170 = (state_19227[(10)]);var inst_19169 = (state_19227[(21)]);var inst_19172 = (inst_19170 < inst_19169);var inst_19173 = inst_19172;var state_19227__$1 = state_19227;if(cljs.core.truth_(inst_19173))
{var statearr_19275_19343 = state_19227__$1;(statearr_19275_19343[(1)] = (27));
} else
{var statearr_19276_19344 = state_19227__$1;(statearr_19276_19344[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (34)))
{var state_19227__$1 = state_19227;var statearr_19277_19345 = state_19227__$1;(statearr_19277_19345[(2)] = null);
(statearr_19277_19345[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (17)))
{var state_19227__$1 = state_19227;var statearr_19278_19346 = state_19227__$1;(statearr_19278_19346[(2)] = null);
(statearr_19278_19346[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (3)))
{var inst_19225 = (state_19227[(2)]);var state_19227__$1 = state_19227;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19227__$1,inst_19225);
} else
{if((state_val_19228 === (12)))
{var inst_19154 = (state_19227[(2)]);var state_19227__$1 = state_19227;var statearr_19279_19347 = state_19227__$1;(statearr_19279_19347[(2)] = inst_19154);
(statearr_19279_19347[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (2)))
{var state_19227__$1 = state_19227;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19227__$1,(4),ch);
} else
{if((state_val_19228 === (23)))
{var state_19227__$1 = state_19227;var statearr_19280_19348 = state_19227__$1;(statearr_19280_19348[(2)] = null);
(statearr_19280_19348[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (35)))
{var inst_19209 = (state_19227[(2)]);var state_19227__$1 = state_19227;var statearr_19281_19349 = state_19227__$1;(statearr_19281_19349[(2)] = inst_19209);
(statearr_19281_19349[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (19)))
{var inst_19128 = (state_19227[(7)]);var inst_19132 = cljs.core.chunk_first.call(null,inst_19128);var inst_19133 = cljs.core.chunk_rest.call(null,inst_19128);var inst_19134 = cljs.core.count.call(null,inst_19132);var inst_19108 = inst_19133;var inst_19109 = inst_19132;var inst_19110 = inst_19134;var inst_19111 = (0);var state_19227__$1 = (function (){var statearr_19282 = state_19227;(statearr_19282[(13)] = inst_19109);
(statearr_19282[(14)] = inst_19110);
(statearr_19282[(15)] = inst_19108);
(statearr_19282[(17)] = inst_19111);
return statearr_19282;
})();var statearr_19283_19350 = state_19227__$1;(statearr_19283_19350[(2)] = null);
(statearr_19283_19350[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (11)))
{var inst_19128 = (state_19227[(7)]);var inst_19108 = (state_19227[(15)]);var inst_19128__$1 = cljs.core.seq.call(null,inst_19108);var state_19227__$1 = (function (){var statearr_19284 = state_19227;(statearr_19284[(7)] = inst_19128__$1);
return statearr_19284;
})();if(inst_19128__$1)
{var statearr_19285_19351 = state_19227__$1;(statearr_19285_19351[(1)] = (16));
} else
{var statearr_19286_19352 = state_19227__$1;(statearr_19286_19352[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (9)))
{var inst_19156 = (state_19227[(2)]);var state_19227__$1 = state_19227;var statearr_19287_19353 = state_19227__$1;(statearr_19287_19353[(2)] = inst_19156);
(statearr_19287_19353[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (5)))
{var inst_19106 = cljs.core.deref.call(null,cs);var inst_19107 = cljs.core.seq.call(null,inst_19106);var inst_19108 = inst_19107;var inst_19109 = null;var inst_19110 = (0);var inst_19111 = (0);var state_19227__$1 = (function (){var statearr_19288 = state_19227;(statearr_19288[(13)] = inst_19109);
(statearr_19288[(14)] = inst_19110);
(statearr_19288[(15)] = inst_19108);
(statearr_19288[(17)] = inst_19111);
return statearr_19288;
})();var statearr_19289_19354 = state_19227__$1;(statearr_19289_19354[(2)] = null);
(statearr_19289_19354[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (14)))
{var state_19227__$1 = state_19227;var statearr_19290_19355 = state_19227__$1;(statearr_19290_19355[(2)] = null);
(statearr_19290_19355[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (45)))
{var inst_19217 = (state_19227[(2)]);var state_19227__$1 = state_19227;var statearr_19291_19356 = state_19227__$1;(statearr_19291_19356[(2)] = inst_19217);
(statearr_19291_19356[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (26)))
{var inst_19159 = (state_19227[(29)]);var inst_19213 = (state_19227[(2)]);var inst_19214 = cljs.core.seq.call(null,inst_19159);var state_19227__$1 = (function (){var statearr_19292 = state_19227;(statearr_19292[(31)] = inst_19213);
return statearr_19292;
})();if(inst_19214)
{var statearr_19293_19357 = state_19227__$1;(statearr_19293_19357[(1)] = (42));
} else
{var statearr_19294_19358 = state_19227__$1;(statearr_19294_19358[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (16)))
{var inst_19128 = (state_19227[(7)]);var inst_19130 = cljs.core.chunked_seq_QMARK_.call(null,inst_19128);var state_19227__$1 = state_19227;if(inst_19130)
{var statearr_19295_19359 = state_19227__$1;(statearr_19295_19359[(1)] = (19));
} else
{var statearr_19296_19360 = state_19227__$1;(statearr_19296_19360[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (38)))
{var inst_19206 = (state_19227[(2)]);var state_19227__$1 = state_19227;var statearr_19297_19361 = state_19227__$1;(statearr_19297_19361[(2)] = inst_19206);
(statearr_19297_19361[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (30)))
{var state_19227__$1 = state_19227;var statearr_19298_19362 = state_19227__$1;(statearr_19298_19362[(2)] = null);
(statearr_19298_19362[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (10)))
{var inst_19109 = (state_19227[(13)]);var inst_19111 = (state_19227[(17)]);var inst_19117 = cljs.core._nth.call(null,inst_19109,inst_19111);var inst_19118 = cljs.core.nth.call(null,inst_19117,(0),null);var inst_19119 = cljs.core.nth.call(null,inst_19117,(1),null);var state_19227__$1 = (function (){var statearr_19299 = state_19227;(statearr_19299[(26)] = inst_19118);
return statearr_19299;
})();if(cljs.core.truth_(inst_19119))
{var statearr_19300_19363 = state_19227__$1;(statearr_19300_19363[(1)] = (13));
} else
{var statearr_19301_19364 = state_19227__$1;(statearr_19301_19364[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (18)))
{var inst_19152 = (state_19227[(2)]);var state_19227__$1 = state_19227;var statearr_19302_19365 = state_19227__$1;(statearr_19302_19365[(2)] = inst_19152);
(statearr_19302_19365[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (42)))
{var state_19227__$1 = state_19227;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19227__$1,(45),dchan);
} else
{if((state_val_19228 === (37)))
{var inst_19186 = (state_19227[(25)]);var inst_19195 = (state_19227[(23)]);var inst_19099 = (state_19227[(12)]);var inst_19195__$1 = cljs.core.first.call(null,inst_19186);var inst_19196 = cljs.core.async.put_BANG_.call(null,inst_19195__$1,inst_19099,done);var state_19227__$1 = (function (){var statearr_19303 = state_19227;(statearr_19303[(23)] = inst_19195__$1);
return statearr_19303;
})();if(cljs.core.truth_(inst_19196))
{var statearr_19304_19366 = state_19227__$1;(statearr_19304_19366[(1)] = (39));
} else
{var statearr_19305_19367 = state_19227__$1;(statearr_19305_19367[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19228 === (8)))
{var inst_19110 = (state_19227[(14)]);var inst_19111 = (state_19227[(17)]);var inst_19113 = (inst_19111 < inst_19110);var inst_19114 = inst_19113;var state_19227__$1 = state_19227;if(cljs.core.truth_(inst_19114))
{var statearr_19306_19368 = state_19227__$1;(statearr_19306_19368[(1)] = (10));
} else
{var statearr_19307_19369 = state_19227__$1;(statearr_19307_19369[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13576__auto___19315,cs,m,dchan,dctr,done))
;return ((function (switch__13511__auto__,c__13576__auto___19315,cs,m,dchan,dctr,done){
return (function() {
var state_machine__13512__auto__ = null;
var state_machine__13512__auto____0 = (function (){var statearr_19311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19311[(0)] = state_machine__13512__auto__);
(statearr_19311[(1)] = (1));
return statearr_19311;
});
var state_machine__13512__auto____1 = (function (state_19227){while(true){
var ret_value__13513__auto__ = (function (){try{while(true){
var result__13514__auto__ = switch__13511__auto__.call(null,state_19227);if(cljs.core.keyword_identical_QMARK_.call(null,result__13514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13514__auto__;
}
break;
}
}catch (e19312){if((e19312 instanceof Object))
{var ex__13515__auto__ = e19312;var statearr_19313_19370 = state_19227;(statearr_19313_19370[(5)] = ex__13515__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19227);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19312;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19371 = state_19227;
state_19227 = G__19371;
continue;
}
} else
{return ret_value__13513__auto__;
}
break;
}
});
state_machine__13512__auto__ = function(state_19227){
switch(arguments.length){
case 0:
return state_machine__13512__auto____0.call(this);
case 1:
return state_machine__13512__auto____1.call(this,state_19227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13512__auto____0;
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13512__auto____1;
return state_machine__13512__auto__;
})()
;})(switch__13511__auto__,c__13576__auto___19315,cs,m,dchan,dctr,done))
})();var state__13578__auto__ = (function (){var statearr_19314 = f__13577__auto__.call(null);(statearr_19314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13576__auto___19315);
return statearr_19314;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13578__auto__);
});})(c__13576__auto___19315,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj19373 = {};return obj19373;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__10352__auto__ = m;if(and__10352__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__10352__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__10991__auto__ = (((m == null))?null:m);return (function (){var or__10364__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10991__auto__)]);if(or__10364__auto__)
{return or__10364__auto__;
} else
{var or__10364__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__10364__auto____$1)
{return or__10364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__10352__auto__ = m;if(and__10352__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__10352__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__10991__auto__ = (((m == null))?null:m);return (function (){var or__10364__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10991__auto__)]);if(or__10364__auto__)
{return or__10364__auto__;
} else
{var or__10364__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__10364__auto____$1)
{return or__10364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__10352__auto__ = m;if(and__10352__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__10352__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__10991__auto__ = (((m == null))?null:m);return (function (){var or__10364__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10991__auto__)]);if(or__10364__auto__)
{return or__10364__auto__;
} else
{var or__10364__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__10364__auto____$1)
{return or__10364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__10352__auto__ = m;if(and__10352__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__10352__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__10991__auto__ = (((m == null))?null:m);return (function (){var or__10364__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10991__auto__)]);if(or__10364__auto__)
{return or__10364__auto__;
} else
{var or__10364__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__10364__auto____$1)
{return or__10364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__10352__auto__ = m;if(and__10352__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__10352__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__10991__auto__ = (((m == null))?null:m);return (function (){var or__10364__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10991__auto__)]);if(or__10364__auto__)
{return or__10364__auto__;
} else
{var or__10364__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__10364__auto____$1)
{return or__10364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t19493 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19493 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19494){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19494 = meta19494;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19493.cljs$lang$type = true;
cljs.core.async.t19493.cljs$lang$ctorStr = "cljs.core.async/t19493";
cljs.core.async.t19493.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10931__auto__,writer__10932__auto__,opt__10933__auto__){return cljs.core._write.call(null,writer__10932__auto__,"cljs.core.async/t19493");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19493.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t19493.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19493.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19493.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19493.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19493.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19493.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19493.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19493.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19495){var self__ = this;
var _19495__$1 = this;return self__.meta19494;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19495,meta19494__$1){var self__ = this;
var _19495__$1 = this;return (new cljs.core.async.t19493(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19494__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t19493 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t19493(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19494){return (new cljs.core.async.t19493(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19494));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t19493(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__13576__auto___19612 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13576__auto___19612,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__13577__auto__ = (function (){var switch__13511__auto__ = ((function (c__13576__auto___19612,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19565){var state_val_19566 = (state_19565[(1)]);if((state_val_19566 === (7)))
{var inst_19509 = (state_19565[(7)]);var inst_19514 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19509);var state_19565__$1 = state_19565;var statearr_19567_19613 = state_19565__$1;(statearr_19567_19613[(2)] = inst_19514);
(statearr_19567_19613[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (20)))
{var inst_19524 = (state_19565[(8)]);var state_19565__$1 = state_19565;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19565__$1,(23),out,inst_19524);
} else
{if((state_val_19566 === (1)))
{var inst_19499 = (state_19565[(9)]);var inst_19499__$1 = calc_state.call(null);var inst_19500 = cljs.core.seq_QMARK_.call(null,inst_19499__$1);var state_19565__$1 = (function (){var statearr_19568 = state_19565;(statearr_19568[(9)] = inst_19499__$1);
return statearr_19568;
})();if(inst_19500)
{var statearr_19569_19614 = state_19565__$1;(statearr_19569_19614[(1)] = (2));
} else
{var statearr_19570_19615 = state_19565__$1;(statearr_19570_19615[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (24)))
{var inst_19517 = (state_19565[(10)]);var inst_19509 = inst_19517;var state_19565__$1 = (function (){var statearr_19571 = state_19565;(statearr_19571[(7)] = inst_19509);
return statearr_19571;
})();var statearr_19572_19616 = state_19565__$1;(statearr_19572_19616[(2)] = null);
(statearr_19572_19616[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (4)))
{var inst_19499 = (state_19565[(9)]);var inst_19505 = (state_19565[(2)]);var inst_19506 = cljs.core.get.call(null,inst_19505,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_19507 = cljs.core.get.call(null,inst_19505,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_19508 = cljs.core.get.call(null,inst_19505,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_19509 = inst_19499;var state_19565__$1 = (function (){var statearr_19573 = state_19565;(statearr_19573[(11)] = inst_19508);
(statearr_19573[(7)] = inst_19509);
(statearr_19573[(12)] = inst_19506);
(statearr_19573[(13)] = inst_19507);
return statearr_19573;
})();var statearr_19574_19617 = state_19565__$1;(statearr_19574_19617[(2)] = null);
(statearr_19574_19617[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (15)))
{var state_19565__$1 = state_19565;var statearr_19575_19618 = state_19565__$1;(statearr_19575_19618[(2)] = null);
(statearr_19575_19618[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (21)))
{var inst_19517 = (state_19565[(10)]);var inst_19509 = inst_19517;var state_19565__$1 = (function (){var statearr_19576 = state_19565;(statearr_19576[(7)] = inst_19509);
return statearr_19576;
})();var statearr_19577_19619 = state_19565__$1;(statearr_19577_19619[(2)] = null);
(statearr_19577_19619[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (13)))
{var inst_19561 = (state_19565[(2)]);var state_19565__$1 = state_19565;var statearr_19578_19620 = state_19565__$1;(statearr_19578_19620[(2)] = inst_19561);
(statearr_19578_19620[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (22)))
{var inst_19559 = (state_19565[(2)]);var state_19565__$1 = state_19565;var statearr_19579_19621 = state_19565__$1;(statearr_19579_19621[(2)] = inst_19559);
(statearr_19579_19621[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (6)))
{var inst_19563 = (state_19565[(2)]);var state_19565__$1 = state_19565;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19565__$1,inst_19563);
} else
{if((state_val_19566 === (25)))
{var state_19565__$1 = state_19565;var statearr_19580_19622 = state_19565__$1;(statearr_19580_19622[(2)] = null);
(statearr_19580_19622[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (17)))
{var inst_19539 = (state_19565[(14)]);var state_19565__$1 = state_19565;var statearr_19581_19623 = state_19565__$1;(statearr_19581_19623[(2)] = inst_19539);
(statearr_19581_19623[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (3)))
{var inst_19499 = (state_19565[(9)]);var state_19565__$1 = state_19565;var statearr_19582_19624 = state_19565__$1;(statearr_19582_19624[(2)] = inst_19499);
(statearr_19582_19624[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (12)))
{var inst_19520 = (state_19565[(15)]);var inst_19539 = (state_19565[(14)]);var inst_19525 = (state_19565[(16)]);var inst_19539__$1 = inst_19520.call(null,inst_19525);var state_19565__$1 = (function (){var statearr_19583 = state_19565;(statearr_19583[(14)] = inst_19539__$1);
return statearr_19583;
})();if(cljs.core.truth_(inst_19539__$1))
{var statearr_19584_19625 = state_19565__$1;(statearr_19584_19625[(1)] = (17));
} else
{var statearr_19585_19626 = state_19565__$1;(statearr_19585_19626[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (2)))
{var inst_19499 = (state_19565[(9)]);var inst_19502 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19499);var state_19565__$1 = state_19565;var statearr_19586_19627 = state_19565__$1;(statearr_19586_19627[(2)] = inst_19502);
(statearr_19586_19627[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (23)))
{var inst_19550 = (state_19565[(2)]);var state_19565__$1 = state_19565;if(cljs.core.truth_(inst_19550))
{var statearr_19587_19628 = state_19565__$1;(statearr_19587_19628[(1)] = (24));
} else
{var statearr_19588_19629 = state_19565__$1;(statearr_19588_19629[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (19)))
{var inst_19547 = (state_19565[(2)]);var state_19565__$1 = state_19565;if(cljs.core.truth_(inst_19547))
{var statearr_19589_19630 = state_19565__$1;(statearr_19589_19630[(1)] = (20));
} else
{var statearr_19590_19631 = state_19565__$1;(statearr_19590_19631[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (11)))
{var inst_19524 = (state_19565[(8)]);var inst_19530 = (inst_19524 == null);var state_19565__$1 = state_19565;if(cljs.core.truth_(inst_19530))
{var statearr_19591_19632 = state_19565__$1;(statearr_19591_19632[(1)] = (14));
} else
{var statearr_19592_19633 = state_19565__$1;(statearr_19592_19633[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (9)))
{var inst_19517 = (state_19565[(10)]);var inst_19517__$1 = (state_19565[(2)]);var inst_19518 = cljs.core.get.call(null,inst_19517__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_19519 = cljs.core.get.call(null,inst_19517__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_19520 = cljs.core.get.call(null,inst_19517__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_19565__$1 = (function (){var statearr_19593 = state_19565;(statearr_19593[(17)] = inst_19519);
(statearr_19593[(15)] = inst_19520);
(statearr_19593[(10)] = inst_19517__$1);
return statearr_19593;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19565__$1,(10),inst_19518);
} else
{if((state_val_19566 === (5)))
{var inst_19509 = (state_19565[(7)]);var inst_19512 = cljs.core.seq_QMARK_.call(null,inst_19509);var state_19565__$1 = state_19565;if(inst_19512)
{var statearr_19594_19634 = state_19565__$1;(statearr_19594_19634[(1)] = (7));
} else
{var statearr_19595_19635 = state_19565__$1;(statearr_19595_19635[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (14)))
{var inst_19525 = (state_19565[(16)]);var inst_19532 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19525);var state_19565__$1 = state_19565;var statearr_19596_19636 = state_19565__$1;(statearr_19596_19636[(2)] = inst_19532);
(statearr_19596_19636[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (26)))
{var inst_19555 = (state_19565[(2)]);var state_19565__$1 = state_19565;var statearr_19597_19637 = state_19565__$1;(statearr_19597_19637[(2)] = inst_19555);
(statearr_19597_19637[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (16)))
{var inst_19535 = (state_19565[(2)]);var inst_19536 = calc_state.call(null);var inst_19509 = inst_19536;var state_19565__$1 = (function (){var statearr_19598 = state_19565;(statearr_19598[(7)] = inst_19509);
(statearr_19598[(18)] = inst_19535);
return statearr_19598;
})();var statearr_19599_19638 = state_19565__$1;(statearr_19599_19638[(2)] = null);
(statearr_19599_19638[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (10)))
{var inst_19524 = (state_19565[(8)]);var inst_19525 = (state_19565[(16)]);var inst_19523 = (state_19565[(2)]);var inst_19524__$1 = cljs.core.nth.call(null,inst_19523,(0),null);var inst_19525__$1 = cljs.core.nth.call(null,inst_19523,(1),null);var inst_19526 = (inst_19524__$1 == null);var inst_19527 = cljs.core._EQ_.call(null,inst_19525__$1,change);var inst_19528 = (inst_19526) || (inst_19527);var state_19565__$1 = (function (){var statearr_19600 = state_19565;(statearr_19600[(8)] = inst_19524__$1);
(statearr_19600[(16)] = inst_19525__$1);
return statearr_19600;
})();if(cljs.core.truth_(inst_19528))
{var statearr_19601_19639 = state_19565__$1;(statearr_19601_19639[(1)] = (11));
} else
{var statearr_19602_19640 = state_19565__$1;(statearr_19602_19640[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (18)))
{var inst_19519 = (state_19565[(17)]);var inst_19520 = (state_19565[(15)]);var inst_19525 = (state_19565[(16)]);var inst_19542 = cljs.core.empty_QMARK_.call(null,inst_19520);var inst_19543 = inst_19519.call(null,inst_19525);var inst_19544 = cljs.core.not.call(null,inst_19543);var inst_19545 = (inst_19542) && (inst_19544);var state_19565__$1 = state_19565;var statearr_19603_19641 = state_19565__$1;(statearr_19603_19641[(2)] = inst_19545);
(statearr_19603_19641[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19566 === (8)))
{var inst_19509 = (state_19565[(7)]);var state_19565__$1 = state_19565;var statearr_19604_19642 = state_19565__$1;(statearr_19604_19642[(2)] = inst_19509);
(statearr_19604_19642[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13576__auto___19612,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__13511__auto__,c__13576__auto___19612,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__13512__auto__ = null;
var state_machine__13512__auto____0 = (function (){var statearr_19608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19608[(0)] = state_machine__13512__auto__);
(statearr_19608[(1)] = (1));
return statearr_19608;
});
var state_machine__13512__auto____1 = (function (state_19565){while(true){
var ret_value__13513__auto__ = (function (){try{while(true){
var result__13514__auto__ = switch__13511__auto__.call(null,state_19565);if(cljs.core.keyword_identical_QMARK_.call(null,result__13514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13514__auto__;
}
break;
}
}catch (e19609){if((e19609 instanceof Object))
{var ex__13515__auto__ = e19609;var statearr_19610_19643 = state_19565;(statearr_19610_19643[(5)] = ex__13515__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19565);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19609;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19644 = state_19565;
state_19565 = G__19644;
continue;
}
} else
{return ret_value__13513__auto__;
}
break;
}
});
state_machine__13512__auto__ = function(state_19565){
switch(arguments.length){
case 0:
return state_machine__13512__auto____0.call(this);
case 1:
return state_machine__13512__auto____1.call(this,state_19565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13512__auto____0;
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13512__auto____1;
return state_machine__13512__auto__;
})()
;})(switch__13511__auto__,c__13576__auto___19612,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__13578__auto__ = (function (){var statearr_19611 = f__13577__auto__.call(null);(statearr_19611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13576__auto___19612);
return statearr_19611;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13578__auto__);
});})(c__13576__auto___19612,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj19646 = {};return obj19646;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__10352__auto__ = p;if(and__10352__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__10352__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__10991__auto__ = (((p == null))?null:p);return (function (){var or__10364__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10991__auto__)]);if(or__10364__auto__)
{return or__10364__auto__;
} else
{var or__10364__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__10364__auto____$1)
{return or__10364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__10352__auto__ = p;if(and__10352__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__10352__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__10991__auto__ = (((p == null))?null:p);return (function (){var or__10364__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10991__auto__)]);if(or__10364__auto__)
{return or__10364__auto__;
} else
{var or__10364__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__10364__auto____$1)
{return or__10364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__10352__auto__ = p;if(and__10352__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__10352__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__10991__auto__ = (((p == null))?null:p);return (function (){var or__10364__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10991__auto__)]);if(or__10364__auto__)
{return or__10364__auto__;
} else
{var or__10364__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__10364__auto____$1)
{return or__10364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__10352__auto__ = p;if(and__10352__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__10352__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__10991__auto__ = (((p == null))?null:p);return (function (){var or__10364__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10991__auto__)]);if(or__10364__auto__)
{return or__10364__auto__;
} else
{var or__10364__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__10364__auto____$1)
{return or__10364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__10364__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__10364__auto__))
{return or__10364__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__10364__auto__,mults){
return (function (p1__19647_SHARP_){if(cljs.core.truth_(p1__19647_SHARP_.call(null,topic)))
{return p1__19647_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__19647_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__10364__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t19762 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19762 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19763){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19763 = meta19763;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19762.cljs$lang$type = true;
cljs.core.async.t19762.cljs$lang$ctorStr = "cljs.core.async/t19762";
cljs.core.async.t19762.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10931__auto__,writer__10932__auto__,opt__10933__auto__){return cljs.core._write.call(null,writer__10932__auto__,"cljs.core.async/t19762");
});})(mults,ensure_mult))
;
cljs.core.async.t19762.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t19762.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t19762.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t19762.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t19762.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t19762.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19762.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t19762.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19764){var self__ = this;
var _19764__$1 = this;return self__.meta19763;
});})(mults,ensure_mult))
;
cljs.core.async.t19762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19764,meta19763__$1){var self__ = this;
var _19764__$1 = this;return (new cljs.core.async.t19762(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19763__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t19762 = ((function (mults,ensure_mult){
return (function __GT_t19762(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19763){return (new cljs.core.async.t19762(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19763));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t19762(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13576__auto___19876 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13576__auto___19876,mults,ensure_mult,p){
return (function (){var f__13577__auto__ = (function (){var switch__13511__auto__ = ((function (c__13576__auto___19876,mults,ensure_mult,p){
return (function (state_19832){var state_val_19833 = (state_19832[(1)]);if((state_val_19833 === (7)))
{var inst_19828 = (state_19832[(2)]);var state_19832__$1 = state_19832;var statearr_19834_19877 = state_19832__$1;(statearr_19834_19877[(2)] = inst_19828);
(statearr_19834_19877[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (20)))
{var state_19832__$1 = state_19832;var statearr_19835_19878 = state_19832__$1;(statearr_19835_19878[(2)] = null);
(statearr_19835_19878[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (1)))
{var state_19832__$1 = state_19832;var statearr_19836_19879 = state_19832__$1;(statearr_19836_19879[(2)] = null);
(statearr_19836_19879[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (4)))
{var inst_19767 = (state_19832[(7)]);var inst_19767__$1 = (state_19832[(2)]);var inst_19768 = (inst_19767__$1 == null);var state_19832__$1 = (function (){var statearr_19837 = state_19832;(statearr_19837[(7)] = inst_19767__$1);
return statearr_19837;
})();if(cljs.core.truth_(inst_19768))
{var statearr_19838_19880 = state_19832__$1;(statearr_19838_19880[(1)] = (5));
} else
{var statearr_19839_19881 = state_19832__$1;(statearr_19839_19881[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (15)))
{var inst_19809 = (state_19832[(2)]);var state_19832__$1 = state_19832;var statearr_19840_19882 = state_19832__$1;(statearr_19840_19882[(2)] = inst_19809);
(statearr_19840_19882[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (21)))
{var inst_19815 = (state_19832[(8)]);var inst_19823 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19815);var state_19832__$1 = state_19832;var statearr_19841_19883 = state_19832__$1;(statearr_19841_19883[(2)] = inst_19823);
(statearr_19841_19883[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (13)))
{var inst_19791 = (state_19832[(9)]);var inst_19793 = cljs.core.chunked_seq_QMARK_.call(null,inst_19791);var state_19832__$1 = state_19832;if(inst_19793)
{var statearr_19842_19884 = state_19832__$1;(statearr_19842_19884[(1)] = (16));
} else
{var statearr_19843_19885 = state_19832__$1;(statearr_19843_19885[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (22)))
{var inst_19825 = (state_19832[(2)]);var state_19832__$1 = (function (){var statearr_19844 = state_19832;(statearr_19844[(10)] = inst_19825);
return statearr_19844;
})();var statearr_19845_19886 = state_19832__$1;(statearr_19845_19886[(2)] = null);
(statearr_19845_19886[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (6)))
{var inst_19815 = (state_19832[(8)]);var inst_19767 = (state_19832[(7)]);var inst_19815__$1 = topic_fn.call(null,inst_19767);var inst_19816 = cljs.core.deref.call(null,mults);var inst_19817 = cljs.core.get.call(null,inst_19816,inst_19815__$1);var inst_19818 = cljs.core.async.muxch_STAR_.call(null,inst_19817);var state_19832__$1 = (function (){var statearr_19846 = state_19832;(statearr_19846[(8)] = inst_19815__$1);
return statearr_19846;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19832__$1,(19),inst_19818,inst_19767);
} else
{if((state_val_19833 === (17)))
{var inst_19791 = (state_19832[(9)]);var inst_19800 = cljs.core.first.call(null,inst_19791);var inst_19801 = cljs.core.async.muxch_STAR_.call(null,inst_19800);var inst_19802 = cljs.core.async.close_BANG_.call(null,inst_19801);var inst_19803 = cljs.core.next.call(null,inst_19791);var inst_19777 = inst_19803;var inst_19778 = null;var inst_19779 = (0);var inst_19780 = (0);var state_19832__$1 = (function (){var statearr_19847 = state_19832;(statearr_19847[(11)] = inst_19802);
(statearr_19847[(12)] = inst_19778);
(statearr_19847[(13)] = inst_19779);
(statearr_19847[(14)] = inst_19780);
(statearr_19847[(15)] = inst_19777);
return statearr_19847;
})();var statearr_19848_19887 = state_19832__$1;(statearr_19848_19887[(2)] = null);
(statearr_19848_19887[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (3)))
{var inst_19830 = (state_19832[(2)]);var state_19832__$1 = state_19832;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19832__$1,inst_19830);
} else
{if((state_val_19833 === (12)))
{var inst_19811 = (state_19832[(2)]);var state_19832__$1 = state_19832;var statearr_19849_19888 = state_19832__$1;(statearr_19849_19888[(2)] = inst_19811);
(statearr_19849_19888[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (2)))
{var state_19832__$1 = state_19832;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19832__$1,(4),ch);
} else
{if((state_val_19833 === (19)))
{var inst_19820 = (state_19832[(2)]);var state_19832__$1 = state_19832;if(cljs.core.truth_(inst_19820))
{var statearr_19850_19889 = state_19832__$1;(statearr_19850_19889[(1)] = (20));
} else
{var statearr_19851_19890 = state_19832__$1;(statearr_19851_19890[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (11)))
{var inst_19791 = (state_19832[(9)]);var inst_19777 = (state_19832[(15)]);var inst_19791__$1 = cljs.core.seq.call(null,inst_19777);var state_19832__$1 = (function (){var statearr_19852 = state_19832;(statearr_19852[(9)] = inst_19791__$1);
return statearr_19852;
})();if(inst_19791__$1)
{var statearr_19853_19891 = state_19832__$1;(statearr_19853_19891[(1)] = (13));
} else
{var statearr_19854_19892 = state_19832__$1;(statearr_19854_19892[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (9)))
{var inst_19813 = (state_19832[(2)]);var state_19832__$1 = state_19832;var statearr_19855_19893 = state_19832__$1;(statearr_19855_19893[(2)] = inst_19813);
(statearr_19855_19893[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (5)))
{var inst_19774 = cljs.core.deref.call(null,mults);var inst_19775 = cljs.core.vals.call(null,inst_19774);var inst_19776 = cljs.core.seq.call(null,inst_19775);var inst_19777 = inst_19776;var inst_19778 = null;var inst_19779 = (0);var inst_19780 = (0);var state_19832__$1 = (function (){var statearr_19856 = state_19832;(statearr_19856[(12)] = inst_19778);
(statearr_19856[(13)] = inst_19779);
(statearr_19856[(14)] = inst_19780);
(statearr_19856[(15)] = inst_19777);
return statearr_19856;
})();var statearr_19857_19894 = state_19832__$1;(statearr_19857_19894[(2)] = null);
(statearr_19857_19894[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (14)))
{var state_19832__$1 = state_19832;var statearr_19861_19895 = state_19832__$1;(statearr_19861_19895[(2)] = null);
(statearr_19861_19895[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (16)))
{var inst_19791 = (state_19832[(9)]);var inst_19795 = cljs.core.chunk_first.call(null,inst_19791);var inst_19796 = cljs.core.chunk_rest.call(null,inst_19791);var inst_19797 = cljs.core.count.call(null,inst_19795);var inst_19777 = inst_19796;var inst_19778 = inst_19795;var inst_19779 = inst_19797;var inst_19780 = (0);var state_19832__$1 = (function (){var statearr_19862 = state_19832;(statearr_19862[(12)] = inst_19778);
(statearr_19862[(13)] = inst_19779);
(statearr_19862[(14)] = inst_19780);
(statearr_19862[(15)] = inst_19777);
return statearr_19862;
})();var statearr_19863_19896 = state_19832__$1;(statearr_19863_19896[(2)] = null);
(statearr_19863_19896[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (10)))
{var inst_19778 = (state_19832[(12)]);var inst_19779 = (state_19832[(13)]);var inst_19780 = (state_19832[(14)]);var inst_19777 = (state_19832[(15)]);var inst_19785 = cljs.core._nth.call(null,inst_19778,inst_19780);var inst_19786 = cljs.core.async.muxch_STAR_.call(null,inst_19785);var inst_19787 = cljs.core.async.close_BANG_.call(null,inst_19786);var inst_19788 = (inst_19780 + (1));var tmp19858 = inst_19778;var tmp19859 = inst_19779;var tmp19860 = inst_19777;var inst_19777__$1 = tmp19860;var inst_19778__$1 = tmp19858;var inst_19779__$1 = tmp19859;var inst_19780__$1 = inst_19788;var state_19832__$1 = (function (){var statearr_19864 = state_19832;(statearr_19864[(12)] = inst_19778__$1);
(statearr_19864[(16)] = inst_19787);
(statearr_19864[(13)] = inst_19779__$1);
(statearr_19864[(14)] = inst_19780__$1);
(statearr_19864[(15)] = inst_19777__$1);
return statearr_19864;
})();var statearr_19865_19897 = state_19832__$1;(statearr_19865_19897[(2)] = null);
(statearr_19865_19897[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (18)))
{var inst_19806 = (state_19832[(2)]);var state_19832__$1 = state_19832;var statearr_19866_19898 = state_19832__$1;(statearr_19866_19898[(2)] = inst_19806);
(statearr_19866_19898[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (8)))
{var inst_19779 = (state_19832[(13)]);var inst_19780 = (state_19832[(14)]);var inst_19782 = (inst_19780 < inst_19779);var inst_19783 = inst_19782;var state_19832__$1 = state_19832;if(cljs.core.truth_(inst_19783))
{var statearr_19867_19899 = state_19832__$1;(statearr_19867_19899[(1)] = (10));
} else
{var statearr_19868_19900 = state_19832__$1;(statearr_19868_19900[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13576__auto___19876,mults,ensure_mult,p))
;return ((function (switch__13511__auto__,c__13576__auto___19876,mults,ensure_mult,p){
return (function() {
var state_machine__13512__auto__ = null;
var state_machine__13512__auto____0 = (function (){var statearr_19872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19872[(0)] = state_machine__13512__auto__);
(statearr_19872[(1)] = (1));
return statearr_19872;
});
var state_machine__13512__auto____1 = (function (state_19832){while(true){
var ret_value__13513__auto__ = (function (){try{while(true){
var result__13514__auto__ = switch__13511__auto__.call(null,state_19832);if(cljs.core.keyword_identical_QMARK_.call(null,result__13514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13514__auto__;
}
break;
}
}catch (e19873){if((e19873 instanceof Object))
{var ex__13515__auto__ = e19873;var statearr_19874_19901 = state_19832;(statearr_19874_19901[(5)] = ex__13515__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19832);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19873;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19902 = state_19832;
state_19832 = G__19902;
continue;
}
} else
{return ret_value__13513__auto__;
}
break;
}
});
state_machine__13512__auto__ = function(state_19832){
switch(arguments.length){
case 0:
return state_machine__13512__auto____0.call(this);
case 1:
return state_machine__13512__auto____1.call(this,state_19832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13512__auto____0;
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13512__auto____1;
return state_machine__13512__auto__;
})()
;})(switch__13511__auto__,c__13576__auto___19876,mults,ensure_mult,p))
})();var state__13578__auto__ = (function (){var statearr_19875 = f__13577__auto__.call(null);(statearr_19875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13576__auto___19876);
return statearr_19875;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13578__auto__);
});})(c__13576__auto___19876,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__13576__auto___20039 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13576__auto___20039,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__13577__auto__ = (function (){var switch__13511__auto__ = ((function (c__13576__auto___20039,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20009){var state_val_20010 = (state_20009[(1)]);if((state_val_20010 === (7)))
{var state_20009__$1 = state_20009;var statearr_20011_20040 = state_20009__$1;(statearr_20011_20040[(2)] = null);
(statearr_20011_20040[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20010 === (1)))
{var state_20009__$1 = state_20009;var statearr_20012_20041 = state_20009__$1;(statearr_20012_20041[(2)] = null);
(statearr_20012_20041[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20010 === (4)))
{var inst_19973 = (state_20009[(7)]);var inst_19975 = (inst_19973 < cnt);var state_20009__$1 = state_20009;if(cljs.core.truth_(inst_19975))
{var statearr_20013_20042 = state_20009__$1;(statearr_20013_20042[(1)] = (6));
} else
{var statearr_20014_20043 = state_20009__$1;(statearr_20014_20043[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20010 === (15)))
{var inst_20005 = (state_20009[(2)]);var state_20009__$1 = state_20009;var statearr_20015_20044 = state_20009__$1;(statearr_20015_20044[(2)] = inst_20005);
(statearr_20015_20044[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20010 === (13)))
{var inst_19998 = cljs.core.async.close_BANG_.call(null,out);var state_20009__$1 = state_20009;var statearr_20016_20045 = state_20009__$1;(statearr_20016_20045[(2)] = inst_19998);
(statearr_20016_20045[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20010 === (6)))
{var state_20009__$1 = state_20009;var statearr_20017_20046 = state_20009__$1;(statearr_20017_20046[(2)] = null);
(statearr_20017_20046[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20010 === (3)))
{var inst_20007 = (state_20009[(2)]);var state_20009__$1 = state_20009;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20009__$1,inst_20007);
} else
{if((state_val_20010 === (12)))
{var inst_19995 = (state_20009[(8)]);var inst_19995__$1 = (state_20009[(2)]);var inst_19996 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19995__$1);var state_20009__$1 = (function (){var statearr_20018 = state_20009;(statearr_20018[(8)] = inst_19995__$1);
return statearr_20018;
})();if(cljs.core.truth_(inst_19996))
{var statearr_20019_20047 = state_20009__$1;(statearr_20019_20047[(1)] = (13));
} else
{var statearr_20020_20048 = state_20009__$1;(statearr_20020_20048[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20010 === (2)))
{var inst_19972 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_19973 = (0);var state_20009__$1 = (function (){var statearr_20021 = state_20009;(statearr_20021[(9)] = inst_19972);
(statearr_20021[(7)] = inst_19973);
return statearr_20021;
})();var statearr_20022_20049 = state_20009__$1;(statearr_20022_20049[(2)] = null);
(statearr_20022_20049[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20010 === (11)))
{var inst_19973 = (state_20009[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20009,(10),Object,null,(9));var inst_19982 = chs__$1.call(null,inst_19973);var inst_19983 = done.call(null,inst_19973);var inst_19984 = cljs.core.async.take_BANG_.call(null,inst_19982,inst_19983);var state_20009__$1 = state_20009;var statearr_20023_20050 = state_20009__$1;(statearr_20023_20050[(2)] = inst_19984);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20009__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20010 === (9)))
{var inst_19973 = (state_20009[(7)]);var inst_19986 = (state_20009[(2)]);var inst_19987 = (inst_19973 + (1));var inst_19973__$1 = inst_19987;var state_20009__$1 = (function (){var statearr_20024 = state_20009;(statearr_20024[(7)] = inst_19973__$1);
(statearr_20024[(10)] = inst_19986);
return statearr_20024;
})();var statearr_20025_20051 = state_20009__$1;(statearr_20025_20051[(2)] = null);
(statearr_20025_20051[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20010 === (5)))
{var inst_19993 = (state_20009[(2)]);var state_20009__$1 = (function (){var statearr_20026 = state_20009;(statearr_20026[(11)] = inst_19993);
return statearr_20026;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20009__$1,(12),dchan);
} else
{if((state_val_20010 === (14)))
{var inst_19995 = (state_20009[(8)]);var inst_20000 = cljs.core.apply.call(null,f,inst_19995);var state_20009__$1 = state_20009;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20009__$1,(16),out,inst_20000);
} else
{if((state_val_20010 === (16)))
{var inst_20002 = (state_20009[(2)]);var state_20009__$1 = (function (){var statearr_20027 = state_20009;(statearr_20027[(12)] = inst_20002);
return statearr_20027;
})();var statearr_20028_20052 = state_20009__$1;(statearr_20028_20052[(2)] = null);
(statearr_20028_20052[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20010 === (10)))
{var inst_19977 = (state_20009[(2)]);var inst_19978 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_20009__$1 = (function (){var statearr_20029 = state_20009;(statearr_20029[(13)] = inst_19977);
return statearr_20029;
})();var statearr_20030_20053 = state_20009__$1;(statearr_20030_20053[(2)] = inst_19978);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20009__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20010 === (8)))
{var inst_19991 = (state_20009[(2)]);var state_20009__$1 = state_20009;var statearr_20031_20054 = state_20009__$1;(statearr_20031_20054[(2)] = inst_19991);
(statearr_20031_20054[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13576__auto___20039,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__13511__auto__,c__13576__auto___20039,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__13512__auto__ = null;
var state_machine__13512__auto____0 = (function (){var statearr_20035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20035[(0)] = state_machine__13512__auto__);
(statearr_20035[(1)] = (1));
return statearr_20035;
});
var state_machine__13512__auto____1 = (function (state_20009){while(true){
var ret_value__13513__auto__ = (function (){try{while(true){
var result__13514__auto__ = switch__13511__auto__.call(null,state_20009);if(cljs.core.keyword_identical_QMARK_.call(null,result__13514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13514__auto__;
}
break;
}
}catch (e20036){if((e20036 instanceof Object))
{var ex__13515__auto__ = e20036;var statearr_20037_20055 = state_20009;(statearr_20037_20055[(5)] = ex__13515__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20009);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20036;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20056 = state_20009;
state_20009 = G__20056;
continue;
}
} else
{return ret_value__13513__auto__;
}
break;
}
});
state_machine__13512__auto__ = function(state_20009){
switch(arguments.length){
case 0:
return state_machine__13512__auto____0.call(this);
case 1:
return state_machine__13512__auto____1.call(this,state_20009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13512__auto____0;
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13512__auto____1;
return state_machine__13512__auto__;
})()
;})(switch__13511__auto__,c__13576__auto___20039,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__13578__auto__ = (function (){var statearr_20038 = f__13577__auto__.call(null);(statearr_20038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13576__auto___20039);
return statearr_20038;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13578__auto__);
});})(c__13576__auto___20039,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13576__auto___20164 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13576__auto___20164,out){
return (function (){var f__13577__auto__ = (function (){var switch__13511__auto__ = ((function (c__13576__auto___20164,out){
return (function (state_20140){var state_val_20141 = (state_20140[(1)]);if((state_val_20141 === (7)))
{var inst_20119 = (state_20140[(7)]);var inst_20120 = (state_20140[(8)]);var inst_20119__$1 = (state_20140[(2)]);var inst_20120__$1 = cljs.core.nth.call(null,inst_20119__$1,(0),null);var inst_20121 = cljs.core.nth.call(null,inst_20119__$1,(1),null);var inst_20122 = (inst_20120__$1 == null);var state_20140__$1 = (function (){var statearr_20142 = state_20140;(statearr_20142[(7)] = inst_20119__$1);
(statearr_20142[(9)] = inst_20121);
(statearr_20142[(8)] = inst_20120__$1);
return statearr_20142;
})();if(cljs.core.truth_(inst_20122))
{var statearr_20143_20165 = state_20140__$1;(statearr_20143_20165[(1)] = (8));
} else
{var statearr_20144_20166 = state_20140__$1;(statearr_20144_20166[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20141 === (1)))
{var inst_20111 = cljs.core.vec.call(null,chs);var inst_20112 = inst_20111;var state_20140__$1 = (function (){var statearr_20145 = state_20140;(statearr_20145[(10)] = inst_20112);
return statearr_20145;
})();var statearr_20146_20167 = state_20140__$1;(statearr_20146_20167[(2)] = null);
(statearr_20146_20167[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20141 === (4)))
{var inst_20112 = (state_20140[(10)]);var state_20140__$1 = state_20140;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_20140__$1,(7),inst_20112);
} else
{if((state_val_20141 === (6)))
{var inst_20136 = (state_20140[(2)]);var state_20140__$1 = state_20140;var statearr_20147_20168 = state_20140__$1;(statearr_20147_20168[(2)] = inst_20136);
(statearr_20147_20168[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20141 === (3)))
{var inst_20138 = (state_20140[(2)]);var state_20140__$1 = state_20140;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20140__$1,inst_20138);
} else
{if((state_val_20141 === (2)))
{var inst_20112 = (state_20140[(10)]);var inst_20114 = cljs.core.count.call(null,inst_20112);var inst_20115 = (inst_20114 > (0));var state_20140__$1 = state_20140;if(cljs.core.truth_(inst_20115))
{var statearr_20149_20169 = state_20140__$1;(statearr_20149_20169[(1)] = (4));
} else
{var statearr_20150_20170 = state_20140__$1;(statearr_20150_20170[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20141 === (11)))
{var inst_20112 = (state_20140[(10)]);var inst_20129 = (state_20140[(2)]);var tmp20148 = inst_20112;var inst_20112__$1 = tmp20148;var state_20140__$1 = (function (){var statearr_20151 = state_20140;(statearr_20151[(10)] = inst_20112__$1);
(statearr_20151[(11)] = inst_20129);
return statearr_20151;
})();var statearr_20152_20171 = state_20140__$1;(statearr_20152_20171[(2)] = null);
(statearr_20152_20171[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20141 === (9)))
{var inst_20120 = (state_20140[(8)]);var state_20140__$1 = state_20140;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20140__$1,(11),out,inst_20120);
} else
{if((state_val_20141 === (5)))
{var inst_20134 = cljs.core.async.close_BANG_.call(null,out);var state_20140__$1 = state_20140;var statearr_20153_20172 = state_20140__$1;(statearr_20153_20172[(2)] = inst_20134);
(statearr_20153_20172[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20141 === (10)))
{var inst_20132 = (state_20140[(2)]);var state_20140__$1 = state_20140;var statearr_20154_20173 = state_20140__$1;(statearr_20154_20173[(2)] = inst_20132);
(statearr_20154_20173[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20141 === (8)))
{var inst_20112 = (state_20140[(10)]);var inst_20119 = (state_20140[(7)]);var inst_20121 = (state_20140[(9)]);var inst_20120 = (state_20140[(8)]);var inst_20124 = (function (){var c = inst_20121;var v = inst_20120;var vec__20117 = inst_20119;var cs = inst_20112;return ((function (c,v,vec__20117,cs,inst_20112,inst_20119,inst_20121,inst_20120,state_val_20141,c__13576__auto___20164,out){
return (function (p1__20057_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__20057_SHARP_);
});
;})(c,v,vec__20117,cs,inst_20112,inst_20119,inst_20121,inst_20120,state_val_20141,c__13576__auto___20164,out))
})();var inst_20125 = cljs.core.filterv.call(null,inst_20124,inst_20112);var inst_20112__$1 = inst_20125;var state_20140__$1 = (function (){var statearr_20155 = state_20140;(statearr_20155[(10)] = inst_20112__$1);
return statearr_20155;
})();var statearr_20156_20174 = state_20140__$1;(statearr_20156_20174[(2)] = null);
(statearr_20156_20174[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13576__auto___20164,out))
;return ((function (switch__13511__auto__,c__13576__auto___20164,out){
return (function() {
var state_machine__13512__auto__ = null;
var state_machine__13512__auto____0 = (function (){var statearr_20160 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20160[(0)] = state_machine__13512__auto__);
(statearr_20160[(1)] = (1));
return statearr_20160;
});
var state_machine__13512__auto____1 = (function (state_20140){while(true){
var ret_value__13513__auto__ = (function (){try{while(true){
var result__13514__auto__ = switch__13511__auto__.call(null,state_20140);if(cljs.core.keyword_identical_QMARK_.call(null,result__13514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13514__auto__;
}
break;
}
}catch (e20161){if((e20161 instanceof Object))
{var ex__13515__auto__ = e20161;var statearr_20162_20175 = state_20140;(statearr_20162_20175[(5)] = ex__13515__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20140);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20161;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20176 = state_20140;
state_20140 = G__20176;
continue;
}
} else
{return ret_value__13513__auto__;
}
break;
}
});
state_machine__13512__auto__ = function(state_20140){
switch(arguments.length){
case 0:
return state_machine__13512__auto____0.call(this);
case 1:
return state_machine__13512__auto____1.call(this,state_20140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13512__auto____0;
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13512__auto____1;
return state_machine__13512__auto__;
})()
;})(switch__13511__auto__,c__13576__auto___20164,out))
})();var state__13578__auto__ = (function (){var statearr_20163 = f__13577__auto__.call(null);(statearr_20163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13576__auto___20164);
return statearr_20163;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13578__auto__);
});})(c__13576__auto___20164,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13576__auto___20269 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13576__auto___20269,out){
return (function (){var f__13577__auto__ = (function (){var switch__13511__auto__ = ((function (c__13576__auto___20269,out){
return (function (state_20246){var state_val_20247 = (state_20246[(1)]);if((state_val_20247 === (7)))
{var inst_20228 = (state_20246[(7)]);var inst_20228__$1 = (state_20246[(2)]);var inst_20229 = (inst_20228__$1 == null);var inst_20230 = cljs.core.not.call(null,inst_20229);var state_20246__$1 = (function (){var statearr_20248 = state_20246;(statearr_20248[(7)] = inst_20228__$1);
return statearr_20248;
})();if(inst_20230)
{var statearr_20249_20270 = state_20246__$1;(statearr_20249_20270[(1)] = (8));
} else
{var statearr_20250_20271 = state_20246__$1;(statearr_20250_20271[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (1)))
{var inst_20223 = (0);var state_20246__$1 = (function (){var statearr_20251 = state_20246;(statearr_20251[(8)] = inst_20223);
return statearr_20251;
})();var statearr_20252_20272 = state_20246__$1;(statearr_20252_20272[(2)] = null);
(statearr_20252_20272[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (4)))
{var state_20246__$1 = state_20246;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20246__$1,(7),ch);
} else
{if((state_val_20247 === (6)))
{var inst_20241 = (state_20246[(2)]);var state_20246__$1 = state_20246;var statearr_20253_20273 = state_20246__$1;(statearr_20253_20273[(2)] = inst_20241);
(statearr_20253_20273[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (3)))
{var inst_20243 = (state_20246[(2)]);var inst_20244 = cljs.core.async.close_BANG_.call(null,out);var state_20246__$1 = (function (){var statearr_20254 = state_20246;(statearr_20254[(9)] = inst_20243);
return statearr_20254;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20246__$1,inst_20244);
} else
{if((state_val_20247 === (2)))
{var inst_20223 = (state_20246[(8)]);var inst_20225 = (inst_20223 < n);var state_20246__$1 = state_20246;if(cljs.core.truth_(inst_20225))
{var statearr_20255_20274 = state_20246__$1;(statearr_20255_20274[(1)] = (4));
} else
{var statearr_20256_20275 = state_20246__$1;(statearr_20256_20275[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (11)))
{var inst_20223 = (state_20246[(8)]);var inst_20233 = (state_20246[(2)]);var inst_20234 = (inst_20223 + (1));var inst_20223__$1 = inst_20234;var state_20246__$1 = (function (){var statearr_20257 = state_20246;(statearr_20257[(10)] = inst_20233);
(statearr_20257[(8)] = inst_20223__$1);
return statearr_20257;
})();var statearr_20258_20276 = state_20246__$1;(statearr_20258_20276[(2)] = null);
(statearr_20258_20276[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (9)))
{var state_20246__$1 = state_20246;var statearr_20259_20277 = state_20246__$1;(statearr_20259_20277[(2)] = null);
(statearr_20259_20277[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (5)))
{var state_20246__$1 = state_20246;var statearr_20260_20278 = state_20246__$1;(statearr_20260_20278[(2)] = null);
(statearr_20260_20278[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (10)))
{var inst_20238 = (state_20246[(2)]);var state_20246__$1 = state_20246;var statearr_20261_20279 = state_20246__$1;(statearr_20261_20279[(2)] = inst_20238);
(statearr_20261_20279[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20247 === (8)))
{var inst_20228 = (state_20246[(7)]);var state_20246__$1 = state_20246;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20246__$1,(11),out,inst_20228);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13576__auto___20269,out))
;return ((function (switch__13511__auto__,c__13576__auto___20269,out){
return (function() {
var state_machine__13512__auto__ = null;
var state_machine__13512__auto____0 = (function (){var statearr_20265 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20265[(0)] = state_machine__13512__auto__);
(statearr_20265[(1)] = (1));
return statearr_20265;
});
var state_machine__13512__auto____1 = (function (state_20246){while(true){
var ret_value__13513__auto__ = (function (){try{while(true){
var result__13514__auto__ = switch__13511__auto__.call(null,state_20246);if(cljs.core.keyword_identical_QMARK_.call(null,result__13514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13514__auto__;
}
break;
}
}catch (e20266){if((e20266 instanceof Object))
{var ex__13515__auto__ = e20266;var statearr_20267_20280 = state_20246;(statearr_20267_20280[(5)] = ex__13515__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20246);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20266;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20281 = state_20246;
state_20246 = G__20281;
continue;
}
} else
{return ret_value__13513__auto__;
}
break;
}
});
state_machine__13512__auto__ = function(state_20246){
switch(arguments.length){
case 0:
return state_machine__13512__auto____0.call(this);
case 1:
return state_machine__13512__auto____1.call(this,state_20246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13512__auto____0;
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13512__auto____1;
return state_machine__13512__auto__;
})()
;})(switch__13511__auto__,c__13576__auto___20269,out))
})();var state__13578__auto__ = (function (){var statearr_20268 = f__13577__auto__.call(null);(statearr_20268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13576__auto___20269);
return statearr_20268;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13578__auto__);
});})(c__13576__auto___20269,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13576__auto___20378 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13576__auto___20378,out){
return (function (){var f__13577__auto__ = (function (){var switch__13511__auto__ = ((function (c__13576__auto___20378,out){
return (function (state_20353){var state_val_20354 = (state_20353[(1)]);if((state_val_20354 === (7)))
{var inst_20348 = (state_20353[(2)]);var state_20353__$1 = state_20353;var statearr_20355_20379 = state_20353__$1;(statearr_20355_20379[(2)] = inst_20348);
(statearr_20355_20379[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20354 === (1)))
{var inst_20330 = null;var state_20353__$1 = (function (){var statearr_20356 = state_20353;(statearr_20356[(7)] = inst_20330);
return statearr_20356;
})();var statearr_20357_20380 = state_20353__$1;(statearr_20357_20380[(2)] = null);
(statearr_20357_20380[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20354 === (4)))
{var inst_20333 = (state_20353[(8)]);var inst_20333__$1 = (state_20353[(2)]);var inst_20334 = (inst_20333__$1 == null);var inst_20335 = cljs.core.not.call(null,inst_20334);var state_20353__$1 = (function (){var statearr_20358 = state_20353;(statearr_20358[(8)] = inst_20333__$1);
return statearr_20358;
})();if(inst_20335)
{var statearr_20359_20381 = state_20353__$1;(statearr_20359_20381[(1)] = (5));
} else
{var statearr_20360_20382 = state_20353__$1;(statearr_20360_20382[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20354 === (6)))
{var state_20353__$1 = state_20353;var statearr_20361_20383 = state_20353__$1;(statearr_20361_20383[(2)] = null);
(statearr_20361_20383[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20354 === (3)))
{var inst_20350 = (state_20353[(2)]);var inst_20351 = cljs.core.async.close_BANG_.call(null,out);var state_20353__$1 = (function (){var statearr_20362 = state_20353;(statearr_20362[(9)] = inst_20350);
return statearr_20362;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20353__$1,inst_20351);
} else
{if((state_val_20354 === (2)))
{var state_20353__$1 = state_20353;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20353__$1,(4),ch);
} else
{if((state_val_20354 === (11)))
{var inst_20333 = (state_20353[(8)]);var inst_20342 = (state_20353[(2)]);var inst_20330 = inst_20333;var state_20353__$1 = (function (){var statearr_20363 = state_20353;(statearr_20363[(10)] = inst_20342);
(statearr_20363[(7)] = inst_20330);
return statearr_20363;
})();var statearr_20364_20384 = state_20353__$1;(statearr_20364_20384[(2)] = null);
(statearr_20364_20384[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20354 === (9)))
{var inst_20333 = (state_20353[(8)]);var state_20353__$1 = state_20353;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20353__$1,(11),out,inst_20333);
} else
{if((state_val_20354 === (5)))
{var inst_20330 = (state_20353[(7)]);var inst_20333 = (state_20353[(8)]);var inst_20337 = cljs.core._EQ_.call(null,inst_20333,inst_20330);var state_20353__$1 = state_20353;if(inst_20337)
{var statearr_20366_20385 = state_20353__$1;(statearr_20366_20385[(1)] = (8));
} else
{var statearr_20367_20386 = state_20353__$1;(statearr_20367_20386[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20354 === (10)))
{var inst_20345 = (state_20353[(2)]);var state_20353__$1 = state_20353;var statearr_20368_20387 = state_20353__$1;(statearr_20368_20387[(2)] = inst_20345);
(statearr_20368_20387[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20354 === (8)))
{var inst_20330 = (state_20353[(7)]);var tmp20365 = inst_20330;var inst_20330__$1 = tmp20365;var state_20353__$1 = (function (){var statearr_20369 = state_20353;(statearr_20369[(7)] = inst_20330__$1);
return statearr_20369;
})();var statearr_20370_20388 = state_20353__$1;(statearr_20370_20388[(2)] = null);
(statearr_20370_20388[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13576__auto___20378,out))
;return ((function (switch__13511__auto__,c__13576__auto___20378,out){
return (function() {
var state_machine__13512__auto__ = null;
var state_machine__13512__auto____0 = (function (){var statearr_20374 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20374[(0)] = state_machine__13512__auto__);
(statearr_20374[(1)] = (1));
return statearr_20374;
});
var state_machine__13512__auto____1 = (function (state_20353){while(true){
var ret_value__13513__auto__ = (function (){try{while(true){
var result__13514__auto__ = switch__13511__auto__.call(null,state_20353);if(cljs.core.keyword_identical_QMARK_.call(null,result__13514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13514__auto__;
}
break;
}
}catch (e20375){if((e20375 instanceof Object))
{var ex__13515__auto__ = e20375;var statearr_20376_20389 = state_20353;(statearr_20376_20389[(5)] = ex__13515__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20353);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20375;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20390 = state_20353;
state_20353 = G__20390;
continue;
}
} else
{return ret_value__13513__auto__;
}
break;
}
});
state_machine__13512__auto__ = function(state_20353){
switch(arguments.length){
case 0:
return state_machine__13512__auto____0.call(this);
case 1:
return state_machine__13512__auto____1.call(this,state_20353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13512__auto____0;
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13512__auto____1;
return state_machine__13512__auto__;
})()
;})(switch__13511__auto__,c__13576__auto___20378,out))
})();var state__13578__auto__ = (function (){var statearr_20377 = f__13577__auto__.call(null);(statearr_20377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13576__auto___20378);
return statearr_20377;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13578__auto__);
});})(c__13576__auto___20378,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13576__auto___20525 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13576__auto___20525,out){
return (function (){var f__13577__auto__ = (function (){var switch__13511__auto__ = ((function (c__13576__auto___20525,out){
return (function (state_20495){var state_val_20496 = (state_20495[(1)]);if((state_val_20496 === (7)))
{var inst_20491 = (state_20495[(2)]);var state_20495__$1 = state_20495;var statearr_20497_20526 = state_20495__$1;(statearr_20497_20526[(2)] = inst_20491);
(statearr_20497_20526[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20496 === (1)))
{var inst_20458 = (new Array(n));var inst_20459 = inst_20458;var inst_20460 = (0);var state_20495__$1 = (function (){var statearr_20498 = state_20495;(statearr_20498[(7)] = inst_20459);
(statearr_20498[(8)] = inst_20460);
return statearr_20498;
})();var statearr_20499_20527 = state_20495__$1;(statearr_20499_20527[(2)] = null);
(statearr_20499_20527[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20496 === (4)))
{var inst_20463 = (state_20495[(9)]);var inst_20463__$1 = (state_20495[(2)]);var inst_20464 = (inst_20463__$1 == null);var inst_20465 = cljs.core.not.call(null,inst_20464);var state_20495__$1 = (function (){var statearr_20500 = state_20495;(statearr_20500[(9)] = inst_20463__$1);
return statearr_20500;
})();if(inst_20465)
{var statearr_20501_20528 = state_20495__$1;(statearr_20501_20528[(1)] = (5));
} else
{var statearr_20502_20529 = state_20495__$1;(statearr_20502_20529[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20496 === (15)))
{var inst_20485 = (state_20495[(2)]);var state_20495__$1 = state_20495;var statearr_20503_20530 = state_20495__$1;(statearr_20503_20530[(2)] = inst_20485);
(statearr_20503_20530[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20496 === (13)))
{var state_20495__$1 = state_20495;var statearr_20504_20531 = state_20495__$1;(statearr_20504_20531[(2)] = null);
(statearr_20504_20531[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20496 === (6)))
{var inst_20460 = (state_20495[(8)]);var inst_20481 = (inst_20460 > (0));var state_20495__$1 = state_20495;if(cljs.core.truth_(inst_20481))
{var statearr_20505_20532 = state_20495__$1;(statearr_20505_20532[(1)] = (12));
} else
{var statearr_20506_20533 = state_20495__$1;(statearr_20506_20533[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20496 === (3)))
{var inst_20493 = (state_20495[(2)]);var state_20495__$1 = state_20495;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20495__$1,inst_20493);
} else
{if((state_val_20496 === (12)))
{var inst_20459 = (state_20495[(7)]);var inst_20483 = cljs.core.vec.call(null,inst_20459);var state_20495__$1 = state_20495;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20495__$1,(15),out,inst_20483);
} else
{if((state_val_20496 === (2)))
{var state_20495__$1 = state_20495;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20495__$1,(4),ch);
} else
{if((state_val_20496 === (11)))
{var inst_20475 = (state_20495[(2)]);var inst_20476 = (new Array(n));var inst_20459 = inst_20476;var inst_20460 = (0);var state_20495__$1 = (function (){var statearr_20507 = state_20495;(statearr_20507[(7)] = inst_20459);
(statearr_20507[(8)] = inst_20460);
(statearr_20507[(10)] = inst_20475);
return statearr_20507;
})();var statearr_20508_20534 = state_20495__$1;(statearr_20508_20534[(2)] = null);
(statearr_20508_20534[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20496 === (9)))
{var inst_20459 = (state_20495[(7)]);var inst_20473 = cljs.core.vec.call(null,inst_20459);var state_20495__$1 = state_20495;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20495__$1,(11),out,inst_20473);
} else
{if((state_val_20496 === (5)))
{var inst_20468 = (state_20495[(11)]);var inst_20459 = (state_20495[(7)]);var inst_20463 = (state_20495[(9)]);var inst_20460 = (state_20495[(8)]);var inst_20467 = (inst_20459[inst_20460] = inst_20463);var inst_20468__$1 = (inst_20460 + (1));var inst_20469 = (inst_20468__$1 < n);var state_20495__$1 = (function (){var statearr_20509 = state_20495;(statearr_20509[(11)] = inst_20468__$1);
(statearr_20509[(12)] = inst_20467);
return statearr_20509;
})();if(cljs.core.truth_(inst_20469))
{var statearr_20510_20535 = state_20495__$1;(statearr_20510_20535[(1)] = (8));
} else
{var statearr_20511_20536 = state_20495__$1;(statearr_20511_20536[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20496 === (14)))
{var inst_20488 = (state_20495[(2)]);var inst_20489 = cljs.core.async.close_BANG_.call(null,out);var state_20495__$1 = (function (){var statearr_20513 = state_20495;(statearr_20513[(13)] = inst_20488);
return statearr_20513;
})();var statearr_20514_20537 = state_20495__$1;(statearr_20514_20537[(2)] = inst_20489);
(statearr_20514_20537[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20496 === (10)))
{var inst_20479 = (state_20495[(2)]);var state_20495__$1 = state_20495;var statearr_20515_20538 = state_20495__$1;(statearr_20515_20538[(2)] = inst_20479);
(statearr_20515_20538[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20496 === (8)))
{var inst_20468 = (state_20495[(11)]);var inst_20459 = (state_20495[(7)]);var tmp20512 = inst_20459;var inst_20459__$1 = tmp20512;var inst_20460 = inst_20468;var state_20495__$1 = (function (){var statearr_20516 = state_20495;(statearr_20516[(7)] = inst_20459__$1);
(statearr_20516[(8)] = inst_20460);
return statearr_20516;
})();var statearr_20517_20539 = state_20495__$1;(statearr_20517_20539[(2)] = null);
(statearr_20517_20539[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13576__auto___20525,out))
;return ((function (switch__13511__auto__,c__13576__auto___20525,out){
return (function() {
var state_machine__13512__auto__ = null;
var state_machine__13512__auto____0 = (function (){var statearr_20521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20521[(0)] = state_machine__13512__auto__);
(statearr_20521[(1)] = (1));
return statearr_20521;
});
var state_machine__13512__auto____1 = (function (state_20495){while(true){
var ret_value__13513__auto__ = (function (){try{while(true){
var result__13514__auto__ = switch__13511__auto__.call(null,state_20495);if(cljs.core.keyword_identical_QMARK_.call(null,result__13514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13514__auto__;
}
break;
}
}catch (e20522){if((e20522 instanceof Object))
{var ex__13515__auto__ = e20522;var statearr_20523_20540 = state_20495;(statearr_20523_20540[(5)] = ex__13515__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20495);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20522;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20541 = state_20495;
state_20495 = G__20541;
continue;
}
} else
{return ret_value__13513__auto__;
}
break;
}
});
state_machine__13512__auto__ = function(state_20495){
switch(arguments.length){
case 0:
return state_machine__13512__auto____0.call(this);
case 1:
return state_machine__13512__auto____1.call(this,state_20495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13512__auto____0;
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13512__auto____1;
return state_machine__13512__auto__;
})()
;})(switch__13511__auto__,c__13576__auto___20525,out))
})();var state__13578__auto__ = (function (){var statearr_20524 = f__13577__auto__.call(null);(statearr_20524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13576__auto___20525);
return statearr_20524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13578__auto__);
});})(c__13576__auto___20525,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13576__auto___20684 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13576__auto___20684,out){
return (function (){var f__13577__auto__ = (function (){var switch__13511__auto__ = ((function (c__13576__auto___20684,out){
return (function (state_20654){var state_val_20655 = (state_20654[(1)]);if((state_val_20655 === (7)))
{var inst_20650 = (state_20654[(2)]);var state_20654__$1 = state_20654;var statearr_20656_20685 = state_20654__$1;(statearr_20656_20685[(2)] = inst_20650);
(statearr_20656_20685[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (1)))
{var inst_20613 = [];var inst_20614 = inst_20613;var inst_20615 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_20654__$1 = (function (){var statearr_20657 = state_20654;(statearr_20657[(7)] = inst_20614);
(statearr_20657[(8)] = inst_20615);
return statearr_20657;
})();var statearr_20658_20686 = state_20654__$1;(statearr_20658_20686[(2)] = null);
(statearr_20658_20686[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (4)))
{var inst_20618 = (state_20654[(9)]);var inst_20618__$1 = (state_20654[(2)]);var inst_20619 = (inst_20618__$1 == null);var inst_20620 = cljs.core.not.call(null,inst_20619);var state_20654__$1 = (function (){var statearr_20659 = state_20654;(statearr_20659[(9)] = inst_20618__$1);
return statearr_20659;
})();if(inst_20620)
{var statearr_20660_20687 = state_20654__$1;(statearr_20660_20687[(1)] = (5));
} else
{var statearr_20661_20688 = state_20654__$1;(statearr_20661_20688[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (15)))
{var inst_20644 = (state_20654[(2)]);var state_20654__$1 = state_20654;var statearr_20662_20689 = state_20654__$1;(statearr_20662_20689[(2)] = inst_20644);
(statearr_20662_20689[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (13)))
{var state_20654__$1 = state_20654;var statearr_20663_20690 = state_20654__$1;(statearr_20663_20690[(2)] = null);
(statearr_20663_20690[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (6)))
{var inst_20614 = (state_20654[(7)]);var inst_20639 = inst_20614.length;var inst_20640 = (inst_20639 > (0));var state_20654__$1 = state_20654;if(cljs.core.truth_(inst_20640))
{var statearr_20664_20691 = state_20654__$1;(statearr_20664_20691[(1)] = (12));
} else
{var statearr_20665_20692 = state_20654__$1;(statearr_20665_20692[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (3)))
{var inst_20652 = (state_20654[(2)]);var state_20654__$1 = state_20654;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20654__$1,inst_20652);
} else
{if((state_val_20655 === (12)))
{var inst_20614 = (state_20654[(7)]);var inst_20642 = cljs.core.vec.call(null,inst_20614);var state_20654__$1 = state_20654;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20654__$1,(15),out,inst_20642);
} else
{if((state_val_20655 === (2)))
{var state_20654__$1 = state_20654;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20654__$1,(4),ch);
} else
{if((state_val_20655 === (11)))
{var inst_20622 = (state_20654[(10)]);var inst_20618 = (state_20654[(9)]);var inst_20632 = (state_20654[(2)]);var inst_20633 = [];var inst_20634 = inst_20633.push(inst_20618);var inst_20614 = inst_20633;var inst_20615 = inst_20622;var state_20654__$1 = (function (){var statearr_20666 = state_20654;(statearr_20666[(11)] = inst_20632);
(statearr_20666[(12)] = inst_20634);
(statearr_20666[(7)] = inst_20614);
(statearr_20666[(8)] = inst_20615);
return statearr_20666;
})();var statearr_20667_20693 = state_20654__$1;(statearr_20667_20693[(2)] = null);
(statearr_20667_20693[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (9)))
{var inst_20614 = (state_20654[(7)]);var inst_20630 = cljs.core.vec.call(null,inst_20614);var state_20654__$1 = state_20654;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20654__$1,(11),out,inst_20630);
} else
{if((state_val_20655 === (5)))
{var inst_20615 = (state_20654[(8)]);var inst_20622 = (state_20654[(10)]);var inst_20618 = (state_20654[(9)]);var inst_20622__$1 = f.call(null,inst_20618);var inst_20623 = cljs.core._EQ_.call(null,inst_20622__$1,inst_20615);var inst_20624 = cljs.core.keyword_identical_QMARK_.call(null,inst_20615,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_20625 = (inst_20623) || (inst_20624);var state_20654__$1 = (function (){var statearr_20668 = state_20654;(statearr_20668[(10)] = inst_20622__$1);
return statearr_20668;
})();if(cljs.core.truth_(inst_20625))
{var statearr_20669_20694 = state_20654__$1;(statearr_20669_20694[(1)] = (8));
} else
{var statearr_20670_20695 = state_20654__$1;(statearr_20670_20695[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (14)))
{var inst_20647 = (state_20654[(2)]);var inst_20648 = cljs.core.async.close_BANG_.call(null,out);var state_20654__$1 = (function (){var statearr_20672 = state_20654;(statearr_20672[(13)] = inst_20647);
return statearr_20672;
})();var statearr_20673_20696 = state_20654__$1;(statearr_20673_20696[(2)] = inst_20648);
(statearr_20673_20696[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (10)))
{var inst_20637 = (state_20654[(2)]);var state_20654__$1 = state_20654;var statearr_20674_20697 = state_20654__$1;(statearr_20674_20697[(2)] = inst_20637);
(statearr_20674_20697[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20655 === (8)))
{var inst_20614 = (state_20654[(7)]);var inst_20622 = (state_20654[(10)]);var inst_20618 = (state_20654[(9)]);var inst_20627 = inst_20614.push(inst_20618);var tmp20671 = inst_20614;var inst_20614__$1 = tmp20671;var inst_20615 = inst_20622;var state_20654__$1 = (function (){var statearr_20675 = state_20654;(statearr_20675[(14)] = inst_20627);
(statearr_20675[(7)] = inst_20614__$1);
(statearr_20675[(8)] = inst_20615);
return statearr_20675;
})();var statearr_20676_20698 = state_20654__$1;(statearr_20676_20698[(2)] = null);
(statearr_20676_20698[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13576__auto___20684,out))
;return ((function (switch__13511__auto__,c__13576__auto___20684,out){
return (function() {
var state_machine__13512__auto__ = null;
var state_machine__13512__auto____0 = (function (){var statearr_20680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20680[(0)] = state_machine__13512__auto__);
(statearr_20680[(1)] = (1));
return statearr_20680;
});
var state_machine__13512__auto____1 = (function (state_20654){while(true){
var ret_value__13513__auto__ = (function (){try{while(true){
var result__13514__auto__ = switch__13511__auto__.call(null,state_20654);if(cljs.core.keyword_identical_QMARK_.call(null,result__13514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13514__auto__;
}
break;
}
}catch (e20681){if((e20681 instanceof Object))
{var ex__13515__auto__ = e20681;var statearr_20682_20699 = state_20654;(statearr_20682_20699[(5)] = ex__13515__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20654);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20681;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20700 = state_20654;
state_20654 = G__20700;
continue;
}
} else
{return ret_value__13513__auto__;
}
break;
}
});
state_machine__13512__auto__ = function(state_20654){
switch(arguments.length){
case 0:
return state_machine__13512__auto____0.call(this);
case 1:
return state_machine__13512__auto____1.call(this,state_20654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13512__auto____0;
state_machine__13512__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13512__auto____1;
return state_machine__13512__auto__;
})()
;})(switch__13511__auto__,c__13576__auto___20684,out))
})();var state__13578__auto__ = (function (){var statearr_20683 = f__13577__auto__.call(null);(statearr_20683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13576__auto___20684);
return statearr_20683;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13578__auto__);
});})(c__13576__auto___20684,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map