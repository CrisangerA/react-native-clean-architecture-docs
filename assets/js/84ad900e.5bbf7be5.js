"use strict";(self.webpackChunkreact_native=self.webpackChunkreact_native||[]).push([[3802],{3447:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=i(4848),s=i(8453);const r={sidebar_position:2},c="1.2 Scripts",a={id:"config-files/scripts",title:"1.2 Scripts",description:"Agrega los siguientes scripts a tu package.json",source:"@site/docs/config-files/scripts.md",sourceDirName:"config-files",slug:"/config-files/scripts",permalink:"/react-native-clean-architecture-docs/docs/config-files/scripts",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/config-files/scripts.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1.1 Importaci\xf3n con alias",permalink:"/react-native-clean-architecture-docs/docs/config-files/alias"},next:{title:"1.3 Linter y formateo",permalink:"/react-native-clean-architecture-docs/docs/config-files/linter"}},o={},l=[];function d(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"12-scripts",children:"1.2 Scripts"}),"\n",(0,t.jsx)(n.p,{children:"Agrega los siguientes scripts a tu package.json"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Limpiar node"}),"\n",(0,t.jsx)(n.li,{children:"Limpiar ios"}),"\n",(0,t.jsx)(n.li,{children:"Limpiar android"}),"\n",(0,t.jsx)(n.li,{children:"Limpiar watchman"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "scripts": {\n    "clean-node": "rm -rf node_modules bun.lockb && bun install",\n    "clean-ios": "rm -rf ios/build ios/Pods ios/Podfile.lock",\n    "clean-android": "rm -rf android/build android/app/build && cd android && ./gradlew clean && cd ..",\n    "clean-watch": "watchman watch-del-all && watchman shutdown-server"\n  }\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>a});var t=i(6540);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);