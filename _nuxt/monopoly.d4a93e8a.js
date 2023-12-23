var pe=Object.defineProperty;var ve=(e,a,r)=>a in e?pe(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r;var ee=(e,a,r)=>(ve(e,typeof a!="symbol"?a+"":a,r),r);import{j as le,r as D,k as ie,l as ge,m as u,_ as te,n as re,q as B,g as ne,s as M,v as oe,x as J,y as ue,z as se,A as z,o,c,a as d,F as L,B as q,t as F,C as ce,D as S,E,G as I,H as ye,b as y,I as R,J as me,K as fe,L as be,i as ae,w as j,M as he,d as Ie,p as Ce,f as xe}from"./entry.020b7db7.js";import{a as Se,_ as ke}from"./client-only.a2a85d87.js";let Ae=0;function we(){return`nuid-${Ae++}`}const de=(e,a)=>{const r=le("form-events",void 0),l=le("form-group",void 0),p=le("form-inputs",void 0),s=D(e==null?void 0:e.id);ie(()=>{s.value=(e==null?void 0:e.legend)===null||e.legend?void 0:(e==null?void 0:e.id)??we(),l&&(l.inputId.value=s.value,p&&(p.value[l.name.value]=s))});const m=D(!1);function i(C,g){r&&r.emit({type:C,path:g})}function f(){i("blur",l==null?void 0:l.name.value),m.value=!0}function v(){i("change",l==null?void 0:l.name.value)}const b=ge(()=>{(m.value||l!=null&&l.eagerValidation.value)&&i("input",l==null?void 0:l.name.value)},300);return{inputId:s,name:u(()=>(e==null?void 0:e.name)??(l==null?void 0:l.name.value)),size:u(()=>{var g;const C=a.size[l==null?void 0:l.size.value]?l==null?void 0:l.size.value:null;return(e==null?void 0:e.size)??C??((g=a==null?void 0:a.default)==null?void 0:g.size)}),color:u(()=>{var C;return(C=l==null?void 0:l.error)!=null&&C.value?"red":e==null?void 0:e.color}),emitFormBlur:f,emitFormInput:b,emitFormChange:v}},w=re(B.ui.strategy,B.ui.select,ye),ze=ne({components:{UIcon:M},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>w.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>w.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},size:{type:String,default:null,validator(e){return Object.keys(w.size).includes(e)}},color:{type:String,default:()=>w.default.color,validator(e){return[...B.ui.colors,...Object.keys(w.color)].includes(e)}},variant:{type:String,default:()=>w.default.variant,validator(e){return[...Object.keys(w.variant),...Object.values(w.color).flatMap(a=>Object.keys(a))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:a,slots:r}){const{ui:l,attrs:p}=oe("select",J(e,"ui"),w,J(e,"class")),{size:s,rounded:m}=ue({ui:l,props:e}),{emitFormChange:i,inputId:f,color:v,size:b,name:C}=de(e,w),g=u(()=>s.value||b.value),h=t=>{a("update:modelValue",t.target.value)},A=t=>{i(),a("change",t)},$=t=>R(t,e.valueAttribute,R(t,e.optionAttribute)),N=t=>R(t,e.optionAttribute,R(t,e.valueAttribute)),n=t=>["string","number","boolean"].includes(typeof t)?{[e.valueAttribute]:t,[e.optionAttribute]:t}:{...t,[e.valueAttribute]:$(t),[e.optionAttribute]:N(t)},O=u(()=>e.options.map(t=>n(t))),_=u(()=>e.placeholder?[{[e.valueAttribute]:"",[e.optionAttribute]:e.placeholder,disabled:!0},...O.value]:O.value),H=u(()=>{const t=n(e.modelValue),x=_.value.find(T=>T[e.valueAttribute]===t[e.valueAttribute]);return x?x[e.valueAttribute]:""}),K=u(()=>{var x,T;const t=((T=(x=l.value.color)==null?void 0:x[v.value])==null?void 0:T[e.variant])||l.value.variant[e.variant];return se(z(l.value.base,l.value.form,m.value,l.value.size[g.value],e.padded?l.value.padding[g.value]:"p-0",t==null?void 0:t.replaceAll("{color}",v.value),(U.value||r.leading)&&l.value.leading.padding[g.value],(W.value||r.trailing)&&l.value.trailing.padding[g.value]),e.selectClass)}),U=u(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),W=u(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),Q=u(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),X=u(()=>e.loading&&!U.value?e.loadingIcon:e.trailingIcon||e.icon),Y=u(()=>z(l.value.icon.leading.wrapper,l.value.icon.leading.pointer,l.value.icon.leading.padding[g.value])),Z=u(()=>z(l.value.icon.base,v.value&&B.ui.colors.includes(v.value)&&l.value.icon.color.replaceAll("{color}",v.value),l.value.icon.size[g.value],e.loading&&l.value.icon.loading)),G=u(()=>z(l.value.icon.trailing.wrapper,l.value.icon.trailing.pointer,l.value.icon.trailing.padding[g.value])),P=u(()=>z(l.value.icon.base,v.value&&B.ui.colors.includes(v.value)&&l.value.icon.color.replaceAll("{color}",v.value),l.value.icon.size[g.value],e.loading&&!U.value&&l.value.icon.loading));return{ui:l,attrs:p,name:C,inputId:f,normalizedOptionsWithPlaceholder:_,normalizedValue:H,isLeading:U,isTrailing:W,selectClass:K,leadingIconName:Q,leadingIconClass:Z,leadingWrapperIconClass:Y,trailingIconName:X,trailingIconClass:P,trailingWrapperIconClass:G,onInput:h,onChange:A}}}),Be=["id","name","value","required","disabled"],Ue=["value","label"],Ve=["value","selected","disabled","textContent"],Oe=["value","selected","disabled","textContent"];function $e(e,a,r,l,p,s){const m=M;return o(),c("div",{class:S(e.ui.wrapper)},[d("select",ce({id:e.inputId,name:e.name,value:e.modelValue,required:e.required,disabled:e.disabled||e.loading,class:e.selectClass},e.attrs,{onInput:a[0]||(a[0]=(...i)=>e.onInput&&e.onInput(...i)),onChange:a[1]||(a[1]=(...i)=>e.onChange&&e.onChange(...i))}),[(o(!0),c(L,null,q(e.normalizedOptionsWithPlaceholder,(i,f)=>(o(),c(L,null,[i.children?(o(),c("optgroup",{key:`${i[e.valueAttribute]}-optgroup-${f}`,value:i[e.valueAttribute],label:i[e.optionAttribute]},[(o(!0),c(L,null,q(i.children,(v,b)=>(o(),c("option",{key:`${v[e.valueAttribute]}-${f}-${b}`,value:v[e.valueAttribute],selected:v[e.valueAttribute]===e.normalizedValue,disabled:v.disabled,textContent:F(v[e.optionAttribute])},null,8,Ve))),128))],8,Ue)):(o(),c("option",{key:`${i[e.valueAttribute]}-${f}`,value:i[e.valueAttribute],selected:i[e.valueAttribute]===e.normalizedValue,disabled:i.disabled,textContent:F(i[e.optionAttribute])},null,8,Oe))],64))),256))],16,Be),e.isLeading&&e.leadingIconName||e.$slots.leading?(o(),c("span",{key:0,class:S(e.leadingWrapperIconClass)},[E(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[y(m,{name:e.leadingIconName,class:S(e.leadingIconClass)},null,8,["name","class"])])],2)):I("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(o(),c("span",{key:1,class:S(e.trailingWrapperIconClass)},[E(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[y(m,{name:e.trailingIconName,class:S(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])])],2)):I("",!0)],2)}const Te=te(ze,[["render",$e]]),V=re(B.ui.strategy,B.ui.input,fe),Ne=ne({components:{UIcon:M},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>V.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(V.size).includes(e)}},color:{type:String,default:()=>V.default.color,validator(e){return[...B.ui.colors,...Object.keys(V.color)].includes(e)}},variant:{type:String,default:()=>V.default.variant,validator(e){return[...Object.keys(V.variant),...Object.values(V.color).flatMap(a=>Object.keys(a))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur"],setup(e,{emit:a,slots:r}){const{ui:l,attrs:p}=oe("input",J(e,"ui"),V,J(e,"class")),{size:s,rounded:m}=ue({ui:l,props:e}),{emitFormBlur:i,emitFormInput:f,size:v,color:b,inputId:C,name:g}=de(e,V),h=u(()=>s.value||v.value),A=D(me({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),$=D(null),N=()=>{var t;e.autofocus&&((t=$.value)==null||t.focus())},n=t=>{A.value.trim&&(t=t.trim()),(A.value.number||e.type==="number")&&(t=be(t)),a("update:modelValue",t),f()},O=t=>{A.value.lazy||n(t.target.value)},_=t=>{const x=t.target.value;A.value.lazy&&n(x),A.value.trim&&(t.target.value=x.trim())},H=t=>{i(),a("blur",t)};ie(()=>{setTimeout(()=>{N()},e.autofocusDelay)});const K=u(()=>{var x,T;const t=((T=(x=l.value.color)==null?void 0:x[b.value])==null?void 0:T[e.variant])||l.value.variant[e.variant];return se(z(l.value.base,l.value.form,m.value,l.value.placeholder,l.value.size[h.value],e.padded?l.value.padding[h.value]:"p-0",t==null?void 0:t.replaceAll("{color}",b.value),(U.value||r.leading)&&l.value.leading.padding[h.value],(W.value||r.trailing)&&l.value.trailing.padding[h.value]),e.inputClass)}),U=u(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),W=u(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),Q=u(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),X=u(()=>e.loading&&!U.value?e.loadingIcon:e.trailingIcon||e.icon),Y=u(()=>z(l.value.icon.leading.wrapper,l.value.icon.leading.pointer,l.value.icon.leading.padding[h.value])),Z=u(()=>z(l.value.icon.base,b.value&&B.ui.colors.includes(b.value)&&l.value.icon.color.replaceAll("{color}",b.value),l.value.icon.size[h.value],e.loading&&l.value.icon.loading)),G=u(()=>z(l.value.icon.trailing.wrapper,l.value.icon.trailing.pointer,l.value.icon.trailing.padding[h.value])),P=u(()=>z(l.value.icon.base,b.value&&B.ui.colors.includes(b.value)&&l.value.icon.color.replaceAll("{color}",b.value),l.value.icon.size[h.value],e.loading&&!U.value&&l.value.icon.loading));return{ui:l,attrs:p,name:g,inputId:C,input:$,isLeading:U,isTrailing:W,inputClass:K,leadingIconName:Q,leadingIconClass:Z,leadingWrapperIconClass:Y,trailingIconName:X,trailingIconClass:P,trailingWrapperIconClass:G,onInput:O,onChange:_,onBlur:H}}}),_e=["id","name","value","type","required","placeholder","disabled"];function je(e,a,r,l,p,s){const m=M;return o(),c("div",{class:S(e.ui.wrapper)},[d("input",ce({id:e.inputId,ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled||e.loading,class:e.inputClass},e.attrs,{onInput:a[0]||(a[0]=(...i)=>e.onInput&&e.onInput(...i)),onBlur:a[1]||(a[1]=(...i)=>e.onBlur&&e.onBlur(...i)),onChange:a[2]||(a[2]=(...i)=>e.onChange&&e.onChange(...i))}),null,16,_e),E(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(o(),c("span",{key:0,class:S(e.leadingWrapperIconClass)},[E(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[y(m,{name:e.leadingIconName,class:S(e.leadingIconClass)},null,8,["name","class"])])],2)):I("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(o(),c("span",{key:1,class:S(e.trailingWrapperIconClass)},[E(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[y(m,{name:e.trailingIconName,class:S(e.trailingIconClass)},null,8,["name","class"])])],2)):I("",!0)],2)}const Fe=te(Ne,[["render",je]]),Le=[{id:"classic",name:"Classic"},{id:"russian-cities-v2",name:"Russian Cities v2",startBalance:1500,operations:[{id:"buy",name:"Купить город"},{id:"upgrade",name:"Upgrade города"},{id:"outcome",name:"Оплаты"},{id:"income",name:"Выплаты"}],fieldTypes:["city","railroad","infra","prison","start","chance","bank","tax","parking"],fields:[{type:"start"},{type:"city",id:"Тюмень"},{type:"bank"},{type:"city",id:"Самара"},{type:"tax",amount:-200},{type:"railroad",id:"Рижская железная дорога"},{type:"city",id:"Калуга"},{type:"chance"},{type:"city",id:"Пермь"},{type:"city",id:"Томск"},{type:"prison",amount:-50},{type:"city",id:"Уфа"},{type:"infra",id:"Электростанция"},{type:"city",id:"Казань"},{type:"city",id:"Краснодар"},{type:"railroad",id:"Курская железная дорога"},{type:"city",id:"Архангельск"},{type:"bank"},{type:"city",id:"Челябинск"},{type:"city",id:"Нижний Новгород"},{type:"parking"},{type:"city",id:"Омск"},{type:"chance"},{type:"city",id:"Волгоград"},{type:"city",id:"Белгород"},{type:"railroad",id:"Казанская железная дорога"},{type:"city",id:"Ставрополь"},{type:"city",id:"Ростов-на-Дону"},{type:"infra",id:"Водопровод"},{type:"city",id:"Хабаровск"},{type:"prison",amount:-50},{type:"city",id:"Екатеринбург"},{type:"city",id:"Владивосток"},{type:"bank"},{type:"city",id:"Санкт-Пертербург"},{type:"railroad",id:"Ленинградская железная дорога"},{type:"chance"},{type:"city",id:"Москва"},{type:"tax",amount:-100},{type:"city",id:"Новосибирск"}],currencyTypes:[5,10,50,100,500,1e3,5e3],roundIncomeAmount:200,properties:[{id:"Архангельск",groupColor:"orange",type:"city",upgrades:[{price:180,tax:14,level:0},{price:100,tax:70,level:1},{price:100,tax:200,level:2},{price:100,tax:550,level:3},{price:100,tax:750,level:4},{price:100,tax:950,level:5}]},{id:"Белгород",groupColor:"red",type:"city",upgrades:[{price:240,tax:18,level:0},{price:150,tax:90,level:1},{price:150,tax:250,level:2},{price:150,tax:700,level:3},{price:150,tax:875,level:4},{price:150,tax:1050,level:5}]},{id:"Владивосток",groupColor:"green",type:"city",upgrades:[{price:300,tax:26,level:0},{price:200,tax:130,level:1},{price:200,tax:390,level:2},{price:200,tax:900,level:3},{price:200,tax:1100,level:4},{price:200,tax:1275,level:5}]},{id:"Водопровод",type:"infra",upgrades:[{price:150,tax:0,level:1}]},{id:"Волгоград",groupColor:"red",type:"city",upgrades:[{price:220,tax:18,level:0},{price:150,tax:90,level:1},{price:150,tax:250,level:2},{price:150,tax:700,level:3},{price:150,tax:875,level:4},{price:150,tax:1050,level:5}]},{id:"Екатеринбург",groupColor:"green",type:"city",upgrades:[{price:300,tax:26,level:0},{price:200,tax:130,level:1},{price:200,tax:390,level:2},{price:200,tax:900,level:3},{price:200,tax:1100,level:4},{price:200,tax:1275,level:5}]},{id:"Казанская железная дорога",type:"railroad",upgrades:[{price:200,tax:0,level:1}]},{id:"Казань",groupColor:"pink",type:"city",upgrades:[{price:140,tax:10,level:0},{price:100,tax:50,level:1},{price:100,tax:150,level:2},{price:100,tax:450,level:3},{price:100,tax:625,level:4},{price:100,tax:750,level:5}]},{id:"Калуга",groupColor:"light-blue",type:"city",upgrades:[{price:100,tax:6,level:0},{price:50,tax:30,level:1},{price:50,tax:90,level:2},{price:50,tax:270,level:3},{price:50,tax:400,level:4},{price:50,tax:550,level:5}]},{id:"Краснодар",groupColor:"pink",type:"city",upgrades:[{price:160,tax:12,level:0},{price:100,tax:60,level:1},{price:100,tax:180,level:2},{price:100,tax:500,level:3},{price:100,tax:700,level:4},{price:100,tax:900,level:5}]},{id:"Курская железная дорога",type:"railroad",upgrades:[{price:200,tax:0,level:1}]},{id:"Ленинградская железная дорога",type:"railroad",upgrades:[{price:200,tax:0,level:1}]},{id:"Москва",groupColor:"blue",type:"city",upgrades:[{price:350,tax:35,level:0},{price:200,tax:175,level:1},{price:200,tax:500,level:2},{price:200,tax:1100,level:3},{price:200,tax:1300,level:4},{price:200,tax:1500,level:5}]},{id:"Нижний Новгород",groupColor:"orange",type:"city",upgrades:[{price:200,tax:16,level:0},{price:100,tax:80,level:1},{price:100,tax:220,level:2},{price:100,tax:600,level:3},{price:100,tax:800,level:4},{price:100,tax:1e3,level:5}]},{id:"Новосибирск",groupColor:"blue",type:"city",upgrades:[{price:400,tax:50,level:0},{price:200,tax:200,level:1},{price:200,tax:600,level:2},{price:200,tax:1400,level:3},{price:200,tax:1700,level:4},{price:200,tax:2e3,level:5}]},{id:"Омск",groupColor:"red",type:"city",upgrades:[{price:220,tax:18,level:0},{price:150,tax:90,level:1},{price:150,tax:250,level:2},{price:150,tax:700,level:3},{price:150,tax:875,level:4},{price:150,tax:1050,level:5}]},{id:"Пермь",groupColor:"light-blue",type:"city",upgrades:[{price:100,tax:6,level:0},{price:50,tax:30,level:1},{price:50,tax:90,level:2},{price:50,tax:270,level:3},{price:50,tax:400,level:4},{price:50,tax:550,level:5}]},{id:"Рижская железная дорога",type:"railroad",upgrades:[{price:200,tax:0,level:0}]},{id:"Ростов-на-Дону",groupColor:"yellow",type:"city",upgrades:[{price:260,tax:22,level:0},{price:150,tax:110,level:1},{price:150,tax:330,level:2},{price:150,tax:800,level:3},{price:150,tax:975,level:4},{price:150,tax:1150,level:5}]},{id:"Самара",groupColor:"brown",type:"city",upgrades:[{price:60,tax:4,level:0},{price:50,tax:20,level:1},{price:50,tax:60,level:2},{price:50,tax:180,level:3},{price:50,tax:320,level:4},{price:50,tax:450,level:5}]},{id:"Санкт-Петербург",groupColor:"green",type:"city",upgrades:[{price:320,tax:28,level:0},{price:200,tax:150,level:1},{price:200,tax:450,level:2},{price:200,tax:1e3,level:3},{price:200,tax:1200,level:4},{price:200,tax:1400,level:5}]},{id:"Ставрополь",groupColor:"yellow",type:"city",upgrades:[{price:260,tax:22,level:0},{price:150,tax:110,level:1},{price:150,tax:330,level:2},{price:150,tax:800,level:3},{price:150,tax:975,level:4},{price:150,tax:1150,level:5}]},{id:"Томск",groupColor:"light-blue",type:"city",upgrades:[{price:120,tax:8,level:0},{price:50,tax:40,level:1},{price:50,tax:100,level:2},{price:50,tax:300,level:3},{price:50,tax:450,level:4},{price:50,tax:600,level:5}]},{id:"Тюмень",groupColor:"brown",type:"city",upgrades:[{price:60,tax:2,level:0},{price:50,tax:10,level:1},{price:50,tax:30,level:2},{price:50,tax:90,level:3},{price:50,tax:160,level:4},{price:50,tax:250,level:5}]},{id:"Уфа",groupColor:"pink",type:"city",upgrades:[{price:140,tax:10,level:0},{price:100,tax:50,level:1},{price:100,tax:150,level:2},{price:100,tax:450,level:3},{price:100,tax:625,level:4},{price:100,tax:750,level:5}]},{id:"Хабаровск",groupColor:"yellow",type:"city",upgrades:[{price:280,tax:24,level:0},{price:150,tax:120,level:1},{price:150,tax:360,level:2},{price:150,tax:850,level:3},{price:150,tax:1025,level:4},{price:150,tax:1200,level:5}]},{id:"Челябинск",groupColor:"orange",type:"city",upgrades:[{price:180,tax:14,level:0},{price:100,tax:70,level:1},{price:100,tax:200,level:2},{price:100,tax:550,level:3},{price:100,tax:750,level:4},{price:100,tax:950,level:5}]},{id:"Электростанция",type:"infra",upgrades:[{price:150,tax:0,level:0}]}]}],We=Le;class qe{constructor(){ee(this,"balance",0);ee(this,"properties",[])}init(a){this.balance=a,this.properties=[]}}const Ee={data(){return{schemes:{list:We,currentId:null},player:new qe,operations:{list:[],current:null,targetId:null,inputAmount:0}}},mounted(){localStorage["schemes.currentId"]&&(this.schemes.currentId=localStorage["schemes.currentId"],this.selectScheme()),localStorage["player.balance"]&&(this.player.balance=localStorage["player.balance"]),localStorage["player.properties"]&&(this.player.properties=JSON.parse(localStorage["player.properties"]))},methods:{selectScheme(){var e,a;this.player.init(((e=this.currentScheme)==null?void 0:e.startBalance)??0),this.operations.list=((a=this.currentScheme)==null?void 0:a.operations.map(r=>r))??[]},selectOperation(e){this.operations.current=e},resetTarget(){this.operations.targetId=null,this.operations.current=null,this.operations.inputAmount=0},buyProperty(){var e,a;try{this.decBalance(((e=this.currentOperationTarget)==null?void 0:e.upgrades[0].price)??0),this.player.properties.push({property:this.currentOperationTarget,level:1,currentUpgrade:(a=this.currentOperationTarget)==null?void 0:a.upgrades.find(r=>r.level===1)}),this.resetTarget(),localStorage["player.properties"]=JSON.stringify(this.player.properties)}catch(r){console.error(r.message)}},upgradeProperty(){try{const e=this.currentPlayerTarget;if(!e)throw new Error("Unknown property");const a=e.property.upgrades.find(p=>p.level===e.currentUpgrade.level+1)??null;if(!a)throw new Error("Upgrade impossible");this.decBalance(a.price);const r=e.currentUpgrade.price,l=e.property.id;this.player.properties.forEach(p=>(p.property.id!==l||(p.currentUpgrade=a,p.currentUpgrade.price+=r),p)),this.resetTarget(),localStorage["player.properties"]=JSON.stringify(this.player.properties)}catch(e){console.error(e.message)}},decBalance(e){if(e>this.player.balance)throw new Error("Low balance");if(e===0)throw new Error("Incorrect price");this.player.balance=+this.player.balance-+e},incBalance(e){this.player.balance=+this.player.balance+ +e},payRent(){try{const e=this.operations.inputAmount;if(e>this.player.balance)throw new Error("Low balance");this.decBalance(e),this.resetTarget()}catch(e){console.error(e.message)}},getIncome(){try{const e=this.operations.inputAmount;this.incBalance(e),this.resetTarget()}catch(e){console.error(e.message)}},getRoundIncome(){var e;try{const a=((e=this.currentScheme)==null?void 0:e.roundIncomeAmount)??0;this.incBalance(a),this.resetTarget()}catch(a){console.error(a.message)}}},computed:{currentScheme(){return this.schemes.list.find(e=>e.id===this.schemes.currentId)??null},availableProperties(){var e;return(e=this.currentScheme)==null?void 0:e.properties.filter(a=>!this.player.properties.map(r=>r.property.id).includes(a.id)).map(a=>a.id)},currentOperationTarget(){var e;return((e=this.currentScheme)==null?void 0:e.properties.find(a=>a.id===this.operations.targetId))??null},availablePlayerUpgrades(){function e(a,r){var l;return((l=a.upgrades.find(p=>p.level>r))==null?void 0:l.level)??!1}return this.player.properties.filter(a=>e(a.property,a.currentUpgrade.level)).map(a=>a.property.id)},currentPlayerTarget(){return this.player.properties.find(e=>e.property.id===this.operations.targetId)??null},nextUpgrade(){var r,l;const e=((r=this.currentPlayerTarget)==null?void 0:r.currentUpgrade.level)??0,a={level:0,tax:0,price:0};return((l=this.currentOperationTarget)==null?void 0:l.upgrades.find(p=>p.level===e+1))??a}},watch:{"schemes.currentId":e=>{localStorage["schemes.currentId"]=e},"player.balance":e=>{localStorage["player.balance"]=e}}};const k=e=>(Ce("data-v-81ef6ae8"),e=e(),xe(),e),Me={class:"row"},Re=k(()=>d("div",{class:"label"},"Scheme",-1)),De={class:"input"},Je=k(()=>d("div",{class:"row"},[d("div",{class:"label"}),d("div",{class:"input"})],-1)),He={class:"row"},Ke=k(()=>d("div",{class:"label"},"Balance",-1)),Qe={class:"input"},Xe={key:0,class:"row"},Ye={key:1,class:"row"},Ze=k(()=>d("span",{class:"text-gray-500 dark:text-gray-400 text-xs"},"$",-1)),Ge={key:2,class:"row"},Pe=k(()=>d("span",{class:"text-gray-500 dark:text-gray-400 text-xs"},"$",-1)),el={key:3,class:"row"},ll=k(()=>d("div",null,"Pay for rent",-1)),al=k(()=>d("span",{class:"text-gray-500 dark:text-gray-400 text-xs"},"$",-1)),tl={key:4,class:"row"},il={class:"row"},rl=k(()=>d("div",null,"Amount",-1)),nl=k(()=>d("span",{class:"text-gray-500 dark:text-gray-400 text-xs"},"$",-1)),ol=k(()=>d("div",{class:"flex-break"},null,-1)),ul={class:"row"},sl={key:5,class:"row mt-10"},cl=k(()=>d("div",{class:"label"},"Properties",-1)),dl=[cl],pl={key:6,class:"grid"},vl={class:"grid-cell"},gl={class:"subtitle"},yl={key:0,class:"subtitle"},ml={key:1,class:"subtitle"};function fl(e,a,r,l,p,s){const m=Te,i=Fe,f=he,v=M,b=ke,C=Se;return o(),ae(C,null,{default:j(()=>[d("main",null,[y(b,{class:"monopoly-layout"},{default:j(()=>{var g,h,A,$,N;return[d("div",Me,[Re,d("div",De,[y(m,{modelValue:e.schemes.currentId,"onUpdate:modelValue":a[0]||(a[0]=n=>e.schemes.currentId=n),options:e.schemes.list,"option-attribute":"name","value-attribute":"id",onChange:s.selectScheme},null,8,["modelValue","options","onChange"])])]),Je,d("div",He,[Ke,d("div",Qe,[y(i,{color:"primary",variant:"outline",modelValue:e.player.balance,"onUpdate:modelValue":a[1]||(a[1]=n=>e.player.balance=n)},null,8,["modelValue"])])]),e.operations.list?(o(),c("div",Xe,[(o(!0),c(L,null,q(e.operations.list,n=>{var O;return o(),ae(f,{class:"btn-shrink",size:"sm",color:"primary",label:n.name,variant:n.id===((O=e.operations.current)==null?void 0:O.id)?"solid":"outline",onClick:_=>s.selectOperation(n)},null,8,["label","variant","onClick"])}),256))])):I("",!0),((g=e.operations.current)==null?void 0:g.id)==="buy"?(o(),c("div",Ye,[y(m,{modelValue:e.operations.targetId,"onUpdate:modelValue":a[2]||(a[2]=n=>e.operations.targetId=n),options:s.availableProperties},null,8,["modelValue","options"]),y(i,{color:"primary",variant:"outline",disabled:"","model-value":(h=s.currentOperationTarget)==null?void 0:h.upgrades[0].price},{leading:j(()=>[Ze]),_:1},8,["model-value"]),y(f,{color:"primary",label:"Buy",disabled:!s.currentOperationTarget,onClick:s.buyProperty},null,8,["disabled","onClick"])])):I("",!0),((A=e.operations.current)==null?void 0:A.id)==="upgrade"?(o(),c("div",Ge,[y(m,{modelValue:e.operations.targetId,"onUpdate:modelValue":a[3]||(a[3]=n=>e.operations.targetId=n),options:s.availablePlayerUpgrades},null,8,["modelValue","options"]),d("div",null,"Next level: "+F(s.nextUpgrade.level),1),y(i,{color:"primary",variant:"outline","model-value":s.nextUpgrade.price,disabled:""},{leading:j(()=>[Pe]),_:1},8,["model-value"]),y(f,{color:"primary",label:"Upgrade",disabled:!s.currentOperationTarget,onClick:s.upgradeProperty},null,8,["disabled","onClick"])])):I("",!0),["outcome"].includes((($=e.operations.current)==null?void 0:$.id)??"")?(o(),c("div",el,[ll,y(i,{color:"primary",variant:"outline",modelValue:e.operations.inputAmount,"onUpdate:modelValue":a[4]||(a[4]=n=>e.operations.inputAmount=n)},{leading:j(()=>[al]),_:1},8,["modelValue"]),y(f,{color:"primary",label:"Pay",onClick:s.payRent},null,8,["onClick"])])):I("",!0),["income"].includes(((N=e.operations.current)==null?void 0:N.id)??"")?(o(),c("div",tl,[d("div",il,[rl,y(i,{color:"primary",variant:"outline",modelValue:e.operations.inputAmount,"onUpdate:modelValue":a[5]||(a[5]=n=>e.operations.inputAmount=n)},{leading:j(()=>[nl]),_:1},8,["modelValue"]),y(f,{color:"primary",label:"Get Income",onClick:s.getIncome},null,8,["onClick"])]),ol,d("div",ul,[y(f,{color:"primary",label:"Get Round Income",onClick:s.getRoundIncome},null,8,["onClick"])])])):I("",!0),e.player.properties.length>0?(o(),c("div",sl,dl)):I("",!0),e.player.properties.length>0?(o(),c("div",pl,[(o(!0),c(L,null,q(e.player.properties,n=>(o(),c("div",vl,[d("div",{class:S(["title",[n.property.groupColor]])},F(n.property.id),3),d("div",gl,"Price: "+F(n.currentUpgrade.price),1),n.property.type==="city"?(o(),c("div",yl,"Tax: "+F(n.currentUpgrade.tax),1)):I("",!0),n.property.type==="city"?(o(),c("div",ml,[Ie(" Level: "),(o(!0),c(L,null,q(n.currentUpgrade.level,(O,_)=>(o(),ae(v,{name:"i-heroicons-arrow-uturn-up-20-solid"}))),256))])):I("",!0)]))),256))])):I("",!0)]}),_:1})])]),_:1})}const Cl=te(Ee,[["render",fl],["__scopeId","data-v-81ef6ae8"]]);export{Cl as default};
