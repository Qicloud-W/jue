import{c as I,a as P,Q as R,J as V,d as _,o as q,i as c,k as u,m as M,b as J,E as Q,au as U,ae as j,n as F}from"./@vue-AVcRlItG.js";var X=_({name:"vue3-danmaku",components:{},props:{danmus:{type:Array,required:!0,default:()=>[]},channels:{type:Number,default:0},autoplay:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},useSlot:{type:Boolean,default:!1},debounce:{type:Number,default:100},speeds:{type:Number,default:200},randomChannel:{type:Boolean,default:!1},fontSize:{type:Number,default:18},top:{type:Number,default:4},right:{type:Number,default:0},isSuspend:{type:Boolean,default:!1},extraStyle:{type:String,default:""}},emits:["list-end","play-end","dm-over","dm-out","update:danmus"],setup(a,{emit:d,slots:w}){let v=c(document.createElement("div")),l=c(document.createElement("div"));const p=c(0),L=c(0);let S=0;const $=c(0),B=c(0),f=c(0),E=c(!1),g=c(!1),k=c({}),o=function(n,s,e="modelValue",t){return u({get:()=>n[e],set:h=>{s(`update:${e}`,t?t(h):h)}})}(a,d,"danmus"),i=M({channels:u(()=>a.channels||$.value),autoplay:u(()=>a.autoplay),loop:u(()=>a.loop),useSlot:u(()=>a.useSlot),debounce:u(()=>a.debounce),randomChannel:u(()=>a.randomChannel)}),r=M({height:u(()=>B.value),fontSize:u(()=>a.fontSize),speeds:u(()=>a.speeds),top:u(()=>a.top),right:u(()=>a.right)});function z(){T(),a.isSuspend&&function(){let n=[];l.value.addEventListener("mouseover",s=>{let e=s.target;e.className.includes("dm")||(e=e.closest(".dm")||e),e.className.includes("dm")&&(n.includes(e)||(d("dm-over",{el:e}),e.classList.add("pause"),n.push(e)))}),l.value.addEventListener("mouseout",s=>{let e=s.target;e.className.includes("dm")||(e=e.closest(".dm")||e),e.className.includes("dm")&&(d("dm-out",{el:e}),e.classList.remove("pause"),n.forEach(t=>{t.classList.remove("pause")}),n=[])})}(),i.autoplay&&W()}function T(){if(p.value=v.value.offsetWidth,L.value=v.value.offsetHeight,p.value===0||L.value===0)throw new Error("获取不到容器宽高")}function W(){g.value=!1,S||(S=setInterval(()=>function(){if(!g.value&&o.value.length)if(f.value>o.value.length-1){const n=l.value.children.length;i.loop&&(n<f.value&&(d("list-end"),f.value=0),N())}else N()}(),i.debounce))}function N(n){const s=i.loop?f.value%o.value.length:f.value,e=n||o.value[s];let t=document.createElement("div");i.useSlot?t=function(h,m){return U({render:()=>j("div",{},[w.dm&&w.dm({danmu:h,index:m})])}).mount(document.createElement("div"))}(e,s).$el:(t.innerHTML=e,t.setAttribute("style",a.extraStyle),t.style.fontSize=`${r.fontSize}px`,t.style.lineHeight=`${r.fontSize}px`),t.classList.add("dm"),l.value.appendChild(t),t.style.opacity="0",F(()=>{r.height||(B.value=t.offsetHeight),i.channels||($.value=Math.floor(L.value/(r.height+r.top)));let h=function(m){let b=[...Array(i.channels).keys()];i.randomChannel&&(b=b.sort(()=>.5-Math.random()));for(let y of b){const x=k.value[y];if(!x||!x.length)return k.value[y]=[m],m.addEventListener("animationend",()=>k.value[y].splice(0,1)),y%i.channels;for(let C=0;C<x.length;C++){const H=D(x[C])-10;if(H<=.88*(m.offsetWidth-x[C].offsetWidth)||H<=0)break;if(C===x.length-1)return k.value[y].push(m),m.addEventListener("animationend",()=>k.value[y].splice(0,1)),y%i.channels}}return-1}(t);if(h>=0){const m=t.offsetWidth,b=r.height;t.classList.add("move"),t.dataset.index=`${s}`,t.style.opacity="1",t.style.top=h*(b+r.top)+"px",t.style.width=m+r.right+"px",t.style.setProperty("--dm-scroll-width",`-${p.value+m}px`),t.style.left=`${p.value}px`,t.style.animationDuration=p.value/r.speeds+"s",t.addEventListener("animationend",()=>{Number(t.dataset.index)!==o.value.length-1||i.loop||d("play-end",t.dataset.index),l.value&&l.value.removeChild(t)}),f.value++}else l.value.removeChild(t)})}function D(n){const s=n.offsetWidth||parseInt(n.style.width),e=n.getBoundingClientRect().right||l.value.getBoundingClientRect().right+s;return l.value.getBoundingClientRect().right-e}function A(){clearInterval(S),S=0,f.value=0}return J(()=>{z()}),Q(()=>{A()}),{container:v,dmContainer:l,hidden:E,paused:g,danmuList:o,getPlayState:function(){return!g.value},resize:function(){T();const n=l.value.getElementsByClassName("dm");for(let s=0;s<n.length;s++){const e=n[s];e.style.setProperty("--dm-scroll-width",`-${p.value+e.offsetWidth}px`),e.style.left=`${p.value}px`,e.style.animationDuration=p.value/r.speeds+"s"}},play:W,pause:function(){g.value=!0},stop:function(){k.value={},l.value.innerHTML="",g.value=!0,E.value=!1,A()},show:function(){E.value=!1},hide:function(){E.value=!0},reset:function(){B.value=0,z()},add:function(n){if(f.value===o.value.length)return o.value.push(n),o.value.length-1;{const s=f.value%o.value.length;return o.value.splice(s,0,n),s+1}},push:function(n){return o.value.push(n),o.value.length-1},insert:N}}});const G={ref:"container",class:"vue-danmaku"};(function(a,d){d===void 0&&(d={});var w=d.insertAt;if(a&&typeof document<"u"){var v=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",w==="top"&&v.firstChild?v.insertBefore(l,v.firstChild):v.appendChild(l),l.styleSheet?l.styleSheet.cssText=a:l.appendChild(document.createTextNode(a))}})(`.vue-danmaku {
  position: relative;
  overflow: hidden;
}
.vue-danmaku .danmus {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.vue-danmaku .danmus.show {
  opacity: 1;
}
.vue-danmaku .danmus.paused .dm.move {
  animation-play-state: paused;
}
.vue-danmaku .danmus .dm {
  position: absolute;
  font-size: 20px;
  color: #ddd;
  white-space: pre;
  transform: translateX(0);
  transform-style: preserve-3d;
}
.vue-danmaku .danmus .dm.move {
  will-change: transform;
  animation-name: moveLeft;
  animation-timing-function: linear;
  animation-play-state: running;
}
.vue-danmaku .danmus .dm.pause {
  animation-play-state: paused;
  z-index: 100;
}
@keyframes moveLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(var(--dm-scroll-width));
  }
}
@-webkit-keyframes moveLeft {
  from {
    -webkit-transform: translateX(0);
  }
  to {
    -webkit-transform: translateX(var(--dm-scroll-width));
  }
}`),X.render=function(a,d,w,v,l,p){return q(),I("div",G,[P("div",{ref:"dmContainer",class:R(["danmus",{show:!a.hidden},{paused:a.paused}])},null,2),V(a.$slots,"default")],512)},X.__file="src/lib/Danmaku.vue";export{X as f};
