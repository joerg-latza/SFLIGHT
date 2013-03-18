/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.qunit.QUnitUtils");jQuery.sap.getObject("sap.ui.test.qunit",0);(function(){if(typeof QUnit!=="undefined"){QUnit.equals=QUnit.assert.equal;window.equals=QUnit.assert.equal;QUnit.config.testTimeout=10000;QUnit.config.reorder=false}}());qutils=sap.ui.test.qunit;
sap.ui.test.qunit.delayTestStart=function(d){if(!d){d=1000}QUnit.config.autostart=false;setTimeout(function(){QUnit.start()},d)};
sap.ui.test.qunit.triggerEvent=function(e,t,p){var a=jQuery.Event(e);if(p){for(var x in p){a[x]=p[x]}}if(typeof(t)=="string"){t=jQuery.sap.domById(t)}jQuery(t).trigger(a)};
sap.ui.test.qunit.triggerTouchEvent=function(e,t,p){if(typeof(t)=="string"){t=jQuery.sap.domById(t)}var T=jQuery(t);var E=jQuery.Event(e);E.originalEvent={};E.target=t;if(p){for(var x in p){E[x]=p[x];E.originalEvent[x]=p[x]}}var o=T.control(0);if(o&&o["on"+e]){o["on"+e].apply(o,[E])}};
sap.ui.test.qunit.triggerKeyEvent=function(e,t,k,s,a,c){var p={};p.keyCode=isNaN(k)?jQuery.sap.KeyCodes[k]:k;p.which=p.keyCode;p.shiftKey=s;p.altKey=a;p.metaKey=c;p.ctrlKey=c;sap.ui.test.qunit.triggerEvent(e,t,p)};
sap.ui.test.qunit.triggerKeydown=function(t,k,s,a,c){sap.ui.test.qunit.triggerKeyEvent("keydown",t,k,s,a,c)};
sap.ui.test.qunit.triggerKeyup=function(t,k,s,a,c){sap.ui.test.qunit.triggerKeyEvent("keyup",t,k,s,a,c)};
sap.ui.test.qunit.triggerKeyboardEvent=function(t,k,s,a,c){sap.ui.test.qunit.triggerKeydown(t,k,s,a,c)};
sap.ui.test.qunit.triggerKeypress=function(t,c,s,a,C){var _=c&&c.toUpperCase();if(jQuery.sap.KeyCodes[_]===null){ok(false,"Invalid character for triggerKeypress: '"+c+"'")}var b=c.charCodeAt(0);var p={};p.charCode=b;p.which=b;p.shiftKey=!!s;p.altKey=!!a;p.metaKey=!!C;p.ctrlKey=!!C;sap.ui.test.qunit.triggerEvent("keypress",t,p)};
sap.ui.test.qunit.triggerCharacterInput=function(i,c){sap.ui.test.qunit.triggerKeypress(i,c);if(typeof(i)=="string"){i=jQuery.sap.domById(i)}var I=jQuery(i);I.val(I.val()+c)};
sap.ui.test.qunit.triggerMouseEvent=function(t,e,o,O,p,P){var a={};a.offsetX=o;a.offsetY=O;a.pageX=p;a.pageY=P;sap.ui.test.qunit.triggerEvent(e,t,a)};
(function(){function d(m){if(window.console){console.info(m)}}var M={"boolean":[false,true],"int":[0,1,5,10,100],"float":[NaN,0.0,0.01,3.14,97.7],"string":["","some","very long otherwise not normal and so on whatever","<"+"script>alert('XSS attack!');</"+"script>"]};var D=jQuery.sap.newObject(M);function f(o){return o&&!(o instanceof Array)?[o]:o}sap.ui.test.qunit.resetDefaultTestValues=function(t){if(typeof t==="string"){delete D[t]}else{D=jQuery.sap.newObject(M)}};sap.ui.test.qunit.setDefaultTestValues=function(t,v){if(typeof t==="string"){D[t]=f(v)}else if(typeof t==="object"){jQuery.extend(D,t)}};sap.ui.test.qunit.createSettingsDomain=function(c,p){function a(t){if(D[t]){return D[t]}try{jQuery.sap.require(t)}catch(e){}var T=jQuery.sap.getObject(t);if(T instanceof sap.ui.base.DataType){}else{var r=[];for(var n in T){r.push(T[n])}D[t]=r;return r}return[]}var c=new c().getMetadata().getClass();var p=p||{};var b={};var P=c.getMetadata().getAllProperties();for(var h in P){b[h]=f(p[h])||a(P[h].type)}return b};sap.ui.test.qunit.genericTest=function(c,u,t){if(t&&t.skip===true){return}var c=new c().getMetadata().getClass();var t=t||{};var T=t.testCount||100;var o=sap.ui.test.qunit.createSettingsDomain(c,t.allPairTestValues||{});d("domain");for(var n in o){var l=o[n].length;var s=[];s.push("  ",n,":","[");for(var i=0;i<l;i++){s.push(o[n][i],",")}s.push("]");d(s.join(""))}function m(p,N){return p+N.substring(0,1).toUpperCase()+N.substring(1)}function a(C,S){var A={};for(var n in S){if(C[m("get",n)]){A[n]=C[m("get",n)]()}}return A}var C;var S;var b=new sap.ui.test.qunit.AllPairsGenerator(o);var e=[];while(b.hasNext()){e.push(b.next())}var h=0;function j(){d("testNextCombination("+h+")");if(h>=e.length){d("last combination -> done");start();return}var S=e[h];C=new c(S);var A=a(C,S);deepEqual(A,S,"settings");C.placeAt(u);d("before explicit rerender");C.getUIArea().rerender();d("after explicit rerender");d("info");setTimeout(k,0)}stop(15000);j();function k(){d("continueAfterRendering("+h+")");var S=e[e.length-h-1];for(var n in S){var r=C[m("set",n)](S[n]);equal(C[m("get",n)](),S[n],"setter for property '"+n+"'");ok(r==C,"setter for property '"+n+"' supports chaining (after rendering)")}h=h+1;setTimeout(j,0)}};var g=undefined;sap.ui.test.qunit.suppressErrors=function(s){if(s!==false){d("suppress global errors");g=window.onerror}else{d("reenable global errors");g=undefined}};sap.ui.test.qunit.RandomPairsGenerator=function(o){var C=0;for(var n in o){if(o[n]&&!(o[n]instanceof Array)){o[n]=[o[n]]}if(o[n]&&o[n].length>0){if(C==0){C=o[n].length}else{C=C*o[n].length}}}function a(i){var s={};for(var n in o){var l=o[n]&&o[n].length;if(l==1){s[n]=o[n][0]}else if(l>1){var c=i%l;s[n]=o[n][c];i=(i-c)/l}}return s}this.hasNext=function(){return true};this.next=function(){return a(Math.floor(100*C*Math.random()))}};sap.ui.test.qunit.AllPairsGenerator=function(o){var p=[];for(var n in o){p.push({name:n,n:o[n].length,values:o[n]})}var N=p.length;var c=[];var e=[];var h=0;for(var a=0;a<N-1;a++){var j=p[a];for(var b=a+1;b<N;b++){var k=p[b];e[a*N+b]=h;for(var i=j.n*k.n;i>0;i--){c[h++]=0}}}function l(a,b,v,s){return e[a*N+b]+v*p[b].n+s}function m(){var v=[];function s(a,u){var x={va:u,pairs:0,redundant:0};for(var b=0;b<N;b++){var y;if(b<a){y=c[l(b,a,v[b],u)]}else if(b>a){var i=l(a,b,u,0),z=i+p[b].n;for(y=c[i];y>0&&i<z;i++){if(c[i]<y){y=c[i]}}}x.redundant=x.redundant+y;if(y==0){x.pairs++}}return x}for(var a=0;a<N;a++){var j=p[a];var t=s(a,0);for(var u=1;u<j.n;u++){var w=s(a,u);if(w.pairs>t.pairs||(w.pairs==t.pairs&&w.redundant<t.redundant)){t=w}}v[a]=t.va}return v}this.hasNext=function(){return h>0};var q=undefined;var r=-1;this.next=function(){q=m();r=0;var t={};for(var a=0;a<N;a++){for(var b=a+1;b<N;b++){var i=l(a,b,q[a],q[b]);if(c[i]==0){h--;r++}c[i]++}t[p[a].name]=p[a].values[q[a]]}return t};this.lastPairs=function(){return r}}}());
