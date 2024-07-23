"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[844],{7718:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(4848),r=s(8453);const i={aliases:[],tags:[]},o="Cloud",c={id:"engineering/infrastructure/cloud/cloud",title:"Cloud",description:"Cloud computing can be define as a cluster of servers that share storage and power on-demand with users. Its core feature is the provision of IT infrastructure and applications as a service in scalable way.",source:"@site/docs/engineering/infrastructure/cloud/cloud.md",sourceDirName:"engineering/infrastructure/cloud",slug:"/engineering/infrastructure/cloud/",permalink:"/notebook/engineering/infrastructure/cloud/",draft:!1,unlisted:!1,editUrl:"https://github.com/satche/notebook/tree/main/docs/engineering/infrastructure/cloud/cloud.md",tags:[],version:"current",lastUpdatedAt:1721721519e3,frontMatter:{aliases:[],tags:[]},sidebar:"engineeringSidebar",previous:{title:"Engineering",permalink:"/notebook/engineering/"},next:{title:"As a Service",permalink:"/notebook/engineering/infrastructure/cloud/as-a-service"}},a={},l=[{value:"Topics",id:"topics",level:2},{value:"Layers",id:"layers",level:2},{value:"Characteristics",id:"characteristics",level:2},{value:"Resources",id:"resources",level:2}];function d(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cloud",children:"Cloud"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://wikipedia.org/wiki/cloud_computing",children:"Cloud computing"})," can be define as a cluster of servers that share storage and power on-demand with users. Its core feature is the provision of IT infrastructure and applications ",(0,t.jsx)(n.a,{href:"/notebook/engineering/infrastructure/cloud/as-a-service",children:"as a service"})," in scalable way."]}),"\n",(0,t.jsx)(n.p,{children:"Essential characteristics of cloud computing are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"On-demande self service"}),": user can access computer capabilities without human-interaction"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"/notebook/engineering/infrastructure/network/glossary/bna",children:"Broad Network Access"})}),": capabilities are accessibles on network through standard mechanisms"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Resource pooling"}),": cloud resources are pooled to serve multiple consumers"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Rapide elasticity"}),": capabilities scale, usually automatically"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Measured service"}),": cloud systems automatically control and optimize resources"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"topics",children:"Topics"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/notebook/engineering/infrastructure/cloud/as-a-service",children:"XaaS"})," \u2013 Different types of services, which give certain degree of control and customisastion to the user."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/notebook/engineering/infrastructure/cloud/edge-computing",children:"Edge Computing"})," \u2013 When computers are close to a device, like a sensor, to do some operations before sending to the cloud."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/notebook/engineering/infrastructure/cloud/infrastructure-as-code",children:"Infrastructure as Code"})," to repeat the writing of multiple servers configuration"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/notebook/engineering/infrastructure/cloud/iot",children:"Internet of Things"})," \u2013 Connected object that send and receive information, like sensors"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"layers",children:"Layers"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Layer"}),(0,t.jsx)(n.th,{children:"Role"}),(0,t.jsx)(n.th,{children:"Example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Application"}),(0,t.jsx)(n.td,{children:"Host, store, process the data in the cloud. Generate reports for analysis and serve it to the user."}),(0,t.jsx)(n.td,{children:"Cloud servers, cloud storage, cloud analytics"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Support"}),(0,t.jsx)(n.td,{children:"Process the data close to the source, before sending it to the cloud."}),(0,t.jsx)(n.td,{children:"Edge servers, gateway servers, local analytics"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Network"}),(0,t.jsx)(n.td,{children:"Communication between devices and other network components."}),(0,t.jsx)(n.td,{children:"Routers, gateways, access points, communication protocols"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Device"}),(0,t.jsx)(n.td,{children:"Data collect and acquisition."}),(0,t.jsx)(n.td,{children:"Sensors, embedded systems, smartphones"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"characteristics",children:"Characteristics"}),"\n",(0,t.jsx)(n.p,{children:"Cloud computing allow a lot of benefits compared to a single centralized server:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/notebook/engineering/architecture/quality-attributes/availability",children:"Availability"})," \u2013 If a server goes down (e.g. due to too much demand), another server is able to handle the requests"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/notebook/engineering/architecture/quality-attributes/security",children:"Security"})," \u2013 Cloud providers can guarantee data center protection, with monitoring, 24/7 surveillance, etc."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/notebook/management/glossary/tco",children:"Costs"})," \u2013 Cloud is financially interesting as it allows to adapt resources (and therefore costs) with the demand"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-145.pdf",children:"Definition of Cloud Computing"})," \u2013 NIST"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(6540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);