(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6807],{43059:function(e,t,n){Promise.resolve().then(n.bind(n,25423))},25423:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(36164),i=n(3546),l=n(70652),s=n.n(l),u=n(11978),o=n(18500),a=n(81565),c=n(50538),f=n(11529);function d(){let e=(0,u.usePathname)(),t=i.useMemo(()=>{var t,n;let r=null===(t=e.match(/^\/settings\/providers\/([\w-]+)/))||void 0===t?void 0:t[1];return null!==(n=null==r?void 0:r.toLowerCase())&&void 0!==n?n:"git"},[e]);return(0,r.jsx)(c.mQ,{value:t,children:(0,r.jsx)("div",{className:"sticky top-0 mb-4 flex",children:(0,r.jsxs)(c.dr,{className:"grid grid-cols-6",children:[(0,r.jsx)(c.SP,{value:"git",asChild:!0,children:(0,r.jsx)(s(),{href:"/settings/providers/git",children:(0,r.jsx)("span",{className:"ml-2",children:"Git"})})}),f.K.map(e=>(0,r.jsx)(c.SP,{value:e.name,asChild:!0,children:(0,r.jsxs)(s(),{href:"/settings/providers/".concat(e.name),children:[(0,r.jsx)(m,{kind:e.enum}),(0,r.jsx)("span",{className:"ml-2",children:e.meta.displayName})]})},e.name)),(0,r.jsx)(c.SP,{value:"web",asChild:!0,children:(0,r.jsxs)(s(),{href:"/settings/providers/web",children:[(0,r.jsx)(a.IconFileText,{}),(0,r.jsx)("span",{className:"ml-2",children:"Web"})]})})]})})})}function m(e){let{kind:t}=e;switch(t){case o.q6.Github:case o.q6.GithubSelfHosted:return(0,r.jsx)(a.IconGitHub,{});case o.q6.Gitlab:case o.q6.GitlabSelfHosted:return(0,r.jsx)(a.IconGitLab,{});default:return null}}},11529:function(e,t,n){"use strict";n.d(t,{K:function(){return i}});var r=n(18500);let i=[{name:"github",enum:r.q6.Github,meta:{displayName:"GitHub"}},{name:"github-self-hosted",enum:r.q6.GithubSelfHosted,meta:{displayName:"GitHub Self-Hosted"}},{name:"gitlab",enum:r.q6.Gitlab,meta:{displayName:"GitLab"}},{name:"gitlab-self-hosted",enum:r.q6.GitlabSelfHosted,meta:{displayName:"GitLab Self-Hosted"}}]},50538:function(e,t,n){"use strict";n.d(t,{SP:function(){return a},dr:function(){return o},mQ:function(){return u},nU:function(){return c}});var r=n(36164),i=n(3546),l=n(6044),s=n(74248);let u=l.fC,o=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)(l.aV,{ref:t,className:(0,s.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",n),...i})});o.displayName=l.aV.displayName;let a=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)(l.xz,{ref:t,className:(0,s.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",n),...i})});a.displayName=l.xz.displayName;let c=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)(l.VY,{ref:t,className:(0,s.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",n),...i})});c.displayName=l.VY.displayName},70652:function(e,t,n){e.exports=n(54007)},11978:function(e,t,n){e.exports=n(77280)},65122:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},85656:function(e,t,n){"use strict";n.d(t,{B:function(){return u}});var r=n(3546),i=n(47091),l=n(79869),s=n(74047);function u(e){let t=e+"CollectionProvider",[n,u]=(0,i.b)(t),[o,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),c=e+"CollectionSlot",f=r.forwardRef((e,t)=>{let{scope:n,children:i}=e,u=a(c,n),o=(0,l.e)(t,u.collectionRef);return r.createElement(s.g7,{ref:o},i)}),d=e+"CollectionItemSlot",m="data-radix-collection-item",p=r.forwardRef((e,t)=>{let{scope:n,children:i,...u}=e,o=r.useRef(null),c=(0,l.e)(t,o),f=a(d,n);return r.useEffect(()=>(f.itemMap.set(o,{ref:o,...u}),()=>void f.itemMap.delete(o))),r.createElement(s.g7,{[m]:"",ref:c},i)});return[{Provider:e=>{let{scope:t,children:n}=e,i=r.useRef(null),l=r.useRef(new Map).current;return r.createElement(o,{scope:t,itemMap:l,collectionRef:i},n)},Slot:f,ItemSlot:p},function(t){let n=a(e+"CollectionConsumer",t),i=r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${m}]`)),r=Array.from(n.itemMap.values()),i=r.sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current));return i},[n.collectionRef,n.itemMap]);return i},u]}},79869:function(e,t,n){"use strict";n.d(t,{F:function(){return i},e:function(){return l}});var r=n(3546);function i(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function l(...e){return(0,r.useCallback)(i(...e),e)}},57541:function(e,t,n){"use strict";n.d(t,{gm:function(){return l}});var r=n(3546);let i=(0,r.createContext)(void 0);function l(e){let t=(0,r.useContext)(i);return e||t||"ltr"}},29434:function(e,t,n){"use strict";n.d(t,{M:function(){return o}});var r,i=n(3546),l=n(65292);let s=(r||(r=n.t(i,2)))["useId".toString()]||(()=>void 0),u=0;function o(e){let[t,n]=i.useState(s());return(0,l.b)(()=>{e||n(e=>null!=e?e:String(u++))},[e]),e||(t?`radix-${t}`:"")}},72205:function(e,t,n){"use strict";n.d(t,{WV:function(){return u},jH:function(){return o}});var r=n(65122),i=n(3546),l=n(30171),s=n(74047);let u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,i.forwardRef)((e,n)=>{let{asChild:l,...u}=e,o=l?s.g7:t;return(0,i.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,i.createElement)(o,(0,r.Z)({},u,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function o(e,t){e&&(0,l.flushSync)(()=>e.dispatchEvent(t))}},74047:function(e,t,n){"use strict";n.d(t,{A4:function(){return o},g7:function(){return s}});var r=n(65122),i=n(3546),l=n(79869);let s=(0,i.forwardRef)((e,t)=>{let{children:n,...l}=e,s=i.Children.toArray(n),o=s.find(a);if(o){let e=o.props.children,n=s.map(t=>t!==o?t:i.Children.count(e)>1?i.Children.only(null):(0,i.isValidElement)(e)?e.props.children:null);return(0,i.createElement)(u,(0,r.Z)({},l,{ref:t}),(0,i.isValidElement)(e)?(0,i.cloneElement)(e,void 0,n):null)}return(0,i.createElement)(u,(0,r.Z)({},l,{ref:t}),n)});s.displayName="Slot";let u=(0,i.forwardRef)((e,t)=>{let{children:n,...r}=e;return(0,i.isValidElement)(n)?(0,i.cloneElement)(n,{...function(e,t){let n={...t};for(let r in t){let i=e[r],l=t[r],s=/^on[A-Z]/.test(r);s?i&&l?n[r]=(...e)=>{l(...e),i(...e)}:i&&(n[r]=i):"style"===r?n[r]={...i,...l}:"className"===r&&(n[r]=[i,l].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?(0,l.F)(t,n.ref):n.ref}):i.Children.count(n)>1?i.Children.only(null):null});u.displayName="SlotClone";let o=({children:e})=>(0,i.createElement)(i.Fragment,null,e);function a(e){return(0,i.isValidElement)(e)&&e.type===o}}},function(e){e.O(0,[7998,4007,2134,6044,7444,1565,3375,5289,1744],function(){return e(e.s=43059)}),_N_E=e.O()}]);