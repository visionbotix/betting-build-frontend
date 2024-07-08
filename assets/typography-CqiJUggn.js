import{g as k,a as z,s as W,_ as d,b as D,r as H,u as T,c as q,j as i,d as w,e as V,f as F,T as e,h as M,i as E,k as O,G as R,S as x,M as o,l as n}from"./index-DQVj0AoD.js";import{C as J}from"./ComponentSkeleton-DdIPSUzO.js";function K(t){return k("MuiDivider",t)}z("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const Q=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],X=t=>{const{absolute:r,children:a,classes:l,flexItem:c,light:s,orientation:h,textAlign:u,variant:m}=t;return V({root:["root",r&&"absolute",m,s&&"light",h==="vertical"&&"vertical",c&&"flexItem",a&&"withChildren",a&&h==="vertical"&&"withChildrenVertical",u==="right"&&h!=="vertical"&&"textAlignRight",u==="left"&&h!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",h==="vertical"&&"wrapperVertical"]},K,l)},Y=W("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:a}=t;return[r.root,a.absolute&&r.absolute,r[a.variant],a.light&&r.light,a.orientation==="vertical"&&r.vertical,a.flexItem&&r.flexItem,a.children&&r.withChildren,a.children&&a.orientation==="vertical"&&r.withChildrenVertical,a.textAlign==="right"&&a.orientation!=="vertical"&&r.textAlignRight,a.textAlign==="left"&&a.orientation!=="vertical"&&r.textAlignLeft]}})(({theme:t,ownerState:r})=>d({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:D(t.palette.divider,.08)},r.variant==="inset"&&{marginLeft:72},r.variant==="middle"&&r.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},r.variant==="middle"&&r.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},r.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:t})=>d({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:t,ownerState:r})=>d({},r.children&&r.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}}),({theme:t,ownerState:r})=>d({},r.children&&r.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}}),({ownerState:t})=>d({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),Z=W("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,r)=>{const{ownerState:a}=t;return[r.wrapper,a.orientation==="vertical"&&r.wrapperVertical]}})(({theme:t,ownerState:r})=>d({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},r.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),g=H.forwardRef(function(r,a){const l=T({props:r,name:"MuiDivider"}),{absolute:c=!1,children:s,className:h,component:u=s?"div":"hr",flexItem:m=!1,light:f=!1,orientation:B="horizontal",role:p=u!=="hr"?"separator":void 0,textAlign:v="center",variant:C="fullWidth"}=l,L=q(l,Q),j=d({},l,{absolute:c,component:u,flexItem:m,light:f,orientation:B,role:p,textAlign:v,variant:C}),y=X(j);return i.jsx(Y,d({as:u,className:w(y.root,h),role:p,ref:a,ownerState:j},L,{children:s?i.jsx(Z,{className:y.wrapper,ownerState:j,children:s}):null}))});g.muiSkipListHighlight=!0;function ii(t){return k("MuiLink",t)}const ei=z("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),$={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},ri=t=>$[t]||t,ti=({theme:t,ownerState:r})=>{const a=ri(r.color),l=F(t,`palette.${a}`,!1)||r.color,c=F(t,`palette.${a}Channel`);return"vars"in t&&c?`rgba(${c} / 0.4)`:D(l,.4)},ai=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],ni=t=>{const{classes:r,component:a,focusVisible:l,underline:c}=t,s={root:["root",`underline${M(c)}`,a==="button"&&"button",l&&"focusVisible"]};return V(s,ii,r)},oi=W(e,{name:"MuiLink",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:a}=t;return[r.root,r[`underline${M(a.underline)}`],a.component==="button"&&r.button]}})(({theme:t,ownerState:r})=>d({},r.underline==="none"&&{textDecoration:"none"},r.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},r.underline==="always"&&d({textDecoration:"underline"},r.color!=="inherit"&&{textDecorationColor:ti({theme:t,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),r.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ei.focusVisible}`]:{outline:"auto"}})),li=H.forwardRef(function(r,a){const l=T({props:r,name:"MuiLink"}),{className:c,color:s="primary",component:h="a",onBlur:u,onFocus:m,TypographyClasses:f,underline:B="always",variant:p="inherit",sx:v}=l,C=q(l,ai),{isFocusVisibleRef:L,onBlur:j,onFocus:y,ref:I}=E(),[N,A]=H.useState(!1),P=O(a,I),U=b=>{j(b),L.current===!1&&A(!1),u&&u(b)},_=b=>{y(b),L.current===!0&&A(!0),m&&m(b)},S=d({},l,{color:s,component:h,focusVisible:N,underline:B,variant:p}),G=ni(S);return i.jsx(oi,d({color:s,className:w(G.root,c),classes:f,component:h,onBlur:U,onFocus:_,ref:P,ownerState:S,variant:p,sx:[...Object.keys($).includes(s)?[]:[{color:s}],...Array.isArray(v)?v:[v]]},C))});function ci(){return i.jsx(J,{children:i.jsxs(R,{container:!0,spacing:3,children:[i.jsx(R,{item:!0,xs:12,lg:6,children:i.jsxs(x,{spacing:3,children:[i.jsx(o,{title:"Basic",children:i.jsxs(x,{spacing:.75,sx:{mt:-1.5},children:[i.jsx(e,{variant:"h1",children:"Inter"}),i.jsx(e,{variant:"h5",children:"Font Family"}),i.jsxs(n,{"aria-label":"breadcrumb",children:[i.jsx(e,{variant:"h6",children:"Regular"}),i.jsx(e,{variant:"h6",children:"Medium"}),i.jsx(e,{variant:"h6",children:"Bold"})]})]})}),i.jsx(o,{title:"Heading",children:i.jsxs(x,{spacing:2,children:[i.jsx(e,{variant:"h1",children:"H1 Heading"}),i.jsxs(n,{"aria-label":"breadcrumb",children:[i.jsx(e,{variant:"h6",children:"Size: 38px"}),i.jsx(e,{variant:"h6",children:"Weight: Bold"}),i.jsx(e,{variant:"h6",children:"Line Height: 46px"})]}),i.jsx(g,{}),i.jsx(e,{variant:"h2",children:"H2 Heading"}),i.jsxs(n,{"aria-label":"breadcrumb",children:[i.jsx(e,{variant:"h6",children:"Size: 30px"}),i.jsx(e,{variant:"h6",children:"Weight: Bold"}),i.jsx(e,{variant:"h6",children:"Line Height: 38px"})]}),i.jsx(g,{}),i.jsx(e,{variant:"h3",children:"H3 Heading"}),i.jsxs(n,{"aria-label":"breadcrumb",children:[i.jsx(e,{variant:"h6",children:"Size: 24px"}),i.jsx(e,{variant:"h6",children:"Weight: Regular & Bold"}),i.jsx(e,{variant:"h6",children:"Line Height: 32px"})]}),i.jsx(g,{}),i.jsx(e,{variant:"h4",children:"H4 Heading"}),i.jsxs(n,{"aria-label":"breadcrumb",children:[i.jsx(e,{variant:"h6",children:"Size: 20px"}),i.jsx(e,{variant:"h6",children:"Weight: Bold"}),i.jsx(e,{variant:"h6",children:"Line Height: 28px"})]}),i.jsx(g,{}),i.jsx(e,{variant:"h5",children:"H5 Heading"}),i.jsxs(n,{"aria-label":"breadcrumb",children:[i.jsx(e,{variant:"h6",children:"Size: 16px"}),i.jsx(e,{variant:"h6",children:"Weight: Regular & Medium & Bold"}),i.jsx(e,{variant:"h6",children:"Line Height: 24px"})]}),i.jsx(g,{}),i.jsx(e,{variant:"h6",children:"H6 Heading / Subheading"}),i.jsxs(n,{"aria-label":"breadcrumb",children:[i.jsx(e,{variant:"h6",children:"Size: 14px"}),i.jsx(e,{variant:"h6",children:"Weight: Regular"}),i.jsx(e,{variant:"h6",children:"Line Height: 22px"})]})]})}),i.jsx(o,{title:"Body 1",children:i.jsxs(i.Fragment,{children:[i.jsx(e,{variant:"body1",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.jsxs(n,{"aria-label":"breadcrumb",children:[i.jsx(e,{variant:"h6",children:"Size: 14px"}),i.jsx(e,{variant:"h6",children:"Weight: Regular"}),i.jsx(e,{variant:"h6",children:"Line Height: 22px"})]})]})}),i.jsx(o,{title:"Body 2",children:i.jsxs(i.Fragment,{children:[i.jsx(e,{variant:"body2",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.jsxs(n,{"aria-label":"breadcrumb",children:[i.jsx(e,{variant:"h6",children:"Size: 12px"}),i.jsx(e,{variant:"h6",children:"Weight: Regular"}),i.jsx(e,{variant:"h6",children:"Line Height: 20px"})]})]})}),i.jsx(o,{title:"Subtitle 1",children:i.jsxs(i.Fragment,{children:[i.jsx(e,{variant:"subtitle1",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.jsxs(n,{"aria-label":"breadcrumb",children:[i.jsx(e,{variant:"h6",children:"Size: 14px"}),i.jsx(e,{variant:"h6",children:"Weight: Medium"}),i.jsx(e,{variant:"h6",children:"Line Height: 22px"})]})]})}),i.jsx(o,{title:"Subtitle 2",children:i.jsxs(i.Fragment,{children:[i.jsx(e,{variant:"subtitle2",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.jsxs(n,{"aria-label":"breadcrumb",children:[i.jsx(e,{variant:"h6",children:"Size: 12px"}),i.jsx(e,{variant:"h6",children:"Weight: Medium"}),i.jsx(e,{variant:"h6",children:"Line Height: 20px"})]})]})}),i.jsx(o,{title:"Caption",children:i.jsxs(x,{spacing:1,children:[i.jsx(e,{variant:"caption",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.jsxs(n,{"aria-label":"breadcrumb",children:[i.jsx(e,{variant:"h6",children:"Size: 12px"}),i.jsx(e,{variant:"h6",children:"Weight: Regular"}),i.jsx(e,{variant:"h6",children:"Line Height: 20px"})]})]})})]})}),i.jsx(R,{item:!0,xs:12,lg:6,children:i.jsxs(x,{spacing:3,children:[i.jsx(o,{title:"Alignment",children:i.jsxs(i.Fragment,{children:[i.jsx(e,{variant:"body2",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.jsx(e,{variant:"body2",textAlign:"center",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.jsx(e,{variant:"body2",textAlign:"right",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),i.jsx(o,{title:"Gutter Bottom",children:i.jsxs(i.Fragment,{children:[i.jsx(e,{variant:"body1",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.jsx(e,{variant:"body2",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.jsxs(n,{"aria-label":"breadcrumb",children:[i.jsx(e,{variant:"h6",children:"Size: 12px"}),i.jsx(e,{variant:"h6",children:"Weight: Regular"}),i.jsx(e,{variant:"h6",children:"Line Height: 20px"})]})]})}),i.jsx(o,{title:"Overline",children:i.jsxs(x,{spacing:1.5,children:[i.jsx(e,{variant:"overline",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.jsxs(n,{"aria-label":"breadcrumb",children:[i.jsx(e,{variant:"h6",children:"Size: 12px"}),i.jsx(e,{variant:"h6",children:"Weight: Regular"}),i.jsx(e,{variant:"h6",children:"Line Height: 20px"})]})]})}),i.jsx(o,{title:"Link",children:i.jsxs(x,{spacing:1.5,children:[i.jsx(li,{href:"#",children:"www.mantis.com"}),i.jsxs(n,{"aria-label":"breadcrumb",children:[i.jsx(e,{variant:"h6",children:"Size: 12px"}),i.jsx(e,{variant:"h6",children:"Weight: Regular"}),i.jsx(e,{variant:"h6",children:"Line Height: 20px"})]})]})}),i.jsx(o,{title:"Colors",children:i.jsxs(i.Fragment,{children:[i.jsx(e,{variant:"h6",color:"textPrimary",gutterBottom:!0,children:"This is textPrimary text color."}),i.jsx(e,{variant:"h6",color:"textSecondary",gutterBottom:!0,children:"This is textSecondary text color."}),i.jsx(e,{variant:"h6",color:"primary",gutterBottom:!0,children:"This is primary text color."}),i.jsx(e,{variant:"h6",color:"secondary",gutterBottom:!0,children:"This is secondary text color."}),i.jsx(e,{variant:"h6",color:"success",gutterBottom:!0,children:"This is success text color."}),i.jsx(e,{variant:"h6",sx:{color:"warning.main"},gutterBottom:!0,children:"This is warning text color."}),i.jsx(e,{variant:"h6",color:"error",gutterBottom:!0,children:"This is error text color."})]})}),i.jsx(o,{title:"Paragraph",children:i.jsxs(i.Fragment,{children:[i.jsx(e,{variant:"body1",gutterBottom:!0,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.jsxs(n,{"aria-label":"breadcrumb",children:[i.jsx(e,{variant:"h6",children:"Size: 14px"}),i.jsx(e,{variant:"h6",children:"Weight: Regular"}),i.jsx(e,{variant:"h6",children:"Line Height: 22px"})]})]})}),i.jsx(o,{title:"Font Style",children:i.jsxs(i.Fragment,{children:[i.jsx(e,{variant:"body1",gutterBottom:!0,sx:{fontStyle:"italic"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.jsx(e,{variant:"subtitle1",gutterBottom:!0,sx:{fontStyle:"italic"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.jsxs(n,{"aria-label":"breadcrumb",children:[i.jsx(e,{variant:"h6",children:"Size: 14px"}),i.jsx(e,{variant:"h6",children:"Weight: Italic Regular & Italic Bold"}),i.jsx(e,{variant:"h6",children:"Line Height: 22px"})]})]})})]})})]})})}export{ci as default};
