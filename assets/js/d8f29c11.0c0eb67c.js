"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[4437],{449:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(4848),r=t(8453);const s={aliases:["Bits"],tags:["data"]},d="Binary",a={id:"engineering/data/binary/binary",title:"binary",description:"Sample Editor Command",source:"@site/docs/engineering/data/binary/binary.md",sourceDirName:"engineering/data/binary",slug:"/engineering/data/binary/",permalink:"/notebook/engineering/data/binary/",draft:!1,unlisted:!1,editUrl:"https://github.com/satche/notebook/tree/main/docs/engineering/data/binary/binary.md",tags:[{inline:!0,label:"data",permalink:"/notebook/tags/data"}],version:"current",lastUpdatedAt:1721721519e3,frontMatter:{aliases:["Bits"],tags:["data"]},sidebar:"engineeringSidebar",previous:{title:"Data",permalink:"/notebook/engineering/data/"},next:{title:"Gray code",permalink:"/notebook/engineering/data/binary/gray-code"}},l={},c=[{value:"Bits",id:"bits",level:2},{value:"Resources",id:"resources",level:2}];function o(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Sample Editor Command"}),"\n",(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"binary",children:"Binary"})}),"\n",(0,i.jsxs)(n.p,{children:["This section concern low-level data representation, including ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Binary",children:"binary"})," and ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Bit",children:"bits"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"bits",children:"Bits"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://wikipedia.org/wiki/orders_of_magnitude_(data)",children:"Orders of magnitude data"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Term"}),(0,i.jsx)(n.th,{children:"Magnitude"}),(0,i.jsx)(n.th,{children:"Data approximation"}),(0,i.jsx)(n.th,{children:"Grain of Rice equiv."})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Bit (b)"}),(0,i.jsx)(n.td,{children:"1 or 0"}),(0,i.jsx)(n.td,{children:"Boolean condition"}),(0,i.jsx)(n.td,{children:"1/8 grain of rice"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Byte/Octet (B)"}),(0,i.jsx)(n.td,{children:"8-bits"}),(0,i.jsx)(n.td,{children:"A letter"}),(0,i.jsx)(n.td,{children:"1 grain of rice"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Kilobyte (KB)"}),(0,i.jsx)(n.td,{children:"1000 Bytes"}),(0,i.jsx)(n.td,{children:"Half-page of text"}),(0,i.jsx)(n.td,{children:"1 cup"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Megabyte (MB)"}),(0,i.jsx)(n.td,{children:"1000 KB"}),(0,i.jsx)(n.td,{children:"500 pages of text"}),(0,i.jsx)(n.td,{children:"8 bags"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Gigabyte (GB)"}),(0,i.jsx)(n.td,{children:"1000 MB"}),(0,i.jsx)(n.td,{children:"~5 min. of HD video"}),(0,i.jsx)(n.td,{children:"3 semi-trucks"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Terabyte (TB)"}),(0,i.jsx)(n.td,{children:"1000 GB"}),(0,i.jsx)(n.td,{children:"~500 h. of HD video"}),(0,i.jsx)(n.td,{children:"2 container ships"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Petabyte (PB)"}),(0,i.jsx)(n.td,{children:"1000 TB"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Blankets Manhattan"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Exabyte (EB)"}),(0,i.jsx)(n.td,{children:"1000 PB"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Blankets west coast states"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Zettabyte (ZB)"}),(0,i.jsx)(n.td,{children:"1000 EB"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"Fills the Pacific Ocean"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Yottabyte (YB)"}),(0,i.jsx)(n.td,{children:"1000 ZB"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"\u2026"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Don't confuse bit (binary unit) and byte (8 bits)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"1 kilobyte (KB) = 1000 bytes = 8000 bits"}),"\n",(0,i.jsx)(n.li,{children:"1 kilobit (Kb) = 1000 bits = 125 bytes"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["On the table above, ",(0,i.jsx)(n.em,{children:"magnitude"})," is represented in decimal value (base 10). To represents binary architecture (base 2) of computers, we can use a ",(0,i.jsx)(n.a,{href:"https://wikipedia.org/wiki/binary_prefix",children:"binary prefix"}),": 1 kibibyte (KiB) = 1024 B."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.exploringbinary.com/converters-and-calculators/",children:"Converters and Calculators"})," \u2013 Exploring Binary"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);