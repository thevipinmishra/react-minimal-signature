"use strict";var P=Object.create;var l=Object.defineProperty;var R=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var b=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var T=(e,t)=>{for(var o in t)l(e,o,{get:t[o],enumerable:!0})},g=(e,t,o,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of c(t))!C.call(e,r)&&r!==o&&l(e,r,{get:()=>t[r],enumerable:!(n=R(t,r))||n.enumerable});return e};var w=(e,t,o)=>(o=e!=null?P(b(e)):{},g(t||!e||!e.__esModule?l(o,"default",{value:e,enumerable:!0}):o,e)),h=e=>g(l({},"__esModule",{value:!0}),e);var x={};T(x,{ReactMinimalSignature:()=>f});module.exports=h(x);var a=require("@ark-ui/react/signature-pad"),u=w(require("clsx")),d=require("react"),i=require("react/jsx-runtime"),s=(0,d.forwardRef)((e,t)=>{let{label:o,className:n,classNames:r,withClearTrigger:S=!0,withGuide:m=!0,...p}=e;return(0,i.jsxs)(a.SignaturePad.Root,{ref:t,className:(0,u.default)("rmc-root",n,r==null?void 0:r.root),...p,children:[o?(0,i.jsx)(a.SignaturePad.Label,{className:r==null?void 0:r.label,children:o}):null,(0,i.jsxs)(a.SignaturePad.Control,{className:r==null?void 0:r.control,children:[(0,i.jsx)(a.SignaturePad.Segment,{}),S?(0,i.jsx)(a.SignaturePad.ClearTrigger,{className:r==null?void 0:r.clearTrigger,children:"Clear"}):null,m?(0,i.jsx)(a.SignaturePad.Guide,{className:r==null?void 0:r.guide}):null]})]})}),f=s;0&&(module.exports={ReactMinimalSignature});
