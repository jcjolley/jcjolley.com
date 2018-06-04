// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__13971__auto__,writer__13972__auto__,opt__13973__auto__){
return cljs.core._write.call(null,writer__13972__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16048 = arguments.length;
var i__14518__auto___16049 = (0);
while(true){
if((i__14518__auto___16049 < len__14517__auto___16048)){
args__14524__auto__.push((arguments[i__14518__auto___16049]));

var G__16050 = (i__14518__auto___16049 + (1));
i__14518__auto___16049 = G__16050;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq16047){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16047));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16052 = arguments.length;
var i__14518__auto___16053 = (0);
while(true){
if((i__14518__auto___16053 < len__14517__auto___16052)){
args__14524__auto__.push((arguments[i__14518__auto___16053]));

var G__16054 = (i__14518__auto___16053 + (1));
i__14518__auto___16053 = G__16054;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq16051){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16051));
});

var g_QMARK__16055 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_16056 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__16055){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__16055))
,null));
var mkg_16057 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__16055,g_16056){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__16055,g_16056))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__16055,g_16056,mkg_16057){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__16055).call(null,x);
});})(g_QMARK__16055,g_16056,mkg_16057))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__16055,g_16056,mkg_16057){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_16057).call(null,gfn);
});})(g_QMARK__16055,g_16056,mkg_16057))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__16055,g_16056,mkg_16057){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_16056).call(null,generator);
});})(g_QMARK__16055,g_16056,mkg_16057))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__14610__auto___16077 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__14610__auto___16077){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16078 = arguments.length;
var i__14518__auto___16079 = (0);
while(true){
if((i__14518__auto___16079 < len__14517__auto___16078)){
args__14524__auto__.push((arguments[i__14518__auto___16079]));

var G__16080 = (i__14518__auto___16079 + (1));
i__14518__auto___16079 = G__16080;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14610__auto___16077))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14610__auto___16077){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14610__auto___16077),args);
});})(g__14610__auto___16077))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__14610__auto___16077){
return (function (seq16058){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16058));
});})(g__14610__auto___16077))
;


var g__14610__auto___16081 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__14610__auto___16081){
return (function cljs$spec$gen$alpha$list(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16082 = arguments.length;
var i__14518__auto___16083 = (0);
while(true){
if((i__14518__auto___16083 < len__14517__auto___16082)){
args__14524__auto__.push((arguments[i__14518__auto___16083]));

var G__16084 = (i__14518__auto___16083 + (1));
i__14518__auto___16083 = G__16084;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14610__auto___16081))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14610__auto___16081){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14610__auto___16081),args);
});})(g__14610__auto___16081))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__14610__auto___16081){
return (function (seq16059){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16059));
});})(g__14610__auto___16081))
;


var g__14610__auto___16085 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__14610__auto___16085){
return (function cljs$spec$gen$alpha$map(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16086 = arguments.length;
var i__14518__auto___16087 = (0);
while(true){
if((i__14518__auto___16087 < len__14517__auto___16086)){
args__14524__auto__.push((arguments[i__14518__auto___16087]));

var G__16088 = (i__14518__auto___16087 + (1));
i__14518__auto___16087 = G__16088;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14610__auto___16085))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14610__auto___16085){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14610__auto___16085),args);
});})(g__14610__auto___16085))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__14610__auto___16085){
return (function (seq16060){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16060));
});})(g__14610__auto___16085))
;


var g__14610__auto___16089 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__14610__auto___16089){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16090 = arguments.length;
var i__14518__auto___16091 = (0);
while(true){
if((i__14518__auto___16091 < len__14517__auto___16090)){
args__14524__auto__.push((arguments[i__14518__auto___16091]));

var G__16092 = (i__14518__auto___16091 + (1));
i__14518__auto___16091 = G__16092;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14610__auto___16089))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14610__auto___16089){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14610__auto___16089),args);
});})(g__14610__auto___16089))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__14610__auto___16089){
return (function (seq16061){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16061));
});})(g__14610__auto___16089))
;


