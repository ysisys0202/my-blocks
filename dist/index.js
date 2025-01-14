import{forwardRef as I}from"react";function x(r){var t=r.match(/^var\((.*)\)$/);return t?t[1]:r}function E(r,t){var e=r;for(var o of t){if(!(o in e))throw new Error("Path ".concat(t.join(" -> ")," does not exist in object"));e=e[o]}return e}function v(r,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o={};for(var a in r){var n=r[a],i=[...e,a];typeof n=="string"||typeof n=="number"||n==null?o[a]=t(n,i):typeof n=="object"&&!Array.isArray(n)?o[a]=v(n,t,i):console.warn('Skipping invalid key "'.concat(i.join("."),'". Should be a string, number, null or object. Received: "').concat(Array.isArray(n)?"Array":typeof n,'"'))}return o}function u(r,t){var e={};if(typeof t=="object"){var o=r;v(t,(d,s)=>{if(d!=null){var c=E(o,s);e[x(c)]=String(d)}})}else{var a=r;for(var n in a){var i=a[n];i!=null&&(e[x(n)]=i)}}return Object.defineProperty(e,"toString",{value:function(){return Object.keys(this).map(s=>"".concat(s,":").concat(this[s])).join(";")},writable:!1}),e}function O(r,t){if(typeof r!="object"||!r)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var o=e.call(r,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function L(r){var t=O(r,"string");return typeof t=="symbol"?t:String(t)}function M(r,t,e){return t=L(t),t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function D(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),e.push.apply(e,o)}return e}function F(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?D(Object(e),!0).forEach(function(o){M(r,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):D(Object(e)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(e,o))})}return r}function A(r,t){var e={};for(var o in r)e[o]=t(r[o],o);return e}var R=(r,t,e)=>{for(var o of Object.keys(r)){var a;if(r[o]!==((a=t[o])!==null&&a!==void 0?a:e[o]))return!1}return!0},p=r=>{var t=e=>{var o=r.defaultClassName,a=F(F({},r.defaultVariants),e);for(var n in a){var i,d=(i=a[n])!==null&&i!==void 0?i:r.defaultVariants[n];if(d!=null){var s=d;typeof s=="boolean"&&(s=s===!0?"true":"false");var c=r.variantClassNames[n][s];c&&(o+=" "+c)}}for(var[f,h]of r.compoundVariants)R(f,a,r.defaultVariants)&&(o+=" "+h);return o};return t.variants=()=>Object.keys(r.variantClassNames),t.classNames={get base(){return r.defaultClassName.split(" ")[0]},get variants(){return A(r.variantClassNames,e=>A(e,o=>o.split(" ")[0]))}},t};var m={mark:"gk85go9",del:"gk85goa",strong:"gk85gob",italic:"gk85goc"},z="var(--gk85go0)",w=p({defaultClassName:"gk85god",variantClassNames:{variant:{title1:"gk85goe",title2:"gk85gof",title3:"gk85gog",title4:"gk85goh",title5:"gk85goi",text1:"gk85goj",text2:"gk85gok",text3:"gk85gol"},theme:{primary:"gk85go1",secondary:"gk85go2",tertiary:"gk85go3",info:"gk85go4",success:"gk85go5",error:"gk85go6",warning:"gk85go7",light:"gk85go8"}},defaultVariants:{},compoundVariants:[]});var l=(...r)=>r.filter(Boolean).join(" ");import{jsx as W}from"react/jsx-runtime";var g={variant:"text1",theme:"primary",mark:!1,del:!1,strong:!1,italic:!1,as:"p"},_r=I(({variant:r=g.variant,theme:t=g.theme,mark:e=g.mark,del:o=g.del,strong:a=g.strong,italic:n=g.italic,as:i=g.as,color:d,children:s,className:c,style:f,...h},H)=>{let j=l(c,w({variant:r,theme:t}),e&&m.mark,o&&m.del,a&&m.strong,n&&m.italic),V={...f||{},...d?u({[z]:d}):{}};return W(i,{ref:H,className:j,...h,style:V,children:s})});import{forwardRef as q}from"react";var C=p({defaultClassName:"our1tx0",variantClassNames:{size:{sm:"our1tx1",md:"our1tx2",lg:"our1tx3"},theme:{primary:"our1tx4",success:"our1tx5",error:"our1tx6",warning:"our1tx7",light:"our1tx8",dark:"our1tx9"},variant:{outlined:"our1txa",contained:"our1txb",text:"our1txc"}},defaultVariants:{size:"md",theme:"primary",variant:"contained"},compoundVariants:[[{variant:"contained",theme:"light"},"our1txd"]]});import{jsx as K}from"react/jsx-runtime";var b={variant:"contained",size:"md",theme:"primary",as:"button"},Nr=q(({variant:r=b.variant,size:t=b.size,theme:e=b.theme,as:o=b.as,children:a,className:n,...i},d)=>{let s=l(n,C({variant:r,theme:e,size:t}));return K(o,{ref:d,className:s,...i,children:a})});import{forwardRef as G}from"react";var P="var(--_1b3ayop0)",T=p({defaultClassName:"_1b3ayopb",variantClassNames:{direction:{horizontal:"_1b3ayopc",vertical:"_1b3ayop2"},theme:{primary:"_1b3ayop3",secondary:"_1b3ayop4",tertiary:"_1b3ayop5",info:"_1b3ayop6",success:"_1b3ayop7",error:"_1b3ayop8",warning:"_1b3ayop9",light:"_1b3ayopa"}},defaultVariants:{direction:"horizontal",theme:"tertiary"},compoundVariants:[]}),B="var(--_1b3ayop1)";import{jsx as J}from"react/jsx-runtime";var _={theme:"primary",direction:"horizontal",size:"1px",as:"hr"},Xr=G(({theme:r=_.theme,direction:t=_.direction,size:e=_.size,as:o=_.as,color:a,className:n,style:i,...d},s)=>{let c=l(n,T({direction:t,theme:r})),f={...i||{},...a?u({[P]:a}):{},...e?u({[B]:e}):{}};return J(o,{ref:s,className:c,style:f,...d})});import{forwardRef as Q}from"react";var S=p({defaultClassName:"_8sucs20",variantClassNames:{size:{sm:"_8sucs21",md:"_8sucs22",lg:"_8sucs23"},theme:{primary:"_8sucs24",success:"_8sucs25",error:"_8sucs26",warning:"_8sucs27",light:"_8sucs28",dark:"_8sucs29"},variant:{outlined:"_8sucs2a",contained:"_8sucs2b"}},defaultVariants:{size:"md",theme:"primary",variant:"contained"},compoundVariants:[]});import{jsx as U}from"react/jsx-runtime";var y={variant:"outliend",size:"md",theme:"primary",as:"div"},ft=Q(({variant:r=y.variant,size:t=y.size,theme:e=y.theme,as:o=y.as,children:a,className:n,...i},d)=>{let s=l(n,S({variant:r,theme:e,size:t}));return U(o,{ref:d,className:s,...i,children:a})});import{forwardRef as X}from"react";var N=p({defaultClassName:"_1cfnybk0",variantClassNames:{theme:{primary:"_1cfnybk1",active:"_1cfnybk2",success:"_1cfnybk3",error:"_1cfnybk4",warning:"_1cfnybk5"},size:{sm:"_1cfnybk6",md:"_1cfnybk7",lg:"_1cfnybk8"}},defaultVariants:{size:"md",theme:"primary"},compoundVariants:[]});import{jsx as Y}from"react/jsx-runtime";var k={inputSize:"md",theme:"primary",placeholder:"\uAC12\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694."},Ct=X(({inputSize:r=k.inputSize,theme:t=k.theme,placeholder:e=k.placeholder,className:o,...a},n)=>{let i=l(o,N({theme:t,size:r}));return Y("input",{ref:n,className:i,placeholder:e,...a})});var Wt={color:{gray:{50:"var(--_1d639520)",100:"var(--_1d639521)",200:"var(--_1d639522)",300:"var(--_1d639523)",400:"var(--_1d639524)",500:"var(--_1d639525)",600:"var(--_1d639526)",700:"var(--_1d639527)",800:"var(--_1d639528)",900:"var(--_1d639529)"},blue:{50:"var(--_1d63952a)",100:"var(--_1d63952b)",200:"var(--_1d63952c)",300:"var(--_1d63952d)",400:"var(--_1d63952e)",500:"var(--_1d63952f)",600:"var(--_1d63952g)",700:"var(--_1d63952h)",800:"var(--_1d63952i)",900:"var(--_1d63952j)"},red:{50:"var(--_1d63952k)",100:"var(--_1d63952l)",200:"var(--_1d63952m)",300:"var(--_1d63952n)",400:"var(--_1d63952o)",500:"var(--_1d63952p)",600:"var(--_1d63952q)",700:"var(--_1d63952r)",800:"var(--_1d63952s)",900:"var(--_1d63952t)"},yellow:{50:"var(--_1d63952u)",100:"var(--_1d63952v)",200:"var(--_1d63952w)",300:"var(--_1d63952x)",400:"var(--_1d63952y)",500:"var(--_1d63952z)",600:"var(--_1d6395210)",700:"var(--_1d6395211)",800:"var(--_1d6395212)",900:"var(--_1d6395213)"},green:{50:"var(--_1d6395214)",100:"var(--_1d6395215)",200:"var(--_1d6395216)",300:"var(--_1d6395217)",400:"var(--_1d6395218)",500:"var(--_1d6395219)",600:"var(--_1d639521a)",700:"var(--_1d639521b)",800:"var(--_1d639521c)",900:"var(--_1d639521d)"}}};export{b as defaultButtonProps,_ as defaultDividerProps,k as defaultInputProps,y as defaultTagProps,g as defaultTypographyProps,Wt as vars};
//# sourceMappingURL=index.js.map
