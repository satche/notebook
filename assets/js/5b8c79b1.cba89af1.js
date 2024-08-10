"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[8814],{5771:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=s(4848),a=s(8453);const i={aliases:["Data-flow diagrams","DFD"],tags:[]},r="DFD",l={id:"engineering/architecture/models/other/dfd",title:"DFD",description:"Data-flow diagram illustrates the flow of information for processes and systems.",source:"@site/docs/engineering/architecture/models/other/dfd.md",sourceDirName:"engineering/architecture/models/other",slug:"/engineering/architecture/models/other/dfd",permalink:"/notebook/engineering/architecture/models/other/dfd",draft:!1,unlisted:!1,editUrl:"https://github.com/satche/notebook/tree/main/docs/engineering/architecture/models/other/dfd.md",tags:[],version:"current",lastUpdatedAt:1721721519e3,frontMatter:{aliases:["Data-flow diagrams","DFD"],tags:[]},sidebar:"engineeringSidebar",previous:{title:"C4",permalink:"/notebook/engineering/architecture/models/other/c4"},next:{title:"Requirement diagram",permalink:"/notebook/engineering/architecture/models/sysml/requirement-diagram"}},o={},d=[{value:"Notation",id:"notation",level:2},{value:"Some rules",id:"some-rules",level:2},{value:"Levels",id:"levels",level:2},{value:"Level 0",id:"level-0",level:3},{value:"Level 1",id:"level-1",level:3},{value:"Level 2",id:"level-2",level:3},{value:"Resources",id:"resources",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"dfd",children:"DFD"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://wikipedia.org/wiki/data-flow_diagram",children:"Data-flow diagram"})," illustrates the flow of information for processes and systems."]}),"\n",(0,n.jsx)(t.h2,{id:"notation",children:"Notation"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"External entity"}),": Represented by a noun, they are elements outside the system that emits or receive data."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Process"}),": Represented by a verb, they are actions that change the data, producing an output."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Data Store"}),": Represented by a noun, they are elements that store a type of data, like a table in a database."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Data flow"}),": Represented by the name of the data, they are the route between all the others elements."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://cdn-images.visual-paradigm.com/guide/dfd/what-is-data-flow-diagram/02-dfd-process-example.png",alt:"DFD Process Example"})}),"\n",(0,n.jsx)(t.h2,{id:"some-rules",children:"Some rules"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["DFD diagrams represent only ",(0,n.jsx)(t.strong,{children:"data"}),", no process, actions or operations\u2026"]}),"\n",(0,n.jsxs)(t.li,{children:["Process and data store always have minimum 2 data flows: ",(0,n.jsx)(t.strong,{children:"in"})," and ",(0,n.jsx)(t.strong,{children:"out"})]}),"\n",(0,n.jsx)(t.li,{children:"All processes must be linked to either another process or a data store."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"levels",children:"Levels"}),"\n",(0,n.jsx)(t.h3,{id:"level-0",children:"Level 0"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"contextual level"})," is highly abstracted and serve only a resumed overview. It includes:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"All external entities"}),"\n",(0,n.jsx)(t.li,{children:"Only one process"}),"\n",(0,n.jsx)(t.li,{children:"No data stores"}),"\n",(0,n.jsxs)(t.li,{children:["Main data flows\n",(0,n.jsx)(t.img,{src:"https://cdn-images.visual-paradigm.com/guide/dfd/what-is-data-flow-diagram/18-context-dfd-example.png",alt:"Context DFD example"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"level-1",children:"Level 1"}),"\n",(0,n.jsxs)(t.p,{children:["The first level highlight main functions of the system by decomposing the main process into subprocesses.\n",(0,n.jsx)(t.img,{src:"https://cdn-images.visual-paradigm.com/guide/dfd/what-is-data-flow-diagram/19-level-1-dfd-example.png",alt:"Level 1 DFD example"})]}),"\n",(0,n.jsx)(t.h3,{id:"level-2",children:"Level 2"}),"\n",(0,n.jsxs)(t.p,{children:["The second level take each processes from level 1 and details it into other incremental subprocess (1.x, 2.x, etc.).\n",(0,n.jsx)(t.img,{src:"https://cdn-images.visual-paradigm.com/guide/dfd/what-is-data-flow-diagram/20-level-2-dfd-example.png",alt:"Level 2 DFD example"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"You can repeat the process and dig deeper in levels, splitting the process into more details, but 1-2 levels are generally enough."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.visual-paradigm.com/guide/data-flow-diagram/what-is-data-flow-diagram/",children:"What is Data Flow Diagram?"})," \u2013\xa0Visual Paradigm"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>l});var n=s(6540);const a={},i=n.createContext(a);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);