var g__14610__auto___16093 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__14610__auto___16093){
return (function cljs$spec$gen$alpha$set(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16094 = arguments.length;
var i__14518__auto___16095 = (0);
while(true){
if((i__14518__auto___16095 < len__14517__auto___16094)){
args__14524__auto__.push((arguments[i__14518__auto___16095]));

var G__16096 = (i__14518__auto___16095 + (1));
i__14518__auto___16095 = G__16096;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14610__auto___16093))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14610__auto___16093){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14610__auto___16093),args);
});})(g__14610__auto___16093))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__14610__auto___16093){
return (function (seq16062){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16062));
});})(g__14610__auto___16093))
;


var g__14610__auto___16097 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__14610__auto___16097){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16098 = arguments.length;
var i__14518__auto___16099 = (0);
while(true){
if((i__14518__auto___16099 < len__14517__auto___16098)){
args__14524__auto__.push((arguments[i__14518__auto___16099]));

var G__16100 = (i__14518__auto___16099 + (1));
i__14518__auto___16099 = G__16100;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14610__auto___16097))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14610__auto___16097){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14610__auto___16097),args);
});})(g__14610__auto___16097))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__14610__auto___16097){
return (function (seq16063){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16063));
});})(g__14610__auto___16097))
;


var g__14610__auto___16101 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__14610__auto___16101){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16102 = arguments.length;
var i__14518__auto___16103 = (0);
while(true){
if((i__14518__auto___16103 < len__14517__auto___16102)){
args__14524__auto__.push((arguments[i__14518__auto___16103]));

var G__16104 = (i__14518__auto___16103 + (1));
i__14518__auto___16103 = G__16104;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14610__auto___16101))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14610__auto___16101){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14610__auto___16101),args);
});})(g__14610__auto___16101))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__14610__auto___16101){
return (function (seq16064){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16064));
});})(g__14610__auto___16101))
;


var g__14610__auto___16105 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__14610__auto___16105){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16106 = arguments.length;
var i__14518__auto___16107 = (0);
while(true){
if((i__14518__auto___16107 < len__14517__auto___16106)){
args__14524__auto__.push((arguments[i__14518__auto___16107]));

var G__16108 = (i__14518__auto___16107 + (1));
i__14518__auto___16107 = G__16108;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14610__auto___16105))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14610__auto___16105){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14610__auto___16105),args);
});})(g__14610__auto___16105))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__14610__auto___16105){
return (function (seq16065){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16065));
});})(g__14610__auto___16105))
;


var g__14610__auto___16109 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__14610__auto___16109){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16110 = arguments.length;
var i__14518__auto___16111 = (0);
while(true){
if((i__14518__auto___16111 < len__14517__auto___16110)){
args__14524__auto__.push((arguments[i__14518__auto___16111]));

var G__16112 = (i__14518__auto___16111 + (1));
i__14518__auto___16111 = G__16112;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14610__auto___16109))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14610__auto___16109){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14610__auto___16109),args);
});})(g__14610__auto___16109))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__14610__auto___16109){
return (function (seq16066){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16066));
});})(g__14610__auto___16109))
;


var g__14610__auto___16113 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__14610__auto___16113){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16114 = arguments.length;
var i__14518__auto___16115 = (0);
while(true){
if((i__14518__auto___16115 < len__14517__auto___16114)){
args__14524__auto__.push((arguments[i__14518__auto___16115]));

var G__16116 = (i__14518__auto___16115 + (1));
i__14518__auto___16115 = G__16116;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14610__auto___16113))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14610__auto___16113){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14610__auto___16113),args);
});})(g__14610__auto___16113))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__14610__auto___16113){
return (function (seq16067){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16067));
});})(g__14610__auto___16113))
;


var g__14610__auto___16117 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__14610__auto___16117){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16118 = arguments.length;
var i__14518__auto___16119 = (0);
while(true){
if((i__14518__auto___16119 < len__14517__auto___16118)){
args__14524__auto__.push((arguments[i__14518__auto___16119]));

var G__16120 = (i__14518__auto___16119 + (1));
i__14518__auto___16119 = G__16120;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14610__auto___16117))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14610__auto___16117){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14610__auto___16117),args);
});})(g__14610__auto___16117))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__14610__auto___16117){
return (function (seq16068){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16068));
});})(g__14610__auto___16117))
;


