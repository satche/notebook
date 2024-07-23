"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[4491],{7841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(4848),s=n(8453);const r={aliases:[],tags:[]},l="Testability",a={id:"engineering/architecture/quality-attributes/testability",title:"Testability",description:"Testability is how a system can run relevant test, usually to find problems.",source:"@site/docs/engineering/architecture/quality-attributes/testability.md",sourceDirName:"engineering/architecture/quality-attributes",slug:"/engineering/architecture/quality-attributes/testability",permalink:"/notebook/engineering/architecture/quality-attributes/testability",draft:!1,unlisted:!1,editUrl:"https://github.com/satche/notebook/tree/main/docs/engineering/architecture/quality-attributes/testability.md",tags:[],version:"current",lastUpdatedAt:1721721519e3,frontMatter:{aliases:[],tags:[]},sidebar:"engineeringSidebar",previous:{title:"Security",permalink:"/notebook/engineering/architecture/quality-attributes/security"},next:{title:"API",permalink:"/notebook/engineering/architecture/styles/api"}},o={},c=[{value:"Scenario",id:"scenario",level:2},{value:"Example",id:"example",level:3},{value:"Tactics",id:"tactics",level:2},{value:"Control and observation",id:"control-and-observation",level:3},{value:"Complexity",id:"complexity",level:3}];function d(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"testability",children:"Testability"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://wikipedia.org/wiki/software_testability",children:"Testability"})," is how a system can run relevant test, usually to find problems."]}),"\n",(0,i.jsx)(t.h2,{id:"scenario",children:"Scenario"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Source"}),": external, internal"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Stimulus"}),": event arrival pattern (fixed frequency, probability, random)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Artifact"}),": system services"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Environment"}),": normal, overload"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Response"}),": change operation mode ?"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Measure"}),": latency, deadline, throughput, miss rate, data loss"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"Performance on crossing gate controller"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Source"}),": external (arriving train)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Stimulus"}),":"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Artifact"}),": system services"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Environment"}),": normal, overload"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Response"}),": change operation mode ?"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Measure"}),": latency, deadline, throughput, miss rate, data loss"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"tactics",children:"Tactics"}),"\n",(0,i.jsx)(t.h3,{id:"control-and-observation",children:"Control and observation"}),"\n",(0,i.jsx)(t.p,{children:"Improve control and observation of the system state"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Logs"}),"\n",(0,i.jsx)(t.li,{children:"Record / playback"}),"\n",(0,i.jsx)(t.li,{children:"Data abstraction (simulate user inputs)"}),"\n",(0,i.jsx)(t.li,{children:"Sandboxing: isolate system in a close environment"}),"\n",(0,i.jsx)(t.li,{children:"Executable assertion (unit tests)"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"complexity",children:"Complexity"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Limit system complexity: sometime, too much randomness make it difficult to reproduce the problem (e.g. blackboxes)."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var i=n(6540);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);