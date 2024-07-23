"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[4835],{2490:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var n=i(4848),r=i(8453);const s={aliases:["QA","Non-functional requirement","NFR","Ilities","SQuaRE"],tags:[]},a="Quality Attributes",c={id:"engineering/architecture/quality-attributes/quality-attributes",title:"Quality Attributes",description:"Quality attributes (QA) allow to do an overall assessment appreciation of a system.",source:"@site/docs/engineering/architecture/quality-attributes/quality-attributes.md",sourceDirName:"engineering/architecture/quality-attributes",slug:"/engineering/architecture/quality-attributes/",permalink:"/notebook/engineering/architecture/quality-attributes/",draft:!1,unlisted:!1,editUrl:"https://github.com/satche/notebook/tree/main/docs/engineering/architecture/quality-attributes/quality-attributes.md",tags:[],version:"current",lastUpdatedAt:1721721519e3,frontMatter:{aliases:["QA","Non-functional requirement","NFR","Ilities","SQuaRE"],tags:[]},sidebar:"engineeringSidebar",previous:{title:"Twelve-Factor App",permalink:"/notebook/engineering/architecture/principles/twelve-factor-app"},next:{title:"Availability",permalink:"/notebook/engineering/architecture/quality-attributes/availability"}},l={},o=[{value:"6 Parts Scenario",id:"6-parts-scenario",level:2},{value:"Tactics",id:"tactics",level:2},{value:"Acronyms",id:"acronyms",level:2},{value:"Resources",id:"resources",level:2}];function u(e){const t={a:"a",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"quality-attributes",children:"Quality Attributes"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://wikipedia.org/wiki/non-functional_requirement",children:"Quality attributes"})," (QA) allow to do an overall assessment appreciation of a system."]}),"\n",(0,n.jsx)(t.h2,{id:"6-parts-scenario",children:"6 Parts Scenario"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Part"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Examples"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Source"}),(0,n.jsx)(t.td,{children:"Where stimulus come from, what generated it"}),(0,n.jsx)(t.td,{children:"Human, software, hardware, physical infrastructure or environment"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Stimulus"}),(0,n.jsx)(t.td,{children:"Event or a condition that trigger the stimulus"}),(0,n.jsx)(t.td,{children:"Omission, crash, timing, response"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Artifact"}),(0,n.jsx)(t.td,{children:"What components is concerned, where the stimulus apply"}),(0,n.jsx)(t.td,{children:"Storage, process, component, view"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Environment"}),(0,n.jsx)(t.td,{children:"Circumstances and condition when stimulus occur"}),(0,n.jsx)(t.td,{children:"Startup, shutdown, operation"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Response"}),(0,n.jsx)(t.td,{children:"How the system should respond after stimulus occurs"}),(0,n.jsx)(t.td,{children:"Log, disable, kick, ban, prevent"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Measure"}),(0,n.jsx)(t.td,{children:"How to determine the response is satisfactory"}),(0,n.jsx)(t.td,{children:"Time/interval of availability, number/proportion of faults handled"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"tactics",children:"Tactics"}),"\n",(0,n.jsx)(t.p,{children:"Tactics are design decisions that influence a QA response to a stimulus. You can use the following as a checklist:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Allocation of responsibilities"}),": Basic function of system, infrastructure, architecture, \u2026"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Coordination model"}),": Communication protocol, async/sync, stateful/statless, \u2026"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Data model"}),": RDBMS, NoSQL, structure, volume, stockage, access, backups, security, \u2026"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Resources management"}),": CPU, virtualization, parallelization, containers, threads, servers, \u2026"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Architectural element mapping"}),": Logical to physical entities, i.e. threads, processes, processors, \u2026"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Binding time decisions"}),": Update frequency, trigger conditions, automations, \u2026"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Technology choices"}),": Language, database, framework, \u2026"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"acronyms",children:"Acronyms"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"FURPS"}),"\n",(0,n.jsx)(t.li,{children:"RASUI"}),"\n",(0,n.jsx)(t.li,{children:"RASR"}),"\n",(0,n.jsx)(t.li,{children:"ACID"}),"\n",(0,n.jsx)(t.li,{children:"RAMS"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://wikipedia.org/wiki/list_of_system_quality_attributes",children:"List of quality attributes"})," \u2013 Wikipedia"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://wikipedia.org/wiki/iso/iec_9126",children:"ISO 25010 (9126)"})," \u2013 International standard for product quality evaluation"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://people.ece.ubc.ca/matei/eece417/bass/ch04lev1sec3.html",children:"System Quality Attributes"})," \u2013 University of British Columbia"]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/notebook/engineering/architecture/quality-attributes/availability",children:"Availability"}),"\n",(0,n.jsx)(t.a,{href:"/notebook/engineering/architecture/quality-attributes/interoperability",children:"Interoperability"}),"\n",(0,n.jsx)(t.a,{href:"/notebook/engineering/architecture/quality-attributes/maintainability",children:"Maintainability"}),"\n",(0,n.jsx)(t.a,{href:"/notebook/engineering/architecture/quality-attributes/performance",children:"Performance"}),"\n",(0,n.jsx)(t.a,{href:"/notebook/engineering/architecture/quality-attributes/scalability",children:"Scalability"}),"\n",(0,n.jsx)(t.a,{href:"/notebook/engineering/architecture/quality-attributes/security",children:"Security"}),"\n",(0,n.jsx)(t.a,{href:"/notebook/engineering/architecture/quality-attributes/testability",children:"Testability"})]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>c});var n=i(6540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);