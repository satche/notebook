"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[8774],{7413:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>h});var n=a(4848),i=a(8453);const l={},r="Binary search",t={id:"engineering/algorithms/search/binary-search",title:"Binary search",description:"The binary search is used to find a value by splitting the interval into two at each iteration. For that, the list/array should be sorted.",source:"@site/docs/engineering/algorithms/search/binary-search.md",sourceDirName:"engineering/algorithms/search",slug:"/engineering/algorithms/search/binary-search",permalink:"/notebook/engineering/algorithms/search/binary-search",draft:!1,unlisted:!1,editUrl:"https://github.com/satche/notebook/tree/main/docs/engineering/algorithms/search/binary-search.md",tags:[],version:"current",lastUpdatedAt:1721721519e3,frontMatter:{},sidebar:"engineeringSidebar",previous:{title:"Beam search",permalink:"/notebook/engineering/algorithms/search/beam-search"},next:{title:"Breadth-first search",permalink:"/notebook/engineering/algorithms/search/breadth-first-search"}},c={},h=[{value:"Binary search tree",id:"binary-search-tree",level:2},{value:"Complexity",id:"complexity",level:2}];function m(s){const e={a:"a",annotation:"annotation",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"binary-search",children:"Binary search"}),"\n",(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.a,{href:"https://wikipedia.org/wiki/binary_search",children:"binary search"})," is used to find a value by splitting the interval into two at each iteration. For that, the list/array should be sorted."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Example of binary search",src:a(4021).A+"",width:"938",height:"382"})}),"\n",(0,n.jsx)(e.p,{children:"We can find the final result if it's a discret interval, like an index in a sorted list. However, if it's a continuous, we need to give a stopping condition (precision)."}),"\n",(0,n.jsx)(e.h2,{id:"binary-search-tree",children:"Binary search tree"}),"\n",(0,n.jsxs)(e.p,{children:["A ",(0,n.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Binary_search_tree",children:"binary search tree"})," is like a ",(0,n.jsx)(e.a,{href:"/notebook/engineering/data/data-structure/tree#Binary%20tree",children:"binary tree"}),", but one child node is larger while the other is smaller than the parent node."]}),"\n",(0,n.jsxs)(e.p,{children:["When nodes are inserted or deleted from the tree, it has to re-balance itself to keep this ",(0,n.jsx)(e.em,{children:"left\u2192larger, right\u2192smaller"})," logic."]}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:(0,n.jsx)(e.a,{href:"/notebook/engineering/algorithms/complexity",children:"Time complexity"})}),(0,n.jsx)(e.th,{children:"Mean case"}),(0,n.jsx)(e.th,{children:"Worst case"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Search"}),(0,n.jsx)(e.td,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u0398"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"log"}),(0,n.jsx)(e.mo,{children:"\u2061"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\Theta(\\log n)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"\u0398"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mop",children:["lo",(0,n.jsx)(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})}),(0,n.jsx)(e.td,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Insert"}),(0,n.jsx)(e.td,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u0398"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"log"}),(0,n.jsx)(e.mo,{children:"\u2061"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\Theta(\\log n)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"\u0398"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mop",children:["lo",(0,n.jsx)(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})}),(0,n.jsx)(e.td,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Delete"}),(0,n.jsx)(e.td,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u0398"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"log"}),(0,n.jsx)(e.mo,{children:"\u2061"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\Theta(\\log n)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"\u0398"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mop",children:["lo",(0,n.jsx)(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})}),(0,n.jsx)(e.td,{children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})})]})]})]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Binary search tree example",src:a(3372).A+"",width:"600",height:"502"})}),"\n",(0,n.jsx)(e.h2,{id:"complexity",children:"Complexity"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"/notebook/engineering/algorithms/complexity",children:"Time complexity"})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Worst case"}),": ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"log"}),(0,n.jsx)(e.mo,{children:"\u2061"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(\\log n)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mop",children:["lo",(0,n.jsx)(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Best case"}),": ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u03a9"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\Omega(1)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"\u03a9"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Mean case"}),": ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u0398"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"log"}),(0,n.jsx)(e.mo,{children:"\u2061"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\Theta(\\log n)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"\u0398"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mop",children:["lo",(0,n.jsx)(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Space complexity"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Worst case"}),": ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n"]})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(m,{...s})}):m(s)}},3372:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/binary-search-tree-4e47b5062f84240246d484a5dbeb5f54.png"},4021:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/binary-search-656f457228f8ace8e3aa877eed8030e8.png"},8453:(s,e,a)=>{a.d(e,{R:()=>r,x:()=>t});var n=a(6540);const i={},l=n.createContext(i);function r(s){const e=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:r(s.components),n.createElement(l.Provider,{value:e},s.children)}}}]);