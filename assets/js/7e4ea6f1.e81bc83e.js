"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[4524],{1559:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=t(4848),r=t(8453);const s={aliases:["DbC","interfaces"],tags:[]},o="Design by contract",c={id:"engineering/architecture/paradigms/design-by-contract",title:"Design by contract",description:"Design by contract (DbC) is a way to architecture a system where components force the use of their methods via interfaces.",source:"@site/docs/engineering/architecture/paradigms/design-by-contract.md",sourceDirName:"engineering/architecture/paradigms",slug:"/engineering/architecture/paradigms/design-by-contract",permalink:"/notebook/engineering/architecture/paradigms/design-by-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/satche/notebook/tree/main/docs/engineering/architecture/paradigms/design-by-contract.md",tags:[],version:"current",lastUpdatedAt:1721721519e3,frontMatter:{aliases:["DbC","interfaces"],tags:[]},sidebar:"engineeringSidebar",previous:{title:"Declarative Imperative",permalink:"/notebook/engineering/architecture/paradigms/declarative-imperative"},next:{title:"Object-oriented",permalink:"/notebook/engineering/architecture/paradigms/object-oriented"}},a={},d=[{value:"Conditions",id:"conditions",level:2}];function l(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"design-by-contract",children:"Design by contract"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://wikipedia.org/wiki/design_by_contract",children:"Design by contract"})," (DbC) is a way to architecture a system where ",(0,i.jsx)(n.a,{href:"/notebook/engineering/architecture/styles/component-based",children:"components"})," force the use of their methods via interfaces."]}),"\n",(0,i.jsx)(n.h2,{id:"conditions",children:"Conditions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Precondition"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Callers have the responsibility to respect the preconditions"}),"\n",(0,i.jsx)(n.li,{children:"If not, an error is raised and the interface is not implemented"}),"\n",(0,i.jsx)(n.li,{children:"Example: chose of topping in a pizza order is a precondition"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Postcondition"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Implementers have the responsibility to respect the postconditions"}),"\n",(0,i.jsxs)(n.li,{children:["They must be satisfied ",(0,i.jsx)(n.em,{children:"after"})," an interface method is invoked."]}),"\n",(0,i.jsx)(n.li,{children:"Example: delivery time in a pizza order is postcondition"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Invariant"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Absolute rules"}),"\n",(0,i.jsx)(n.li,{children:"Must remain true before and after the execution of the method"}),"\n",(0,i.jsx)(n.li,{children:"Example: dough is an invariant condition to cook a pizza"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);