var g__14610__auto___16121 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__14610__auto___16121){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16122 = arguments.length;
var i__14518__auto___16123 = (0);
while(true){
if((i__14518__auto___16123 < len__14517__auto___16122)){
args__14524__auto__.push((arguments[i__14518__auto___16123]));

var G__16124 = (i__14518__auto___16123 + (1));
i__14518__auto___16123 = G__16124;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14610__auto___16121))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14610__auto___16121){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14610__auto___16121),args);
});})(g__14610__auto___16121))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__14610__auto___16121){
return (function (seq16069){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16069));
});})(g__14610__auto___16121))
;


var g__14610__auto___16125 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__14610__auto___16125){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16126 = arguments.length;
var i__14518__auto___16127 = (0);
while(true){
if((i__14518__auto___16127 < len__14517__auto___16126)){
args__14524__auto__.push((arguments[i__14518__auto___16127]));

var G__16128 = (i__14518__auto___16127 + (1));
i__14518__auto___16127 = G__16128;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14610__auto___16125))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14610__auto___16125){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14610__auto___16125),args);
});})(g__14610__auto___16125))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__14610__auto___16125){
return (function (seq16070){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16070));
});})(g__14610__auto___16125))
;


var g__14610__auto___16129 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__14610__auto___16129){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16130 = arguments.length;
var i__14518__auto___16131 = (0);
while(true){
if((i__14518__auto___16131 < len__14517__auto___16130)){
args__14524__auto__.push((arguments[i__14518__auto___16131]));

var G__16132 = (i__14518__auto___16131 + (1));
i__14518__auto___16131 = G__16132;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14610__auto___16129))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14610__auto___16129){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14610__auto___16129),args);
});})(g__14610__auto___16129))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__14610__auto___16129){
return (function (seq16071){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16071));
});})(g__14610__auto___16129))
;


var g__14610__auto___16133 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__14610__auto___16133){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16134 = arguments.length;
var i__14518__auto___16135 = (0);
while(true){
if((i__14518__auto___16135 < len__14517__auto___16134)){
args__14524__auto__.push((arguments[i__14518__auto___16135]));

var G__16136 = (i__14518__auto___16135 + (1));
i__14518__auto___16135 = G__16136;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14610__auto___16133))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14610__auto___16133){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14610__auto___16133),args);
});})(g__14610__auto___16133))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__14610__auto___16133){
return (function (seq16072){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16072));
});})(g__14610__auto___16133))
;


var g__14610__auto___16137 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__14610__auto___16137){
return (function cljs$spec$gen$alpha$return(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16138 = arguments.length;
var i__14518__auto___16139 = (0);
while(true){
if((i__14518__auto___16139 < len__14517__auto___16138)){
args__14524__auto__.push((arguments[i__14518__auto___16139]));

var G__16140 = (i__14518__auto___16139 + (1));
i__14518__auto___16139 = G__16140;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14610__auto___16137))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14610__auto___16137){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14610__auto___16137),args);
});})(g__14610__auto___16137))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__14610__auto___16137){
return (function (seq16073){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16073));
});})(g__14610__auto___16137))
;


var g__14610__auto___16141 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__14610__auto___16141){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16142 = arguments.length;
var i__14518__auto___16143 = (0);
while(true){
if((i__14518__auto___16143 < len__14517__auto___16142)){
args__14524__auto__.push((arguments[i__14518__auto___16143]));

var G__16144 = (i__14518__auto___16143 + (1));
i__14518__auto___16143 = G__16144;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14610__auto___16141))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14610__auto___16141){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14610__auto___16141),args);
});})(g__14610__auto___16141))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__14610__auto___16141){
return (function (seq16074){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16074));
});})(g__14610__auto___16141))
;


