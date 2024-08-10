"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[7008],{7037:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(4848),a=t(8453);const r={},s="NoSQL",o={id:"engineering/data/database/nosql/nosql",title:"NoSQL",description:"A NoSQL system propose a different architecture than the one based on tables, found in rdbms",source:"@site/docs/engineering/data/database/nosql/nosql.md",sourceDirName:"engineering/data/database/nosql",slug:"/engineering/data/database/nosql/",permalink:"/notebook/engineering/data/database/nosql/",draft:!1,unlisted:!1,editUrl:"https://github.com/satche/notebook/tree/main/docs/engineering/data/database/nosql/nosql.md",tags:[],version:"current",lastUpdatedAt:1721721519e3,frontMatter:{},sidebar:"engineeringSidebar",previous:{title:"Tree",permalink:"/notebook/engineering/data/data-structure/tree"},next:{title:"Column",permalink:"/notebook/engineering/data/database/nosql/column"}},l={},c=[{value:"Main characteristics",id:"main-characteristics",level:2},{value:"Aggregate",id:"aggregate",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"nosql",children:"NoSQL"})}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:"https://wikipedia.org/wiki/nosql",children:"NoSQL"})," system propose a different architecture than the one based on tables, found in ",(0,i.jsx)(n.a,{href:"/notebook/engineering/data/database/rdbms",children:"rdbms"})]}),"\n",(0,i.jsxs)(n.p,{children:["It is used to propose solution to manage issues related to the ",(0,i.jsx)(n.a,{href:"https://wikipedia.org/wiki/big_data",children:"big data"})," and ",(0,i.jsx)(n.a,{href:"https://wikipedia.org/wiki/real-time_web",children:"real-time web"})," applications."]}),"\n",(0,i.jsx)(n.h2,{id:"main-characteristics",children:"Main characteristics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open-source"}),"\n",(0,i.jsxs)(n.li,{children:["Design to work on ",(0,i.jsx)(n.a,{href:"https://wikipedia.org/wiki/cluster_computing",children:"cluster of machines"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Don\u2019t rely on relational model, schema or structure"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Not-Only SQL."})," Supports SQL-like languages, but usually relies on other ones."]}),"\n",(0,i.jsxs)(n.li,{children:["Follow the ",(0,i.jsx)(n.a,{href:"/notebook/engineering/architecture/principles/acid#base",children:"BASE"})," properties"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/notebook/engineering/architecture/quality-attributes/scalability",children:"Horizontal scalability"})," (scale out)"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"aggregate",children:"Aggregate"}),"\n",(0,i.jsx)(n.p,{children:"An aggregate collection of related objects are treated as an unit"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Suitable for clusters"}),"\n",(0,i.jsx)(n.li,{children:"Atomicity guaranteed"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'// User and products are related,\n// the result of the query is merged\n{\n  "user": {\n    "name": "Alice",\n    "products": [\n      {\n        "id": 1,\n        "name": "Laptop"\n      },\n      {\n        "id": 2,\n        "name": "Smartphone"\n      }     \n    ]\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(6540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);