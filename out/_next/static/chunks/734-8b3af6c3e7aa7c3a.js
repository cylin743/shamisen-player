"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[734],{2734:function(a,c,e){e.d(c,{g:function(){return d},P:function(){return o}});var t=e(7437);function n(a){return a.replace("(","").replace(")","")}function s(a){let c=a.split("\n");for(var e="",t="",n="",s="",o="",r="",l=[],b=0;b<c.length;b++)c[b].toLowerCase().startsWith("t:")?e=c[b].substring(2):c[b].toLowerCase().startsWith("k:")?t=c[b].substring(2):c[b].toLowerCase().startsWith("q:")?n=c[b].substring(2):c[b].toLowerCase().startsWith("m:")?o=c[b].substring(2):c[b].toLowerCase().startsWith("l:")?s=c[b].substring(2):c[b].toLowerCase().startsWith("r:")?r=c[b].substring(2):l.push(c[b]);return{title:e,key:t,speed:n,defaultNoteLength:s,tune:r,timeSignature:o,notes:l}}function o(a){let{key:c}=s(a);for(var e=a.replace("K:".concat(c),"K:C").replace("k:".concat(c),"K:C"),t=a.match(/\(\d\:[\d#]+([\:\w])*\)/g)||[],o=0;o<t.length;o++)e=e.replace(t[o],function(a,c){switch(a.toUpperCase()){case"CFA#":return function(a){let c=a.match(/\(\d\:[\d#]+([\:\w])*\)/g)||[];if(0==c.length)return a;for(var e="",t=0;t<c.length;t++){let a=n(c[t]).split(":");if(!(a.length<2))switch("".concat(a[0],":").concat(a[1])){case"1:0":e+="C,";break;case"1:1":e+="^C,";break;case"1:2":e+="D,";break;case"1:3":e+="^D,";break;case"1:#":e+="E,";break;case"1:4":case"2:0":e+="F,";break;case"1:5":case"2:1":e+="^F,";break;case"1:6":case"2:2":e+="G,";break;case"1:7":case"2:3":e+="^G,";break;case"1:8":case"2:#":e+="A,";break;case"1:9":case"2:4":case"3:0":e+="^A,";break;case"1:b":case"2:5":case"3:1":e+="B,";break;case"1:10":case"2:6":case"3:2":e+="C";break;case"1:11":case"2:7":case"3:3":e+="^C";break;case"1:12":case"2:8":case"3:#":e+="D";break;case"1:13":case"2:9":case"3:4":e+="^D";break;case"1:1#":case"2:b":case"3:5":e+="E";break;case"1:14":case"2:10":case"3:6":e+="F";break;case"1:15":case"2:11":case"3:7":e+="^F";break;case"1:16":case"2:12":case"3:8":e+="G";break;case"1:17":case"2:13":case"3:9":e+="_A";break;case"1:18":case"2:1#":case"3:b":e+="A";break;case"1:19":case"2:14":case"3:10":e+="^A";break;case"1:1b":case"2:15":case"3:11":e+="B";break;case"1:20":case"2:16":case"3:12":e+="c";break;case"2:17":case"3:13":e+="^c";break;case"2:18":case"3:1#":e+="d";break;case"2:19":case"3:14":e+="^d";break;case"2:1b":case"3:15":e+="e";break;case"2:20":case"3:16":e+="f";break;case"3:17":e+="^f";break;case"3:18":e+="g";break;case"3:19":e+="^g";break;case"3:1b":e+="a";break;case"3:20":e+="^a"}}return e}(c);case"CGC":return function(a){let c=a.match(/\(\d\:[\d#]+([\:\w])*\)/g)||[];if(0==c.length)return a;for(var e="",t=0;t<c.length;t++){let a=n(c[t]).split(":");if(!(a.length<2))switch("".concat(a[0],":").concat(a[1])){case"1:0":e+="C,";break;case"1:1":e+="^C,";break;case"1:2":e+="D,";break;case"1:3":e+="^D,";break;case"1:#":e+="E,";break;case"1:4":e+="F,";break;case"1:5":e+="^F,";break;case"1:6":case"2:0":e+="G,";break;case"1:7":case"2:1":e+="^G,";break;case"1:8":case"2:2":e+="A,";break;case"1:9":case"2:3":e+="^A,";break;case"1:b":case"2:#":e+="B,";break;case"1:10":case"2:4":case"3:0":e+="C";break;case"1:11":case"2:5":case"3:1":e+="^C";break;case"1:12":case"2:6":case"3:2":e+="D";break;case"1:13":case"2:7":case"3:3":e+="^D";break;case"1:1#":case"2:8":case"3:#":e+="E";break;case"1:14":case"2:9":case"3:4":e+="F";break;case"1:15":case"2:b":case"3:5":e+="^F";break;case"1:16":case"2:10":case"3:6":e+="G";break;case"1:17":case"2:11":case"3:7":e+="_A";break;case"1:18":case"2:12":case"3:8":e+="A";break;case"1:19":case"2:13":case"3:9":e+="^A";break;case"1:1b":case"2:1#":case"3:b":e+="B";break;case"1:20":case"2:14":case"3:10":e+="c";break;case"2:15":case"3:11":e+="^c";break;case"2:16":case"3:12":e+="d";break;case"2:17":case"3:13":e+="^d";break;case"2:18":case"3:1#":e+="e";break;case"2:19":case"3:14":e+="f";break;case"2:1b":case"3:15":e+="^f";break;case"2:20":case"3:16":e+="g";break;case"3:17":e+="^g";break;case"3:18":e+="a";break;case"3:19":e+="^a";break;case"3:1b":e+="b";break;case"3:20":e+="c'"}}return e}(c);default:return function(a){let c=a.match(/\(\d\:[\d#]+([\:\w])*\)/g)||[];if(0==c.length)return a;for(var e="",t=0;t<c.length;t++){let a=n(c[t]).split(":");if(!(a.length<2))switch("".concat(a[0],":").concat(a[1])){case"1:0":e+="C,";break;case"1:1":e+="^C,";break;case"1:2":e+="D,";break;case"1:3":e+="^D,";break;case"1:#":e+="E,";break;case"1:4":case"2:0":e+="F,";break;case"1:5":case"2:1":e+="^F,";break;case"1:6":case"2:2":e+="G,";break;case"1:7":case"2:3":e+="^G,";break;case"1:8":case"2:#":e+="A,";break;case"1:9":case"2:4":e+="^A,";break;case"1:b":case"2:5":e+="B,";break;case"1:10":case"2:6":case"3:0":e+="C";break;case"1:11":case"2:7":case"3:1":e+="^C";break;case"1:12":case"2:8":case"3:2":e+="D";break;case"1:13":case"2:9":case"3:3":e+="^D";break;case"1:1#":case"2:b":case"3:#":e+="E";break;case"1:14":case"2:10":case"3:4":e+="F";break;case"1:15":case"2:11":case"3:5":e+="^F";break;case"1:16":case"2:12":case"3:6":e+="G";break;case"1:17":case"2:13":case"3:7":e+="_A";break;case"1:18":case"2:1#":case"3:8":e+="A";break;case"1:19":case"2:14":case"3:9":e+="^A";break;case"1:1b":case"2:15":case"3:b":e+="B";break;case"1:20":case"2:16":case"3:10":e+="c";break;case"2:17":case"3:11":e+="^c";break;case"2:18":case"3:12":e+="d";break;case"2:19":case"3:13":e+="^d";break;case"2:1b":case"3:1#":e+="e";break;case"2:20":case"3:14":e+="f";break;case"3:15":e+="^f";break;case"3:16":e+="g";break;case"3:17":e+="^g";break;case"3:18":e+="a";break;case"3:19":e+="^a";break;case"3:1b":e+="b";break;case"3:20":e+="c'"}}return e}(c)}}(c,t[o]));return e}function r(a){return(0,t.jsxs)("g",{className:"abcjs-bar abcjs-bar abcjs-l0 abcjs-m0 abcjs-mm0 abcjs-v0",fill:"currentColor",stroke:"none","data-name":"bar",children:[(0,t.jsx)("path",{d:"M ".concat(a," 140.31L ").concat(a," 117.94L ").concat(a+.5," 116.94L ").concat(a+.5," 140.31z"),"data-name":"bar"}),(0,t.jsx)("path",{d:"M ".concat(a+2.5," 140.31L ").concat(a+2.5," 117.94L ").concat(a+3," 116.94L ").concat(a+3," 140.31z"),"data-name":"bar"})]},"db-".concat(a))}function l(a){return(0,t.jsx)("g",{className:"abcjs-bar abcjs-bar abcjs-l0 abcjs-m0 abcjs-mm0 abcjs-v0",fill:"currentColor",stroke:"none","data-name":"bar",children:(0,t.jsx)("path",{d:"M ".concat(a," 140.31L ").concat(a," 117.94L ").concat(a+.5," 116.94L ").concat(a+.5," 140.31z"),"data-name":"bar"})},"b-".concat(a))}function b(a){return(0,t.jsxs)("g",{className:"abcjs-bar abcjs-bar abcjs-l0 abcjs-m0 abcjs-mm0 abcjs-v0",fill:"currentColor",stroke:"none","data-name":"bar",children:[(0,t.jsx)("path",{d:"M ".concat(a," 140.41L ").concat(a," 116.94L ").concat(a+4," 116.94L ").concat(a+4," 140.41z"),"data-name":"bar"}),(0,t.jsx)("path",{d:"M ".concat(a+8," 140.41L ").concat(a+8," 116.94L ").concat(a+8.6," 116.94L ").concat(a+8.6," 140.41z"),"data-name":"bar"}),(0,t.jsx)("path",{"data-name":"dots.dot",d:"M ".concat(a+12," 124.00813196981264c 0.09 -0.03 0.27 -0.06 0.39 -0.06c 0.96 0 1.74 0.78 1.74 1.71c 0 0.96 -0.78 1.74 -1.71 1.74c -0.96 0 -1.74 -0.78 -1.74 -1.71c 0 -0.78 0.54 -1.5 1.32 -1.68z")}),(0,t.jsx)("path",{"data-name":"dots.dot",d:"M ".concat(a+12," 130.38313196981264c 0.09 -0.03 0.27 -0.06 0.39 -0.06c 0.96 0 1.74 0.78 1.74 1.71c 0 0.96 -0.78 1.74 -1.71 1.74c -0.96 0 -1.74 -0.78 -1.74 -1.71c 0 -0.78 0.54 -1.5 1.32 -1.68z")})]},"s-".concat(a))}function i(a){return(0,t.jsxs)("g",{className:"abcjs-bar abcjs-bar abcjs-l0 abcjs-m0 abcjs-mm0 abcjs-v0",fill:"currentColor",stroke:"none","data-name":"bar",children:[(0,t.jsx)("path",{"data-name":"dots.dot",d:"M ".concat(a-12," 124.00813196981264c 0.09 -0.03 0.27 -0.06 0.39 -0.06c 0.96 0 1.74 0.78 1.74 1.71c 0 0.96 -0.78 1.74 -1.71 1.74c -0.96 0 -1.74 -0.78 -1.74 -1.71c 0 -0.78 0.54 -1.5 1.32 -1.68z")}),(0,t.jsx)("path",{"data-name":"dots.dot",d:"M ".concat(a-12," 130.38313196981264c 0.09 -0.03 0.27 -0.06 0.39 -0.06c 0.96 0 1.74 0.78 1.74 1.71c 0 0.96 -0.78 1.74 -1.71 1.74c -0.96 0 -1.74 -0.78 -1.74 -1.71c 0 -0.78 0.54 -1.5 1.32 -1.68z")}),(0,t.jsx)("path",{d:"M ".concat(a-8," 140.41L ").concat(a-8," 116.94L ").concat(a-8.6," 116.94L ").concat(a-8.6," 140.41z"),"data-name":"bar"}),(0,t.jsx)("path",{d:"M ".concat(a," 140.41L ").concat(a," 116.94L ").concat(a-4," 116.94L ").concat(a-4," 140.41z"),"data-name":"bar"})]},"e-".concat(a))}function d(a){var c=[];let{input:e}=a,n=s(e),o=function(a){let c=a.title||"",e=a.speed||"";var n=a.key||"";switch(n.toUpperCase()){case"CFA#":n="三下り四本(CFA#)";break;case"CGC":n="二上り四本(CGC)";break;default:n="本調子四本(CFC)"}let s=a.timeSignature||"";var o,r="";return 2==s.split("/").length&&(o=s.split("/")[0],r=s.split("/")[1]),(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/1999/xlink",role:"img",fill:"currentColor",stroke:"currentColor",viewBox:"0 0 700 90",preserveAspectRatio:"xMinYMin meet",children:[(0,t.jsx)("g",{children:(0,t.jsx)("text",{stroke:"none",fontSize:"27",fontStyle:"normal",fontFamily:"Times New Roman",fontWeight:"normal",textDecoration:"none",textAnchor:"middle",x:"350",y:"49.56","data-name":"title",children:(0,t.jsx)("tspan",{x:"350",children:c})})},"title"),(0,t.jsx)("g",{children:(0,t.jsx)("text",{stroke:"none",fontSize:"12",fontStyle:"normal",fontFamily:"Times New Roman",fontWeight:"normal",textDecoration:"none",textAnchor:"start",x:"68.2",y:"55.56","data-name":"key",children:(0,t.jsx)("tspan",{x:"68.2",children:n})})},"key"),""!=o&&""!=r&&(0,t.jsx)("g",{children:(0,t.jsx)("text",{stroke:"none",fontSize:"12",fontStyle:"normal",fontFamily:"Times New Roman",fontWeight:"normal",textDecoration:"none",textAnchor:"start",x:"68.2",y:"70.56","data-name":"key",children:(0,t.jsxs)("tspan",{x:"68.2",children:[r,"分の",o,"拍子"]})})},"key"),""!=e&&(0,t.jsx)("g",{fill:"currentColor",stroke:"none","data-name":"tempo",children:(0,t.jsx)("text",{stroke:"none",fontSize:"12",fontStyle:"normal",fontFamily:"Times New Roman",fontWeight:"normal",textDecoration:"none",textAnchor:"start",x:"68.2",y:"85.12","data-name":"beats",children:(0,t.jsxs)("tspan",{x:"68.2",children:["Tempo = ",e]})})},"tempo")]})}(n);for(var d=0;d<n.notes.length;d++){var h=n.notes[d];h=h.trim();let a=[],e=/\|\:|\:\||\(\d\:[\d#]+([\:\w])*\)([1-9/])*|(\|\|)|(\|)|\[( *\(\d\:[\d#]+(\:\w)*\) *)+\]([1-9/])*/g;if(0==(h.match(e)||[]).length)continue;h.startsWith("|:")?(h=h.substring(2,h.length),a.push(b(0))):h.startsWith("||")?(h=h.substring(2,h.length),a.push(r(0))):(h.startsWith("|")&&(h=h.substring(1,h.length)),a.push(l(0))),h.endsWith(":|")?(h=h.substring(0,h.length-2),a.push(i(700))):h.endsWith("||")?(h=h.substring(0,h.length-2),a.push(r(696.9))):(h.endsWith("|")&&(h=h.substring(0,h.length-1)),a.push(l(699.4)));let s=function(a){for(var c,e,t=a.match(/\|\:|\:\||\(\d\:[\d#]+([\:\w])*\)([1-9/])*|(\|\|)|(\|)|\[( *\(\d\:[\d#]+(\:\w)*\) *)+\]([1-9/])*|z([1-9/])*|\(3/g)||[],n=0,s=1,o=1,r=!1,l=0,b=1,i=!1,d=[],h=0;h<t.length;h++)switch(t[h],t[h]){case"|":case"||":case"|:":case":|":n+=1,d.push({type:"bar",note:t[h],len:1}),l=n;break;case"(3":i=!0,o=n,r=!0,s=l;break;case null===(c=t[h].match(/z([1-9/])*/))||void 0===c?void 0:c.input:var m=t[h].replace("z","").replace("Z","");if(""==m)n+=2,d.push({type:"relax",note:t[h],len:2});else{var p=m.match(/\d+\//g)||[];if(p.length>0){var k=m.match(/\d+/g)||["0"];n+=parseInt(k[0]),d.push({type:"relax",note:t[h],len:parseInt(k[0])});break}var p=m.match(/\d+/g)||[];if(p.length>0){var k=m.match(/\d+/g)||["0"];"4"==k[0]?(n+=2*parseInt(k[0]),d.push({type:"relax",note:t[h],len:4}),d.push({type:"longNote",len:4})):(n+=2*parseInt(k[0]),d.push({type:"relax",note:t[h],len:2*parseInt(k[0])}));break}if("/"==m){var k=m.match(/\d+/g)||["0"];n+=1,d.push({type:"relax",note:t[h],len:1})}else if("//"==m){var k=m.match(/\d+/g)||["0"];n+=.5,d.push({type:"relax",note:t[h],len:.5})}}r&&(r=!1,o=n),l=n;break;case null===(e=t[h].match(/\[( *\(\d\:[\d#]+([\:\w])*\) *)+\]([1-9/])*/))||void 0===e?void 0:e.input:var u=t[h].match(/\(\d\:\d+(\:\w)*\)/g)||[],x=[];if(u.forEach(a=>{var c=(a=a.replace("(","").replace(")","")).split(":");if(c.length<2)return;let e=c[0],t=c[1];x.push({line:e,note:t})}),0==x.length)break;var m=t[h].replace(/\[( *\(\d\:[\d#]+([\:\w])*\) *)+\]/g,"");if(""==m)n+=2,d.push({type:"notes",notes:x,len:2});else{var p=m.match(/\d+\//g)||[];if(p.length>0){var k=m.match(/\d+/g)||["0"];n+=parseInt(k[0]),d.push({type:"notes",notes:x,len:parseInt(k[0])});break}var p=m.match(/\d+/g)||[];if(p.length>0){var k=m.match(/\d+/g)||["0"];"4"==k[0]?(n+=2*parseInt(k[0]),d.push({type:"notes",notes:x,len:4}),d.push({type:"longNote",len:4})):(n+=2*parseInt(k[0]),d.push({type:"notes",notes:x,len:2*parseInt(k[0])}));break}if("/"==m){var k=m.match(/\d+/g)||["0"];n+=1,d.push({type:"notes",notes:x,len:1})}else if("//"==m){var k=m.match(/\d+/g)||["0"];n+=.5,d.push({type:"notes",notes:x,len:.5})}}i&&3==b?(i=!1,b=1,d.push({type:"triplet",startPre:s,start:o,end:n,line:"3"})):i&&b++,r&&(r=!1,o=n),l=n;break;default:var j=(t[h].match(/\(\d\:\d+([\:\w])*\)/g)||[])[0]||"",f=(j=j.replace("(","").replace(")","")).split(":");if(f.length<2)break;let a=f[0],L=f[1];var m=t[h].replace(/\(\d\:\d+([\:\w])*\)/g,""),g="";if(f.length>=3&&(g=f[2]),""==m)n+=2,d.push({type:"note",line:a,note:L,tech:g,len:2});else{var p=m.match(/\d+\//g)||[];if(p.length>0){var k=m.match(/\d+/g)||["0"];n+=parseInt(k[0]),d.push({type:"note",tech:g,line:a,note:L,len:parseInt(k[0])});break}var p=m.match(/\d+/g)||[];if(p.length>0){var k=m.match(/\d+/g)||["0"];"4"==k[0]?(n+=2*parseInt(k[0]),d.push({type:"note",tech:g,line:a,note:L,len:4}),d.push({type:"longNote",len:4})):(n+=2*parseInt(k[0]),d.push({type:"note",tech:g,line:a,note:L,len:2*parseInt(k[0])}));break}if("/"==m){var k=m.match(/\d+/g)||["0"];n+=1,d.push({type:"note",tech:g,line:a,note:L,len:1})}else if("//"==m){var k=m.match(/\d+/g)||["0"];n+=.5,d.push({type:"note",tech:g,line:a,note:L,len:.5})}}i&&3==b?(i=!1,b=1,d.push({type:"triplet",startPre:s,start:o,end:n,line:a})):i&&b++,r&&(r=!1,o=n),l=n}return{len:n,notes:d}}(h);var m=2*s.len;m<80&&(m=80);for(var p=687/m,k=0,u=0,x=0,j=0;j<s.notes.length;j++){u+=2*(s.notes[j].len||0);var f,g=(20+(k+1)*p+k*p)/2;let c=s.notes[j].type;if("notes"==c){a.push(function(a,c){var e=[],n=void 0,s=130.71;let{notes:o}=c;for(var r=0;r<o.length;r++){var l=144.71;"1"==o[r].line?(l=144.71,s<154.71&&(s=154.71)):"2"==o[r].line?(l=132.71,s<142.71&&(s=142.71)):"3"==o[r].line&&(l=120.71),e.push((0,t.jsx)("text",{stroke:"none",fontSize:"13",fontStyle:"normal",fontFamily:"Arial",fontWeight:"normal",textDecoration:"none",className:"abcjs-tab-number",textAnchor:"middle",x:a,y:l,cursor:"default",children:(0,t.jsx)("tspan",{x:a,children:o[r].note})}))}return 1==c.len?n=(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{d:"M ".concat(a-3," ").concat(s-9,"L ").concat(a-3," ").concat(s-9.5,"L ").concat(a+3," ").concat(s-9.5,"L ").concat(a+3," ").concat(s-9,"z"),"data-name":"bar"}),(0,t.jsx)("path",{d:"M ".concat(a-3," ").concat(s-7,"L ").concat(a-3," ").concat(s-7.5,"L ").concat(a+3," ").concat(s-7.5,"L ").concat(a+3," ").concat(s-7,"z"),"data-name":"bar"})]},"ns-d-".concat(a)):2==c.len?n=(0,t.jsx)("g",{children:(0,t.jsx)("path",{d:"M ".concat(a-3," ").concat(s-8,"L ").concat(a-3," ").concat(s-8.5,"L ").concat(a+3," ").concat(s-8.5,"L ").concat(a+3," ").concat(s-8,"z"),"data-name":"bar"})},"ns-d-".concat(a)):3==c.len&&(n=(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{d:"M ".concat(a-3," ").concat(s-8,"L ").concat(a-3," ").concat(s-8.5,"L ").concat(a+3," ").concat(s-8.5,"L ").concat(a+3," ").concat(s-8,"z"),"data-name":"bar"}),(0,t.jsx)("path",{"data-name":"dots.dot",d:"M ".concat(a+6," ").concat(s-10.5,"c 0.09 -0.03 0.27 -0.06 0.39 -0.06c 0.46 0 1.24 0.28 1.24 1.21c 0 0.46 -0.28 1.24 -1.21 1.24c -0.46 0 -1.24 -0.28 -1.24 -1.21c 0 -0.28 0.04 -1.0 0.82 -1.18z")})]},"n-d-".concat(a))),(0,t.jsxs)("g",{className:"abcjs-tabNumber abcjs-note abcjs-d0-125 abcjs-p4 abcjs-l0 abcjs-m0 abcjs-mm0 abcjs-v0 abcjs-n0",fill:"currentColor",stroke:"none","data-name":"tabNumber","data-index":"27",children:[e,n]},"ns-".concat(a))}(g,s.notes[j])),x=g,k=u;continue}if("relax"==c){a.push(function(a,c){var e=void 0;return 1==c.len?e=(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{d:"M ".concat(a-3," ").concat(133.71,"L ").concat(a-3," ").concat(133.21,"L ").concat(a+3," ").concat(133.21,"L ").concat(a+3," ").concat(133.71,"z"),"data-name":"bar"}),(0,t.jsx)("path",{d:"M ".concat(a-3," ").concat(135.71,"L ").concat(a-3," ").concat(135.21,"L ").concat(a+3," ").concat(135.21,"L ").concat(a+3," ").concat(135.71,"z"),"data-name":"bar"})]},"r-d-g-".concat(a)):2==c.len?e=(0,t.jsx)("g",{children:(0,t.jsx)("path",{d:"M ".concat(a-3," ").concat(134.71,"L ").concat(a-3," ").concat(134.21,"L ").concat(a+3," ").concat(134.21,"L ").concat(a+3," ").concat(134.71,"z"),"data-name":"bar"})},"r-d-g-".concat(a)):3==c.len&&(e=(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{d:"M ".concat(a-3," ").concat(134.71,"L ").concat(a-3," ").concat(134.21,"L ").concat(a+3," ").concat(134.21,"L ").concat(a+3," ").concat(134.71,"z"),"data-name":"bar"}),(0,t.jsx)("path",{"data-name":"dots.dot",d:"M ".concat(a+6," ").concat(132.21,"c 0.09 -0.03 0.27 -0.06 0.39 -0.06c 0.46 0 1.24 0.28 1.24 1.21c 0 0.46 -0.28 1.24 -1.21 1.24c -0.46 0 -1.24 -0.28 -1.24 -1.21c 0 -0.28 0.04 -1.0 0.82 -1.18z")})]},"n-d-".concat(a))),(0,t.jsxs)("g",{className:"abcjs-tabNumber abcjs-note abcjs-d0-125 abcjs-p4 abcjs-l0 abcjs-m0 abcjs-mm0 abcjs-v0 abcjs-n0",fill:"currentColor",stroke:"none","data-name":"tabNumber","data-index":"27",children:[(0,t.jsx)("path",{"data-name":"dots.dot",d:"M ".concat(a," 125.00813196981264c 3 -0.03 3 -0.06 0.39 -0.06c 0.96 0 3.74 0.78 3.74 3.71c 0 0.96 -0.78 3.74 -3.71 3.74c -0.96 0 -3.74 -0.78 -3.74 -3.71c 0 -0.78 0.54 -3.5 3.32 -3.68z")}),e]},"r-g-".concat(a))}(g,s.notes[j])),x=g,k=u;continue}if("triplet"==c){g=x;var L=2*(s.notes[j].startPre||0);s.notes[j].start,a.push(function(a,c,e){var n=(a+c)/2,s=100.71;return"1"==e.line?s=126.71:"2"==e.line?s=114.71:"3"==e.line&&(s=100.71),(0,t.jsxs)("g",{"data-name":"triplet",children:[(0,t.jsx)("path",{d:"M ".concat(a," ").concat(s," L ").concat(a," ").concat(s+5,"M ").concat(c," ").concat(s," L ").concat(c," ").concat(s+5,"M ").concat(a," ").concat(s," L ").concat(n-4," ").concat(s,"M ").concat(n+4," ").concat(s," L ").concat(c," ").concat(s),"data-name":"triplet-bracket"}),(0,t.jsx)("text",{stroke:"none",fontSize:"12",fontStyle:"italic",fontFamily:"Times",fontWeight:"normal",textDecoration:"none",textAnchor:"middle",x:n,y:s+3,"data-name":"3",children:(0,t.jsx)("tspan",{x:n,children:"3"})})]},"t-".concat(a,"-").concat(c))}((10+L*p+(10+(L+1)*p))/2,g,s.notes[j]));continue}let e=s.notes[j].note;if("||"==e)a.push(r(g));else if("|"==e)a.push(l(g));else if("|:"==e)a.push(b(g));else if(":|"==e)a.push(i(g));else if("longNote"==c)a.push((f=g,(0,t.jsx)("g",{className:"abcjs-tabNumber abcjs-note abcjs-d0-125 abcjs-p4 abcjs-l0 abcjs-m0 abcjs-mm0 abcjs-v0 abcjs-n0",fill:"currentColor",stroke:"none","data-name":"tabNumber","data-index":"27",children:(0,t.jsx)("path",{d:"M ".concat(f-5," ").concat(134.71-8,"L ").concat(f-5," ").concat(134.71-9.5,"L ").concat(f+5," ").concat(134.71-9.5,"L ").concat(f+5," ").concat(134.71-8,"z"),"data-name":"bar"})},"n-".concat(f))));else{var v={...s.notes[j],preX:x};a.push(function(a,c){var e=144.71,n=154.71,s=152.71;"1"==c.line?e=144.71:"2"==c.line?(e=132.71,n=142.71,s=140.71):"3"==c.line&&(e=120.71,n=130.71,s=128.71);var o=void 0,r=void 0;if(""!==c.tech)switch(c.tech){case"o":case"oshi":o=(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{d:"M ".concat(c.preX," ").concat(s-9,"L ").concat(c.preX," ").concat(s-15,"L ").concat(c.preX+.5," ").concat(s-16,"L ").concat(c.preX+.5," ").concat(n-9,"z"),"data-name":"bar"}),(0,t.jsx)("path",{d:"M ".concat(c.preX," ").concat(s-15,"L ").concat(c.preX," ").concat(s-16,"L ").concat(a-5," ").concat(s-16,"L ").concat(a-5," ").concat(s-15,"z"),"data-name":"bar"})]},"n-dt-".concat(a));break;case"s":case"sk":case"sukui":o=(0,t.jsx)("text",{stroke:"none",fontSize:"8",fontStyle:"normal",fontFamily:"Arial",fontWeight:"normal",textDecoration:"none",className:"abcjs-tab-number",textAnchor:"middle",x:a,y:n,cursor:"default",children:(0,t.jsx)("tspan",{x:a,children:"ス"})});break;case"h":case"ha":case"hajiki":o=(0,t.jsx)("text",{stroke:"none",fontSize:"8",fontStyle:"normal",fontFamily:"Arial",fontWeight:"normal",textDecoration:"none",className:"abcjs-tab-number",textAnchor:"middle",x:a,y:n,cursor:"default",children:(0,t.jsx)("tspan",{x:a,children:"ハ"})});break;case"u":case"uchi":o=(0,t.jsx)("text",{stroke:"none",fontSize:"8",fontStyle:"normal",fontFamily:"Arial",fontWeight:"normal",textDecoration:"none",className:"abcjs-tab-number",textAnchor:"middle",x:a,y:n,cursor:"default",children:(0,t.jsx)("tspan",{x:a,children:"ウ"})});break;case"sr":case"suri":var l=c.preX,b=s-15;o=(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{d:"M ".concat(l," ").concat(b-5," C ").concat(l+4.94," ").concat(b-9," ").concat(a-4.94," ").concat(b-9," ").concat(a," ").concat(b-5," C ").concat(a-4.94," ").concat(b-7," ").concat(l+4.94," ").concat(b-7," ").concat(l," ").concat(b-5," z"),"data-name":"tie"}),(0,t.jsx)("text",{stroke:"none",fontSize:"6",fontStyle:"normal",fontFamily:"Arial",fontWeight:"normal",textDecoration:"none",className:"abcjs-tab-number",textAnchor:"middle",x:(l+a)/2,y:b-10,cursor:"default",children:(0,t.jsx)("tspan",{x:(l+a)/2,children:"スリ"})})]},"n-dt-".concat(a))}return 1==c.len?r=(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{d:"M ".concat(a-3," ").concat(n-9,"L ").concat(a-3," ").concat(n-9.5,"L ").concat(a+3," ").concat(n-9.5,"L ").concat(a+3," ").concat(n-9,"z"),"data-name":"bar"}),(0,t.jsx)("path",{d:"M ".concat(a-3," ").concat(n-7,"L ").concat(a-3," ").concat(n-7.5,"L ").concat(a+3," ").concat(n-7.5,"L ").concat(a+3," ").concat(n-7,"z"),"data-name":"bar"})]},"n-d-".concat(a)):2==c.len?r=(0,t.jsx)("g",{children:(0,t.jsx)("path",{d:"M ".concat(a-3," ").concat(n-8,"L ").concat(a-3," ").concat(n-8.5,"L ").concat(a+3," ").concat(n-8.5,"L ").concat(a+3," ").concat(n-8,"z"),"data-name":"bar"})},"n-d-".concat(a)):.5==c.len?r=(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{d:"M ".concat(a-3," ").concat(n-9,"L ").concat(a-3," ").concat(n-9.5,"L ").concat(a+3," ").concat(n-9.5,"L ").concat(a+3," ").concat(n-9,"z"),"data-name":"bar"}),(0,t.jsx)("path",{d:"M ".concat(a-3," ").concat(n-7.5,"L ").concat(a-3," ").concat(n-8,"L ").concat(a+3," ").concat(n-8,"L ").concat(a+3," ").concat(n-7.5,"z"),"data-name":"bar"}),(0,t.jsx)("path",{d:"M ".concat(a-3," ").concat(n-6,"L ").concat(a-3," ").concat(n-6.5,"L ").concat(a+3," ").concat(n-6.5,"L ").concat(a+3," ").concat(n-6,"z"),"data-name":"bar"})]},"n-d-".concat(a)):3==c.len&&(r=(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{d:"M ".concat(a-3," ").concat(n-8,"L ").concat(a-3," ").concat(n-8.5,"L ").concat(a+3," ").concat(n-8.5,"L ").concat(a+3," ").concat(n-8,"z"),"data-name":"bar"}),(0,t.jsx)("path",{"data-name":"dots.dot",d:"M ".concat(a+6," ").concat(n-10.5,"c 0.09 -0.03 0.27 -0.06 0.39 -0.06c 0.46 0 1.24 0.28 1.24 1.21c 0 0.46 -0.28 1.24 -1.21 1.24c -0.46 0 -1.24 -0.28 -1.24 -1.21c 0 -0.28 0.04 -1.0 0.82 -1.18z")})]},"n-d-".concat(a))),(0,t.jsxs)("g",{className:"abcjs-tabNumber abcjs-note abcjs-d0-125 abcjs-p4 abcjs-l0 abcjs-m0 abcjs-mm0 abcjs-v0 abcjs-n0",fill:"currentColor",stroke:"none","data-name":"tabNumber","data-index":"27",children:[(0,t.jsx)("text",{stroke:"none",fontSize:"13",fontStyle:"normal",fontFamily:"Arial",fontWeight:"normal",textDecoration:"none",className:"abcjs-tab-number",textAnchor:"middle",x:a,y:e,cursor:"default",children:(0,t.jsx)("tspan",{x:a,children:c.note})}),r,o]},"n-".concat(a))}(g,v))}x=g,k=u}c.push((0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"abcjs-container",role:"img",fill:"#000",stroke:"#000",viewBox:"0 85.9602222442627 700 77.34977531433105",preserveAspectRatio:"xMinYMin meet","aria-label":'Sheet Music for "Example" section 2',children:[(0,t.jsxs)("g",{className:"abcjs-staff abcjs-l0 abcjs-v1",children:[(0,t.jsx)("path",{d:"M 0 116.46 L 700 116.46 L 700 117.16 L 0 117.16 z",stroke:"none",fill:"currentColor"},"line-1-".concat(d)),(0,t.jsx)("path",{d:"M 0 128.21 L 700 128.21 L 700 128.91 L 0 128.91 z",stroke:"none",fill:"currentColor"},"line-2-".concat(d)),(0,t.jsx)("path",{d:"M 0 139.71 L 700 139.71 L 700 140.41 L 0 140.41 z",stroke:"none",fill:"currentColor"},"line-3-".concat(d))]},"root-".concat(d)),a]},"line-".concat(d)))}return(0,t.jsxs)(t.Fragment,{children:[o,c]})}}}]);