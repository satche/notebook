"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[509],{2166:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>h});var n=a(4848),l=a(8453);const i={tags:["algorithm","data-structure/graph"]},r="Floyd-Warshall algorithm",t={id:"engineering/algorithms/graph/floyd-warshall",title:"Floyd-Warshall algorithm",description:"Floyd-Warshall algorithm try to find the shortest path among all the vertices from a graph, with positive or negative weighted edges. It's best suited for denses graphs.",source:"@site/docs/engineering/algorithms/graph/floyd-warshall.md",sourceDirName:"engineering/algorithms/graph",slug:"/engineering/algorithms/graph/floyd-warshall",permalink:"/notebook/engineering/algorithms/graph/floyd-warshall",draft:!1,unlisted:!1,editUrl:"https://github.com/satche/notebook/tree/main/docs/engineering/algorithms/graph/floyd-warshall.md",tags:[{inline:!0,label:"algorithm",permalink:"/notebook/tags/algorithm"},{inline:!0,label:"data-structure/graph",permalink:"/notebook/tags/data-structure-graph"}],version:"current",lastUpdatedAt:1721721519e3,frontMatter:{tags:["algorithm","data-structure/graph"]},sidebar:"engineeringSidebar",previous:{title:"Dijkstra's algorithm",permalink:"/notebook/engineering/algorithms/graph/dijkstra"},next:{title:"Ford-Fulkerson algorithm",permalink:"/notebook/engineering/algorithms/graph/ford-fulkerson"}},m={},h=[{value:"Complexity",id:"complexity",level:2},{value:"Resources",id:"resources",level:2}];function c(s){const e={a:"a",annotation:"annotation",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"floyd-warshall-algorithm",children:"Floyd-Warshall algorithm"})}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm",children:"Floyd-Warshall algorithm"})," try to find the ",(0,n.jsx)(e.a,{href:"/notebook/engineering/algorithms/problems/shortest-path",children:"shortest path"})," among all the vertices from a ",(0,n.jsx)(e.a,{href:"/notebook/engineering/data/database/nosql/graph",children:"graph"}),", with positive or negative weighted edges. It's best suited for denses graphs."]}),"\n",(0,n.jsxs)(e.p,{children:["Another way to illustrate it is to run the ",(0,n.jsx)(e.a,{href:"/notebook/engineering/algorithms/graph/dijkstra",children:"Dijkstra"})," algorithm for all the vertices in the graph."]}),"\n",(0,n.jsx)(e.h2,{id:"complexity",children:"Complexity"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"/notebook/engineering/algorithms/complexity",children:"Time complexity"})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Worst-case"}),": ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"V"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mn,{children:"3"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(|V|^3)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"3"})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Best-case:"})," ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u03a9"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"V"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mn,{children:"3"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\Omega(|V|^3)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"\u03a9"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"3"})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Average-case"}),": ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u0398"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"V"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mn,{children:"3"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\Theta(|V|^3)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"\u0398"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"3"})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Space complexity"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Worst-case"}),": ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"V"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mn,{children:"2"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(|V|)^2"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsxs)(e.span,{className:"mclose",children:[(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})})]})]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["Note: if you repeat ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"V"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"|V|"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"})]})})]})," time the ",(0,n.jsx)(e.a,{href:"/notebook/engineering/algorithms/graph/dijkstra",children:"Dijkstra"})," algorithm instead, the complexity become ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"V"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mi,{children:"log"}),(0,n.jsx)(e.mo,{children:"\u2061"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"V"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"V"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"E"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(|V|^2 \\log |V|+|V||E|)"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mop",children:["lo",(0,n.jsx)(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),". It's better, but it works only with positive weighted edges."]}),"\n",(0,n.jsx)(e.h2,{id:"resources",children:"Resources"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.a,{href:"https://www.youtube.com/watch?v=4OQeCuLYj-4",children:"Floyd-Warshall in 4 minutes"})," \u2013 Youtube"]}),"\n"]})]})}function d(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(c,{...s})}):c(s)}},8453:(s,e,a)=>{a.d(e,{R:()=>r,x:()=>t});var n=a(6540);const l={},i=n.createContext(l);function r(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:r(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);