var g__14610__auto___16145 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__14610__auto___16145){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16146 = arguments.length;
var i__14518__auto___16147 = (0);
while(true){
if((i__14518__auto___16147 < len__14517__auto___16146)){
args__14524__auto__.push((arguments[i__14518__auto___16147]));

var G__16148 = (i__14518__auto___16147 + (1));
i__14518__auto___16147 = G__16148;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14610__auto___16145))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14610__auto___16145){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14610__auto___16145),args);
});})(g__14610__auto___16145))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__14610__auto___16145){
return (function (seq16075){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16075));
});})(g__14610__auto___16145))
;


var g__14610__auto___16149 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__14610__auto___16149){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16150 = arguments.length;
var i__14518__auto___16151 = (0);
while(true){
if((i__14518__auto___16151 < len__14517__auto___16150)){
args__14524__auto__.push((arguments[i__14518__auto___16151]));

var G__16152 = (i__14518__auto___16151 + (1));
i__14518__auto___16151 = G__16152;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14610__auto___16149))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14610__auto___16149){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__14610__auto___16149),args);
});})(g__14610__auto___16149))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__14610__auto___16149){
return (function (seq16076){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16076));
});})(g__14610__auto___16149))
;

var g__14623__auto___16174 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__14623__auto___16174){
return (function cljs$spec$gen$alpha$any(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16175 = arguments.length;
var i__14518__auto___16176 = (0);
while(true){
if((i__14518__auto___16176 < len__14517__auto___16175)){
args__14524__auto__.push((arguments[i__14518__auto___16176]));

var G__16177 = (i__14518__auto___16176 + (1));
i__14518__auto___16176 = G__16177;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14623__auto___16174))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14623__auto___16174){
return (function (args){
return cljs.core.deref.call(null,g__14623__auto___16174);
});})(g__14623__auto___16174))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__14623__auto___16174){
return (function (seq16153){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16153));
});})(g__14623__auto___16174))
;


var g__14623__auto___16178 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__14623__auto___16178){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16179 = arguments.length;
var i__14518__auto___16180 = (0);
while(true){
if((i__14518__auto___16180 < len__14517__auto___16179)){
args__14524__auto__.push((arguments[i__14518__auto___16180]));

var G__16181 = (i__14518__auto___16180 + (1));
i__14518__auto___16180 = G__16181;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14623__auto___16178))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14623__auto___16178){
return (function (args){
return cljs.core.deref.call(null,g__14623__auto___16178);
});})(g__14623__auto___16178))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__14623__auto___16178){
return (function (seq16154){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16154));
});})(g__14623__auto___16178))
;


var g__14623__auto___16182 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__14623__auto___16182){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16183 = arguments.length;
var i__14518__auto___16184 = (0);
while(true){
if((i__14518__auto___16184 < len__14517__auto___16183)){
args__14524__auto__.push((arguments[i__14518__auto___16184]));

var G__16185 = (i__14518__auto___16184 + (1));
i__14518__auto___16184 = G__16185;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14623__auto___16182))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14623__auto___16182){
return (function (args){
return cljs.core.deref.call(null,g__14623__auto___16182);
});})(g__14623__auto___16182))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__14623__auto___16182){
return (function (seq16155){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16155));
});})(g__14623__auto___16182))
;


var g__14623__auto___16186 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__14623__auto___16186){
return (function cljs$spec$gen$alpha$char(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16187 = arguments.length;
var i__14518__auto___16188 = (0);
while(true){
if((i__14518__auto___16188 < len__14517__auto___16187)){
args__14524__auto__.push((arguments[i__14518__auto___16188]));

var G__16189 = (i__14518__auto___16188 + (1));
i__14518__auto___16188 = G__16189;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14623__auto___16186))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14623__auto___16186){
return (function (args){
return cljs.core.deref.call(null,g__14623__auto___16186);
});})(g__14623__auto___16186))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__14623__auto___16186){
return (function (seq16156){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16156));
});})(g__14623__auto___16186))
;


