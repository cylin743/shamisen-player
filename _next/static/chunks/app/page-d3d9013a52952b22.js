(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2083:function(e,t,n){Promise.resolve().then(n.bind(n,980))},980:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var i=n(7437),s=n(2265);n(9302);var r=n(2734),l=n(7907),o=n(3224),a=n.n(o),d=n(1740),c=n(4272),p=n(9835),u=n(9309);let h={cursor:"pointer",height:"24px",width:"24px"},x={borderBottom:"1px solid #EEEEEE",padding:"16px 20px",display:"flex",justifyContent:"space-between",alignItems:"center"};var m=e=>{let{title:t,onClose:n}=e;return(0,i.jsxs)("div",{style:x,children:[t,(0,i.jsx)("div",{style:h,onClick:n,children:(0,i.jsx)(u.Z,{})})]})},f=n(6285);let j={width:"100%",display:"flex",justifyContent:"flex-end"},g={padding:"12px 20px"};var v=e=>{let{onSubmit:t}=e;return(0,i.jsx)("div",{style:g,children:(0,i.jsx)("div",{style:j,children:(0,i.jsx)(f.Z,{onClick:t,children:"Copy"})})})};function y(e){let{isOpen:t,onClose:n,onCopy:r,link:l}=e,[o,a]=(0,s.useState)(!1),u=(0,s.useRef)(null);return(0,i.jsx)(d.Z,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,i.jsxs)(c.Z,{sx:C,children:[(0,i.jsx)(p.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:(0,i.jsx)(m,{title:"Share Link",onClose:n})}),(0,i.jsx)(p.Z,{id:"modal-modal-description",sx:{mt:2},children:(0,i.jsx)("textarea",{ref:u,style:b,id:"outlined-multiline-static",rows:4,defaultValue:l})}),(0,i.jsx)(v,{onSubmit:()=>{var e,t;a(!0),null===(e=u.current)||void 0===e||e.focus(),null===(t=u.current)||void 0===t||t.select(),setTimeout(()=>a(!1),2e3),navigator.clipboard.writeText(l)}})]})})}let b={width:"100%"},C={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};var w=n(7241),S=n(6929),k=n(2486),Z=n(1787);function E(){let e=n(1514),t=(0,l.useSearchParams)();var o=t.get("t")||"";o=""==o?atob(o=t.get("tune")||""):a().decompressFromBase64(decodeURIComponent(o))||"";let[d,c]=(0,s.useState)(o),[p,u]=(0,s.useState)(!1),[h,x]=(0,s.useState)(null),[m,j]=(0,s.useState)(""),[g,v]=(0,s.useState)(!1),b=(0,s.useRef)(null),[C,E]=(0,s.useState)(0),_=e=>{window.open(e,"_blank","noreferrer")},O=a().compressToBase64(d),R=class{constructor(e){this.onStart=()=>{},this.onStop=()=>{},this.onFinished=()=>{},this.onBeat=()=>{},this.onEvent=()=>{}}};return(0,s.useEffect)(()=>{null!=h&&h.pause(),O=a().compressToBase64(d),j("https://cylin743.github.io/shamisen-player/?t=".concat(encodeURIComponent(O)));let t=(0,r.P0)(d),[n]=e.renderAbc("*",t,{scale:1,staffwidth:700,paddingleft:0,paddingright:0,responsive:"resize",oneSvgPerLine:!0,add_classes:!0});var i=new R((0,r.gT)(d)),s=new e.synth.SynthController;s.load("#main-midi",i,{displayRestart:!0,displayPlay:!0,displayProgress:!0,displayLoop:!0,displayWarp:!0,showCursor:!0}),s.setTune(n,!1,{soundFontUrl:"https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/",programOffsets:{},fadeLength:1e3,millisecondsPerMeasure:1e3,pan:[1.3,2.3],program:106,chordsOff:!0}),x(s)},[d]),(0,i.jsxs)("main",{children:[(0,i.jsx)("h1",{children:"Shamisen Player"}),(0,i.jsx)(f.Z,{onClick:()=>u(!0),children:"Share"}),(0,i.jsx)(f.Z,{onClick:()=>_("./printable?t=".concat(encodeURIComponent(O))),children:"Printable Page"}),(0,i.jsx)(f.Z,{onClick:()=>_("https://hackmd.io/@cklin/rkOaMKdap"),children:"Help"}),(0,i.jsxs)(w.Z,{children:[(0,i.jsx)(k.Z,{expandIcon:(0,i.jsx)(Z.Z,{}),"aria-controls":"panel1-content",id:"panel1-header",children:"Editor"}),(0,i.jsx)(S.Z,{children:(0,i.jsx)("textarea",{value:d,onChange:e=>c(e.target.value),style:P})})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{id:"main-midi"}),(0,i.jsx)("div",{id:"paper"})]}),(0,i.jsx)("div",{ref:b,children:(0,i.jsx)(r.gO,{input:d,beat:C,displayPointer:g})}),(0,i.jsx)(y,{isOpen:p,onClose:()=>u(!1),link:m,onCopy:()=>{navigator.clipboard.writeText(m)}})]})}let P={padding:"12px 10px",width:"98%",height:"250px"}}},function(e){e.O(0,[619,543,202,734,971,69,744],function(){return e(e.s=2083)}),_N_E=e.O()}]);