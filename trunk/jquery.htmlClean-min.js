(function(D){D.htmlClean.defaults={bodyOnly:true,removeAttrs:["class"]};D.htmlClean=function(Z,j){j=jQuery.extend(D.htmlClean.defaults,j);var c=/<(\/)?(\w+:)?([\w]+)([^>]*)>/gi;var f=/(\w+)=(".*"|'.*'|[^\s>]*)/gi;var b;var d=new P();var e=[d];var V=d;if(j.bodyOnly){if(b=/<body[^>]*>((\n|.)*)<\/body>/i.exec(Z)){Z=b[1]}}while(b=c.exec(Z)){var i=new F(b[3],b[1]);var g=RegExp.leftContext.substring(a);if(g.length>0){var X=V.children[V.children.length-1];if(V.children.length>0&&M(X=V.children[V.children.length-1])){V.children[V.children.length-1]=C(X.concat(g))}else{V.children.push(C(g))}}var a=c.lastIndex;if(i.isClosing){if(G(e,[i.name])){e.pop();V=e[e.length-1]}}else{var Y=new P(i,b[4]);if(!i.toRemove){if(i.attributes!=null){var W;while(W=f.exec(b[4])){if((i.attributes.length==0||D.inArray(W[1],i.attributes)>-1)&&D.inArray(W[1],j.removeAttrs)==-1){Y.attributes.push(new A(W[1],W[2]))}}}var h=true;if(!V.isRoot){if(V.tag.isInline&&!i.isInline){h=false}else{if(V.tag.disallowNest&&i.disallowNest&&!i.requiredParent){h=false}else{if(i.requiredParent){if(h=G(e,i.requiredParent)){V=e[e.length-1]}}}}}if(h){V.children.push(Y);if(!i.isSelfClosing&&!i.isNonClosing){e.push(Y);V=Y}}}}}return U(d).join("")};function U(Y){var W=[];var Z=Y.attributes.length==0;if(!Y.isRoot){W.push("<");W.push(Y.tag.name);D.each(Y.attributes,function(){W.push(" ");W.push(this.name);W.push("=");W.push(this.value)})}if(Y.tag.isSelfClosing){W.push(" />");Z=false}else{if(Y.tag.isNonClosing){Z=false}else{if(!Y.isRoot){W.push(">")}var V=[];for(var X=0;X<Y.children.length;X++){var b=Y.children[X];if(M(b)){var a="";if(X!=0&&O(Y.children[X-1])&&D.htmlClean.isWhitespace(b.charAt(0))){a=a.concat(" ")}a=a.concat(D.htmlClean.trim(b));if(X!=Y.children.length-1&&O(Y.children[X+1])&&D.htmlClean.isWhitespace(b.charAt(b.length-1))){a=a.concat(" ")}if(a.length>0){V.push(a)}}else{V=V.concat(U(b))}}if(V.length>0){W=W.concat(V);Z=false}if(!Y.isRoot){W.push("</");W.push(Y.tag.name);W.push(">")}}}if(!Y.tag.allowEmpty&&Z){return[]}return W}function G(V,X,W){W=W||1;if(D.inArray(V[V.length-W].tag.name,X)>-1){return true}else{if(V.length-(W+1)>0&&G(V,X,W+1)){V.pop();return true}}return false}function P(V){if(V){this.tag=V;this.isRoot=false}else{this.tag=new F("root");this.isRoot=true}this.attributes=[];this.children=[];return this}function A(V,W){this.name=V;this.value=W;return this}function F(V,X){V=V.toLowerCase();var W=D.inArray(V,J);this.name=W==-1?V:S[W];this.isSelfClosing=D.inArray(this.name,H)>-1;this.isNonClosing=D.inArray(this.name,Q)>-1;this.isClosing=(X!=undefined&&X.length>0);this.isInline=D.inArray(this.name,R)>-1;this.disallowNest=D.inArray(this.name,N)>-1;this.requiredParent=E[D.inArray(this.name,E)+1];this.allowEmpty=D.inArray(this.name,B)>-1;this.toRemove=D.inArray(this.name,L)>-1;this.attributes=I[D.inArray(this.name,I)+1];return this}function M(V){return V.constructor==String}function O(V){return M(V)||V.tag.isInline}function C(V){return V.replace(/&nbsp;|\n/g," ").replace(/\s\s+/g," ")}D.htmlClean.trim=function(W){for(var X=0;X<W.length-1&&D.htmlClean.isWhitespace(W.charAt(X));X++){}for(var V=W.length-1;V>=X&&D.htmlClean.isWhitespace(W.charAt(V));V--){}return W.substring(X,V+1)};D.htmlClean.isWhitespace=function(V){return D.inArray(V,T)!=-1};var L=["basefont","center","dir","font","frame","frameset","iframe","isindex","menu","noframes","s","span","strike","u"];var J=["b","big","i"];var S=["strong","strong","em"];var R=["a","abbr","acronym","address","big","br","button","caption","cite","code","del","em","font","hr","input","img","ins","label","legend","map","q","samp","select","small","span","strong","sub","sup","tt","var"];var N=["h1","h2","h3","h4","h5","h6","p","th","td"];var B=["th","td"];var E=[null,"li",["ul","ol"],"dt",["dl"],"dd",["dl"],"td",["tr"],"th",["tr"],"tr",["table","thead","tbody","tfoot"],"thead",["table"],"tbody",["table"],"tfoot",["table"]];var K=["script","style","pre","code"];var H=["br","hr","img","link","meta"];var Q=["!doctype","?xml"];var I=[["class"],"?xml",[],"!doctype",[],"a",["accesskey","class","href","name","title","rel","rev","type","tabindex"],"abbr",["class","title"],"acronym",["class","title"],"blockquote",["cite","class"],"button",["class","disabled","name","type","value"],"del",["cite","class","datetime"],"form",["accept","action","class","enctype","method","name"],"input",["accept","accesskey","alt","checked","class","disabled","ismap","maxlength","name","size","readonly","src","tabindex","type","usemap","value"],"img",["alt","class","height","src","width"],"ins",["cite","class","datetime"],"label",["accesskey","class","for"],"legend",["accesskey","class"],"link",["href","rel","type"],"meta",["content","http-equiv","name","scheme"],"map",["name"],"optgroup",["class","disabled","label"],"option",["class","disabled","label","selected","value"],"q",["class","cite"],"script",["src","type"],"select",["class","disabled","multiple","name","size","tabindex"],"style",["type"],"table",["class","summary"],"textarea",["accesskey","class","cols","disabled","name","readonly","rows","tabindex"]];var T=[" "," ","\t","\n","\r","\f"]})(jQuery);