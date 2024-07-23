"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[4106],{8284:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>m});var s=a(4848),r=a(8453);const t={tags:["algorithm","data-structure/graph"]},i="Bellman-Ford algorithm",l={id:"engineering/algorithms/graph/bellman-ford",title:"Bellman-Ford algorithm",description:"Bellman-Ford algorithm find shortest-path in a [graph]], from one vertex to the other ones. It's like [Dijkstra algorithm, but can handle negative weighted edges. It's also slower.",source:"@site/docs/engineering/algorithms/graph/bellman-ford.md",sourceDirName:"engineering/algorithms/graph",slug:"/engineering/algorithms/graph/bellman-ford",permalink:"/notebook/engineering/algorithms/graph/bellman-ford",draft:!1,unlisted:!1,editUrl:"https://github.com/satche/notebook/tree/main/docs/engineering/algorithms/graph/bellman-ford.md",tags:[{inline:!0,label:"algorithm",permalink:"/notebook/tags/algorithm"},{inline:!0,label:"data-structure/graph",permalink:"/notebook/tags/data-structure-graph"}],version:"current",lastUpdatedAt:1721721519e3,frontMatter:{tags:["algorithm","data-structure/graph"]},sidebar:"engineeringSidebar",previous:{title:"Graph algorithms",permalink:"/notebook/engineering/algorithms/graph/"},next:{title:"Dijkstra's algorithm",permalink:"/notebook/engineering/algorithms/graph/dijkstra"}},o={},m=[{value:"Complexity",id:"complexity",level:2},{value:"Resources",id:"resources",level:2}];function h(e){const n={a:"a",annotation:"annotation",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bellman-ford-algorithm",children:"Bellman-Ford algorithm"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm",children:"Bellman-Ford"})," algorithm find ",(0,s.jsx)(n.a,{href:"/notebook/engineering/algorithms/problems/shortest-path",children:"shortest-path"})," in a [[graph]], from one vertex to the other ones. It's like ",(0,s.jsx)(n.a,{href:"/notebook/engineering/algorithms/graph/dijkstra",children:"Dijkstra"})," algorithm, but can handle negative weighted edges. It's also slower."]}),"\n",(0,s.jsx)(n.h2,{id:"complexity",children:"Complexity"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/notebook/engineering/algorithms/complexity",children:"Time complexity"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Worst-case"}),": ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{mathvariant:"normal",children:"\u2223"}),(0,s.jsx)(n.mi,{children:"V"}),(0,s.jsx)(n.mi,{mathvariant:"normal",children:"\u2223"}),(0,s.jsx)(n.mi,{mathvariant:"normal",children:"\u2223"}),(0,s.jsx)(n.mi,{children:"E"}),(0,s.jsx)(n.mi,{mathvariant:"normal",children:"\u2223"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(|V||E|)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord",children:"\u2223"}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,s.jsx)(n.span,{className:"mord",children:"\u2223\u2223"}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),(0,s.jsx)(n.span,{className:"mord",children:"\u2223"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Best-case"}),": ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{mathvariant:"normal",children:"\u03a9"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{mathvariant:"normal",children:"\u2223"}),(0,s.jsx)(n.mi,{children:"E"}),(0,s.jsx)(n.mi,{mathvariant:"normal",children:"\u2223"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\Omega(|E|)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord",children:"\u03a9"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord",children:"\u2223"}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),(0,s.jsx)(n.span,{className:"mord",children:"\u2223"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=obWXjtg0L64",children:"Bellman-Ford in 5 minutes"})," \u2013 Youtube"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>l});var s=a(6540);const r={},t=s.createContext(r);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);