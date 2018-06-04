// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__15376){
var map__15377 = p__15376;
var map__15377__$1 = ((((!((map__15377 == null)))?((((map__15377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15377):map__15377);
var m = map__15377__$1;
var n = cljs.core.get.call(null,map__15377__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__15377__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15379_15401 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15380_15402 = null;
var count__15381_15403 = (0);
var i__15382_15404 = (0);
while(true){
if((i__15382_15404 < count__15381_15403)){
var f_15405 = cljs.core._nth.call(null,chunk__15380_15402,i__15382_15404);
cljs.core.println.call(null,"  ",f_15405);

var G__15406 = seq__15379_15401;
var G__15407 = chunk__15380_15402;
var G__15408 = count__15381_15403;
var G__15409 = (i__15382_15404 + (1));
seq__15379_15401 = G__15406;
chunk__15380_15402 = G__15407;
count__15381_15403 = G__15408;
i__15382_15404 = G__15409;
continue;
} else {
var temp__4657__auto___15410 = cljs.core.seq.call(null,seq__15379_15401);
if(temp__4657__auto___15410){
var seq__15379_15411__$1 = temp__4657__auto___15410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15379_15411__$1)){
var c__14185__auto___15412 = cljs.core.chunk_first.call(null,seq__15379_15411__$1);
var G__15413 = cljs.core.chunk_rest.call(null,seq__15379_15411__$1);
var G__15414 = c__14185__auto___15412;
var G__15415 = cljs.core.count.call(null,c__14185__auto___15412);
var G__15416 = (0);
seq__15379_15401 = G__15413;
chunk__15380_15402 = G__15414;
count__15381_15403 = G__15415;
i__15382_15404 = G__15416;
continue;
} else {
var f_15417 = cljs.core.first.call(null,seq__15379_15411__$1);
cljs.core.println.call(null,"  ",f_15417);

var G__15418 = cljs.core.next.call(null,seq__15379_15411__$1);
var G__15419 = null;
var G__15420 = (0);
var G__15421 = (0);
seq__15379_15401 = G__15418;
chunk__15380_15402 = G__15419;
count__15381_15403 = G__15420;
i__15382_15404 = G__15421;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_15422 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__13346__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__13346__auto__)){
return or__13346__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_15422);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_15422)))?cljs.core.second.call(null,arglists_15422):arglists_15422));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15383_15423 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15384_15424 = null;
var count__15385_15425 = (0);
var i__15386_15426 = (0);
while(true){
if((i__15386_15426 < count__15385_15425)){
var vec__15387_15427 = cljs.core._nth.call(null,chunk__15384_15424,i__15386_15426);
var name_15428 = cljs.core.nth.call(null,vec__15387_15427,(0),null);
var map__15390_15429 = cljs.core.nth.call(null,vec__15387_15427,(1),null);
var map__15390_15430__$1 = ((((!((map__15390_15429 == null)))?((((map__15390_15429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15390_15429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15390_15429):map__15390_15429);
var doc_15431 = cljs.core.get.call(null,map__15390_15430__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15432 = cljs.core.get.call(null,map__15390_15430__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15428);

cljs.core.println.call(null," ",arglists_15432);

if(cljs.core.truth_(doc_15431)){
cljs.core.println.call(null," ",doc_15431);
} else {
}

var G__15433 = seq__15383_15423;
var G__15434 = chunk__15384_15424;
var G__15435 = count__15385_15425;
var G__15436 = (i__15386_15426 + (1));
seq__15383_15423 = G__15433;
chunk__15384_15424 = G__15434;
count__15385_15425 = G__15435;
i__15386_15426 = G__15436;
continue;
} else {
var temp__4657__auto___15437 = cljs.core.seq.call(null,seq__15383_15423);
if(temp__4657__auto___15437){
var seq__15383_15438__$1 = temp__4657__auto___15437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15383_15438__$1)){
var c__14185__auto___15439 = cljs.core.chunk_first.call(null,seq__15383_15438__$1);
var G__15440 = cljs.core.chunk_rest.call(null,seq__15383_15438__$1);
var G__15441 = c__14185__auto___15439;
var G__15442 = cljs.core.count.call(null,c__14185__auto___15439);
var G__15443 = (0);
seq__15383_15423 = G__15440;
chunk__15384_15424 = G__15441;
count__15385_15425 = G__15442;
i__15386_15426 = G__15443;
continue;
} else {
var vec__15392_15444 = cljs.core.first.call(null,seq__15383_15438__$1);
var name_15445 = cljs.core.nth.call(null,vec__15392_15444,(0),null);
var map__15395_15446 = cljs.core.nth.call(null,vec__15392_15444,(1),null);
var map__15395_15447__$1 = ((((!((map__15395_15446 == null)))?((((map__15395_15446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15395_15446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15395_15446):map__15395_15446);
var doc_15448 = cljs.core.get.call(null,map__15395_15447__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15449 = cljs.core.get.call(null,map__15395_15447__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15445);

cljs.core.println.call(null," ",arglists_15449);

if(cljs.core.truth_(doc_15448)){
cljs.core.println.call(null," ",doc_15448);
} else {
}

var G__15450 = cljs.core.next.call(null,seq__15383_15438__$1);
var G__15451 = null;
var G__15452 = (0);
var G__15453 = (0);
seq__15383_15423 = G__15450;
chunk__15384_15424 = G__15451;
count__15385_15425 = G__15452;
i__15386_15426 = G__15453;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__15397 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__15398 = null;
var count__15399 = (0);
var i__15400 = (0);
while(true){
if((i__15400 < count__15399)){
var role = cljs.core._nth.call(null,chunk__15398,i__15400);
var temp__4657__auto___15454__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___15454__$1)){
var spec_15455 = temp__4657__auto___15454__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_15455));
} else {
}

var G__15456 = seq__15397;
var G__15457 = chunk__15398;
var G__15458 = count__15399;
var G__15459 = (i__15400 + (1));
seq__15397 = G__15456;
chunk__15398 = G__15457;
count__15399 = G__15458;
i__15400 = G__15459;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__15397);
if(temp__4657__auto____$1){
var seq__15397__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15397__$1)){
var c__14185__auto__ = cljs.core.chunk_first.call(null,seq__15397__$1);
var G__15460 = cljs.core.chunk_rest.call(null,seq__15397__$1);
var G__15461 = c__14185__auto__;
var G__15462 = cljs.core.count.call(null,c__14185__auto__);
var G__15463 = (0);
seq__15397 = G__15460;
chunk__15398 = G__15461;
count__15399 = G__15462;
i__15400 = G__15463;
continue;
} else {
var role = cljs.core.first.call(null,seq__15397__$1);
var temp__4657__auto___15464__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___15464__$2)){
var spec_15465 = temp__4657__auto___15464__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_15465));
} else {
}

var G__15466 = cljs.core.next.call(null,seq__15397__$1);
var G__15467 = null;
var G__15468 = (0);
var G__15469 = (0);
seq__15397 = G__15466;
chunk__15398 = G__15467;
count__15399 = G__15468;
i__15400 = G__15469;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
