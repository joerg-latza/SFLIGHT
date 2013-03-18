/**
 * Serializer.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(t){t.dom.Serializer=function(s,d,a){var o,b,c=t.isIE,e=t.each,h;if(!s.apply_source_formatting)s.indent=false;d=d||t.DOM;a=a||new t.html.Schema(s);s.entity_encoding=s.entity_encoding||'named';s.remove_trailing_brs="remove_trailing_brs"in s?s.remove_trailing_brs:true;o=new t.util.Dispatcher(self);b=new t.util.Dispatcher(self);h=new t.html.DomParser(s,a);h.addAttributeFilter('src,href,style',function(n,f){var i=n.length,g,v,j='data-mce-'+f,u=s.url_converter,k=s.url_converter_scope,l;while(i--){g=n[i];v=g.attributes.map[j];if(v!==l){g.attr(f,v.length>0?v:null);g.attr(j,null)}else{v=g.attributes.map[f];if(f==="style")v=d.serializeStyle(d.parseStyle(v),g.name);else if(u)v=u.call(k,v,f,g.name);g.attr(f,v.length>0?v:null)}}});h.addAttributeFilter('class',function(n,f){var i=n.length,g,v;while(i--){g=n[i];v=g.attr('class').replace(/(?:^|\s)mce(Item\w+|Selected)(?!\S)/g,'');g.attr('class',v.length>0?v:null)}});h.addAttributeFilter('data-mce-type',function(n,f,g){var i=n.length,j;while(i--){j=n[i];if(j.attributes.map['data-mce-type']==='bookmark'&&!g.cleanup)j.remove()}});h.addAttributeFilter('data-mce-expando',function(n,f,g){var i=n.length;while(i--){n[i].attr(f,null)}});h.addNodeFilter('noscript',function(n){var i=n.length,f;while(i--){f=n[i].firstChild;if(f){f.value=t.html.Entities.decode(f.value)}}});h.addNodeFilter('script,style',function(n,f){var i=n.length,g,v;function j(v){return v.replace(/(<!--\[CDATA\[|\]\]-->)/g,'\n').replace(/^[\r\n]*|[\r\n]*$/g,'').replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,'').replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,'')};while(i--){g=n[i];v=g.firstChild?g.firstChild.value:'';if(f==="script"){g.attr('type',(g.attr('type')||'text/javascript').replace(/^mce\-/,''));if(v.length>0)g.firstChild.value='// <![CDATA[\n'+j(v)+'\n// ]]>'}else{if(v.length>0)g.firstChild.value='<!--\n'+j(v)+'\n-->'}}});h.addNodeFilter('#comment',function(n,f){var i=n.length,g;while(i--){g=n[i];if(g.value.indexOf('[CDATA[')===0){g.name='#cdata';g.type=4;g.value=g.value.replace(/^\[CDATA\[|\]\]$/g,'')}else if(g.value.indexOf('mce:protected ')===0){g.name="#text";g.type=3;g.raw=true;g.value=unescape(g.value).substr(14)}}});h.addNodeFilter('xml:namespace,input',function(n,f){var i=n.length,g;while(i--){g=n[i];if(g.type===7)g.remove();else if(g.type===1){if(f==="input"&&!("type"in g.attributes.map))g.attr('type','text')}}});if(s.fix_list_elements){h.addNodeFilter('ul,ol',function(n,f){var i=n.length,g,p;while(i--){g=n[i];p=g.parent;if(p.name==='ul'||p.name==='ol'){if(g.prev&&g.prev.name==='li'){g.prev.append(g)}}}})}h.addAttributeFilter('data-mce-src,data-mce-href,data-mce-style',function(n,f){var i=n.length;while(i--){n[i].attr(f,null)}});return{schema:a,addNodeFilter:h.addNodeFilter,addAttributeFilter:h.addAttributeFilter,onPreProcess:o,onPostProcess:b,serialize:function(n,f){var i,g,j,k,l;if(c&&d.select('script,style,select,map').length>0){l=n.innerHTML;n=n.cloneNode(false);d.setHTML(n,l)}else n=n.cloneNode(true);i=n.ownerDocument.implementation;if(i.createHTMLDocument){g=i.createHTMLDocument("");e(n.nodeName=='BODY'?n.childNodes:[n],function(n){g.body.appendChild(g.importNode(n,true))});if(n.nodeName!='BODY')n=g.body.firstChild;else n=g.body;j=d.doc;d.doc=g}f=f||{};f.format=f.format||'html';if(!f.no_events){f.node=n;o.dispatch(self,f)}k=new t.html.Serializer(s,a);f.content=k.serialize(h.parse(t.trim(f.getInner?n.innerHTML:d.getOuterHTML(n)),f));if(!f.cleanup)f.content=f.content.replace(/\uFEFF/g,'');if(!f.no_events)b.dispatch(self,f);if(j)d.doc=j;f.node=null;return f.content},addRules:function(r){a.addValidElements(r)},setRules:function(r){a.setValidElements(r)}}}})(tinymce);
