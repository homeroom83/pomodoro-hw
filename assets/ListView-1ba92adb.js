import{p as Q,m as re,k as Ie,l as we,q as Z,c as I,v as ee,h as n,x as K,y as J,M as Pe,I as le,E as ae,z as ke,A as Re,B as Se,C as Fe,D as Be,F as $e,G as Te,H as Le,r as T,J as De,K as Oe,L as Ae,w as Ee,N as We,O as Ne,P as Me,Q as W,R as G,S as Ue,T as qe,U as je,W as Ke,X as ze,Y as He,Z as Xe,n as de,_ as Ye,s as Ge,d as $,e as Je,f as O,V as Qe,$ as ce,i as c,a0 as A,a1 as fe,u as E,a2 as ve,t as me,j}from"./index-d93fa0d6.js";import{u as Ze}from"./list-77a3a6c5.js";import{V as X,a as et}from"./VRow-937a9bde.js";import{V as tt,m as nt,u as _e,a as lt,b as at,c as he,d as ge}from"./VInput-fb25f5f9.js";class ie{constructor(o){let{x:a,y:i,width:t,height:l}=o;this.x=a,this.y=i,this.width=t,this.height=l}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function it(e){const o=e.getBoundingClientRect(),a=getComputedStyle(e),i=a.transform;if(i){let t,l,s,d,f;if(i.startsWith("matrix3d("))t=i.slice(9,-1).split(/, /),l=+t[0],s=+t[5],d=+t[12],f=+t[13];else if(i.startsWith("matrix("))t=i.slice(7,-1).split(/, /),l=+t[0],s=+t[3],d=+t[4],f=+t[5];else return new ie(o);const m=a.transformOrigin,y=o.x-d-(1-l)*parseFloat(m),h=o.y-f-(1-s)*parseFloat(m.slice(m.indexOf(" ")+1)),w=l?o.width/l:e.offsetWidth+1,C=s?o.height/s:e.offsetHeight+1;return new ie({x:y,y:h,width:w,height:C})}else return new ie(o)}function ot(e,o,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};let i;try{i=e.animate(o,a)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(t=>{i.onfinish=()=>{t(i)}})),i}const st="cubic-bezier(0.4, 0, 0.2, 1)";const rt=Q({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...re(),...Ie({transition:{component:we}})},"VCounter"),ut=Z()({name:"VCounter",functional:!0,props:rt(),setup(e,o){let{slots:a}=o;const i=I(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return ee(()=>n(Pe,{transition:e.transition},{default:()=>[K(n("div",{class:["v-counter",e.class],style:e.style},[a.default?a.default({counter:i.value,max:e.max,value:e.value}):i.value]),[[J,e.active]])]})),{}}});const dt=Q({floating:Boolean,...re()},"VFieldLabel"),Y=Z()({name:"VFieldLabel",props:dt(),setup(e,o){let{slots:a}=o;return ee(()=>n(tt,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},a)),{}}}),ct=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],xe=Q({appendInnerIcon:le,bgColor:String,clearable:Boolean,clearIcon:{type:le,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:le,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>ct.includes(e)},"onClick:clear":ae(),"onClick:appendInner":ae(),"onClick:prependInner":ae(),...re(),...ke(),...Re(),...Se()},"VField"),be=Z()({name:"VField",inheritAttrs:!1,props:{id:String,...nt(),...xe()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:a,emit:i,slots:t}=o;const{themeClasses:l}=Fe(e),{loaderClasses:s}=Be(e),{focusClasses:d,isFocused:f,focus:m,blur:y}=_e(e),{InputIcon:h}=lt(e),{roundedClasses:w}=$e(e),{rtlClasses:C}=Te(),R=I(()=>e.dirty||e.active),g=I(()=>!e.singleLine&&!!(e.label||t.label)),_=Le(),v=I(()=>e.id||`input-${_}`),r=I(()=>`${v.value}-messages`),L=T(),x=T(),z=T(),u=I(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:P,backgroundColorStyles:k}=De(Oe(e,"bgColor")),{textColorClasses:S,textColorStyles:te}=Ae(I(()=>e.error||e.disabled?void 0:R.value&&f.value?e.color:e.baseColor));Ee(R,V=>{if(g.value){const b=L.value.$el,F=x.value.$el;requestAnimationFrame(()=>{const B=it(b),p=F.getBoundingClientRect(),M=p.x-B.x,U=p.y-B.y-(B.height/2-p.height/2),D=p.width/.75,q=Math.abs(D-B.width)>1?{maxWidth:We(D)}:void 0,H=getComputedStyle(b),ue=getComputedStyle(F),Ce=parseFloat(H.transitionDuration)*1e3||150,Ve=parseFloat(ue.getPropertyValue("--v-field-label-scale")),pe=ue.getPropertyValue("color");b.style.visibility="visible",F.style.visibility="hidden",ot(b,{transform:`translate(${M}px, ${U}px) scale(${Ve})`,color:pe,...q},{duration:Ce,easing:st,direction:V?"normal":"reverse"}).finished.then(()=>{b.style.removeProperty("visibility"),F.style.removeProperty("visibility")})})}},{flush:"post"});const N=I(()=>({isActive:R,isFocused:f,controlRef:z,blur:y,focus:m}));function ne(V){V.target!==document.activeElement&&V.preventDefault()}return ee(()=>{var M,U,D;const V=e.variant==="outlined",b=t["prepend-inner"]||e.prependInnerIcon,F=!!(e.clearable||t.clear),B=!!(t["append-inner"]||e.appendInnerIcon||F),p=()=>t.label?t.label({...N.value,label:e.label,props:{for:v.value}}):e.label;return n("div",G({class:["v-field",{"v-field--active":R.value,"v-field--appended":B,"v-field--center-affix":e.centerAffix??!u.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":b,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!p(),[`v-field--variant-${e.variant}`]:!0},l.value,P.value,d.value,s.value,w.value,C.value,e.class],style:[k.value,e.style],onClick:ne},a),[n("div",{class:"v-field__overlay"},null),n(Ne,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),b&&n("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&n(h,{key:"prepend-icon",name:"prependInner"},null),(M=t["prepend-inner"])==null?void 0:M.call(t,N.value)]),n("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&g.value&&n(Y,{key:"floating-label",ref:x,class:[S.value],floating:!0,for:v.value,style:te.value},{default:()=>[p()]}),n(Y,{ref:L,for:v.value},{default:()=>[p()]}),(U=t.default)==null?void 0:U.call(t,{...N.value,props:{id:v.value,class:"v-field__input","aria-describedby":r.value},focus:m,blur:y})]),F&&n(Me,{key:"clear"},{default:()=>[K(n("div",{class:"v-field__clearable",onMousedown:q=>{q.preventDefault(),q.stopPropagation()}},[t.clear?t.clear():n(h,{name:"clear"},null)]),[[J,e.dirty]])]}),B&&n("div",{key:"append",class:"v-field__append-inner"},[(D=t["append-inner"])==null?void 0:D.call(t,N.value),e.appendInnerIcon&&n(h,{key:"append-icon",name:"appendInner"},null)]),n("div",{class:["v-field__outline",S.value],style:te.value},[V&&n(W,null,[n("div",{class:"v-field__outline__start"},null),g.value&&n("div",{class:"v-field__outline__notch"},[n(Y,{ref:x,floating:!0,for:v.value},{default:()=>[p()]})]),n("div",{class:"v-field__outline__end"},null)]),u.value&&g.value&&n(Y,{ref:x,floating:!0,for:v.value},{default:()=>[p()]})])])}),{controlRef:z}}});function ft(e){const o=Object.keys(be.props).filter(a=>!Ue(a)&&a!=="class"&&a!=="style");return qe(e,o)}const oe=Symbol("Forwarded refs");function se(e,o){let a=e;for(;a;){const i=Reflect.getOwnPropertyDescriptor(a,o);if(i)return i;a=Object.getPrototypeOf(a)}}function vt(e){for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];return e[oe]=a,new Proxy(e,{get(t,l){if(Reflect.has(t,l))return Reflect.get(t,l);if(!(typeof l=="symbol"||l.startsWith("$")||l.startsWith("__"))){for(const s of a)if(s.value&&Reflect.has(s.value,l)){const d=Reflect.get(s.value,l);return typeof d=="function"?d.bind(s.value):d}}},has(t,l){if(Reflect.has(t,l))return!0;if(typeof l=="symbol"||l.startsWith("$")||l.startsWith("__"))return!1;for(const s of a)if(s.value&&Reflect.has(s.value,l))return!0;return!1},set(t,l,s){if(Reflect.has(t,l))return Reflect.set(t,l,s);if(typeof l=="symbol"||l.startsWith("$")||l.startsWith("__"))return!1;for(const d of a)if(d.value&&Reflect.has(d.value,l))return Reflect.set(d.value,l,s);return!1},getOwnPropertyDescriptor(t,l){var d;const s=Reflect.getOwnPropertyDescriptor(t,l);if(s)return s;if(!(typeof l=="symbol"||l.startsWith("$")||l.startsWith("__"))){for(const f of a){if(!f.value)continue;const m=se(f.value,l)??("_"in f.value?se((d=f.value._)==null?void 0:d.setupState,l):void 0);if(m)return m}for(const f of a){const m=f.value&&f.value[oe];if(!m)continue;const y=m.slice();for(;y.length;){const h=y.shift(),w=se(h.value,l);if(w)return w;const C=h.value&&h.value[oe];C&&y.push(...C)}}}}})}const mt=["color","file","time","date","datetime-local","week","month"],ht=Q({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...at(),...xe()},"VTextField"),ye=Z()({name:"VTextField",directives:{Intersect:je},inheritAttrs:!1,props:ht(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:a,emit:i,slots:t}=o;const l=Ke(e,"modelValue"),{isFocused:s,focus:d,blur:f}=_e(e),m=I(()=>typeof e.counterValue=="function"?e.counterValue(l.value):typeof e.counterValue=="number"?e.counterValue:(l.value??"").toString().length),y=I(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),h=I(()=>["plain","underlined"].includes(e.variant));function w(u,P){var k,S;!e.autofocus||!u||(S=(k=P[0].target)==null?void 0:k.focus)==null||S.call(k)}const C=T(),R=T(),g=T(),_=I(()=>mt.includes(e.type)||e.persistentPlaceholder||s.value||e.active);function v(){var u;g.value!==document.activeElement&&((u=g.value)==null||u.focus()),s.value||d()}function r(u){i("mousedown:control",u),u.target!==g.value&&(v(),u.preventDefault())}function L(u){v(),i("click:control",u)}function x(u){u.stopPropagation(),v(),de(()=>{l.value=null,Ye(e["onClick:clear"],u)})}function z(u){var k;const P=u.target;if(l.value=P.value,(k=e.modelModifiers)!=null&&k.trim&&["text","search","password","tel","url"].includes(e.type)){const S=[P.selectionStart,P.selectionEnd];de(()=>{P.selectionStart=S[0],P.selectionEnd=S[1]})}}return ee(()=>{const u=!!(t.counter||e.counter!==!1&&e.counter!=null),P=!!(u||t.details),[k,S]=ze(a),{modelValue:te,...N}=he.filterProps(e),ne=ft(e);return n(he,G({ref:C,modelValue:l.value,"onUpdate:modelValue":V=>l.value=V,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":h.value},e.class],style:e.style},k,N,{centerAffix:!h.value,focused:s.value}),{...t,default:V=>{let{id:b,isDisabled:F,isDirty:B,isReadonly:p,isValid:M}=V;return n(be,G({ref:R,onMousedown:r,onClick:L,"onClick:clear":x,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},ne,{id:b.value,active:_.value||B.value,dirty:B.value||e.dirty,disabled:F.value,focused:s.value,error:M.value===!1}),{...t,default:U=>{let{props:{class:D,...q}}=U;const H=K(n("input",G({ref:g,value:l.value,onInput:z,autofocus:e.autofocus,readonly:p.value,disabled:F.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:v,onBlur:f},q,S),null),[[He("intersect"),{handler:w},null,{once:!0}]]);return n(W,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[n("span",{class:"v-text-field__prefix__text"},[e.prefix])]),t.default?n("div",{class:D,"data-no-activator":""},[t.default(),H]):Xe(H,{class:D}),e.suffix&&n("span",{class:"v-text-field__suffix"},[n("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:P?V=>{var b;return n(W,null,[(b=t.details)==null?void 0:b.call(t,V),u&&n(W,null,[n("span",null,null),n(ut,{active:e.persistentCounter||s.value,value:m.value,max:y.value},t.counter)])])}:void 0})}),vt({},C,R,g)}}),gt=c("h1",{class:"text-center"},"事項",-1),yt=c("thead",null,[c("tr",null,[c("th",null,"名稱"),c("th",null,"操作")])],-1),_t={key:0},xt=c("td",{colspan:"2"},"沒有事項",-1),bt=[xt],Ct=c("h1",{class:"text-center"},"已完成事項",-1),Vt=c("thead",null,[c("tr",null,[c("th",null,"名稱"),c("th",null,"操作")])],-1),pt={key:0},It=c("td",{colspan:"2"},"沒有已完成事項",-1),wt=[It],Ft={__name:"ListView",setup(e){const o=Ze(),{items:a,finishedItems:i}=Ge(o),{addItem:t,editItem:l,delItem:s,cancelEditItem:d,confirmEditItem:f,delFinishedItem:m}=o,y=T(""),h=T(null),w=T([]),C=async()=>{const _=await h.value.validate();console.log(_),!(_.length>0)&&(t(y.value),h.value.reset())},R=async(_,v)=>{(await w.value[v].validate()).length>0||f(_)},g={required:_=>!!_||"欄位必填",length:_=>_.length>=3||"必須三個字以上"};return(_,v)=>($(),Je(Qe,null,{default:O(()=>[n(et,null,{default:O(()=>[n(X,{cols:"12"},{default:O(()=>[gt]),_:1}),n(X,{cols:"12"},{default:O(()=>[n(ye,{variant:"solo-filled",label:"新增事項",modelValue:y.value,"onUpdate:modelValue":v[0]||(v[0]=r=>y.value=r),rules:[g.required,g.length],"append-icon":"mdi-plus",ref_key:"newItemInput",ref:h,"onClick:append":C,onKeydown:ce(C,["enter"])},null,8,["modelValue","rules"]),n(ge,null,{default:O(()=>[yt,c("tbody",null,[($(!0),A(W,null,fe(E(a),(r,L)=>($(),A("tr",{key:r.id},[c("td",null,[K(c("span",null,me(r.name),513),[[J,!r.edit]]),K(n(ye,{modelValue:r.model,"onUpdate:modelValue":x=>r.model=x,rules:[g.required,g.length],ref_for:!0,ref_key:"editItemInput",ref:w,onKeydown:ce(x=>R(r.id,L),["enter"]),autofocus:""},null,8,["modelValue","onUpdate:modelValue","rules","onKeydown"]),[[J,r.edit]])]),c("td",null,[r.edit?($(),A(W,{key:1},[n(j,{icon:"mdi-check",variant:"text",color:"green",onClick:x=>R(r.id,L)},null,8,["onClick"]),n(j,{icon:"mdi-undo",variant:"text",color:"red",onClick:x=>E(d)(r.id)},null,8,["onClick"])],64)):($(),A(W,{key:0},[n(j,{icon:"mdi-pencil",variant:"text",color:"green",onClick:x=>E(l)(r.id)},null,8,["onClick"]),n(j,{icon:"mdi-delete",variant:"text",color:"red",onClick:x=>E(s)(r.id)},null,8,["onClick"])],64))])]))),128)),E(a).length===0?($(),A("tr",_t,bt)):ve("",!0)])]),_:1})]),_:1}),n(X,{cols:"12"},{default:O(()=>[Ct]),_:1}),n(X,{col:"12"},{default:O(()=>[n(ge,null,{default:O(()=>[Vt,c("tbody",null,[($(!0),A(W,null,fe(E(i),r=>($(),A("tr",{key:r.id},[c("td",null,me(r.name),1),c("td",null,[n(j,{icon:"mdi-delete",variant:"text",color:"red",onClick:L=>E(m)(r.id)},null,8,["onClick"])])]))),128)),E(i).length===0?($(),A("tr",pt,wt)):ve("",!0)])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{Ft as default};
