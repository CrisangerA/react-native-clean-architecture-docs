"use strict";(self.webpackChunkreact_native=self.webpackChunkreact_native||[]).push([[3318],{7122:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var o=t(4848),s=t(8453);const r={sidebar_position:3},i="2.3 Components",l={id:"required-files/components",title:"2.3 Components",description:"Componentes reutilizables en toda la aplicaci\xf3n",source:"@site/docs/required-files/components.md",sourceDirName:"required-files",slug:"/required-files/components",permalink:"/docs/required-files/components",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/required-files/components.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2.2 Estilos",permalink:"/docs/required-files/styles"},next:{title:"2.4 Modulos",permalink:"/docs/required-files/modules"}},c={},a=[{value:"Core",id:"core",level:2},{value:"Button",id:"button",level:3},{value:"Icon",id:"icon",level:3},{value:"Margin",id:"margin",level:3},{value:"SearchInput",id:"searchinput",level:3},{value:"Text",id:"text",level:3},{value:"TextInput",id:"textinput",level:3},{value:"Layout",id:"layout",level:2}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"23-components",children:"2.3 Components"}),"\n",(0,o.jsx)(n.p,{children:"Componentes reutilizables en toda la aplicaci\xf3n"}),"\n",(0,o.jsx)(n.h2,{id:"core",children:"Core"}),"\n",(0,o.jsx)(n.p,{children:"Componentes base que no requieren dependencias adicionales"}),"\n",(0,o.jsx)(n.h3,{id:"button",children:"Button"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'<Button title="Aceptar" onPress={() => {}} />\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Props. Las props que tienen el signo ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"(?)"})})," son opcionales"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="src/components/core/Button.tsx"',children:"interface ButtonProps extends TouchableOpacityProps {\n  title: string;\n  onPress: () => void;\n  type?: keyof ButtonType;\n  underline?: boolean;\n  font?: keyof FontStyle;\n  fontColor?: keyof FontColors;\n  icon?: Icons;\n  iconPosition?: 'left' | 'right';\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"icon",children:"Icon"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"<Icon name={Icons.Search} />\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Props. Las props que tienen el signo ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"(?)"})})," son opcionales"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"interface IconProps {\n  name: Icons;\n  size?: IconSizes;\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"margin",children:"Margin"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"<Margin top={4} bottom={8} />\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Props. Las props que tienen el signo ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"(?)"})})," son opcionales"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"interface MarginComponentProps {\n  top?: number;\n  right?: number;\n  bottom?: number;\n  left?: number;\n  flex?: boolean;\n}\n\n"})}),"\n",(0,o.jsx)(n.h3,{id:"searchinput",children:"SearchInput"}),"\n",(0,o.jsx)(n.h3,{id:"text",children:"Text"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'<Text title="Hello world" font="body16Regular" />\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Props. Las props que tienen el signo ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"(?)"})})," son opcionales"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export interface TextProps extends RNTextProps {\n  title: string;\n  font: keyof FontStyle;\n  color?: keyof FontColors;\n  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';\n  underline?: boolean;\n  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"textinput",children:"TextInput"}),"\n",(0,o.jsx)(n.h2,{id:"layout",children:"Layout"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(6540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);