var g__14623__auto___16190 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__14623__auto___16190){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16191 = arguments.length;
var i__14518__auto___16192 = (0);
while(true){
if((i__14518__auto___16192 < len__14517__auto___16191)){
args__14524__auto__.push((arguments[i__14518__auto___16192]));

var G__16193 = (i__14518__auto___16192 + (1));
i__14518__auto___16192 = G__16193;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14623__auto___16190))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14623__auto___16190){
return (function (args){
return cljs.core.deref.call(null,g__14623__auto___16190);
});})(g__14623__auto___16190))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__14623__auto___16190){
return (function (seq16157){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16157));
});})(g__14623__auto___16190))
;


var g__14623__auto___16194 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__14623__auto___16194){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16195 = arguments.length;
var i__14518__auto___16196 = (0);
while(true){
if((i__14518__auto___16196 < len__14517__auto___16195)){
args__14524__auto__.push((arguments[i__14518__auto___16196]));

var G__16197 = (i__14518__auto___16196 + (1));
i__14518__auto___16196 = G__16197;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14623__auto___16194))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14623__auto___16194){
return (function (args){
return cljs.core.deref.call(null,g__14623__auto___16194);
});})(g__14623__auto___16194))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__14623__auto___16194){
return (function (seq16158){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16158));
});})(g__14623__auto___16194))
;


var g__14623__auto___16198 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__14623__auto___16198){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16199 = arguments.length;
var i__14518__auto___16200 = (0);
while(true){
if((i__14518__auto___16200 < len__14517__auto___16199)){
args__14524__auto__.push((arguments[i__14518__auto___16200]));

var G__16201 = (i__14518__auto___16200 + (1));
i__14518__auto___16200 = G__16201;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14623__auto___16198))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14623__auto___16198){
return (function (args){
return cljs.core.deref.call(null,g__14623__auto___16198);
});})(g__14623__auto___16198))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__14623__auto___16198){
return (function (seq16159){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16159));
});})(g__14623__auto___16198))
;


var g__14623__auto___16202 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__14623__auto___16202){
return (function cljs$spec$gen$alpha$double(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16203 = arguments.length;
var i__14518__auto___16204 = (0);
while(true){
if((i__14518__auto___16204 < len__14517__auto___16203)){
args__14524__auto__.push((arguments[i__14518__auto___16204]));

var G__16205 = (i__14518__auto___16204 + (1));
i__14518__auto___16204 = G__16205;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14623__auto___16202))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14623__auto___16202){
return (function (args){
return cljs.core.deref.call(null,g__14623__auto___16202);
});})(g__14623__auto___16202))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__14623__auto___16202){
return (function (seq16160){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16160));
});})(g__14623__auto___16202))
;


var g__14623__auto___16206 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__14623__auto___16206){
return (function cljs$spec$gen$alpha$int(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16207 = arguments.length;
var i__14518__auto___16208 = (0);
while(true){
if((i__14518__auto___16208 < len__14517__auto___16207)){
args__14524__auto__.push((arguments[i__14518__auto___16208]));

var G__16209 = (i__14518__auto___16208 + (1));
i__14518__auto___16208 = G__16209;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14623__auto___16206))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14623__auto___16206){
return (function (args){
return cljs.core.deref.call(null,g__14623__auto___16206);
});})(g__14623__auto___16206))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__14623__auto___16206){
return (function (seq16161){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16161));
});})(g__14623__auto___16206))
;


var g__14623__auto___16210 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__14623__auto___16210){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16211 = arguments.length;
var i__14518__auto___16212 = (0);
while(true){
if((i__14518__auto___16212 < len__14517__auto___16211)){
args__14524__auto__.push((arguments[i__14518__auto___16212]));

var G__16213 = (i__14518__auto___16212 + (1));
i__14518__auto___16212 = G__16213;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14623__auto___16210))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14623__auto___16210){
return (function (args){
return cljs.core.deref.call(null,g__14623__auto___16210);
});})(g__14623__auto___16210))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__14623__auto___16210){
return (function (seq16162){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16162));
});})(g__14623__auto___16210))
;


