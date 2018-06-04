// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__16726__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__16726 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16727__i = 0, G__16727__a = new Array(arguments.length -  0);
while (G__16727__i < G__16727__a.length) {G__16727__a[G__16727__i] = arguments[G__16727__i + 0]; ++G__16727__i;}
  args = new cljs.core.IndexedSeq(G__16727__a,0,null);
} 
return G__16726__delegate.call(this,args);};
G__16726.cljs$lang$maxFixedArity = 0;
G__16726.cljs$lang$applyTo = (function (arglist__16728){
var args = cljs.core.seq(arglist__16728);
return G__16726__delegate(args);
});
G__16726.cljs$core$IFn$_invoke$arity$variadic = G__16726__delegate;
return G__16726;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__16729__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__16729 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16730__i = 0, G__16730__a = new Array(arguments.length -  0);
while (G__16730__i < G__16730__a.length) {G__16730__a[G__16730__i] = arguments[G__16730__i + 0]; ++G__16730__i;}
  args = new cljs.core.IndexedSeq(G__16730__a,0,null);
} 
return G__16729__delegate.call(this,args);};
G__16729.cljs$lang$maxFixedArity = 0;
G__16729.cljs$lang$applyTo = (function (arglist__16731){
var args = cljs.core.seq(arglist__16731);
return G__16729__delegate(args);
});
G__16729.cljs$core$IFn$_invoke$arity$variadic = G__16729__delegate;
return G__16729;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
