import{SignaturePad as e}from"@ark-ui/react/signature-pad";import f from"clsx";import{forwardRef as S}from"react";import{jsx as t,jsxs as i}from"react/jsx-runtime";var m=S((a,n)=>{let{label:o,className:l,classNames:r,withClearTrigger:g=!0,withGuide:u=!0,...d}=a;return i(e.Root,{ref:n,className:f("rmc-root",l,r==null?void 0:r.root),...d,children:[o?t(e.Label,{className:r==null?void 0:r.label,children:o}):null,i(e.Control,{className:r==null?void 0:r.control,children:[t(e.Segment,{}),g?t(e.ClearTrigger,{className:r==null?void 0:r.clearTrigger,children:"Clear"}):null,u?t(e.Guide,{className:r==null?void 0:r.guide}):null]})]})}),p=m;export{p as ReactMinimalSignature};