var g__14623__auto___16214 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__14623__auto___16214){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16215 = arguments.length;
var i__14518__auto___16216 = (0);
while(true){
if((i__14518__auto___16216 < len__14517__auto___16215)){
args__14524__auto__.push((arguments[i__14518__auto___16216]));

var G__16217 = (i__14518__auto___16216 + (1));
i__14518__auto___16216 = G__16217;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14623__auto___16214))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14623__auto___16214){
return (function (args){
return cljs.core.deref.call(null,g__14623__auto___16214);
});})(g__14623__auto___16214))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__14623__auto___16214){
return (function (seq16163){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16163));
});})(g__14623__auto___16214))
;


var g__14623__auto___16218 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__14623__auto___16218){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16219 = arguments.length;
var i__14518__auto___16220 = (0);
while(true){
if((i__14518__auto___16220 < len__14517__auto___16219)){
args__14524__auto__.push((arguments[i__14518__auto___16220]));

var G__16221 = (i__14518__auto___16220 + (1));
i__14518__auto___16220 = G__16221;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14623__auto___16218))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14623__auto___16218){
return (function (args){
return cljs.core.deref.call(null,g__14623__auto___16218);
});})(g__14623__auto___16218))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__14623__auto___16218){
return (function (seq16164){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16164));
});})(g__14623__auto___16218))
;


var g__14623__auto___16222 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__14623__auto___16222){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16223 = arguments.length;
var i__14518__auto___16224 = (0);
while(true){
if((i__14518__auto___16224 < len__14517__auto___16223)){
args__14524__auto__.push((arguments[i__14518__auto___16224]));

var G__16225 = (i__14518__auto___16224 + (1));
i__14518__auto___16224 = G__16225;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14623__auto___16222))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14623__auto___16222){
return (function (args){
return cljs.core.deref.call(null,g__14623__auto___16222);
});})(g__14623__auto___16222))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__14623__auto___16222){
return (function (seq16165){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16165));
});})(g__14623__auto___16222))
;


var g__14623__auto___16226 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__14623__auto___16226){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16227 = arguments.length;
var i__14518__auto___16228 = (0);
while(true){
if((i__14518__auto___16228 < len__14517__auto___16227)){
args__14524__auto__.push((arguments[i__14518__auto___16228]));

var G__16229 = (i__14518__auto___16228 + (1));
i__14518__auto___16228 = G__16229;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14623__auto___16226))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14623__auto___16226){
return (function (args){
return cljs.core.deref.call(null,g__14623__auto___16226);
});})(g__14623__auto___16226))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__14623__auto___16226){
return (function (seq16166){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16166));
});})(g__14623__auto___16226))
;


var g__14623__auto___16230 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__14623__auto___16230){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16231 = arguments.length;
var i__14518__auto___16232 = (0);
while(true){
if((i__14518__auto___16232 < len__14517__auto___16231)){
args__14524__auto__.push((arguments[i__14518__auto___16232]));

var G__16233 = (i__14518__auto___16232 + (1));
i__14518__auto___16232 = G__16233;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14623__auto___16230))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14623__auto___16230){
return (function (args){
return cljs.core.deref.call(null,g__14623__auto___16230);
});})(g__14623__auto___16230))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__14623__auto___16230){
return (function (seq16167){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16167));
});})(g__14623__auto___16230))
;


var g__14623__auto___16234 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__14623__auto___16234){
return (function cljs$spec$gen$alpha$string(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16235 = arguments.length;
var i__14518__auto___16236 = (0);
while(true){
if((i__14518__auto___16236 < len__14517__auto___16235)){
args__14524__auto__.push((arguments[i__14518__auto___16236]));

var G__16237 = (i__14518__auto___16236 + (1));
i__14518__auto___16236 = G__16237;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14623__auto___16234))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14623__auto___16234){
return (function (args){
return cljs.core.deref.call(null,g__14623__auto___16234);
});})(g__14623__auto___16234))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__14623__auto___16234){
return (function (seq16168){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16168));
});})(g__14623__auto___16234))
;


