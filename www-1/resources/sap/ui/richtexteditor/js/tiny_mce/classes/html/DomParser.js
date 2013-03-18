/**
 * DomParser.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(t){var N=t.html.Node;t.html.DomParser=function(s,a){var b=this,n={},c=[],m={},d={};s=s||{};s.validate="validate"in s?s.validate:true;s.root_name=s.root_name||'body';b.schema=a=a||new t.html.Schema();function f(e){var g,h,p,j,k,l,o,q,i,r,u,v,w,x,y;v=t.makeMap('tr,td,th,tbody,thead,tfoot,table');u=a.getNonEmptyElements();w=a.getTextBlockElements();for(g=0;g<e.length;g++){h=e[g];if(!h.parent||h.fixed)continue;if(w[h.name]&&h.parent.name=='li'){x=h.next;while(x){if(w[x.name]){x.name='li';x.fixed=true;h.parent.insert(x,h.parent)}else{break}x=x.next}h.unwrap(h);continue}j=[h];for(p=h.parent;p&&!a.isValidChild(p.name,h.name)&&!v[p.name];p=p.parent)j.push(p);if(p&&j.length>1){j.reverse();k=l=b.filterNode(j[0].clone());for(i=0;i<j.length-1;i++){if(a.isValidChild(l.name,j[i].name)){o=b.filterNode(j[i].clone());l.append(o)}else o=l;for(q=j[i].firstChild;q&&q!=j[i+1];){y=q.next;o.append(q);q=y}l=o}if(!k.isEmpty(u)){p.insert(k,j[0],true);p.insert(h,k)}else{p.insert(h,j[0],true)}p=j[0];if(p.isEmpty(u)||p.firstChild===p.lastChild&&p.firstChild.name==='br'){p.empty().remove()}}else if(h.parent){if(h.name==='li'){x=h.prev;if(x&&(x.name==='ul'||x.name==='ul')){x.append(h);continue}x=h.next;if(x&&(x.name==='ul'||x.name==='ul')){x.insert(h,x.firstChild,true);continue}h.wrap(b.filterNode(new N('ul',1)));continue}if(a.isValidChild(h.parent.name,'div')&&a.isValidChild('div',h.name)){h.wrap(b.filterNode(new N('div',1)))}else{if(h.name==='style'||h.name==='script')h.empty().remove();else h.unwrap()}}}};b.filterNode=function(e){var i,g,l;if(g in n){l=m[g];if(l)l.push(e);else m[g]=[e]}i=c.length;while(i--){g=c[i].name;if(g in e.attributes.map){l=d[g];if(l)l.push(e);else d[g]=[e]}}return e};b.addNodeFilter=function(e,g){t.each(t.explode(e),function(e){var l=n[e];if(!l)n[e]=l=[];l.push(g)})};b.addAttributeFilter=function(e,g){t.each(t.explode(e),function(e){var i;for(i=0;i<c.length;i++){if(c[i].name===e){c[i].callbacks.push(g);return}}c.push({name:e,callbacks:[g]})})};b.parse=function(h,e){var p,r,g,j,i,l,k,o,q,u,v,w,x,y=[],z,A,B,C,D,E,F,G;e=e||{};m={};d={};w=t.extend(t.makeMap('script,style,head,html,body,title,meta,param'),a.getBlockElements());F=a.getNonEmptyElements();E=a.children;v=s.validate;G="forced_root_block"in e?e.forced_root_block:s.forced_root_block;D=a.getWhiteSpaceElements();x=/^[ \t\r\n]+/;A=/[ \t\r\n]+$/;B=/[ \t\r\n]+/g;C=/^[ \t\r\n]+$/;function H(){var g=r.firstChild,L,M;while(g){L=g.next;if(g.type==3||(g.type==1&&g.name!=='p'&&!w[g.name]&&!g.attr('data-mce-type'))){if(!M){M=I(G,1);r.insert(M,g);M.append(g)}else M.append(g)}else{M=null}g=L}};function I(u,L){var g=new N(u,L),q;if(u in n){q=m[u];if(q)q.push(g);else m[u]=[g]}return g};function J(g){var L,M,O;for(L=g.prev;L&&L.type===3;){M=L.value.replace(A,'');if(M.length>0){L.value=M;L=L.prev}else{O=L.prev;L.remove();L=O}}};function K(L){var u,M={};for(u in L){if(u!=='li'&&u!='p'){M[u]=L[u]}}return M};p=new t.html.SaxParser({validate:v,self_closing_elements:K(a.getSelfClosingElements()),cdata:function(L){g.append(I('#cdata',4)).value=L},text:function(L,M){var O;if(!z){L=L.replace(B,' ');if(g.lastChild&&w[g.lastChild.name])L=L.replace(x,'')}if(L.length!==0){O=I('#text',3);O.raw=!!M;g.append(O).value=L}},comment:function(L){g.append(I('#comment',8)).value=L},pi:function(u,L){g.append(I(u,7)).value=L;J(g)},doctype:function(L){var M;M=g.append(I('#doctype',10));M.value=L;J(g)},start:function(u,L,M){var O,P,Q,R,S,T,U,V;Q=v?a.getElementRule(u):{};if(Q){O=I(Q.outputName||u,1);O.attributes=L;O.shortEnded=M;g.append(O);V=E[g.name];if(V&&E[O.name]&&!V[O.name])y.push(O);P=c.length;while(P--){S=c[P].name;if(S in L.map){q=d[S];if(q)q.push(O);else d[S]=[O]}}if(w[u])J(O);if(!M)g=O;if(!z&&D[u]){z=true}}},end:function(u){var L,M,O,P,Q;M=v?a.getElementRule(u):{};if(M){if(w[u]){if(!z){L=g.firstChild;if(L&&L.type===3){O=L.value.replace(x,'');if(O.length>0){L.value=O;L=L.next}else{P=L.next;L.remove();L=P}while(L&&L.type===3){O=L.value;P=L.next;if(O.length===0||C.test(O)){L.remove();L=P}L=P}}L=g.lastChild;if(L&&L.type===3){O=L.value.replace(A,'');if(O.length>0){L.value=O;L=L.prev}else{P=L.prev;L.remove();L=P}while(L&&L.type===3){O=L.value;P=L.prev;if(O.length===0||C.test(O)){L.remove();L=P}L=P}}}}if(z&&D[u]){z=false}if(M.removeEmpty||M.paddEmpty){if(g.isEmpty(F)){if(M.paddEmpty)g.empty().append(new N('#text','3')).value='\u00a0';else{if(!g.attributes.map.name&&!g.attributes.map.id){Q=g.parent;g.empty().remove();g=Q;return}}}}g=g.parent}}},a);r=g=new N(e.context||s.root_name,11);p.parse(h);if(v&&y.length){if(!e.context)f(y);else e.invalid=true}if(G&&r.name=='body')H();if(!e.invalid){for(u in m){q=n[u];j=m[u];k=j.length;while(k--){if(!j[k].parent)j.splice(k,1)}for(i=0,l=q.length;i<l;i++)q[i](j,u,e)}for(i=0,l=c.length;i<l;i++){q=c[i];if(q.name in d){j=d[q.name];k=j.length;while(k--){if(!j[k].parent)j.splice(k,1)}for(k=0,o=q.callbacks.length;k<o;k++)q.callbacks[k](j,q.name,e)}}}return r};if(s.remove_trailing_brs){b.addNodeFilter('br',function(e,g){var i,l=e.length,h,j=t.extend({},a.getBlockElements()),k=a.getNonEmptyElements(),p,o,q,r;j.body=1;for(i=0;i<l;i++){h=e[i];p=h.parent;if(j[h.parent.name]&&h===p.lastChild){q=h.prev;while(q){r=q.name;if(r!=="span"||q.attr('data-mce-type')!=='bookmark'){if(r!=="br")break;if(r==='br'){h=null;break}}q=q.prev}if(h){h.remove();if(p.isEmpty(k)){elementRule=a.getElementRule(p.name);if(elementRule){if(elementRule.removeEmpty)p.remove();else if(elementRule.paddEmpty)p.empty().append(new t.html.Node('#text',3)).value='\u00a0'}}}}else{o=h;while(p.firstChild===o&&p.lastChild===o){o=p;if(j[p.name]){break}p=p.parent}if(o===p){textNode=new t.html.Node('#text',3);textNode.value='\u00a0';h.replace(textNode)}}}})}if(!s.allow_html_in_named_anchor){b.addAttributeFilter('id,name',function(e,g){var i=e.length,h,p,j,k;while(i--){k=e[i];if(k.name==='a'&&k.firstChild&&!k.attr('href')){j=k.parent;h=k.lastChild;do{p=h.prev;j.insert(h,k);h=p}while(h)}}})}}})(tinymce);
