"use strict";(self.webpackChunkreact_native=self.webpackChunkreact_native||[]).push([[3318],{7122:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=s(4848),r=s(8453);const o={sidebar_position:3},i="2.3 Components",c={id:"required-files/components",title:"2.3 Components",description:"Componentes reutilizables en toda la aplicaci\xf3n. Puede descargar la carpeta completa o archivo por archivo segun le convenga. Descargar carpeta completa",source:"@site/docs/required-files/components.md",sourceDirName:"required-files",slug:"/required-files/components",permalink:"/react-native-clean-architecture-docs/docs/required-files/components",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/required-files/components.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2.2 Estilos",permalink:"/react-native-clean-architecture-docs/docs/required-files/styles"},next:{title:"2.4 Modulos",permalink:"/react-native-clean-architecture-docs/docs/required-files/modules"}},l={},a=[{value:"Core",id:"core",level:2},{value:"Button",id:"button",level:3},{value:"Icon",id:"icon",level:3},{value:"Margin",id:"margin",level:3},{value:"SearchInput",id:"searchinput",level:3},{value:"Text",id:"text",level:3},{value:"TextInput",id:"textinput",level:3},{value:"Layout",id:"layout",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"23-components",children:"2.3 Components"}),"\n",(0,t.jsxs)(n.p,{children:["Componentes reutilizables en toda la aplicaci\xf3n. Puede descargar la carpeta completa o archivo por archivo segun le convenga. ",(0,t.jsx)(n.a,{href:"https://reactnative.dev/docs/speeding-ci-builds",children:"Descargar carpeta completa"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["./src/components","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://reactnative.dev/docs/speeding-ci-builds",children:"index.ts"})}),"\n",(0,t.jsxs)(n.li,{children:["./src/components/core","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://reactnative.dev",children:"index.ts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://reactnative.dev",children:"responsive.ts"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"core",children:"Core"}),"\n",(0,t.jsx)(n.p,{children:"Componentes base que no requieren dependencias adicionales"}),"\n",(0,t.jsx)(n.h3,{id:"button",children:"Button"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'<Button title="Aceptar" onPress={() => {}} />\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Props. Las props que tienen el signo ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"(?)"})})," son opcionales"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="src/components/core/Button.tsx"',children:"interface ButtonProps extends TouchableOpacityProps {\n  title: string;\n  onPress: () => void;\n  type?: keyof ButtonType;\n  underline?: boolean;\n  font?: keyof FontStyle;\n  fontColor?: keyof FontColors;\n  icon?: Icons;\n  iconPosition?: 'left' | 'right';\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"icon",children:"Icon"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"<Icon name={Icons.Search} />\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Props. Las props que tienen el signo ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"(?)"})})," son opcionales"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface IconProps {\n  name: Icons;\n  size?: IconSizes;\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"margin",children:"Margin"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"<Margin top={4} bottom={8} />\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Props. Las props que tienen el signo ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"(?)"})})," son opcionales"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface MarginComponentProps {\n  top?: number;\n  right?: number;\n  bottom?: number;\n  left?: number;\n  flex?: boolean;\n}\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"searchinput",children:"SearchInput"}),"\n",(0,t.jsx)(n.h3,{id:"text",children:"Text"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'<Text title="Hello world" font="body16Regular" />\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Props. Las props que tienen el signo ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"(?)"})})," son opcionales"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export interface TextProps extends RNTextProps {\n  title: string;\n  font: keyof FontStyle;\n  color?: keyof FontColors;\n  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';\n  underline?: boolean;\n  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"textinput",children:"TextInput"}),"\n",(0,t.jsx)(n.h2,{id:"layout",children:"Layout"})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(6540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);