var g__14623__auto___16238 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__14623__auto___16238){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16239 = arguments.length;
var i__14518__auto___16240 = (0);
while(true){
if((i__14518__auto___16240 < len__14517__auto___16239)){
args__14524__auto__.push((arguments[i__14518__auto___16240]));

var G__16241 = (i__14518__auto___16240 + (1));
i__14518__auto___16240 = G__16241;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14623__auto___16238))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14623__auto___16238){
return (function (args){
return cljs.core.deref.call(null,g__14623__auto___16238);
});})(g__14623__auto___16238))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__14623__auto___16238){
return (function (seq16169){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16169));
});})(g__14623__auto___16238))
;


var g__14623__auto___16242 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__14623__auto___16242){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16243 = arguments.length;
var i__14518__auto___16244 = (0);
while(true){
if((i__14518__auto___16244 < len__14517__auto___16243)){
args__14524__auto__.push((arguments[i__14518__auto___16244]));

var G__16245 = (i__14518__auto___16244 + (1));
i__14518__auto___16244 = G__16245;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14623__auto___16242))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14623__auto___16242){
return (function (args){
return cljs.core.deref.call(null,g__14623__auto___16242);
});})(g__14623__auto___16242))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__14623__auto___16242){
return (function (seq16170){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16170));
});})(g__14623__auto___16242))
;


var g__14623__auto___16246 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__14623__auto___16246){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16247 = arguments.length;
var i__14518__auto___16248 = (0);
while(true){
if((i__14518__auto___16248 < len__14517__auto___16247)){
args__14524__auto__.push((arguments[i__14518__auto___16248]));

var G__16249 = (i__14518__auto___16248 + (1));
i__14518__auto___16248 = G__16249;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14623__auto___16246))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14623__auto___16246){
return (function (args){
return cljs.core.deref.call(null,g__14623__auto___16246);
});})(g__14623__auto___16246))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__14623__auto___16246){
return (function (seq16171){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16171));
});})(g__14623__auto___16246))
;


var g__14623__auto___16250 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__14623__auto___16250){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16251 = arguments.length;
var i__14518__auto___16252 = (0);
while(true){
if((i__14518__auto___16252 < len__14517__auto___16251)){
args__14524__auto__.push((arguments[i__14518__auto___16252]));

var G__16253 = (i__14518__auto___16252 + (1));
i__14518__auto___16252 = G__16253;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14623__auto___16250))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14623__auto___16250){
return (function (args){
return cljs.core.deref.call(null,g__14623__auto___16250);
});})(g__14623__auto___16250))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__14623__auto___16250){
return (function (seq16172){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16172));
});})(g__14623__auto___16250))
;


var g__14623__auto___16254 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__14623__auto___16254){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16255 = arguments.length;
var i__14518__auto___16256 = (0);
while(true){
if((i__14518__auto___16256 < len__14517__auto___16255)){
args__14524__auto__.push((arguments[i__14518__auto___16256]));

var G__16257 = (i__14518__auto___16256 + (1));
i__14518__auto___16256 = G__16257;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});})(g__14623__auto___16254))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14623__auto___16254){
return (function (args){
return cljs.core.deref.call(null,g__14623__auto___16254);
});})(g__14623__auto___16254))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__14623__auto___16254){
return (function (seq16173){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16173));
});})(g__14623__auto___16254))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__14524__auto__ = [];
var len__14517__auto___16260 = arguments.length;
var i__14518__auto___16261 = (0);
while(true){
if((i__14518__auto___16261 < len__14517__auto___16260)){
args__14524__auto__.push((arguments[i__14518__auto___16261]));

var G__16262 = (i__14518__auto___16261 + (1));
i__14518__auto___16261 = G__16262;
continue;
} else {
}
break;
}

var argseq__14525__auto__ = ((((0) < args__14524__auto__.length))?(new cljs.core.IndexedSeq(args__14524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__14525__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__16258_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__16258_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq16259){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16259));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__16263_SHARP_){
return (new Date(p1__16263_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
