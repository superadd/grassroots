// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13892 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13892 = (function (f,fn_handler,meta13893){
this.f = f;
this.fn_handler = fn_handler;
this.meta13893 = meta13893;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13892.cljs$lang$type = true;
cljs.core.async.t13892.cljs$lang$ctorStr = "cljs.core.async/t13892";
cljs.core.async.t13892.cljs$lang$ctorPrWriter = (function (this__8368__auto__,writer__8369__auto__,opt__8370__auto__){return cljs.core._write.call(null,writer__8369__auto__,"cljs.core.async/t13892");
});
cljs.core.async.t13892.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13892.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13892.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13894){var self__ = this;
var _13894__$1 = this;return self__.meta13893;
});
cljs.core.async.t13892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13894,meta13893__$1){var self__ = this;
var _13894__$1 = this;return (new cljs.core.async.t13892(self__.f,self__.fn_handler,meta13893__$1));
});
cljs.core.async.__GT_t13892 = (function __GT_t13892(f__$1,fn_handler__$1,meta13893){return (new cljs.core.async.t13892(f__$1,fn_handler__$1,meta13893));
});
}
return (new cljs.core.async.t13892(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13896 = buff;if(G__13896)
{var bit__8451__auto__ = null;if(cljs.core.truth_((function (){var or__7801__auto__ = bit__8451__auto__;if(cljs.core.truth_(or__7801__auto__))
{return or__7801__auto__;
} else
{return G__13896.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13896.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13896);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13896);
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
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
{var val_13897 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13897);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13897);
}));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,ret);
}));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8649__auto___13898 = n;var x_13899 = 0;while(true){
if((x_13899 < n__8649__auto___13898))
{(a[x_13899] = 0);
{
var G__13900 = (x_13899 + 1);
x_13899 = G__13900;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__13901 = (i + 1);
i = G__13901;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13905 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13905 = (function (flag,alt_flag,meta13906){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13906 = meta13906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13905.cljs$lang$type = true;
cljs.core.async.t13905.cljs$lang$ctorStr = "cljs.core.async/t13905";
cljs.core.async.t13905.cljs$lang$ctorPrWriter = (function (this__8368__auto__,writer__8369__auto__,opt__8370__auto__){return cljs.core._write.call(null,writer__8369__auto__,"cljs.core.async/t13905");
});
cljs.core.async.t13905.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13905.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13905.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13907){var self__ = this;
var _13907__$1 = this;return self__.meta13906;
});
cljs.core.async.t13905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13907,meta13906__$1){var self__ = this;
var _13907__$1 = this;return (new cljs.core.async.t13905(self__.flag,self__.alt_flag,meta13906__$1));
});
cljs.core.async.__GT_t13905 = (function __GT_t13905(flag__$1,alt_flag__$1,meta13906){return (new cljs.core.async.t13905(flag__$1,alt_flag__$1,meta13906));
});
}
return (new cljs.core.async.t13905(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13911 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13911 = (function (cb,flag,alt_handler,meta13912){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13912 = meta13912;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13911.cljs$lang$type = true;
cljs.core.async.t13911.cljs$lang$ctorStr = "cljs.core.async/t13911";
cljs.core.async.t13911.cljs$lang$ctorPrWriter = (function (this__8368__auto__,writer__8369__auto__,opt__8370__auto__){return cljs.core._write.call(null,writer__8369__auto__,"cljs.core.async/t13911");
});
cljs.core.async.t13911.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13911.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13911.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13913){var self__ = this;
var _13913__$1 = this;return self__.meta13912;
});
cljs.core.async.t13911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13913,meta13912__$1){var self__ = this;
var _13913__$1 = this;return (new cljs.core.async.t13911(self__.cb,self__.flag,self__.alt_handler,meta13912__$1));
});
cljs.core.async.__GT_t13911 = (function __GT_t13911(cb__$1,flag__$1,alt_handler__$1,meta13912){return (new cljs.core.async.t13911(cb__$1,flag__$1,alt_handler__$1,meta13912));
});
}
return (new cljs.core.async.t13911(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13914_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13914_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13915_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13915_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7801__auto__ = wport;if(cljs.core.truth_(or__7801__auto__))
{return or__7801__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__13916 = (i + 1);
i = G__13916;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7801__auto__ = ret;if(cljs.core.truth_(or__7801__auto__))
{return or__7801__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__7789__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7789__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7789__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__13917){var map__13919 = p__13917;var map__13919__$1 = ((cljs.core.seq_QMARK_.call(null,map__13919))?cljs.core.apply.call(null,cljs.core.hash_map,map__13919):map__13919);var opts = map__13919__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13917 = null;if (arguments.length > 1) {
  p__13917 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13917);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13920){
var ports = cljs.core.first(arglist__13920);
var p__13917 = cljs.core.rest(arglist__13920);
return alts_BANG___delegate(ports,p__13917);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13928 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13928 = (function (ch,f,map_LT_,meta13929){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13929 = meta13929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13928.cljs$lang$type = true;
cljs.core.async.t13928.cljs$lang$ctorStr = "cljs.core.async/t13928";
cljs.core.async.t13928.cljs$lang$ctorPrWriter = (function (this__8368__auto__,writer__8369__auto__,opt__8370__auto__){return cljs.core._write.call(null,writer__8369__auto__,"cljs.core.async/t13928");
});
cljs.core.async.t13928.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13928.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t13928.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13928.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13931 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13931 = (function (fn1,_,meta13929,ch,f,map_LT_,meta13932){
this.fn1 = fn1;
this._ = _;
this.meta13929 = meta13929;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13932 = meta13932;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13931.cljs$lang$type = true;
cljs.core.async.t13931.cljs$lang$ctorStr = "cljs.core.async/t13931";
cljs.core.async.t13931.cljs$lang$ctorPrWriter = (function (this__8368__auto__,writer__8369__auto__,opt__8370__auto__){return cljs.core._write.call(null,writer__8369__auto__,"cljs.core.async/t13931");
});
cljs.core.async.t13931.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13931.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13931.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13931.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13921_SHARP_){return f1.call(null,(((p1__13921_SHARP_ == null))?null:self__.f.call(null,p1__13921_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13933){var self__ = this;
var _13933__$1 = this;return self__.meta13932;
});
cljs.core.async.t13931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13933,meta13932__$1){var self__ = this;
var _13933__$1 = this;return (new cljs.core.async.t13931(self__.fn1,self__._,self__.meta13929,self__.ch,self__.f,self__.map_LT_,meta13932__$1));
});
cljs.core.async.__GT_t13931 = (function __GT_t13931(fn1__$1,___$2,meta13929__$1,ch__$2,f__$2,map_LT___$2,meta13932){return (new cljs.core.async.t13931(fn1__$1,___$2,meta13929__$1,ch__$2,f__$2,map_LT___$2,meta13932));
});
}
return (new cljs.core.async.t13931(fn1,___$1,self__.meta13929,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7789__auto__ = ret;if(cljs.core.truth_(and__7789__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7789__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13928.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13928.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13928.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13930){var self__ = this;
var _13930__$1 = this;return self__.meta13929;
});
cljs.core.async.t13928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13930,meta13929__$1){var self__ = this;
var _13930__$1 = this;return (new cljs.core.async.t13928(self__.ch,self__.f,self__.map_LT_,meta13929__$1));
});
cljs.core.async.__GT_t13928 = (function __GT_t13928(ch__$1,f__$1,map_LT___$1,meta13929){return (new cljs.core.async.t13928(ch__$1,f__$1,map_LT___$1,meta13929));
});
}
return (new cljs.core.async.t13928(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13937 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13937 = (function (ch,f,map_GT_,meta13938){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13938 = meta13938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13937.cljs$lang$type = true;
cljs.core.async.t13937.cljs$lang$ctorStr = "cljs.core.async/t13937";
cljs.core.async.t13937.cljs$lang$ctorPrWriter = (function (this__8368__auto__,writer__8369__auto__,opt__8370__auto__){return cljs.core._write.call(null,writer__8369__auto__,"cljs.core.async/t13937");
});
cljs.core.async.t13937.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13937.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t13937.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13937.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13937.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13937.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13939){var self__ = this;
var _13939__$1 = this;return self__.meta13938;
});
cljs.core.async.t13937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13939,meta13938__$1){var self__ = this;
var _13939__$1 = this;return (new cljs.core.async.t13937(self__.ch,self__.f,self__.map_GT_,meta13938__$1));
});
cljs.core.async.__GT_t13937 = (function __GT_t13937(ch__$1,f__$1,map_GT___$1,meta13938){return (new cljs.core.async.t13937(ch__$1,f__$1,map_GT___$1,meta13938));
});
}
return (new cljs.core.async.t13937(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13943 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13943 = (function (ch,p,filter_GT_,meta13944){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13944 = meta13944;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13943.cljs$lang$type = true;
cljs.core.async.t13943.cljs$lang$ctorStr = "cljs.core.async/t13943";
cljs.core.async.t13943.cljs$lang$ctorPrWriter = (function (this__8368__auto__,writer__8369__auto__,opt__8370__auto__){return cljs.core._write.call(null,writer__8369__auto__,"cljs.core.async/t13943");
});
cljs.core.async.t13943.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13943.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t13943.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13943.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13943.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13943.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13943.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13945){var self__ = this;
var _13945__$1 = this;return self__.meta13944;
});
cljs.core.async.t13943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13945,meta13944__$1){var self__ = this;
var _13945__$1 = this;return (new cljs.core.async.t13943(self__.ch,self__.p,self__.filter_GT_,meta13944__$1));
});
cljs.core.async.__GT_t13943 = (function __GT_t13943(ch__$1,p__$1,filter_GT___$1,meta13944){return (new cljs.core.async.t13943(ch__$1,p__$1,filter_GT___$1,meta13944));
});
}
return (new cljs.core.async.t13943(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10182__auto___14028 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10183__auto__ = (function (){var switch__10112__auto__ = (function (state_14007){var state_val_14008 = (state_14007[1]);if((state_val_14008 === 1))
{var state_14007__$1 = state_14007;var statearr_14009_14029 = state_14007__$1;(statearr_14009_14029[2] = null);
(statearr_14009_14029[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14008 === 2))
{var state_14007__$1 = state_14007;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14007__$1,4,ch);
} else
{if((state_val_14008 === 3))
{var inst_14005 = (state_14007[2]);var state_14007__$1 = state_14007;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14007__$1,inst_14005);
} else
{if((state_val_14008 === 4))
{var inst_13989 = (state_14007[7]);var inst_13989__$1 = (state_14007[2]);var inst_13990 = (inst_13989__$1 == null);var state_14007__$1 = (function (){var statearr_14010 = state_14007;(statearr_14010[7] = inst_13989__$1);
return statearr_14010;
})();if(cljs.core.truth_(inst_13990))
{var statearr_14011_14030 = state_14007__$1;(statearr_14011_14030[1] = 5);
} else
{var statearr_14012_14031 = state_14007__$1;(statearr_14012_14031[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14008 === 5))
{var inst_13992 = cljs.core.async.close_BANG_.call(null,out);var state_14007__$1 = state_14007;var statearr_14013_14032 = state_14007__$1;(statearr_14013_14032[2] = inst_13992);
(statearr_14013_14032[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14008 === 6))
{var inst_13989 = (state_14007[7]);var inst_13994 = p.call(null,inst_13989);var state_14007__$1 = state_14007;if(cljs.core.truth_(inst_13994))
{var statearr_14014_14033 = state_14007__$1;(statearr_14014_14033[1] = 8);
} else
{var statearr_14015_14034 = state_14007__$1;(statearr_14015_14034[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14008 === 7))
{var inst_14003 = (state_14007[2]);var state_14007__$1 = state_14007;var statearr_14016_14035 = state_14007__$1;(statearr_14016_14035[2] = inst_14003);
(statearr_14016_14035[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14008 === 8))
{var inst_13989 = (state_14007[7]);var state_14007__$1 = state_14007;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14007__$1,11,out,inst_13989);
} else
{if((state_val_14008 === 9))
{var state_14007__$1 = state_14007;var statearr_14017_14036 = state_14007__$1;(statearr_14017_14036[2] = null);
(statearr_14017_14036[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14008 === 10))
{var inst_14000 = (state_14007[2]);var state_14007__$1 = (function (){var statearr_14018 = state_14007;(statearr_14018[8] = inst_14000);
return statearr_14018;
})();var statearr_14019_14037 = state_14007__$1;(statearr_14019_14037[2] = null);
(statearr_14019_14037[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14008 === 11))
{var inst_13997 = (state_14007[2]);var state_14007__$1 = state_14007;var statearr_14020_14038 = state_14007__$1;(statearr_14020_14038[2] = inst_13997);
(statearr_14020_14038[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10112__auto__){
return (function() {
var state_machine__10113__auto__ = null;
var state_machine__10113__auto____0 = (function (){var statearr_14024 = [null,null,null,null,null,null,null,null,null];(statearr_14024[0] = state_machine__10113__auto__);
(statearr_14024[1] = 1);
return statearr_14024;
});
var state_machine__10113__auto____1 = (function (state_14007){while(true){
var ret_value__10114__auto__ = (function (){try{while(true){
var result__10115__auto__ = switch__10112__auto__.call(null,state_14007);if(cljs.core.keyword_identical_QMARK_.call(null,result__10115__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10115__auto__;
}
break;
}
}catch (e14025){if((e14025 instanceof Object))
{var ex__10116__auto__ = e14025;var statearr_14026_14039 = state_14007;(statearr_14026_14039[5] = ex__10116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14007);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14025;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10114__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14040 = state_14007;
state_14007 = G__14040;
continue;
}
} else
{return ret_value__10114__auto__;
}
break;
}
});
state_machine__10113__auto__ = function(state_14007){
switch(arguments.length){
case 0:
return state_machine__10113__auto____0.call(this);
case 1:
return state_machine__10113__auto____1.call(this,state_14007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10113__auto____0;
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10113__auto____1;
return state_machine__10113__auto__;
})()
;})(switch__10112__auto__))
})();var state__10184__auto__ = (function (){var statearr_14027 = f__10183__auto__.call(null);(statearr_14027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10182__auto___14028);
return statearr_14027;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10184__auto__);
}));
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10182__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10183__auto__ = (function (){var switch__10112__auto__ = (function (state_14206){var state_val_14207 = (state_14206[1]);if((state_val_14207 === 1))
{var state_14206__$1 = state_14206;var statearr_14208_14249 = state_14206__$1;(statearr_14208_14249[2] = null);
(statearr_14208_14249[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14207 === 2))
{var state_14206__$1 = state_14206;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14206__$1,4,in$);
} else
{if((state_val_14207 === 3))
{var inst_14204 = (state_14206[2]);var state_14206__$1 = state_14206;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14206__$1,inst_14204);
} else
{if((state_val_14207 === 4))
{var inst_14147 = (state_14206[7]);var inst_14147__$1 = (state_14206[2]);var inst_14148 = (inst_14147__$1 == null);var state_14206__$1 = (function (){var statearr_14209 = state_14206;(statearr_14209[7] = inst_14147__$1);
return statearr_14209;
})();if(cljs.core.truth_(inst_14148))
{var statearr_14210_14250 = state_14206__$1;(statearr_14210_14250[1] = 5);
} else
{var statearr_14211_14251 = state_14206__$1;(statearr_14211_14251[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14207 === 5))
{var inst_14150 = cljs.core.async.close_BANG_.call(null,out);var state_14206__$1 = state_14206;var statearr_14212_14252 = state_14206__$1;(statearr_14212_14252[2] = inst_14150);
(statearr_14212_14252[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14207 === 6))
{var inst_14147 = (state_14206[7]);var inst_14156 = f.call(null,inst_14147);var inst_14157 = cljs.core.seq.call(null,inst_14156);var inst_14158 = inst_14157;var inst_14159 = null;var inst_14160 = 0;var inst_14161 = 0;var state_14206__$1 = (function (){var statearr_14213 = state_14206;(statearr_14213[8] = inst_14161);
(statearr_14213[9] = inst_14159);
(statearr_14213[10] = inst_14158);
(statearr_14213[11] = inst_14160);
return statearr_14213;
})();var statearr_14214_14253 = state_14206__$1;(statearr_14214_14253[2] = null);
(statearr_14214_14253[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14207 === 7))
{var inst_14202 = (state_14206[2]);var state_14206__$1 = state_14206;var statearr_14215_14254 = state_14206__$1;(statearr_14215_14254[2] = inst_14202);
(statearr_14215_14254[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14207 === 8))
{var inst_14161 = (state_14206[8]);var inst_14160 = (state_14206[11]);var inst_14163 = (inst_14161 < inst_14160);var inst_14164 = inst_14163;var state_14206__$1 = state_14206;if(cljs.core.truth_(inst_14164))
{var statearr_14216_14255 = state_14206__$1;(statearr_14216_14255[1] = 10);
} else
{var statearr_14217_14256 = state_14206__$1;(statearr_14217_14256[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14207 === 9))
{var inst_14194 = (state_14206[2]);var inst_14195 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14206__$1 = (function (){var statearr_14218 = state_14206;(statearr_14218[12] = inst_14194);
return statearr_14218;
})();if(cljs.core.truth_(inst_14195))
{var statearr_14219_14257 = state_14206__$1;(statearr_14219_14257[1] = 21);
} else
{var statearr_14220_14258 = state_14206__$1;(statearr_14220_14258[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14207 === 10))
{var inst_14161 = (state_14206[8]);var inst_14159 = (state_14206[9]);var inst_14166 = cljs.core._nth.call(null,inst_14159,inst_14161);var state_14206__$1 = state_14206;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14206__$1,13,out,inst_14166);
} else
{if((state_val_14207 === 11))
{var inst_14172 = (state_14206[13]);var inst_14158 = (state_14206[10]);var inst_14172__$1 = cljs.core.seq.call(null,inst_14158);var state_14206__$1 = (function (){var statearr_14224 = state_14206;(statearr_14224[13] = inst_14172__$1);
return statearr_14224;
})();if(inst_14172__$1)
{var statearr_14225_14259 = state_14206__$1;(statearr_14225_14259[1] = 14);
} else
{var statearr_14226_14260 = state_14206__$1;(statearr_14226_14260[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14207 === 12))
{var inst_14192 = (state_14206[2]);var state_14206__$1 = state_14206;var statearr_14227_14261 = state_14206__$1;(statearr_14227_14261[2] = inst_14192);
(statearr_14227_14261[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14207 === 13))
{var inst_14161 = (state_14206[8]);var inst_14159 = (state_14206[9]);var inst_14158 = (state_14206[10]);var inst_14160 = (state_14206[11]);var inst_14168 = (state_14206[2]);var inst_14169 = (inst_14161 + 1);var tmp14221 = inst_14159;var tmp14222 = inst_14158;var tmp14223 = inst_14160;var inst_14158__$1 = tmp14222;var inst_14159__$1 = tmp14221;var inst_14160__$1 = tmp14223;var inst_14161__$1 = inst_14169;var state_14206__$1 = (function (){var statearr_14228 = state_14206;(statearr_14228[14] = inst_14168);
(statearr_14228[8] = inst_14161__$1);
(statearr_14228[9] = inst_14159__$1);
(statearr_14228[10] = inst_14158__$1);
(statearr_14228[11] = inst_14160__$1);
return statearr_14228;
})();var statearr_14229_14262 = state_14206__$1;(statearr_14229_14262[2] = null);
(statearr_14229_14262[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14207 === 14))
{var inst_14172 = (state_14206[13]);var inst_14174 = cljs.core.chunked_seq_QMARK_.call(null,inst_14172);var state_14206__$1 = state_14206;if(inst_14174)
{var statearr_14230_14263 = state_14206__$1;(statearr_14230_14263[1] = 17);
} else
{var statearr_14231_14264 = state_14206__$1;(statearr_14231_14264[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14207 === 15))
{var state_14206__$1 = state_14206;var statearr_14232_14265 = state_14206__$1;(statearr_14232_14265[2] = null);
(statearr_14232_14265[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14207 === 16))
{var inst_14190 = (state_14206[2]);var state_14206__$1 = state_14206;var statearr_14233_14266 = state_14206__$1;(statearr_14233_14266[2] = inst_14190);
(statearr_14233_14266[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14207 === 17))
{var inst_14172 = (state_14206[13]);var inst_14176 = cljs.core.chunk_first.call(null,inst_14172);var inst_14177 = cljs.core.chunk_rest.call(null,inst_14172);var inst_14178 = cljs.core.count.call(null,inst_14176);var inst_14158 = inst_14177;var inst_14159 = inst_14176;var inst_14160 = inst_14178;var inst_14161 = 0;var state_14206__$1 = (function (){var statearr_14234 = state_14206;(statearr_14234[8] = inst_14161);
(statearr_14234[9] = inst_14159);
(statearr_14234[10] = inst_14158);
(statearr_14234[11] = inst_14160);
return statearr_14234;
})();var statearr_14235_14267 = state_14206__$1;(statearr_14235_14267[2] = null);
(statearr_14235_14267[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14207 === 18))
{var inst_14172 = (state_14206[13]);var inst_14181 = cljs.core.first.call(null,inst_14172);var state_14206__$1 = state_14206;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14206__$1,20,out,inst_14181);
} else
{if((state_val_14207 === 19))
{var inst_14187 = (state_14206[2]);var state_14206__$1 = state_14206;var statearr_14236_14268 = state_14206__$1;(statearr_14236_14268[2] = inst_14187);
(statearr_14236_14268[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14207 === 20))
{var inst_14172 = (state_14206[13]);var inst_14183 = (state_14206[2]);var inst_14184 = cljs.core.next.call(null,inst_14172);var inst_14158 = inst_14184;var inst_14159 = null;var inst_14160 = 0;var inst_14161 = 0;var state_14206__$1 = (function (){var statearr_14237 = state_14206;(statearr_14237[8] = inst_14161);
(statearr_14237[15] = inst_14183);
(statearr_14237[9] = inst_14159);
(statearr_14237[10] = inst_14158);
(statearr_14237[11] = inst_14160);
return statearr_14237;
})();var statearr_14238_14269 = state_14206__$1;(statearr_14238_14269[2] = null);
(statearr_14238_14269[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14207 === 21))
{var state_14206__$1 = state_14206;var statearr_14239_14270 = state_14206__$1;(statearr_14239_14270[2] = null);
(statearr_14239_14270[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14207 === 22))
{var state_14206__$1 = state_14206;var statearr_14240_14271 = state_14206__$1;(statearr_14240_14271[2] = null);
(statearr_14240_14271[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14207 === 23))
{var inst_14200 = (state_14206[2]);var state_14206__$1 = state_14206;var statearr_14241_14272 = state_14206__$1;(statearr_14241_14272[2] = inst_14200);
(statearr_14241_14272[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10112__auto__){
return (function() {
var state_machine__10113__auto__ = null;
var state_machine__10113__auto____0 = (function (){var statearr_14245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14245[0] = state_machine__10113__auto__);
(statearr_14245[1] = 1);
return statearr_14245;
});
var state_machine__10113__auto____1 = (function (state_14206){while(true){
var ret_value__10114__auto__ = (function (){try{while(true){
var result__10115__auto__ = switch__10112__auto__.call(null,state_14206);if(cljs.core.keyword_identical_QMARK_.call(null,result__10115__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10115__auto__;
}
break;
}
}catch (e14246){if((e14246 instanceof Object))
{var ex__10116__auto__ = e14246;var statearr_14247_14273 = state_14206;(statearr_14247_14273[5] = ex__10116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14206);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14246;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10114__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14274 = state_14206;
state_14206 = G__14274;
continue;
}
} else
{return ret_value__10114__auto__;
}
break;
}
});
state_machine__10113__auto__ = function(state_14206){
switch(arguments.length){
case 0:
return state_machine__10113__auto____0.call(this);
case 1:
return state_machine__10113__auto____1.call(this,state_14206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10113__auto____0;
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10113__auto____1;
return state_machine__10113__auto__;
})()
;})(switch__10112__auto__))
})();var state__10184__auto__ = (function (){var statearr_14248 = f__10183__auto__.call(null);(statearr_14248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10182__auto__);
return statearr_14248;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10184__auto__);
}));
return c__10182__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10182__auto___14369 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10183__auto__ = (function (){var switch__10112__auto__ = (function (state_14345){var state_val_14346 = (state_14345[1]);if((state_val_14346 === 1))
{var state_14345__$1 = state_14345;var statearr_14347_14370 = state_14345__$1;(statearr_14347_14370[2] = null);
(statearr_14347_14370[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14346 === 2))
{var state_14345__$1 = state_14345;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14345__$1,4,from);
} else
{if((state_val_14346 === 3))
{var inst_14343 = (state_14345[2]);var state_14345__$1 = state_14345;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14345__$1,inst_14343);
} else
{if((state_val_14346 === 4))
{var inst_14324 = (state_14345[7]);var inst_14324__$1 = (state_14345[2]);var inst_14325 = (inst_14324__$1 == null);var state_14345__$1 = (function (){var statearr_14348 = state_14345;(statearr_14348[7] = inst_14324__$1);
return statearr_14348;
})();if(cljs.core.truth_(inst_14325))
{var statearr_14349_14371 = state_14345__$1;(statearr_14349_14371[1] = 5);
} else
{var statearr_14350_14372 = state_14345__$1;(statearr_14350_14372[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14346 === 5))
{var state_14345__$1 = state_14345;if(cljs.core.truth_(close_QMARK_))
{var statearr_14351_14373 = state_14345__$1;(statearr_14351_14373[1] = 8);
} else
{var statearr_14352_14374 = state_14345__$1;(statearr_14352_14374[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14346 === 6))
{var inst_14324 = (state_14345[7]);var state_14345__$1 = state_14345;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14345__$1,11,to,inst_14324);
} else
{if((state_val_14346 === 7))
{var inst_14341 = (state_14345[2]);var state_14345__$1 = state_14345;var statearr_14353_14375 = state_14345__$1;(statearr_14353_14375[2] = inst_14341);
(statearr_14353_14375[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14346 === 8))
{var inst_14328 = cljs.core.async.close_BANG_.call(null,to);var state_14345__$1 = state_14345;var statearr_14354_14376 = state_14345__$1;(statearr_14354_14376[2] = inst_14328);
(statearr_14354_14376[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14346 === 9))
{var state_14345__$1 = state_14345;var statearr_14355_14377 = state_14345__$1;(statearr_14355_14377[2] = null);
(statearr_14355_14377[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14346 === 10))
{var inst_14331 = (state_14345[2]);var state_14345__$1 = state_14345;var statearr_14356_14378 = state_14345__$1;(statearr_14356_14378[2] = inst_14331);
(statearr_14356_14378[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14346 === 11))
{var inst_14334 = (state_14345[2]);var state_14345__$1 = state_14345;if(cljs.core.truth_(inst_14334))
{var statearr_14357_14379 = state_14345__$1;(statearr_14357_14379[1] = 12);
} else
{var statearr_14358_14380 = state_14345__$1;(statearr_14358_14380[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14346 === 12))
{var state_14345__$1 = state_14345;var statearr_14359_14381 = state_14345__$1;(statearr_14359_14381[2] = null);
(statearr_14359_14381[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14346 === 13))
{var state_14345__$1 = state_14345;var statearr_14360_14382 = state_14345__$1;(statearr_14360_14382[2] = null);
(statearr_14360_14382[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14346 === 14))
{var inst_14339 = (state_14345[2]);var state_14345__$1 = state_14345;var statearr_14361_14383 = state_14345__$1;(statearr_14361_14383[2] = inst_14339);
(statearr_14361_14383[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10112__auto__){
return (function() {
var state_machine__10113__auto__ = null;
var state_machine__10113__auto____0 = (function (){var statearr_14365 = [null,null,null,null,null,null,null,null];(statearr_14365[0] = state_machine__10113__auto__);
(statearr_14365[1] = 1);
return statearr_14365;
});
var state_machine__10113__auto____1 = (function (state_14345){while(true){
var ret_value__10114__auto__ = (function (){try{while(true){
var result__10115__auto__ = switch__10112__auto__.call(null,state_14345);if(cljs.core.keyword_identical_QMARK_.call(null,result__10115__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10115__auto__;
}
break;
}
}catch (e14366){if((e14366 instanceof Object))
{var ex__10116__auto__ = e14366;var statearr_14367_14384 = state_14345;(statearr_14367_14384[5] = ex__10116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14345);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14366;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10114__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14385 = state_14345;
state_14345 = G__14385;
continue;
}
} else
{return ret_value__10114__auto__;
}
break;
}
});
state_machine__10113__auto__ = function(state_14345){
switch(arguments.length){
case 0:
return state_machine__10113__auto____0.call(this);
case 1:
return state_machine__10113__auto____1.call(this,state_14345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10113__auto____0;
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10113__auto____1;
return state_machine__10113__auto__;
})()
;})(switch__10112__auto__))
})();var state__10184__auto__ = (function (){var statearr_14368 = f__10183__auto__.call(null);(statearr_14368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10182__auto___14369);
return statearr_14368;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10184__auto__);
}));
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10182__auto___14486 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10183__auto__ = (function (){var switch__10112__auto__ = (function (state_14461){var state_val_14462 = (state_14461[1]);if((state_val_14462 === 1))
{var state_14461__$1 = state_14461;var statearr_14463_14487 = state_14461__$1;(statearr_14463_14487[2] = null);
(statearr_14463_14487[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14462 === 2))
{var state_14461__$1 = state_14461;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14461__$1,4,ch);
} else
{if((state_val_14462 === 3))
{var inst_14459 = (state_14461[2]);var state_14461__$1 = state_14461;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14461__$1,inst_14459);
} else
{if((state_val_14462 === 4))
{var inst_14438 = (state_14461[7]);var inst_14438__$1 = (state_14461[2]);var inst_14439 = (inst_14438__$1 == null);var state_14461__$1 = (function (){var statearr_14464 = state_14461;(statearr_14464[7] = inst_14438__$1);
return statearr_14464;
})();if(cljs.core.truth_(inst_14439))
{var statearr_14465_14488 = state_14461__$1;(statearr_14465_14488[1] = 5);
} else
{var statearr_14466_14489 = state_14461__$1;(statearr_14466_14489[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14462 === 5))
{var inst_14441 = cljs.core.async.close_BANG_.call(null,tc);var inst_14442 = cljs.core.async.close_BANG_.call(null,fc);var state_14461__$1 = (function (){var statearr_14467 = state_14461;(statearr_14467[8] = inst_14441);
return statearr_14467;
})();var statearr_14468_14490 = state_14461__$1;(statearr_14468_14490[2] = inst_14442);
(statearr_14468_14490[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14462 === 6))
{var inst_14438 = (state_14461[7]);var inst_14444 = p.call(null,inst_14438);var state_14461__$1 = state_14461;if(cljs.core.truth_(inst_14444))
{var statearr_14469_14491 = state_14461__$1;(statearr_14469_14491[1] = 9);
} else
{var statearr_14470_14492 = state_14461__$1;(statearr_14470_14492[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14462 === 7))
{var inst_14457 = (state_14461[2]);var state_14461__$1 = state_14461;var statearr_14471_14493 = state_14461__$1;(statearr_14471_14493[2] = inst_14457);
(statearr_14471_14493[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14462 === 8))
{var inst_14450 = (state_14461[2]);var state_14461__$1 = state_14461;if(cljs.core.truth_(inst_14450))
{var statearr_14472_14494 = state_14461__$1;(statearr_14472_14494[1] = 12);
} else
{var statearr_14473_14495 = state_14461__$1;(statearr_14473_14495[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14462 === 9))
{var state_14461__$1 = state_14461;var statearr_14474_14496 = state_14461__$1;(statearr_14474_14496[2] = tc);
(statearr_14474_14496[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14462 === 10))
{var state_14461__$1 = state_14461;var statearr_14475_14497 = state_14461__$1;(statearr_14475_14497[2] = fc);
(statearr_14475_14497[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14462 === 11))
{var inst_14438 = (state_14461[7]);var inst_14448 = (state_14461[2]);var state_14461__$1 = state_14461;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14461__$1,8,inst_14448,inst_14438);
} else
{if((state_val_14462 === 12))
{var state_14461__$1 = state_14461;var statearr_14476_14498 = state_14461__$1;(statearr_14476_14498[2] = null);
(statearr_14476_14498[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14462 === 13))
{var state_14461__$1 = state_14461;var statearr_14477_14499 = state_14461__$1;(statearr_14477_14499[2] = null);
(statearr_14477_14499[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14462 === 14))
{var inst_14455 = (state_14461[2]);var state_14461__$1 = state_14461;var statearr_14478_14500 = state_14461__$1;(statearr_14478_14500[2] = inst_14455);
(statearr_14478_14500[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10112__auto__){
return (function() {
var state_machine__10113__auto__ = null;
var state_machine__10113__auto____0 = (function (){var statearr_14482 = [null,null,null,null,null,null,null,null,null];(statearr_14482[0] = state_machine__10113__auto__);
(statearr_14482[1] = 1);
return statearr_14482;
});
var state_machine__10113__auto____1 = (function (state_14461){while(true){
var ret_value__10114__auto__ = (function (){try{while(true){
var result__10115__auto__ = switch__10112__auto__.call(null,state_14461);if(cljs.core.keyword_identical_QMARK_.call(null,result__10115__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10115__auto__;
}
break;
}
}catch (e14483){if((e14483 instanceof Object))
{var ex__10116__auto__ = e14483;var statearr_14484_14501 = state_14461;(statearr_14484_14501[5] = ex__10116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14461);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14483;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10114__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14502 = state_14461;
state_14461 = G__14502;
continue;
}
} else
{return ret_value__10114__auto__;
}
break;
}
});
state_machine__10113__auto__ = function(state_14461){
switch(arguments.length){
case 0:
return state_machine__10113__auto____0.call(this);
case 1:
return state_machine__10113__auto____1.call(this,state_14461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10113__auto____0;
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10113__auto____1;
return state_machine__10113__auto__;
})()
;})(switch__10112__auto__))
})();var state__10184__auto__ = (function (){var statearr_14485 = f__10183__auto__.call(null);(statearr_14485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10182__auto___14486);
return statearr_14485;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10184__auto__);
}));
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10182__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10183__auto__ = (function (){var switch__10112__auto__ = (function (state_14549){var state_val_14550 = (state_14549[1]);if((state_val_14550 === 7))
{var inst_14545 = (state_14549[2]);var state_14549__$1 = state_14549;var statearr_14551_14567 = state_14549__$1;(statearr_14551_14567[2] = inst_14545);
(statearr_14551_14567[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14550 === 6))
{var inst_14535 = (state_14549[7]);var inst_14538 = (state_14549[8]);var inst_14542 = f.call(null,inst_14535,inst_14538);var inst_14535__$1 = inst_14542;var state_14549__$1 = (function (){var statearr_14552 = state_14549;(statearr_14552[7] = inst_14535__$1);
return statearr_14552;
})();var statearr_14553_14568 = state_14549__$1;(statearr_14553_14568[2] = null);
(statearr_14553_14568[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14550 === 5))
{var inst_14535 = (state_14549[7]);var state_14549__$1 = state_14549;var statearr_14554_14569 = state_14549__$1;(statearr_14554_14569[2] = inst_14535);
(statearr_14554_14569[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14550 === 4))
{var inst_14538 = (state_14549[8]);var inst_14538__$1 = (state_14549[2]);var inst_14539 = (inst_14538__$1 == null);var state_14549__$1 = (function (){var statearr_14555 = state_14549;(statearr_14555[8] = inst_14538__$1);
return statearr_14555;
})();if(cljs.core.truth_(inst_14539))
{var statearr_14556_14570 = state_14549__$1;(statearr_14556_14570[1] = 5);
} else
{var statearr_14557_14571 = state_14549__$1;(statearr_14557_14571[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14550 === 3))
{var inst_14547 = (state_14549[2]);var state_14549__$1 = state_14549;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14549__$1,inst_14547);
} else
{if((state_val_14550 === 2))
{var state_14549__$1 = state_14549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14549__$1,4,ch);
} else
{if((state_val_14550 === 1))
{var inst_14535 = init;var state_14549__$1 = (function (){var statearr_14558 = state_14549;(statearr_14558[7] = inst_14535);
return statearr_14558;
})();var statearr_14559_14572 = state_14549__$1;(statearr_14559_14572[2] = null);
(statearr_14559_14572[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__10112__auto__){
return (function() {
var state_machine__10113__auto__ = null;
var state_machine__10113__auto____0 = (function (){var statearr_14563 = [null,null,null,null,null,null,null,null,null];(statearr_14563[0] = state_machine__10113__auto__);
(statearr_14563[1] = 1);
return statearr_14563;
});
var state_machine__10113__auto____1 = (function (state_14549){while(true){
var ret_value__10114__auto__ = (function (){try{while(true){
var result__10115__auto__ = switch__10112__auto__.call(null,state_14549);if(cljs.core.keyword_identical_QMARK_.call(null,result__10115__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10115__auto__;
}
break;
}
}catch (e14564){if((e14564 instanceof Object))
{var ex__10116__auto__ = e14564;var statearr_14565_14573 = state_14549;(statearr_14565_14573[5] = ex__10116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14549);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14564;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10114__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14574 = state_14549;
state_14549 = G__14574;
continue;
}
} else
{return ret_value__10114__auto__;
}
break;
}
});
state_machine__10113__auto__ = function(state_14549){
switch(arguments.length){
case 0:
return state_machine__10113__auto____0.call(this);
case 1:
return state_machine__10113__auto____1.call(this,state_14549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10113__auto____0;
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10113__auto____1;
return state_machine__10113__auto__;
})()
;})(switch__10112__auto__))
})();var state__10184__auto__ = (function (){var statearr_14566 = f__10183__auto__.call(null);(statearr_14566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10182__auto__);
return statearr_14566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10184__auto__);
}));
return c__10182__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10182__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10183__auto__ = (function (){var switch__10112__auto__ = (function (state_14648){var state_val_14649 = (state_14648[1]);if((state_val_14649 === 1))
{var inst_14624 = cljs.core.seq.call(null,coll);var inst_14625 = inst_14624;var state_14648__$1 = (function (){var statearr_14650 = state_14648;(statearr_14650[7] = inst_14625);
return statearr_14650;
})();var statearr_14651_14673 = state_14648__$1;(statearr_14651_14673[2] = null);
(statearr_14651_14673[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 2))
{var inst_14625 = (state_14648[7]);var state_14648__$1 = state_14648;if(cljs.core.truth_(inst_14625))
{var statearr_14652_14674 = state_14648__$1;(statearr_14652_14674[1] = 4);
} else
{var statearr_14653_14675 = state_14648__$1;(statearr_14653_14675[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 3))
{var inst_14646 = (state_14648[2]);var state_14648__$1 = state_14648;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14648__$1,inst_14646);
} else
{if((state_val_14649 === 4))
{var inst_14625 = (state_14648[7]);var inst_14628 = cljs.core.first.call(null,inst_14625);var state_14648__$1 = state_14648;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14648__$1,7,ch,inst_14628);
} else
{if((state_val_14649 === 5))
{var inst_14625 = (state_14648[7]);var state_14648__$1 = state_14648;var statearr_14654_14676 = state_14648__$1;(statearr_14654_14676[2] = inst_14625);
(statearr_14654_14676[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 6))
{var inst_14633 = (state_14648[2]);var state_14648__$1 = state_14648;if(cljs.core.truth_(inst_14633))
{var statearr_14655_14677 = state_14648__$1;(statearr_14655_14677[1] = 8);
} else
{var statearr_14656_14678 = state_14648__$1;(statearr_14656_14678[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 7))
{var inst_14630 = (state_14648[2]);var state_14648__$1 = state_14648;var statearr_14657_14679 = state_14648__$1;(statearr_14657_14679[2] = inst_14630);
(statearr_14657_14679[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 8))
{var inst_14625 = (state_14648[7]);var inst_14635 = cljs.core.next.call(null,inst_14625);var inst_14625__$1 = inst_14635;var state_14648__$1 = (function (){var statearr_14658 = state_14648;(statearr_14658[7] = inst_14625__$1);
return statearr_14658;
})();var statearr_14659_14680 = state_14648__$1;(statearr_14659_14680[2] = null);
(statearr_14659_14680[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 9))
{var state_14648__$1 = state_14648;if(cljs.core.truth_(close_QMARK_))
{var statearr_14660_14681 = state_14648__$1;(statearr_14660_14681[1] = 11);
} else
{var statearr_14661_14682 = state_14648__$1;(statearr_14661_14682[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 10))
{var inst_14644 = (state_14648[2]);var state_14648__$1 = state_14648;var statearr_14662_14683 = state_14648__$1;(statearr_14662_14683[2] = inst_14644);
(statearr_14662_14683[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 11))
{var inst_14639 = cljs.core.async.close_BANG_.call(null,ch);var state_14648__$1 = state_14648;var statearr_14663_14684 = state_14648__$1;(statearr_14663_14684[2] = inst_14639);
(statearr_14663_14684[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 12))
{var state_14648__$1 = state_14648;var statearr_14664_14685 = state_14648__$1;(statearr_14664_14685[2] = null);
(statearr_14664_14685[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 13))
{var inst_14642 = (state_14648[2]);var state_14648__$1 = state_14648;var statearr_14665_14686 = state_14648__$1;(statearr_14665_14686[2] = inst_14642);
(statearr_14665_14686[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10112__auto__){
return (function() {
var state_machine__10113__auto__ = null;
var state_machine__10113__auto____0 = (function (){var statearr_14669 = [null,null,null,null,null,null,null,null];(statearr_14669[0] = state_machine__10113__auto__);
(statearr_14669[1] = 1);
return statearr_14669;
});
var state_machine__10113__auto____1 = (function (state_14648){while(true){
var ret_value__10114__auto__ = (function (){try{while(true){
var result__10115__auto__ = switch__10112__auto__.call(null,state_14648);if(cljs.core.keyword_identical_QMARK_.call(null,result__10115__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10115__auto__;
}
break;
}
}catch (e14670){if((e14670 instanceof Object))
{var ex__10116__auto__ = e14670;var statearr_14671_14687 = state_14648;(statearr_14671_14687[5] = ex__10116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14648);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14670;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10114__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14688 = state_14648;
state_14648 = G__14688;
continue;
}
} else
{return ret_value__10114__auto__;
}
break;
}
});
state_machine__10113__auto__ = function(state_14648){
switch(arguments.length){
case 0:
return state_machine__10113__auto____0.call(this);
case 1:
return state_machine__10113__auto____1.call(this,state_14648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10113__auto____0;
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10113__auto____1;
return state_machine__10113__auto__;
})()
;})(switch__10112__auto__))
})();var state__10184__auto__ = (function (){var statearr_14672 = f__10183__auto__.call(null);(statearr_14672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10182__auto__);
return statearr_14672;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10184__auto__);
}));
return c__10182__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj14690 = {};return obj14690;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7789__auto__ = _;if(and__7789__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7789__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8428__auto__ = (((_ == null))?null:_);return (function (){var or__7801__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8428__auto__)]);if(or__7801__auto__)
{return or__7801__auto__;
} else
{var or__7801__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7801__auto____$1)
{return or__7801__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj14692 = {};return obj14692;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7789__auto__ = m;if(and__7789__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7789__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8428__auto__ = (((m == null))?null:m);return (function (){var or__7801__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8428__auto__)]);if(or__7801__auto__)
{return or__7801__auto__;
} else
{var or__7801__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7801__auto____$1)
{return or__7801__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7789__auto__ = m;if(and__7789__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7789__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8428__auto__ = (((m == null))?null:m);return (function (){var or__7801__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8428__auto__)]);if(or__7801__auto__)
{return or__7801__auto__;
} else
{var or__7801__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7801__auto____$1)
{return or__7801__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7789__auto__ = m;if(and__7789__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7789__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8428__auto__ = (((m == null))?null:m);return (function (){var or__7801__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8428__auto__)]);if(or__7801__auto__)
{return or__7801__auto__;
} else
{var or__7801__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7801__auto____$1)
{return or__7801__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14914 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14914 = (function (cs,ch,mult,meta14915){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14915 = meta14915;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14914.cljs$lang$type = true;
cljs.core.async.t14914.cljs$lang$ctorStr = "cljs.core.async/t14914";
cljs.core.async.t14914.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8368__auto__,writer__8369__auto__,opt__8370__auto__){return cljs.core._write.call(null,writer__8369__auto__,"cljs.core.async/t14914");
});})(cs))
;
cljs.core.async.t14914.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14914.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14914.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14914.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14914.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14914.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14914.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14916){var self__ = this;
var _14916__$1 = this;return self__.meta14915;
});})(cs))
;
cljs.core.async.t14914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14916,meta14915__$1){var self__ = this;
var _14916__$1 = this;return (new cljs.core.async.t14914(self__.cs,self__.ch,self__.mult,meta14915__$1));
});})(cs))
;
cljs.core.async.__GT_t14914 = ((function (cs){
return (function __GT_t14914(cs__$1,ch__$1,mult__$1,meta14915){return (new cljs.core.async.t14914(cs__$1,ch__$1,mult__$1,meta14915));
});})(cs))
;
}
return (new cljs.core.async.t14914(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10182__auto___15135 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10183__auto__ = (function (){var switch__10112__auto__ = (function (state_15047){var state_val_15048 = (state_15047[1]);if((state_val_15048 === 32))
{var inst_14987 = (state_15047[7]);var inst_14988 = (state_15047[8]);var inst_14989 = (state_15047[9]);var inst_14990 = (state_15047[10]);var inst_15002 = (state_15047[2]);var inst_15003 = (inst_14990 + 1);var tmp15049 = inst_14987;var tmp15050 = inst_14988;var tmp15051 = inst_14989;var inst_14987__$1 = tmp15049;var inst_14988__$1 = tmp15050;var inst_14989__$1 = tmp15051;var inst_14990__$1 = inst_15003;var state_15047__$1 = (function (){var statearr_15052 = state_15047;(statearr_15052[7] = inst_14987__$1);
(statearr_15052[8] = inst_14988__$1);
(statearr_15052[9] = inst_14989__$1);
(statearr_15052[10] = inst_14990__$1);
(statearr_15052[11] = inst_15002);
return statearr_15052;
})();var statearr_15053_15136 = state_15047__$1;(statearr_15053_15136[2] = null);
(statearr_15053_15136[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 1))
{var state_15047__$1 = state_15047;var statearr_15054_15137 = state_15047__$1;(statearr_15054_15137[2] = null);
(statearr_15054_15137[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 33))
{var inst_15006 = (state_15047[12]);var inst_15008 = cljs.core.chunked_seq_QMARK_.call(null,inst_15006);var state_15047__$1 = state_15047;if(inst_15008)
{var statearr_15055_15138 = state_15047__$1;(statearr_15055_15138[1] = 36);
} else
{var statearr_15056_15139 = state_15047__$1;(statearr_15056_15139[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 2))
{var state_15047__$1 = state_15047;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15047__$1,4,ch);
} else
{if((state_val_15048 === 34))
{var state_15047__$1 = state_15047;var statearr_15057_15140 = state_15047__$1;(statearr_15057_15140[2] = null);
(statearr_15057_15140[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 3))
{var inst_15045 = (state_15047[2]);var state_15047__$1 = state_15047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15047__$1,inst_15045);
} else
{if((state_val_15048 === 35))
{var inst_15029 = (state_15047[2]);var state_15047__$1 = state_15047;var statearr_15058_15141 = state_15047__$1;(statearr_15058_15141[2] = inst_15029);
(statearr_15058_15141[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 4))
{var inst_14919 = (state_15047[13]);var inst_14919__$1 = (state_15047[2]);var inst_14920 = (inst_14919__$1 == null);var state_15047__$1 = (function (){var statearr_15059 = state_15047;(statearr_15059[13] = inst_14919__$1);
return statearr_15059;
})();if(cljs.core.truth_(inst_14920))
{var statearr_15060_15142 = state_15047__$1;(statearr_15060_15142[1] = 5);
} else
{var statearr_15061_15143 = state_15047__$1;(statearr_15061_15143[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 36))
{var inst_15006 = (state_15047[12]);var inst_15010 = cljs.core.chunk_first.call(null,inst_15006);var inst_15011 = cljs.core.chunk_rest.call(null,inst_15006);var inst_15012 = cljs.core.count.call(null,inst_15010);var inst_14987 = inst_15011;var inst_14988 = inst_15010;var inst_14989 = inst_15012;var inst_14990 = 0;var state_15047__$1 = (function (){var statearr_15062 = state_15047;(statearr_15062[7] = inst_14987);
(statearr_15062[8] = inst_14988);
(statearr_15062[9] = inst_14989);
(statearr_15062[10] = inst_14990);
return statearr_15062;
})();var statearr_15063_15144 = state_15047__$1;(statearr_15063_15144[2] = null);
(statearr_15063_15144[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 5))
{var inst_14926 = cljs.core.deref.call(null,cs);var inst_14927 = cljs.core.seq.call(null,inst_14926);var inst_14928 = inst_14927;var inst_14929 = null;var inst_14930 = 0;var inst_14931 = 0;var state_15047__$1 = (function (){var statearr_15064 = state_15047;(statearr_15064[14] = inst_14931);
(statearr_15064[15] = inst_14930);
(statearr_15064[16] = inst_14928);
(statearr_15064[17] = inst_14929);
return statearr_15064;
})();var statearr_15065_15145 = state_15047__$1;(statearr_15065_15145[2] = null);
(statearr_15065_15145[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 37))
{var inst_15015 = (state_15047[18]);var inst_15006 = (state_15047[12]);var inst_14919 = (state_15047[13]);var inst_15015__$1 = cljs.core.first.call(null,inst_15006);var inst_15016 = cljs.core.async.put_BANG_.call(null,inst_15015__$1,inst_14919,done);var state_15047__$1 = (function (){var statearr_15066 = state_15047;(statearr_15066[18] = inst_15015__$1);
return statearr_15066;
})();if(cljs.core.truth_(inst_15016))
{var statearr_15067_15146 = state_15047__$1;(statearr_15067_15146[1] = 39);
} else
{var statearr_15068_15147 = state_15047__$1;(statearr_15068_15147[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 6))
{var inst_14979 = (state_15047[19]);var inst_14978 = cljs.core.deref.call(null,cs);var inst_14979__$1 = cljs.core.keys.call(null,inst_14978);var inst_14980 = cljs.core.count.call(null,inst_14979__$1);var inst_14981 = cljs.core.reset_BANG_.call(null,dctr,inst_14980);var inst_14986 = cljs.core.seq.call(null,inst_14979__$1);var inst_14987 = inst_14986;var inst_14988 = null;var inst_14989 = 0;var inst_14990 = 0;var state_15047__$1 = (function (){var statearr_15069 = state_15047;(statearr_15069[20] = inst_14981);
(statearr_15069[7] = inst_14987);
(statearr_15069[8] = inst_14988);
(statearr_15069[9] = inst_14989);
(statearr_15069[10] = inst_14990);
(statearr_15069[19] = inst_14979__$1);
return statearr_15069;
})();var statearr_15070_15148 = state_15047__$1;(statearr_15070_15148[2] = null);
(statearr_15070_15148[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 38))
{var inst_15026 = (state_15047[2]);var state_15047__$1 = state_15047;var statearr_15071_15149 = state_15047__$1;(statearr_15071_15149[2] = inst_15026);
(statearr_15071_15149[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 7))
{var inst_15043 = (state_15047[2]);var state_15047__$1 = state_15047;var statearr_15072_15150 = state_15047__$1;(statearr_15072_15150[2] = inst_15043);
(statearr_15072_15150[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 39))
{var state_15047__$1 = state_15047;var statearr_15073_15151 = state_15047__$1;(statearr_15073_15151[2] = null);
(statearr_15073_15151[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 8))
{var inst_14931 = (state_15047[14]);var inst_14930 = (state_15047[15]);var inst_14933 = (inst_14931 < inst_14930);var inst_14934 = inst_14933;var state_15047__$1 = state_15047;if(cljs.core.truth_(inst_14934))
{var statearr_15074_15152 = state_15047__$1;(statearr_15074_15152[1] = 10);
} else
{var statearr_15075_15153 = state_15047__$1;(statearr_15075_15153[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 40))
{var inst_15015 = (state_15047[18]);var inst_15019 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15020 = cljs.core.async.untap_STAR_.call(null,m,inst_15015);var state_15047__$1 = (function (){var statearr_15076 = state_15047;(statearr_15076[21] = inst_15019);
return statearr_15076;
})();var statearr_15077_15154 = state_15047__$1;(statearr_15077_15154[2] = inst_15020);
(statearr_15077_15154[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 9))
{var inst_14976 = (state_15047[2]);var state_15047__$1 = state_15047;var statearr_15078_15155 = state_15047__$1;(statearr_15078_15155[2] = inst_14976);
(statearr_15078_15155[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 41))
{var inst_15006 = (state_15047[12]);var inst_15022 = (state_15047[2]);var inst_15023 = cljs.core.next.call(null,inst_15006);var inst_14987 = inst_15023;var inst_14988 = null;var inst_14989 = 0;var inst_14990 = 0;var state_15047__$1 = (function (){var statearr_15079 = state_15047;(statearr_15079[22] = inst_15022);
(statearr_15079[7] = inst_14987);
(statearr_15079[8] = inst_14988);
(statearr_15079[9] = inst_14989);
(statearr_15079[10] = inst_14990);
return statearr_15079;
})();var statearr_15080_15156 = state_15047__$1;(statearr_15080_15156[2] = null);
(statearr_15080_15156[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 10))
{var inst_14931 = (state_15047[14]);var inst_14929 = (state_15047[17]);var inst_14937 = cljs.core._nth.call(null,inst_14929,inst_14931);var inst_14938 = cljs.core.nth.call(null,inst_14937,0,null);var inst_14939 = cljs.core.nth.call(null,inst_14937,1,null);var state_15047__$1 = (function (){var statearr_15081 = state_15047;(statearr_15081[23] = inst_14938);
return statearr_15081;
})();if(cljs.core.truth_(inst_14939))
{var statearr_15082_15157 = state_15047__$1;(statearr_15082_15157[1] = 13);
} else
{var statearr_15083_15158 = state_15047__$1;(statearr_15083_15158[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 42))
{var state_15047__$1 = state_15047;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15047__$1,45,dchan);
} else
{if((state_val_15048 === 11))
{var inst_14948 = (state_15047[24]);var inst_14928 = (state_15047[16]);var inst_14948__$1 = cljs.core.seq.call(null,inst_14928);var state_15047__$1 = (function (){var statearr_15084 = state_15047;(statearr_15084[24] = inst_14948__$1);
return statearr_15084;
})();if(inst_14948__$1)
{var statearr_15085_15159 = state_15047__$1;(statearr_15085_15159[1] = 16);
} else
{var statearr_15086_15160 = state_15047__$1;(statearr_15086_15160[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 43))
{var state_15047__$1 = state_15047;var statearr_15087_15161 = state_15047__$1;(statearr_15087_15161[2] = null);
(statearr_15087_15161[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 12))
{var inst_14974 = (state_15047[2]);var state_15047__$1 = state_15047;var statearr_15088_15162 = state_15047__$1;(statearr_15088_15162[2] = inst_14974);
(statearr_15088_15162[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 44))
{var inst_15040 = (state_15047[2]);var state_15047__$1 = (function (){var statearr_15089 = state_15047;(statearr_15089[25] = inst_15040);
return statearr_15089;
})();var statearr_15090_15163 = state_15047__$1;(statearr_15090_15163[2] = null);
(statearr_15090_15163[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 13))
{var inst_14938 = (state_15047[23]);var inst_14941 = cljs.core.async.close_BANG_.call(null,inst_14938);var state_15047__$1 = state_15047;var statearr_15091_15164 = state_15047__$1;(statearr_15091_15164[2] = inst_14941);
(statearr_15091_15164[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 45))
{var inst_15037 = (state_15047[2]);var state_15047__$1 = state_15047;var statearr_15095_15165 = state_15047__$1;(statearr_15095_15165[2] = inst_15037);
(statearr_15095_15165[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 14))
{var state_15047__$1 = state_15047;var statearr_15096_15166 = state_15047__$1;(statearr_15096_15166[2] = null);
(statearr_15096_15166[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 15))
{var inst_14931 = (state_15047[14]);var inst_14930 = (state_15047[15]);var inst_14928 = (state_15047[16]);var inst_14929 = (state_15047[17]);var inst_14944 = (state_15047[2]);var inst_14945 = (inst_14931 + 1);var tmp15092 = inst_14930;var tmp15093 = inst_14928;var tmp15094 = inst_14929;var inst_14928__$1 = tmp15093;var inst_14929__$1 = tmp15094;var inst_14930__$1 = tmp15092;var inst_14931__$1 = inst_14945;var state_15047__$1 = (function (){var statearr_15097 = state_15047;(statearr_15097[14] = inst_14931__$1);
(statearr_15097[15] = inst_14930__$1);
(statearr_15097[26] = inst_14944);
(statearr_15097[16] = inst_14928__$1);
(statearr_15097[17] = inst_14929__$1);
return statearr_15097;
})();var statearr_15098_15167 = state_15047__$1;(statearr_15098_15167[2] = null);
(statearr_15098_15167[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 16))
{var inst_14948 = (state_15047[24]);var inst_14950 = cljs.core.chunked_seq_QMARK_.call(null,inst_14948);var state_15047__$1 = state_15047;if(inst_14950)
{var statearr_15099_15168 = state_15047__$1;(statearr_15099_15168[1] = 19);
} else
{var statearr_15100_15169 = state_15047__$1;(statearr_15100_15169[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 17))
{var state_15047__$1 = state_15047;var statearr_15101_15170 = state_15047__$1;(statearr_15101_15170[2] = null);
(statearr_15101_15170[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 18))
{var inst_14972 = (state_15047[2]);var state_15047__$1 = state_15047;var statearr_15102_15171 = state_15047__$1;(statearr_15102_15171[2] = inst_14972);
(statearr_15102_15171[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 19))
{var inst_14948 = (state_15047[24]);var inst_14952 = cljs.core.chunk_first.call(null,inst_14948);var inst_14953 = cljs.core.chunk_rest.call(null,inst_14948);var inst_14954 = cljs.core.count.call(null,inst_14952);var inst_14928 = inst_14953;var inst_14929 = inst_14952;var inst_14930 = inst_14954;var inst_14931 = 0;var state_15047__$1 = (function (){var statearr_15103 = state_15047;(statearr_15103[14] = inst_14931);
(statearr_15103[15] = inst_14930);
(statearr_15103[16] = inst_14928);
(statearr_15103[17] = inst_14929);
return statearr_15103;
})();var statearr_15104_15172 = state_15047__$1;(statearr_15104_15172[2] = null);
(statearr_15104_15172[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 20))
{var inst_14948 = (state_15047[24]);var inst_14958 = cljs.core.first.call(null,inst_14948);var inst_14959 = cljs.core.nth.call(null,inst_14958,0,null);var inst_14960 = cljs.core.nth.call(null,inst_14958,1,null);var state_15047__$1 = (function (){var statearr_15105 = state_15047;(statearr_15105[27] = inst_14959);
return statearr_15105;
})();if(cljs.core.truth_(inst_14960))
{var statearr_15106_15173 = state_15047__$1;(statearr_15106_15173[1] = 22);
} else
{var statearr_15107_15174 = state_15047__$1;(statearr_15107_15174[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 21))
{var inst_14969 = (state_15047[2]);var state_15047__$1 = state_15047;var statearr_15108_15175 = state_15047__$1;(statearr_15108_15175[2] = inst_14969);
(statearr_15108_15175[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 22))
{var inst_14959 = (state_15047[27]);var inst_14962 = cljs.core.async.close_BANG_.call(null,inst_14959);var state_15047__$1 = state_15047;var statearr_15109_15176 = state_15047__$1;(statearr_15109_15176[2] = inst_14962);
(statearr_15109_15176[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 23))
{var state_15047__$1 = state_15047;var statearr_15110_15177 = state_15047__$1;(statearr_15110_15177[2] = null);
(statearr_15110_15177[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 24))
{var inst_14948 = (state_15047[24]);var inst_14965 = (state_15047[2]);var inst_14966 = cljs.core.next.call(null,inst_14948);var inst_14928 = inst_14966;var inst_14929 = null;var inst_14930 = 0;var inst_14931 = 0;var state_15047__$1 = (function (){var statearr_15111 = state_15047;(statearr_15111[14] = inst_14931);
(statearr_15111[28] = inst_14965);
(statearr_15111[15] = inst_14930);
(statearr_15111[16] = inst_14928);
(statearr_15111[17] = inst_14929);
return statearr_15111;
})();var statearr_15112_15178 = state_15047__$1;(statearr_15112_15178[2] = null);
(statearr_15112_15178[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 25))
{var inst_14989 = (state_15047[9]);var inst_14990 = (state_15047[10]);var inst_14992 = (inst_14990 < inst_14989);var inst_14993 = inst_14992;var state_15047__$1 = state_15047;if(cljs.core.truth_(inst_14993))
{var statearr_15113_15179 = state_15047__$1;(statearr_15113_15179[1] = 27);
} else
{var statearr_15114_15180 = state_15047__$1;(statearr_15114_15180[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 26))
{var inst_14979 = (state_15047[19]);var inst_15033 = (state_15047[2]);var inst_15034 = cljs.core.seq.call(null,inst_14979);var state_15047__$1 = (function (){var statearr_15115 = state_15047;(statearr_15115[29] = inst_15033);
return statearr_15115;
})();if(inst_15034)
{var statearr_15116_15181 = state_15047__$1;(statearr_15116_15181[1] = 42);
} else
{var statearr_15117_15182 = state_15047__$1;(statearr_15117_15182[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 27))
{var inst_14988 = (state_15047[8]);var inst_14995 = (state_15047[30]);var inst_14919 = (state_15047[13]);var inst_14990 = (state_15047[10]);var inst_14995__$1 = cljs.core._nth.call(null,inst_14988,inst_14990);var inst_14996 = cljs.core.async.put_BANG_.call(null,inst_14995__$1,inst_14919,done);var state_15047__$1 = (function (){var statearr_15118 = state_15047;(statearr_15118[30] = inst_14995__$1);
return statearr_15118;
})();if(cljs.core.truth_(inst_14996))
{var statearr_15119_15183 = state_15047__$1;(statearr_15119_15183[1] = 30);
} else
{var statearr_15120_15184 = state_15047__$1;(statearr_15120_15184[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 28))
{var inst_14987 = (state_15047[7]);var inst_15006 = (state_15047[12]);var inst_15006__$1 = cljs.core.seq.call(null,inst_14987);var state_15047__$1 = (function (){var statearr_15121 = state_15047;(statearr_15121[12] = inst_15006__$1);
return statearr_15121;
})();if(inst_15006__$1)
{var statearr_15122_15185 = state_15047__$1;(statearr_15122_15185[1] = 33);
} else
{var statearr_15123_15186 = state_15047__$1;(statearr_15123_15186[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 29))
{var inst_15031 = (state_15047[2]);var state_15047__$1 = state_15047;var statearr_15124_15187 = state_15047__$1;(statearr_15124_15187[2] = inst_15031);
(statearr_15124_15187[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 30))
{var state_15047__$1 = state_15047;var statearr_15125_15188 = state_15047__$1;(statearr_15125_15188[2] = null);
(statearr_15125_15188[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15048 === 31))
{var inst_14995 = (state_15047[30]);var inst_14999 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15000 = cljs.core.async.untap_STAR_.call(null,m,inst_14995);var state_15047__$1 = (function (){var statearr_15126 = state_15047;(statearr_15126[31] = inst_14999);
return statearr_15126;
})();var statearr_15127_15189 = state_15047__$1;(statearr_15127_15189[2] = inst_15000);
(statearr_15127_15189[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10112__auto__){
return (function() {
var state_machine__10113__auto__ = null;
var state_machine__10113__auto____0 = (function (){var statearr_15131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15131[0] = state_machine__10113__auto__);
(statearr_15131[1] = 1);
return statearr_15131;
});
var state_machine__10113__auto____1 = (function (state_15047){while(true){
var ret_value__10114__auto__ = (function (){try{while(true){
var result__10115__auto__ = switch__10112__auto__.call(null,state_15047);if(cljs.core.keyword_identical_QMARK_.call(null,result__10115__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10115__auto__;
}
break;
}
}catch (e15132){if((e15132 instanceof Object))
{var ex__10116__auto__ = e15132;var statearr_15133_15190 = state_15047;(statearr_15133_15190[5] = ex__10116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15047);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15132;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10114__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15191 = state_15047;
state_15047 = G__15191;
continue;
}
} else
{return ret_value__10114__auto__;
}
break;
}
});
state_machine__10113__auto__ = function(state_15047){
switch(arguments.length){
case 0:
return state_machine__10113__auto____0.call(this);
case 1:
return state_machine__10113__auto____1.call(this,state_15047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10113__auto____0;
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10113__auto____1;
return state_machine__10113__auto__;
})()
;})(switch__10112__auto__))
})();var state__10184__auto__ = (function (){var statearr_15134 = f__10183__auto__.call(null);(statearr_15134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10182__auto___15135);
return statearr_15134;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10184__auto__);
}));
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
cljs.core.async.Mix = (function (){var obj15193 = {};return obj15193;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7789__auto__ = m;if(and__7789__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7789__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8428__auto__ = (((m == null))?null:m);return (function (){var or__7801__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8428__auto__)]);if(or__7801__auto__)
{return or__7801__auto__;
} else
{var or__7801__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7801__auto____$1)
{return or__7801__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7789__auto__ = m;if(and__7789__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7789__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8428__auto__ = (((m == null))?null:m);return (function (){var or__7801__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8428__auto__)]);if(or__7801__auto__)
{return or__7801__auto__;
} else
{var or__7801__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7801__auto____$1)
{return or__7801__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7789__auto__ = m;if(and__7789__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7789__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8428__auto__ = (((m == null))?null:m);return (function (){var or__7801__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8428__auto__)]);if(or__7801__auto__)
{return or__7801__auto__;
} else
{var or__7801__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7801__auto____$1)
{return or__7801__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7789__auto__ = m;if(and__7789__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7789__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8428__auto__ = (((m == null))?null:m);return (function (){var or__7801__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8428__auto__)]);if(or__7801__auto__)
{return or__7801__auto__;
} else
{var or__7801__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7801__auto____$1)
{return or__7801__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7789__auto__ = m;if(and__7789__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7789__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8428__auto__ = (((m == null))?null:m);return (function (){var or__7801__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8428__auto__)]);if(or__7801__auto__)
{return or__7801__auto__;
} else
{var or__7801__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7801__auto____$1)
{return or__7801__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t15313 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15313 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15314){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta15314 = meta15314;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15313.cljs$lang$type = true;
cljs.core.async.t15313.cljs$lang$ctorStr = "cljs.core.async/t15313";
cljs.core.async.t15313.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8368__auto__,writer__8369__auto__,opt__8370__auto__){return cljs.core._write.call(null,writer__8369__auto__,"cljs.core.async/t15313");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15313.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15313.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15313.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15313.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15313.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15313.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15313.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15313.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15315){var self__ = this;
var _15315__$1 = this;return self__.meta15314;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15315,meta15314__$1){var self__ = this;
var _15315__$1 = this;return (new cljs.core.async.t15313(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15314__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15313 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15313(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15314){return (new cljs.core.async.t15313(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15314));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15313(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10182__auto___15432 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10183__auto__ = (function (){var switch__10112__auto__ = (function (state_15385){var state_val_15386 = (state_15385[1]);if((state_val_15386 === 1))
{var inst_15319 = (state_15385[7]);var inst_15319__$1 = calc_state.call(null);var inst_15320 = cljs.core.seq_QMARK_.call(null,inst_15319__$1);var state_15385__$1 = (function (){var statearr_15387 = state_15385;(statearr_15387[7] = inst_15319__$1);
return statearr_15387;
})();if(inst_15320)
{var statearr_15388_15433 = state_15385__$1;(statearr_15388_15433[1] = 2);
} else
{var statearr_15389_15434 = state_15385__$1;(statearr_15389_15434[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 2))
{var inst_15319 = (state_15385[7]);var inst_15322 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15319);var state_15385__$1 = state_15385;var statearr_15390_15435 = state_15385__$1;(statearr_15390_15435[2] = inst_15322);
(statearr_15390_15435[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 3))
{var inst_15319 = (state_15385[7]);var state_15385__$1 = state_15385;var statearr_15391_15436 = state_15385__$1;(statearr_15391_15436[2] = inst_15319);
(statearr_15391_15436[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 4))
{var inst_15319 = (state_15385[7]);var inst_15325 = (state_15385[2]);var inst_15326 = cljs.core.get.call(null,inst_15325,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15327 = cljs.core.get.call(null,inst_15325,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15328 = cljs.core.get.call(null,inst_15325,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15329 = inst_15319;var state_15385__$1 = (function (){var statearr_15392 = state_15385;(statearr_15392[8] = inst_15328);
(statearr_15392[9] = inst_15329);
(statearr_15392[10] = inst_15327);
(statearr_15392[11] = inst_15326);
return statearr_15392;
})();var statearr_15393_15437 = state_15385__$1;(statearr_15393_15437[2] = null);
(statearr_15393_15437[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 5))
{var inst_15329 = (state_15385[9]);var inst_15332 = cljs.core.seq_QMARK_.call(null,inst_15329);var state_15385__$1 = state_15385;if(inst_15332)
{var statearr_15394_15438 = state_15385__$1;(statearr_15394_15438[1] = 7);
} else
{var statearr_15395_15439 = state_15385__$1;(statearr_15395_15439[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 6))
{var inst_15383 = (state_15385[2]);var state_15385__$1 = state_15385;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15385__$1,inst_15383);
} else
{if((state_val_15386 === 7))
{var inst_15329 = (state_15385[9]);var inst_15334 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15329);var state_15385__$1 = state_15385;var statearr_15396_15440 = state_15385__$1;(statearr_15396_15440[2] = inst_15334);
(statearr_15396_15440[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 8))
{var inst_15329 = (state_15385[9]);var state_15385__$1 = state_15385;var statearr_15397_15441 = state_15385__$1;(statearr_15397_15441[2] = inst_15329);
(statearr_15397_15441[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 9))
{var inst_15337 = (state_15385[12]);var inst_15337__$1 = (state_15385[2]);var inst_15338 = cljs.core.get.call(null,inst_15337__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15339 = cljs.core.get.call(null,inst_15337__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15340 = cljs.core.get.call(null,inst_15337__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15385__$1 = (function (){var statearr_15398 = state_15385;(statearr_15398[13] = inst_15339);
(statearr_15398[12] = inst_15337__$1);
(statearr_15398[14] = inst_15340);
return statearr_15398;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15385__$1,10,inst_15338);
} else
{if((state_val_15386 === 10))
{var inst_15344 = (state_15385[15]);var inst_15345 = (state_15385[16]);var inst_15343 = (state_15385[2]);var inst_15344__$1 = cljs.core.nth.call(null,inst_15343,0,null);var inst_15345__$1 = cljs.core.nth.call(null,inst_15343,1,null);var inst_15346 = (inst_15344__$1 == null);var inst_15347 = cljs.core._EQ_.call(null,inst_15345__$1,change);var inst_15348 = (inst_15346) || (inst_15347);var state_15385__$1 = (function (){var statearr_15399 = state_15385;(statearr_15399[15] = inst_15344__$1);
(statearr_15399[16] = inst_15345__$1);
return statearr_15399;
})();if(cljs.core.truth_(inst_15348))
{var statearr_15400_15442 = state_15385__$1;(statearr_15400_15442[1] = 11);
} else
{var statearr_15401_15443 = state_15385__$1;(statearr_15401_15443[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 11))
{var inst_15344 = (state_15385[15]);var inst_15350 = (inst_15344 == null);var state_15385__$1 = state_15385;if(cljs.core.truth_(inst_15350))
{var statearr_15402_15444 = state_15385__$1;(statearr_15402_15444[1] = 14);
} else
{var statearr_15403_15445 = state_15385__$1;(statearr_15403_15445[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 12))
{var inst_15345 = (state_15385[16]);var inst_15340 = (state_15385[14]);var inst_15359 = (state_15385[17]);var inst_15359__$1 = inst_15340.call(null,inst_15345);var state_15385__$1 = (function (){var statearr_15404 = state_15385;(statearr_15404[17] = inst_15359__$1);
return statearr_15404;
})();if(cljs.core.truth_(inst_15359__$1))
{var statearr_15405_15446 = state_15385__$1;(statearr_15405_15446[1] = 17);
} else
{var statearr_15406_15447 = state_15385__$1;(statearr_15406_15447[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 13))
{var inst_15381 = (state_15385[2]);var state_15385__$1 = state_15385;var statearr_15407_15448 = state_15385__$1;(statearr_15407_15448[2] = inst_15381);
(statearr_15407_15448[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 14))
{var inst_15345 = (state_15385[16]);var inst_15352 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15345);var state_15385__$1 = state_15385;var statearr_15408_15449 = state_15385__$1;(statearr_15408_15449[2] = inst_15352);
(statearr_15408_15449[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 15))
{var state_15385__$1 = state_15385;var statearr_15409_15450 = state_15385__$1;(statearr_15409_15450[2] = null);
(statearr_15409_15450[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 16))
{var inst_15355 = (state_15385[2]);var inst_15356 = calc_state.call(null);var inst_15329 = inst_15356;var state_15385__$1 = (function (){var statearr_15410 = state_15385;(statearr_15410[9] = inst_15329);
(statearr_15410[18] = inst_15355);
return statearr_15410;
})();var statearr_15411_15451 = state_15385__$1;(statearr_15411_15451[2] = null);
(statearr_15411_15451[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 17))
{var inst_15359 = (state_15385[17]);var state_15385__$1 = state_15385;var statearr_15412_15452 = state_15385__$1;(statearr_15412_15452[2] = inst_15359);
(statearr_15412_15452[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 18))
{var inst_15339 = (state_15385[13]);var inst_15345 = (state_15385[16]);var inst_15340 = (state_15385[14]);var inst_15362 = cljs.core.empty_QMARK_.call(null,inst_15340);var inst_15363 = inst_15339.call(null,inst_15345);var inst_15364 = cljs.core.not.call(null,inst_15363);var inst_15365 = (inst_15362) && (inst_15364);var state_15385__$1 = state_15385;var statearr_15413_15453 = state_15385__$1;(statearr_15413_15453[2] = inst_15365);
(statearr_15413_15453[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 19))
{var inst_15367 = (state_15385[2]);var state_15385__$1 = state_15385;if(cljs.core.truth_(inst_15367))
{var statearr_15414_15454 = state_15385__$1;(statearr_15414_15454[1] = 20);
} else
{var statearr_15415_15455 = state_15385__$1;(statearr_15415_15455[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 20))
{var inst_15344 = (state_15385[15]);var state_15385__$1 = state_15385;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15385__$1,23,out,inst_15344);
} else
{if((state_val_15386 === 21))
{var inst_15337 = (state_15385[12]);var inst_15329 = inst_15337;var state_15385__$1 = (function (){var statearr_15416 = state_15385;(statearr_15416[9] = inst_15329);
return statearr_15416;
})();var statearr_15417_15456 = state_15385__$1;(statearr_15417_15456[2] = null);
(statearr_15417_15456[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 22))
{var inst_15379 = (state_15385[2]);var state_15385__$1 = state_15385;var statearr_15418_15457 = state_15385__$1;(statearr_15418_15457[2] = inst_15379);
(statearr_15418_15457[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 23))
{var inst_15370 = (state_15385[2]);var state_15385__$1 = state_15385;if(cljs.core.truth_(inst_15370))
{var statearr_15419_15458 = state_15385__$1;(statearr_15419_15458[1] = 24);
} else
{var statearr_15420_15459 = state_15385__$1;(statearr_15420_15459[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 24))
{var inst_15337 = (state_15385[12]);var inst_15329 = inst_15337;var state_15385__$1 = (function (){var statearr_15421 = state_15385;(statearr_15421[9] = inst_15329);
return statearr_15421;
})();var statearr_15422_15460 = state_15385__$1;(statearr_15422_15460[2] = null);
(statearr_15422_15460[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 25))
{var state_15385__$1 = state_15385;var statearr_15423_15461 = state_15385__$1;(statearr_15423_15461[2] = null);
(statearr_15423_15461[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15386 === 26))
{var inst_15375 = (state_15385[2]);var state_15385__$1 = state_15385;var statearr_15424_15462 = state_15385__$1;(statearr_15424_15462[2] = inst_15375);
(statearr_15424_15462[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10112__auto__){
return (function() {
var state_machine__10113__auto__ = null;
var state_machine__10113__auto____0 = (function (){var statearr_15428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15428[0] = state_machine__10113__auto__);
(statearr_15428[1] = 1);
return statearr_15428;
});
var state_machine__10113__auto____1 = (function (state_15385){while(true){
var ret_value__10114__auto__ = (function (){try{while(true){
var result__10115__auto__ = switch__10112__auto__.call(null,state_15385);if(cljs.core.keyword_identical_QMARK_.call(null,result__10115__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10115__auto__;
}
break;
}
}catch (e15429){if((e15429 instanceof Object))
{var ex__10116__auto__ = e15429;var statearr_15430_15463 = state_15385;(statearr_15430_15463[5] = ex__10116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15385);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15429;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10114__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15464 = state_15385;
state_15385 = G__15464;
continue;
}
} else
{return ret_value__10114__auto__;
}
break;
}
});
state_machine__10113__auto__ = function(state_15385){
switch(arguments.length){
case 0:
return state_machine__10113__auto____0.call(this);
case 1:
return state_machine__10113__auto____1.call(this,state_15385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10113__auto____0;
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10113__auto____1;
return state_machine__10113__auto__;
})()
;})(switch__10112__auto__))
})();var state__10184__auto__ = (function (){var statearr_15431 = f__10183__auto__.call(null);(statearr_15431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10182__auto___15432);
return statearr_15431;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10184__auto__);
}));
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
cljs.core.async.Pub = (function (){var obj15466 = {};return obj15466;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7789__auto__ = p;if(and__7789__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7789__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8428__auto__ = (((p == null))?null:p);return (function (){var or__7801__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8428__auto__)]);if(or__7801__auto__)
{return or__7801__auto__;
} else
{var or__7801__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7801__auto____$1)
{return or__7801__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7789__auto__ = p;if(and__7789__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7789__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8428__auto__ = (((p == null))?null:p);return (function (){var or__7801__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8428__auto__)]);if(or__7801__auto__)
{return or__7801__auto__;
} else
{var or__7801__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7801__auto____$1)
{return or__7801__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7789__auto__ = p;if(and__7789__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7789__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8428__auto__ = (((p == null))?null:p);return (function (){var or__7801__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8428__auto__)]);if(or__7801__auto__)
{return or__7801__auto__;
} else
{var or__7801__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7801__auto____$1)
{return or__7801__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7789__auto__ = p;if(and__7789__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7789__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8428__auto__ = (((p == null))?null:p);return (function (){var or__7801__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8428__auto__)]);if(or__7801__auto__)
{return or__7801__auto__;
} else
{var or__7801__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7801__auto____$1)
{return or__7801__auto____$1;
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
return (function (topic){var or__7801__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7801__auto__))
{return or__7801__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7801__auto__,mults){
return (function (p1__15467_SHARP_){if(cljs.core.truth_(p1__15467_SHARP_.call(null,topic)))
{return p1__15467_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15467_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7801__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15582 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15582 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15583){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15583 = meta15583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15582.cljs$lang$type = true;
cljs.core.async.t15582.cljs$lang$ctorStr = "cljs.core.async/t15582";
cljs.core.async.t15582.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8368__auto__,writer__8369__auto__,opt__8370__auto__){return cljs.core._write.call(null,writer__8369__auto__,"cljs.core.async/t15582");
});})(mults,ensure_mult))
;
cljs.core.async.t15582.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15582.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15582.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15582.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15582.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15582.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15582.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15584){var self__ = this;
var _15584__$1 = this;return self__.meta15583;
});})(mults,ensure_mult))
;
cljs.core.async.t15582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15584,meta15583__$1){var self__ = this;
var _15584__$1 = this;return (new cljs.core.async.t15582(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15583__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15582 = ((function (mults,ensure_mult){
return (function __GT_t15582(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15583){return (new cljs.core.async.t15582(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15583));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15582(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10182__auto___15696 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10183__auto__ = (function (){var switch__10112__auto__ = (function (state_15652){var state_val_15653 = (state_15652[1]);if((state_val_15653 === 1))
{var state_15652__$1 = state_15652;var statearr_15654_15697 = state_15652__$1;(statearr_15654_15697[2] = null);
(statearr_15654_15697[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 2))
{var state_15652__$1 = state_15652;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15652__$1,4,ch);
} else
{if((state_val_15653 === 3))
{var inst_15650 = (state_15652[2]);var state_15652__$1 = state_15652;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15652__$1,inst_15650);
} else
{if((state_val_15653 === 4))
{var inst_15587 = (state_15652[7]);var inst_15587__$1 = (state_15652[2]);var inst_15588 = (inst_15587__$1 == null);var state_15652__$1 = (function (){var statearr_15655 = state_15652;(statearr_15655[7] = inst_15587__$1);
return statearr_15655;
})();if(cljs.core.truth_(inst_15588))
{var statearr_15656_15698 = state_15652__$1;(statearr_15656_15698[1] = 5);
} else
{var statearr_15657_15699 = state_15652__$1;(statearr_15657_15699[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 5))
{var inst_15594 = cljs.core.deref.call(null,mults);var inst_15595 = cljs.core.vals.call(null,inst_15594);var inst_15596 = cljs.core.seq.call(null,inst_15595);var inst_15597 = inst_15596;var inst_15598 = null;var inst_15599 = 0;var inst_15600 = 0;var state_15652__$1 = (function (){var statearr_15658 = state_15652;(statearr_15658[8] = inst_15597);
(statearr_15658[9] = inst_15598);
(statearr_15658[10] = inst_15600);
(statearr_15658[11] = inst_15599);
return statearr_15658;
})();var statearr_15659_15700 = state_15652__$1;(statearr_15659_15700[2] = null);
(statearr_15659_15700[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 6))
{var inst_15587 = (state_15652[7]);var inst_15635 = (state_15652[12]);var inst_15635__$1 = topic_fn.call(null,inst_15587);var inst_15636 = cljs.core.deref.call(null,mults);var inst_15637 = cljs.core.get.call(null,inst_15636,inst_15635__$1);var inst_15638 = cljs.core.async.muxch_STAR_.call(null,inst_15637);var state_15652__$1 = (function (){var statearr_15660 = state_15652;(statearr_15660[12] = inst_15635__$1);
return statearr_15660;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15652__$1,19,inst_15638,inst_15587);
} else
{if((state_val_15653 === 7))
{var inst_15648 = (state_15652[2]);var state_15652__$1 = state_15652;var statearr_15661_15701 = state_15652__$1;(statearr_15661_15701[2] = inst_15648);
(statearr_15661_15701[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 8))
{var inst_15600 = (state_15652[10]);var inst_15599 = (state_15652[11]);var inst_15602 = (inst_15600 < inst_15599);var inst_15603 = inst_15602;var state_15652__$1 = state_15652;if(cljs.core.truth_(inst_15603))
{var statearr_15665_15702 = state_15652__$1;(statearr_15665_15702[1] = 10);
} else
{var statearr_15666_15703 = state_15652__$1;(statearr_15666_15703[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 9))
{var inst_15633 = (state_15652[2]);var state_15652__$1 = state_15652;var statearr_15667_15704 = state_15652__$1;(statearr_15667_15704[2] = inst_15633);
(statearr_15667_15704[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 10))
{var inst_15597 = (state_15652[8]);var inst_15598 = (state_15652[9]);var inst_15600 = (state_15652[10]);var inst_15599 = (state_15652[11]);var inst_15605 = cljs.core._nth.call(null,inst_15598,inst_15600);var inst_15606 = cljs.core.async.muxch_STAR_.call(null,inst_15605);var inst_15607 = cljs.core.async.close_BANG_.call(null,inst_15606);var inst_15608 = (inst_15600 + 1);var tmp15662 = inst_15597;var tmp15663 = inst_15598;var tmp15664 = inst_15599;var inst_15597__$1 = tmp15662;var inst_15598__$1 = tmp15663;var inst_15599__$1 = tmp15664;var inst_15600__$1 = inst_15608;var state_15652__$1 = (function (){var statearr_15668 = state_15652;(statearr_15668[8] = inst_15597__$1);
(statearr_15668[13] = inst_15607);
(statearr_15668[9] = inst_15598__$1);
(statearr_15668[10] = inst_15600__$1);
(statearr_15668[11] = inst_15599__$1);
return statearr_15668;
})();var statearr_15669_15705 = state_15652__$1;(statearr_15669_15705[2] = null);
(statearr_15669_15705[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 11))
{var inst_15611 = (state_15652[14]);var inst_15597 = (state_15652[8]);var inst_15611__$1 = cljs.core.seq.call(null,inst_15597);var state_15652__$1 = (function (){var statearr_15670 = state_15652;(statearr_15670[14] = inst_15611__$1);
return statearr_15670;
})();if(inst_15611__$1)
{var statearr_15671_15706 = state_15652__$1;(statearr_15671_15706[1] = 13);
} else
{var statearr_15672_15707 = state_15652__$1;(statearr_15672_15707[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 12))
{var inst_15631 = (state_15652[2]);var state_15652__$1 = state_15652;var statearr_15673_15708 = state_15652__$1;(statearr_15673_15708[2] = inst_15631);
(statearr_15673_15708[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 13))
{var inst_15611 = (state_15652[14]);var inst_15613 = cljs.core.chunked_seq_QMARK_.call(null,inst_15611);var state_15652__$1 = state_15652;if(inst_15613)
{var statearr_15674_15709 = state_15652__$1;(statearr_15674_15709[1] = 16);
} else
{var statearr_15675_15710 = state_15652__$1;(statearr_15675_15710[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 14))
{var state_15652__$1 = state_15652;var statearr_15676_15711 = state_15652__$1;(statearr_15676_15711[2] = null);
(statearr_15676_15711[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 15))
{var inst_15629 = (state_15652[2]);var state_15652__$1 = state_15652;var statearr_15677_15712 = state_15652__$1;(statearr_15677_15712[2] = inst_15629);
(statearr_15677_15712[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 16))
{var inst_15611 = (state_15652[14]);var inst_15615 = cljs.core.chunk_first.call(null,inst_15611);var inst_15616 = cljs.core.chunk_rest.call(null,inst_15611);var inst_15617 = cljs.core.count.call(null,inst_15615);var inst_15597 = inst_15616;var inst_15598 = inst_15615;var inst_15599 = inst_15617;var inst_15600 = 0;var state_15652__$1 = (function (){var statearr_15678 = state_15652;(statearr_15678[8] = inst_15597);
(statearr_15678[9] = inst_15598);
(statearr_15678[10] = inst_15600);
(statearr_15678[11] = inst_15599);
return statearr_15678;
})();var statearr_15679_15713 = state_15652__$1;(statearr_15679_15713[2] = null);
(statearr_15679_15713[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 17))
{var inst_15611 = (state_15652[14]);var inst_15620 = cljs.core.first.call(null,inst_15611);var inst_15621 = cljs.core.async.muxch_STAR_.call(null,inst_15620);var inst_15622 = cljs.core.async.close_BANG_.call(null,inst_15621);var inst_15623 = cljs.core.next.call(null,inst_15611);var inst_15597 = inst_15623;var inst_15598 = null;var inst_15599 = 0;var inst_15600 = 0;var state_15652__$1 = (function (){var statearr_15680 = state_15652;(statearr_15680[15] = inst_15622);
(statearr_15680[8] = inst_15597);
(statearr_15680[9] = inst_15598);
(statearr_15680[10] = inst_15600);
(statearr_15680[11] = inst_15599);
return statearr_15680;
})();var statearr_15681_15714 = state_15652__$1;(statearr_15681_15714[2] = null);
(statearr_15681_15714[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 18))
{var inst_15626 = (state_15652[2]);var state_15652__$1 = state_15652;var statearr_15682_15715 = state_15652__$1;(statearr_15682_15715[2] = inst_15626);
(statearr_15682_15715[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 19))
{var inst_15640 = (state_15652[2]);var state_15652__$1 = state_15652;if(cljs.core.truth_(inst_15640))
{var statearr_15683_15716 = state_15652__$1;(statearr_15683_15716[1] = 20);
} else
{var statearr_15684_15717 = state_15652__$1;(statearr_15684_15717[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 20))
{var state_15652__$1 = state_15652;var statearr_15685_15718 = state_15652__$1;(statearr_15685_15718[2] = null);
(statearr_15685_15718[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 21))
{var inst_15635 = (state_15652[12]);var inst_15643 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15635);var state_15652__$1 = state_15652;var statearr_15686_15719 = state_15652__$1;(statearr_15686_15719[2] = inst_15643);
(statearr_15686_15719[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15653 === 22))
{var inst_15645 = (state_15652[2]);var state_15652__$1 = (function (){var statearr_15687 = state_15652;(statearr_15687[16] = inst_15645);
return statearr_15687;
})();var statearr_15688_15720 = state_15652__$1;(statearr_15688_15720[2] = null);
(statearr_15688_15720[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10112__auto__){
return (function() {
var state_machine__10113__auto__ = null;
var state_machine__10113__auto____0 = (function (){var statearr_15692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15692[0] = state_machine__10113__auto__);
(statearr_15692[1] = 1);
return statearr_15692;
});
var state_machine__10113__auto____1 = (function (state_15652){while(true){
var ret_value__10114__auto__ = (function (){try{while(true){
var result__10115__auto__ = switch__10112__auto__.call(null,state_15652);if(cljs.core.keyword_identical_QMARK_.call(null,result__10115__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10115__auto__;
}
break;
}
}catch (e15693){if((e15693 instanceof Object))
{var ex__10116__auto__ = e15693;var statearr_15694_15721 = state_15652;(statearr_15694_15721[5] = ex__10116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15652);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15693;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10114__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15722 = state_15652;
state_15652 = G__15722;
continue;
}
} else
{return ret_value__10114__auto__;
}
break;
}
});
state_machine__10113__auto__ = function(state_15652){
switch(arguments.length){
case 0:
return state_machine__10113__auto____0.call(this);
case 1:
return state_machine__10113__auto____1.call(this,state_15652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10113__auto____0;
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10113__auto____1;
return state_machine__10113__auto__;
})()
;})(switch__10112__auto__))
})();var state__10184__auto__ = (function (){var statearr_15695 = f__10183__auto__.call(null);(statearr_15695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10182__auto___15696);
return statearr_15695;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10184__auto__);
}));
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__10182__auto___15859 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10183__auto__ = (function (){var switch__10112__auto__ = (function (state_15829){var state_val_15830 = (state_15829[1]);if((state_val_15830 === 1))
{var state_15829__$1 = state_15829;var statearr_15831_15860 = state_15829__$1;(statearr_15831_15860[2] = null);
(statearr_15831_15860[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15830 === 2))
{var inst_15792 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15793 = 0;var state_15829__$1 = (function (){var statearr_15832 = state_15829;(statearr_15832[7] = inst_15793);
(statearr_15832[8] = inst_15792);
return statearr_15832;
})();var statearr_15833_15861 = state_15829__$1;(statearr_15833_15861[2] = null);
(statearr_15833_15861[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15830 === 3))
{var inst_15827 = (state_15829[2]);var state_15829__$1 = state_15829;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15829__$1,inst_15827);
} else
{if((state_val_15830 === 4))
{var inst_15793 = (state_15829[7]);var inst_15795 = (inst_15793 < cnt);var state_15829__$1 = state_15829;if(cljs.core.truth_(inst_15795))
{var statearr_15834_15862 = state_15829__$1;(statearr_15834_15862[1] = 6);
} else
{var statearr_15835_15863 = state_15829__$1;(statearr_15835_15863[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15830 === 5))
{var inst_15813 = (state_15829[2]);var state_15829__$1 = (function (){var statearr_15836 = state_15829;(statearr_15836[9] = inst_15813);
return statearr_15836;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15829__$1,12,dchan);
} else
{if((state_val_15830 === 6))
{var state_15829__$1 = state_15829;var statearr_15837_15864 = state_15829__$1;(statearr_15837_15864[2] = null);
(statearr_15837_15864[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15830 === 7))
{var state_15829__$1 = state_15829;var statearr_15838_15865 = state_15829__$1;(statearr_15838_15865[2] = null);
(statearr_15838_15865[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15830 === 8))
{var inst_15811 = (state_15829[2]);var state_15829__$1 = state_15829;var statearr_15839_15866 = state_15829__$1;(statearr_15839_15866[2] = inst_15811);
(statearr_15839_15866[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15830 === 9))
{var inst_15793 = (state_15829[7]);var inst_15806 = (state_15829[2]);var inst_15807 = (inst_15793 + 1);var inst_15793__$1 = inst_15807;var state_15829__$1 = (function (){var statearr_15840 = state_15829;(statearr_15840[10] = inst_15806);
(statearr_15840[7] = inst_15793__$1);
return statearr_15840;
})();var statearr_15841_15867 = state_15829__$1;(statearr_15841_15867[2] = null);
(statearr_15841_15867[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15830 === 10))
{var inst_15797 = (state_15829[2]);var inst_15798 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15829__$1 = (function (){var statearr_15842 = state_15829;(statearr_15842[11] = inst_15797);
return statearr_15842;
})();var statearr_15843_15868 = state_15829__$1;(statearr_15843_15868[2] = inst_15798);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15829__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15830 === 11))
{var inst_15793 = (state_15829[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15829,10,Object,null,9);var inst_15802 = chs__$1.call(null,inst_15793);var inst_15803 = done.call(null,inst_15793);var inst_15804 = cljs.core.async.take_BANG_.call(null,inst_15802,inst_15803);var state_15829__$1 = state_15829;var statearr_15844_15869 = state_15829__$1;(statearr_15844_15869[2] = inst_15804);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15829__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15830 === 12))
{var inst_15815 = (state_15829[12]);var inst_15815__$1 = (state_15829[2]);var inst_15816 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15815__$1);var state_15829__$1 = (function (){var statearr_15845 = state_15829;(statearr_15845[12] = inst_15815__$1);
return statearr_15845;
})();if(cljs.core.truth_(inst_15816))
{var statearr_15846_15870 = state_15829__$1;(statearr_15846_15870[1] = 13);
} else
{var statearr_15847_15871 = state_15829__$1;(statearr_15847_15871[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15830 === 13))
{var inst_15818 = cljs.core.async.close_BANG_.call(null,out);var state_15829__$1 = state_15829;var statearr_15848_15872 = state_15829__$1;(statearr_15848_15872[2] = inst_15818);
(statearr_15848_15872[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15830 === 14))
{var inst_15815 = (state_15829[12]);var inst_15820 = cljs.core.apply.call(null,f,inst_15815);var state_15829__$1 = state_15829;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15829__$1,16,out,inst_15820);
} else
{if((state_val_15830 === 15))
{var inst_15825 = (state_15829[2]);var state_15829__$1 = state_15829;var statearr_15849_15873 = state_15829__$1;(statearr_15849_15873[2] = inst_15825);
(statearr_15849_15873[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15830 === 16))
{var inst_15822 = (state_15829[2]);var state_15829__$1 = (function (){var statearr_15850 = state_15829;(statearr_15850[13] = inst_15822);
return statearr_15850;
})();var statearr_15851_15874 = state_15829__$1;(statearr_15851_15874[2] = null);
(statearr_15851_15874[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10112__auto__){
return (function() {
var state_machine__10113__auto__ = null;
var state_machine__10113__auto____0 = (function (){var statearr_15855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15855[0] = state_machine__10113__auto__);
(statearr_15855[1] = 1);
return statearr_15855;
});
var state_machine__10113__auto____1 = (function (state_15829){while(true){
var ret_value__10114__auto__ = (function (){try{while(true){
var result__10115__auto__ = switch__10112__auto__.call(null,state_15829);if(cljs.core.keyword_identical_QMARK_.call(null,result__10115__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10115__auto__;
}
break;
}
}catch (e15856){if((e15856 instanceof Object))
{var ex__10116__auto__ = e15856;var statearr_15857_15875 = state_15829;(statearr_15857_15875[5] = ex__10116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15829);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15856;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10114__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15876 = state_15829;
state_15829 = G__15876;
continue;
}
} else
{return ret_value__10114__auto__;
}
break;
}
});
state_machine__10113__auto__ = function(state_15829){
switch(arguments.length){
case 0:
return state_machine__10113__auto____0.call(this);
case 1:
return state_machine__10113__auto____1.call(this,state_15829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10113__auto____0;
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10113__auto____1;
return state_machine__10113__auto__;
})()
;})(switch__10112__auto__))
})();var state__10184__auto__ = (function (){var statearr_15858 = f__10183__auto__.call(null);(statearr_15858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10182__auto___15859);
return statearr_15858;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10184__auto__);
}));
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10182__auto___15984 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10183__auto__ = (function (){var switch__10112__auto__ = (function (state_15960){var state_val_15961 = (state_15960[1]);if((state_val_15961 === 1))
{var inst_15931 = cljs.core.vec.call(null,chs);var inst_15932 = inst_15931;var state_15960__$1 = (function (){var statearr_15962 = state_15960;(statearr_15962[7] = inst_15932);
return statearr_15962;
})();var statearr_15963_15985 = state_15960__$1;(statearr_15963_15985[2] = null);
(statearr_15963_15985[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15961 === 2))
{var inst_15932 = (state_15960[7]);var inst_15934 = cljs.core.count.call(null,inst_15932);var inst_15935 = (inst_15934 > 0);var state_15960__$1 = state_15960;if(cljs.core.truth_(inst_15935))
{var statearr_15964_15986 = state_15960__$1;(statearr_15964_15986[1] = 4);
} else
{var statearr_15965_15987 = state_15960__$1;(statearr_15965_15987[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15961 === 3))
{var inst_15958 = (state_15960[2]);var state_15960__$1 = state_15960;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15960__$1,inst_15958);
} else
{if((state_val_15961 === 4))
{var inst_15932 = (state_15960[7]);var state_15960__$1 = state_15960;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15960__$1,7,inst_15932);
} else
{if((state_val_15961 === 5))
{var inst_15954 = cljs.core.async.close_BANG_.call(null,out);var state_15960__$1 = state_15960;var statearr_15966_15988 = state_15960__$1;(statearr_15966_15988[2] = inst_15954);
(statearr_15966_15988[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15961 === 6))
{var inst_15956 = (state_15960[2]);var state_15960__$1 = state_15960;var statearr_15967_15989 = state_15960__$1;(statearr_15967_15989[2] = inst_15956);
(statearr_15967_15989[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15961 === 7))
{var inst_15940 = (state_15960[8]);var inst_15939 = (state_15960[9]);var inst_15939__$1 = (state_15960[2]);var inst_15940__$1 = cljs.core.nth.call(null,inst_15939__$1,0,null);var inst_15941 = cljs.core.nth.call(null,inst_15939__$1,1,null);var inst_15942 = (inst_15940__$1 == null);var state_15960__$1 = (function (){var statearr_15968 = state_15960;(statearr_15968[10] = inst_15941);
(statearr_15968[8] = inst_15940__$1);
(statearr_15968[9] = inst_15939__$1);
return statearr_15968;
})();if(cljs.core.truth_(inst_15942))
{var statearr_15969_15990 = state_15960__$1;(statearr_15969_15990[1] = 8);
} else
{var statearr_15970_15991 = state_15960__$1;(statearr_15970_15991[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15961 === 8))
{var inst_15941 = (state_15960[10]);var inst_15940 = (state_15960[8]);var inst_15932 = (state_15960[7]);var inst_15939 = (state_15960[9]);var inst_15944 = (function (){var c = inst_15941;var v = inst_15940;var vec__15937 = inst_15939;var cs = inst_15932;return ((function (c,v,vec__15937,cs,inst_15941,inst_15940,inst_15932,inst_15939,state_val_15961){
return (function (p1__15877_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15877_SHARP_);
});
;})(c,v,vec__15937,cs,inst_15941,inst_15940,inst_15932,inst_15939,state_val_15961))
})();var inst_15945 = cljs.core.filterv.call(null,inst_15944,inst_15932);var inst_15932__$1 = inst_15945;var state_15960__$1 = (function (){var statearr_15971 = state_15960;(statearr_15971[7] = inst_15932__$1);
return statearr_15971;
})();var statearr_15972_15992 = state_15960__$1;(statearr_15972_15992[2] = null);
(statearr_15972_15992[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15961 === 9))
{var inst_15940 = (state_15960[8]);var state_15960__$1 = state_15960;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15960__$1,11,out,inst_15940);
} else
{if((state_val_15961 === 10))
{var inst_15952 = (state_15960[2]);var state_15960__$1 = state_15960;var statearr_15974_15993 = state_15960__$1;(statearr_15974_15993[2] = inst_15952);
(statearr_15974_15993[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15961 === 11))
{var inst_15932 = (state_15960[7]);var inst_15949 = (state_15960[2]);var tmp15973 = inst_15932;var inst_15932__$1 = tmp15973;var state_15960__$1 = (function (){var statearr_15975 = state_15960;(statearr_15975[11] = inst_15949);
(statearr_15975[7] = inst_15932__$1);
return statearr_15975;
})();var statearr_15976_15994 = state_15960__$1;(statearr_15976_15994[2] = null);
(statearr_15976_15994[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10112__auto__){
return (function() {
var state_machine__10113__auto__ = null;
var state_machine__10113__auto____0 = (function (){var statearr_15980 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15980[0] = state_machine__10113__auto__);
(statearr_15980[1] = 1);
return statearr_15980;
});
var state_machine__10113__auto____1 = (function (state_15960){while(true){
var ret_value__10114__auto__ = (function (){try{while(true){
var result__10115__auto__ = switch__10112__auto__.call(null,state_15960);if(cljs.core.keyword_identical_QMARK_.call(null,result__10115__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10115__auto__;
}
break;
}
}catch (e15981){if((e15981 instanceof Object))
{var ex__10116__auto__ = e15981;var statearr_15982_15995 = state_15960;(statearr_15982_15995[5] = ex__10116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15960);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15981;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10114__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15996 = state_15960;
state_15960 = G__15996;
continue;
}
} else
{return ret_value__10114__auto__;
}
break;
}
});
state_machine__10113__auto__ = function(state_15960){
switch(arguments.length){
case 0:
return state_machine__10113__auto____0.call(this);
case 1:
return state_machine__10113__auto____1.call(this,state_15960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10113__auto____0;
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10113__auto____1;
return state_machine__10113__auto__;
})()
;})(switch__10112__auto__))
})();var state__10184__auto__ = (function (){var statearr_15983 = f__10183__auto__.call(null);(statearr_15983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10182__auto___15984);
return statearr_15983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10184__auto__);
}));
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10182__auto___16089 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10183__auto__ = (function (){var switch__10112__auto__ = (function (state_16066){var state_val_16067 = (state_16066[1]);if((state_val_16067 === 1))
{var inst_16043 = 0;var state_16066__$1 = (function (){var statearr_16068 = state_16066;(statearr_16068[7] = inst_16043);
return statearr_16068;
})();var statearr_16069_16090 = state_16066__$1;(statearr_16069_16090[2] = null);
(statearr_16069_16090[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16067 === 2))
{var inst_16043 = (state_16066[7]);var inst_16045 = (inst_16043 < n);var state_16066__$1 = state_16066;if(cljs.core.truth_(inst_16045))
{var statearr_16070_16091 = state_16066__$1;(statearr_16070_16091[1] = 4);
} else
{var statearr_16071_16092 = state_16066__$1;(statearr_16071_16092[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16067 === 3))
{var inst_16063 = (state_16066[2]);var inst_16064 = cljs.core.async.close_BANG_.call(null,out);var state_16066__$1 = (function (){var statearr_16072 = state_16066;(statearr_16072[8] = inst_16063);
return statearr_16072;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16066__$1,inst_16064);
} else
{if((state_val_16067 === 4))
{var state_16066__$1 = state_16066;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16066__$1,7,ch);
} else
{if((state_val_16067 === 5))
{var state_16066__$1 = state_16066;var statearr_16073_16093 = state_16066__$1;(statearr_16073_16093[2] = null);
(statearr_16073_16093[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16067 === 6))
{var inst_16061 = (state_16066[2]);var state_16066__$1 = state_16066;var statearr_16074_16094 = state_16066__$1;(statearr_16074_16094[2] = inst_16061);
(statearr_16074_16094[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16067 === 7))
{var inst_16048 = (state_16066[9]);var inst_16048__$1 = (state_16066[2]);var inst_16049 = (inst_16048__$1 == null);var inst_16050 = cljs.core.not.call(null,inst_16049);var state_16066__$1 = (function (){var statearr_16075 = state_16066;(statearr_16075[9] = inst_16048__$1);
return statearr_16075;
})();if(inst_16050)
{var statearr_16076_16095 = state_16066__$1;(statearr_16076_16095[1] = 8);
} else
{var statearr_16077_16096 = state_16066__$1;(statearr_16077_16096[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16067 === 8))
{var inst_16048 = (state_16066[9]);var state_16066__$1 = state_16066;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16066__$1,11,out,inst_16048);
} else
{if((state_val_16067 === 9))
{var state_16066__$1 = state_16066;var statearr_16078_16097 = state_16066__$1;(statearr_16078_16097[2] = null);
(statearr_16078_16097[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16067 === 10))
{var inst_16058 = (state_16066[2]);var state_16066__$1 = state_16066;var statearr_16079_16098 = state_16066__$1;(statearr_16079_16098[2] = inst_16058);
(statearr_16079_16098[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16067 === 11))
{var inst_16043 = (state_16066[7]);var inst_16053 = (state_16066[2]);var inst_16054 = (inst_16043 + 1);var inst_16043__$1 = inst_16054;var state_16066__$1 = (function (){var statearr_16080 = state_16066;(statearr_16080[7] = inst_16043__$1);
(statearr_16080[10] = inst_16053);
return statearr_16080;
})();var statearr_16081_16099 = state_16066__$1;(statearr_16081_16099[2] = null);
(statearr_16081_16099[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10112__auto__){
return (function() {
var state_machine__10113__auto__ = null;
var state_machine__10113__auto____0 = (function (){var statearr_16085 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16085[0] = state_machine__10113__auto__);
(statearr_16085[1] = 1);
return statearr_16085;
});
var state_machine__10113__auto____1 = (function (state_16066){while(true){
var ret_value__10114__auto__ = (function (){try{while(true){
var result__10115__auto__ = switch__10112__auto__.call(null,state_16066);if(cljs.core.keyword_identical_QMARK_.call(null,result__10115__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10115__auto__;
}
break;
}
}catch (e16086){if((e16086 instanceof Object))
{var ex__10116__auto__ = e16086;var statearr_16087_16100 = state_16066;(statearr_16087_16100[5] = ex__10116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16066);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16086;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10114__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16101 = state_16066;
state_16066 = G__16101;
continue;
}
} else
{return ret_value__10114__auto__;
}
break;
}
});
state_machine__10113__auto__ = function(state_16066){
switch(arguments.length){
case 0:
return state_machine__10113__auto____0.call(this);
case 1:
return state_machine__10113__auto____1.call(this,state_16066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10113__auto____0;
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10113__auto____1;
return state_machine__10113__auto__;
})()
;})(switch__10112__auto__))
})();var state__10184__auto__ = (function (){var statearr_16088 = f__10183__auto__.call(null);(statearr_16088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10182__auto___16089);
return statearr_16088;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10184__auto__);
}));
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10182__auto___16198 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10183__auto__ = (function (){var switch__10112__auto__ = (function (state_16173){var state_val_16174 = (state_16173[1]);if((state_val_16174 === 1))
{var inst_16150 = null;var state_16173__$1 = (function (){var statearr_16175 = state_16173;(statearr_16175[7] = inst_16150);
return statearr_16175;
})();var statearr_16176_16199 = state_16173__$1;(statearr_16176_16199[2] = null);
(statearr_16176_16199[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16174 === 2))
{var state_16173__$1 = state_16173;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16173__$1,4,ch);
} else
{if((state_val_16174 === 3))
{var inst_16170 = (state_16173[2]);var inst_16171 = cljs.core.async.close_BANG_.call(null,out);var state_16173__$1 = (function (){var statearr_16177 = state_16173;(statearr_16177[8] = inst_16170);
return statearr_16177;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16173__$1,inst_16171);
} else
{if((state_val_16174 === 4))
{var inst_16153 = (state_16173[9]);var inst_16153__$1 = (state_16173[2]);var inst_16154 = (inst_16153__$1 == null);var inst_16155 = cljs.core.not.call(null,inst_16154);var state_16173__$1 = (function (){var statearr_16178 = state_16173;(statearr_16178[9] = inst_16153__$1);
return statearr_16178;
})();if(inst_16155)
{var statearr_16179_16200 = state_16173__$1;(statearr_16179_16200[1] = 5);
} else
{var statearr_16180_16201 = state_16173__$1;(statearr_16180_16201[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16174 === 5))
{var inst_16153 = (state_16173[9]);var inst_16150 = (state_16173[7]);var inst_16157 = cljs.core._EQ_.call(null,inst_16153,inst_16150);var state_16173__$1 = state_16173;if(inst_16157)
{var statearr_16181_16202 = state_16173__$1;(statearr_16181_16202[1] = 8);
} else
{var statearr_16182_16203 = state_16173__$1;(statearr_16182_16203[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16174 === 6))
{var state_16173__$1 = state_16173;var statearr_16184_16204 = state_16173__$1;(statearr_16184_16204[2] = null);
(statearr_16184_16204[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16174 === 7))
{var inst_16168 = (state_16173[2]);var state_16173__$1 = state_16173;var statearr_16185_16205 = state_16173__$1;(statearr_16185_16205[2] = inst_16168);
(statearr_16185_16205[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16174 === 8))
{var inst_16150 = (state_16173[7]);var tmp16183 = inst_16150;var inst_16150__$1 = tmp16183;var state_16173__$1 = (function (){var statearr_16186 = state_16173;(statearr_16186[7] = inst_16150__$1);
return statearr_16186;
})();var statearr_16187_16206 = state_16173__$1;(statearr_16187_16206[2] = null);
(statearr_16187_16206[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16174 === 9))
{var inst_16153 = (state_16173[9]);var state_16173__$1 = state_16173;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16173__$1,11,out,inst_16153);
} else
{if((state_val_16174 === 10))
{var inst_16165 = (state_16173[2]);var state_16173__$1 = state_16173;var statearr_16188_16207 = state_16173__$1;(statearr_16188_16207[2] = inst_16165);
(statearr_16188_16207[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16174 === 11))
{var inst_16153 = (state_16173[9]);var inst_16162 = (state_16173[2]);var inst_16150 = inst_16153;var state_16173__$1 = (function (){var statearr_16189 = state_16173;(statearr_16189[10] = inst_16162);
(statearr_16189[7] = inst_16150);
return statearr_16189;
})();var statearr_16190_16208 = state_16173__$1;(statearr_16190_16208[2] = null);
(statearr_16190_16208[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10112__auto__){
return (function() {
var state_machine__10113__auto__ = null;
var state_machine__10113__auto____0 = (function (){var statearr_16194 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16194[0] = state_machine__10113__auto__);
(statearr_16194[1] = 1);
return statearr_16194;
});
var state_machine__10113__auto____1 = (function (state_16173){while(true){
var ret_value__10114__auto__ = (function (){try{while(true){
var result__10115__auto__ = switch__10112__auto__.call(null,state_16173);if(cljs.core.keyword_identical_QMARK_.call(null,result__10115__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10115__auto__;
}
break;
}
}catch (e16195){if((e16195 instanceof Object))
{var ex__10116__auto__ = e16195;var statearr_16196_16209 = state_16173;(statearr_16196_16209[5] = ex__10116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16173);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16195;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10114__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16210 = state_16173;
state_16173 = G__16210;
continue;
}
} else
{return ret_value__10114__auto__;
}
break;
}
});
state_machine__10113__auto__ = function(state_16173){
switch(arguments.length){
case 0:
return state_machine__10113__auto____0.call(this);
case 1:
return state_machine__10113__auto____1.call(this,state_16173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10113__auto____0;
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10113__auto____1;
return state_machine__10113__auto__;
})()
;})(switch__10112__auto__))
})();var state__10184__auto__ = (function (){var statearr_16197 = f__10183__auto__.call(null);(statearr_16197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10182__auto___16198);
return statearr_16197;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10184__auto__);
}));
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10182__auto___16345 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10183__auto__ = (function (){var switch__10112__auto__ = (function (state_16315){var state_val_16316 = (state_16315[1]);if((state_val_16316 === 1))
{var inst_16278 = (new Array(n));var inst_16279 = inst_16278;var inst_16280 = 0;var state_16315__$1 = (function (){var statearr_16317 = state_16315;(statearr_16317[7] = inst_16280);
(statearr_16317[8] = inst_16279);
return statearr_16317;
})();var statearr_16318_16346 = state_16315__$1;(statearr_16318_16346[2] = null);
(statearr_16318_16346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 2))
{var state_16315__$1 = state_16315;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16315__$1,4,ch);
} else
{if((state_val_16316 === 3))
{var inst_16313 = (state_16315[2]);var state_16315__$1 = state_16315;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16315__$1,inst_16313);
} else
{if((state_val_16316 === 4))
{var inst_16283 = (state_16315[9]);var inst_16283__$1 = (state_16315[2]);var inst_16284 = (inst_16283__$1 == null);var inst_16285 = cljs.core.not.call(null,inst_16284);var state_16315__$1 = (function (){var statearr_16319 = state_16315;(statearr_16319[9] = inst_16283__$1);
return statearr_16319;
})();if(inst_16285)
{var statearr_16320_16347 = state_16315__$1;(statearr_16320_16347[1] = 5);
} else
{var statearr_16321_16348 = state_16315__$1;(statearr_16321_16348[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 5))
{var inst_16280 = (state_16315[7]);var inst_16279 = (state_16315[8]);var inst_16283 = (state_16315[9]);var inst_16288 = (state_16315[10]);var inst_16287 = (inst_16279[inst_16280] = inst_16283);var inst_16288__$1 = (inst_16280 + 1);var inst_16289 = (inst_16288__$1 < n);var state_16315__$1 = (function (){var statearr_16322 = state_16315;(statearr_16322[10] = inst_16288__$1);
(statearr_16322[11] = inst_16287);
return statearr_16322;
})();if(cljs.core.truth_(inst_16289))
{var statearr_16323_16349 = state_16315__$1;(statearr_16323_16349[1] = 8);
} else
{var statearr_16324_16350 = state_16315__$1;(statearr_16324_16350[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 6))
{var inst_16280 = (state_16315[7]);var inst_16301 = (inst_16280 > 0);var state_16315__$1 = state_16315;if(cljs.core.truth_(inst_16301))
{var statearr_16326_16351 = state_16315__$1;(statearr_16326_16351[1] = 12);
} else
{var statearr_16327_16352 = state_16315__$1;(statearr_16327_16352[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 7))
{var inst_16311 = (state_16315[2]);var state_16315__$1 = state_16315;var statearr_16328_16353 = state_16315__$1;(statearr_16328_16353[2] = inst_16311);
(statearr_16328_16353[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 8))
{var inst_16279 = (state_16315[8]);var inst_16288 = (state_16315[10]);var tmp16325 = inst_16279;var inst_16279__$1 = tmp16325;var inst_16280 = inst_16288;var state_16315__$1 = (function (){var statearr_16329 = state_16315;(statearr_16329[7] = inst_16280);
(statearr_16329[8] = inst_16279__$1);
return statearr_16329;
})();var statearr_16330_16354 = state_16315__$1;(statearr_16330_16354[2] = null);
(statearr_16330_16354[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 9))
{var inst_16279 = (state_16315[8]);var inst_16293 = cljs.core.vec.call(null,inst_16279);var state_16315__$1 = state_16315;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16315__$1,11,out,inst_16293);
} else
{if((state_val_16316 === 10))
{var inst_16299 = (state_16315[2]);var state_16315__$1 = state_16315;var statearr_16331_16355 = state_16315__$1;(statearr_16331_16355[2] = inst_16299);
(statearr_16331_16355[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 11))
{var inst_16295 = (state_16315[2]);var inst_16296 = (new Array(n));var inst_16279 = inst_16296;var inst_16280 = 0;var state_16315__$1 = (function (){var statearr_16332 = state_16315;(statearr_16332[7] = inst_16280);
(statearr_16332[8] = inst_16279);
(statearr_16332[12] = inst_16295);
return statearr_16332;
})();var statearr_16333_16356 = state_16315__$1;(statearr_16333_16356[2] = null);
(statearr_16333_16356[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 12))
{var inst_16279 = (state_16315[8]);var inst_16303 = cljs.core.vec.call(null,inst_16279);var state_16315__$1 = state_16315;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16315__$1,15,out,inst_16303);
} else
{if((state_val_16316 === 13))
{var state_16315__$1 = state_16315;var statearr_16334_16357 = state_16315__$1;(statearr_16334_16357[2] = null);
(statearr_16334_16357[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 14))
{var inst_16308 = (state_16315[2]);var inst_16309 = cljs.core.async.close_BANG_.call(null,out);var state_16315__$1 = (function (){var statearr_16335 = state_16315;(statearr_16335[13] = inst_16308);
return statearr_16335;
})();var statearr_16336_16358 = state_16315__$1;(statearr_16336_16358[2] = inst_16309);
(statearr_16336_16358[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16316 === 15))
{var inst_16305 = (state_16315[2]);var state_16315__$1 = state_16315;var statearr_16337_16359 = state_16315__$1;(statearr_16337_16359[2] = inst_16305);
(statearr_16337_16359[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10112__auto__){
return (function() {
var state_machine__10113__auto__ = null;
var state_machine__10113__auto____0 = (function (){var statearr_16341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16341[0] = state_machine__10113__auto__);
(statearr_16341[1] = 1);
return statearr_16341;
});
var state_machine__10113__auto____1 = (function (state_16315){while(true){
var ret_value__10114__auto__ = (function (){try{while(true){
var result__10115__auto__ = switch__10112__auto__.call(null,state_16315);if(cljs.core.keyword_identical_QMARK_.call(null,result__10115__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10115__auto__;
}
break;
}
}catch (e16342){if((e16342 instanceof Object))
{var ex__10116__auto__ = e16342;var statearr_16343_16360 = state_16315;(statearr_16343_16360[5] = ex__10116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16315);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16342;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10114__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16361 = state_16315;
state_16315 = G__16361;
continue;
}
} else
{return ret_value__10114__auto__;
}
break;
}
});
state_machine__10113__auto__ = function(state_16315){
switch(arguments.length){
case 0:
return state_machine__10113__auto____0.call(this);
case 1:
return state_machine__10113__auto____1.call(this,state_16315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10113__auto____0;
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10113__auto____1;
return state_machine__10113__auto__;
})()
;})(switch__10112__auto__))
})();var state__10184__auto__ = (function (){var statearr_16344 = f__10183__auto__.call(null);(statearr_16344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10182__auto___16345);
return statearr_16344;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10184__auto__);
}));
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10182__auto___16504 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10183__auto__ = (function (){var switch__10112__auto__ = (function (state_16474){var state_val_16475 = (state_16474[1]);if((state_val_16475 === 1))
{var inst_16433 = [];var inst_16434 = inst_16433;var inst_16435 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16474__$1 = (function (){var statearr_16476 = state_16474;(statearr_16476[7] = inst_16435);
(statearr_16476[8] = inst_16434);
return statearr_16476;
})();var statearr_16477_16505 = state_16474__$1;(statearr_16477_16505[2] = null);
(statearr_16477_16505[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16475 === 2))
{var state_16474__$1 = state_16474;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16474__$1,4,ch);
} else
{if((state_val_16475 === 3))
{var inst_16472 = (state_16474[2]);var state_16474__$1 = state_16474;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16474__$1,inst_16472);
} else
{if((state_val_16475 === 4))
{var inst_16438 = (state_16474[9]);var inst_16438__$1 = (state_16474[2]);var inst_16439 = (inst_16438__$1 == null);var inst_16440 = cljs.core.not.call(null,inst_16439);var state_16474__$1 = (function (){var statearr_16478 = state_16474;(statearr_16478[9] = inst_16438__$1);
return statearr_16478;
})();if(inst_16440)
{var statearr_16479_16506 = state_16474__$1;(statearr_16479_16506[1] = 5);
} else
{var statearr_16480_16507 = state_16474__$1;(statearr_16480_16507[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16475 === 5))
{var inst_16438 = (state_16474[9]);var inst_16435 = (state_16474[7]);var inst_16442 = (state_16474[10]);var inst_16442__$1 = f.call(null,inst_16438);var inst_16443 = cljs.core._EQ_.call(null,inst_16442__$1,inst_16435);var inst_16444 = cljs.core.keyword_identical_QMARK_.call(null,inst_16435,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16445 = (inst_16443) || (inst_16444);var state_16474__$1 = (function (){var statearr_16481 = state_16474;(statearr_16481[10] = inst_16442__$1);
return statearr_16481;
})();if(cljs.core.truth_(inst_16445))
{var statearr_16482_16508 = state_16474__$1;(statearr_16482_16508[1] = 8);
} else
{var statearr_16483_16509 = state_16474__$1;(statearr_16483_16509[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16475 === 6))
{var inst_16434 = (state_16474[8]);var inst_16459 = inst_16434.length;var inst_16460 = (inst_16459 > 0);var state_16474__$1 = state_16474;if(cljs.core.truth_(inst_16460))
{var statearr_16485_16510 = state_16474__$1;(statearr_16485_16510[1] = 12);
} else
{var statearr_16486_16511 = state_16474__$1;(statearr_16486_16511[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16475 === 7))
{var inst_16470 = (state_16474[2]);var state_16474__$1 = state_16474;var statearr_16487_16512 = state_16474__$1;(statearr_16487_16512[2] = inst_16470);
(statearr_16487_16512[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16475 === 8))
{var inst_16438 = (state_16474[9]);var inst_16434 = (state_16474[8]);var inst_16442 = (state_16474[10]);var inst_16447 = inst_16434.push(inst_16438);var tmp16484 = inst_16434;var inst_16434__$1 = tmp16484;var inst_16435 = inst_16442;var state_16474__$1 = (function (){var statearr_16488 = state_16474;(statearr_16488[7] = inst_16435);
(statearr_16488[8] = inst_16434__$1);
(statearr_16488[11] = inst_16447);
return statearr_16488;
})();var statearr_16489_16513 = state_16474__$1;(statearr_16489_16513[2] = null);
(statearr_16489_16513[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16475 === 9))
{var inst_16434 = (state_16474[8]);var inst_16450 = cljs.core.vec.call(null,inst_16434);var state_16474__$1 = state_16474;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16474__$1,11,out,inst_16450);
} else
{if((state_val_16475 === 10))
{var inst_16457 = (state_16474[2]);var state_16474__$1 = state_16474;var statearr_16490_16514 = state_16474__$1;(statearr_16490_16514[2] = inst_16457);
(statearr_16490_16514[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16475 === 11))
{var inst_16438 = (state_16474[9]);var inst_16442 = (state_16474[10]);var inst_16452 = (state_16474[2]);var inst_16453 = [];var inst_16454 = inst_16453.push(inst_16438);var inst_16434 = inst_16453;var inst_16435 = inst_16442;var state_16474__$1 = (function (){var statearr_16491 = state_16474;(statearr_16491[7] = inst_16435);
(statearr_16491[8] = inst_16434);
(statearr_16491[12] = inst_16454);
(statearr_16491[13] = inst_16452);
return statearr_16491;
})();var statearr_16492_16515 = state_16474__$1;(statearr_16492_16515[2] = null);
(statearr_16492_16515[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16475 === 12))
{var inst_16434 = (state_16474[8]);var inst_16462 = cljs.core.vec.call(null,inst_16434);var state_16474__$1 = state_16474;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16474__$1,15,out,inst_16462);
} else
{if((state_val_16475 === 13))
{var state_16474__$1 = state_16474;var statearr_16493_16516 = state_16474__$1;(statearr_16493_16516[2] = null);
(statearr_16493_16516[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16475 === 14))
{var inst_16467 = (state_16474[2]);var inst_16468 = cljs.core.async.close_BANG_.call(null,out);var state_16474__$1 = (function (){var statearr_16494 = state_16474;(statearr_16494[14] = inst_16467);
return statearr_16494;
})();var statearr_16495_16517 = state_16474__$1;(statearr_16495_16517[2] = inst_16468);
(statearr_16495_16517[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16475 === 15))
{var inst_16464 = (state_16474[2]);var state_16474__$1 = state_16474;var statearr_16496_16518 = state_16474__$1;(statearr_16496_16518[2] = inst_16464);
(statearr_16496_16518[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10112__auto__){
return (function() {
var state_machine__10113__auto__ = null;
var state_machine__10113__auto____0 = (function (){var statearr_16500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16500[0] = state_machine__10113__auto__);
(statearr_16500[1] = 1);
return statearr_16500;
});
var state_machine__10113__auto____1 = (function (state_16474){while(true){
var ret_value__10114__auto__ = (function (){try{while(true){
var result__10115__auto__ = switch__10112__auto__.call(null,state_16474);if(cljs.core.keyword_identical_QMARK_.call(null,result__10115__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10115__auto__;
}
break;
}
}catch (e16501){if((e16501 instanceof Object))
{var ex__10116__auto__ = e16501;var statearr_16502_16519 = state_16474;(statearr_16502_16519[5] = ex__10116__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16474);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16501;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10114__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16520 = state_16474;
state_16474 = G__16520;
continue;
}
} else
{return ret_value__10114__auto__;
}
break;
}
});
state_machine__10113__auto__ = function(state_16474){
switch(arguments.length){
case 0:
return state_machine__10113__auto____0.call(this);
case 1:
return state_machine__10113__auto____1.call(this,state_16474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10113__auto____0;
state_machine__10113__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10113__auto____1;
return state_machine__10113__auto__;
})()
;})(switch__10112__auto__))
})();var state__10184__auto__ = (function (){var statearr_16503 = f__10183__auto__.call(null);(statearr_16503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10182__auto___16504);
return statearr_16503;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10184__auto__);
}));
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