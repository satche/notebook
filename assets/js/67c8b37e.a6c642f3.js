"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[6166],{6060:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>t,metadata:()=>m,toc:()=>r});var n=a(4848),i=a(8453);const t={tags:["math"]},l="Function",m={id:"engineering/maths/algebra/function",title:"Function",description:"A function) is a mathematical object that takes an input and produces an output (number, vector, etc).",source:"@site/docs/engineering/maths/algebra/function.md",sourceDirName:"engineering/maths/algebra",slug:"/engineering/maths/algebra/function",permalink:"/notebook/engineering/maths/algebra/function",draft:!1,unlisted:!1,editUrl:"https://github.com/satche/notebook/tree/main/docs/engineering/maths/algebra/function.md",tags:[{inline:!0,label:"math",permalink:"/notebook/tags/math"}],version:"current",lastUpdatedAt:1721721519e3,frontMatter:{tags:["math"]},sidebar:"engineeringSidebar",previous:{title:"Derivative",permalink:"/notebook/engineering/maths/algebra/derivative"},next:{title:"Integral",permalink:"/notebook/engineering/maths/algebra/integral"}},c={},r=[{value:"Notation",id:"notation",level:2},{value:"Convex / concave",id:"convex--concave",level:2}];function h(s){const e={a:"a",annotation:"annotation",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,i.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"function",children:"Function"}),"\n",(0,n.jsxs)(e.p,{children:["A ",(0,n.jsx)(e.a,{href:"https://simple.wikipedia.org/wiki/Function_(mathematics)",children:"function"})," is a ",(0,n.jsx)(e.a,{href:"/notebook/engineering/maths/",children:"mathematical"})," object that takes an input and produces an output (number, vector, etc)."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"List of functions",src:a(7705).A+"",width:"624",height:"800"})}),"\n",(0,n.jsx)(e.h2,{id:"notation",children:"Notation"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsx)(e.mo,{children:":"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"X"}),(0,n.jsx)(e.mi,{children:"n"})]}),(0,n.jsx)(e.mo,{children:"\u2192"}),(0,n.jsx)(e.mi,{children:"Y"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"f: X^n \\to Y"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:":"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"\u2192"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"Y"})]})]})]}),"\nFunction ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"f"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"f"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"})]})})]})," from ",(0,n.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Domain_of_a_function",children:"domain"})," ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"X"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"X"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"})]})})]})," with ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"n"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," variables to ",(0,n.jsx)(e.a,{href:"https://simple.wikipedia.org/wiki/Range_(mathematics)",children:"codomain"})," ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"Y"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"Y"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"Y"})]})})]}),".\nNote that there is multiple example of different types of domains and codomains. Find more ",(0,n.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Function_(mathematics)",children:"here"}),"."]}),"\n",(0,n.jsx)(e.h2,{id:"convex--concave",children:"Convex / concave"}),"\n",(0,n.jsxs)(e.p,{children:["There is two methods two know if a function is ",(0,n.jsx)(e.a,{href:"https://simple.wikipedia.org/wiki/Convex_function",children:"convex"}),":"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"If we trace a line between two points from the function and that it's on or above the function (in the interval between those two points)"}),"\n",(0,n.jsxs)(e.li,{children:["If the 2nd ",(0,n.jsx)(e.a,{href:"/notebook/engineering/maths/algebra/derivative",children:"derivative"})," is positive (on a given interval)\n",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"2"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"f(x)=x^2"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})]})]})," is convex as ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"x"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"f'(x)=2x"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0019em",verticalAlign:"-0.25em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})]})]}),", ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{mathvariant:"normal",children:"\u2032"}),(0,n.jsx)(e.mo,{mathvariant:"normal",children:"\u2032"})]})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mo,{children:">"}),(0,n.jsx)(e.mn,{children:"0"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"f''(x)=2 > 0"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0019em",verticalAlign:"-0.25em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032\u2032"})})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:">"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"0"})]})]})]})]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["A function ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"f(x)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})," is ",(0,n.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Concave_function",children:"concave"})," when its opposite ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"-f(x)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})," is convex."]})]})}function x(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},7705:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/functions-73f1bd1b967f4ef00413c67c82fd66c3.png"},8453:(s,e,a)=>{a.d(e,{R:()=>l,x:()=>m});var n=a(6540);const i={},t=n.createContext(i);function l(s){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:l(s.components),n.createElement(t.Provider,{value:e},s.children)}}}]);