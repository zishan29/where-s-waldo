(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[670],{445:function(e,t,n){Promise.resolve().then(n.bind(n,5237))},5237:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var s=n(7437),r=n(2265),a=n(6691),i=n.n(a),o=e=>{let{characters:t,handleItemClick:n,menuState:r,isBlurred:a}=e,o=t.filter(e=>!a[e.name]),l=(()=>{if(r.isOpen){let e=window.innerWidth,t=window.innerHeight,n={top:r.position.y+window.scrollY,left:r.position.x+window.scrollX};return r.position.x+200>e+window.scrollX-20&&(n.left=Math.max(window.scrollX+20,e-200+window.scrollX-20,r.position.x-200+window.scrollX)),r.position.y+200+window.scrollY>t+window.scrollY-20&&(n.top=Math.max(window.scrollY+20,t-200+window.scrollY-20)),n}return null})();return(0,s.jsx)(s.Fragment,{children:r.isOpen&&(0,s.jsx)("div",{className:"absolute z-10",style:l||void 0,children:(0,s.jsx)("div",{className:"transform rounded-md  bg-stone-900 transition",children:o.map(e=>(0,s.jsxs)("div",{onClick:()=>n(e._id),className:"flex cursor-pointer items-center gap-2 p-4 text-white",children:[(0,s.jsx)(i(),{src:"/".concat(e.name,".png"),alt:"".concat(e.name),width:40,height:40,priority:!0,className:"rounded"}),e.name]},e._id))})})})},l=function(){for(var e,t,n=0,s="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=function e(t){var n,s,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t){if(Array.isArray(t)){var a=t.length;for(n=0;n<a;n++)t[n]&&(s=e(t[n]))&&(r&&(r+=" "),r+=s)}else for(s in t)t[s]&&(r&&(r+=" "),r+=s)}return r}(e))&&(s&&(s+=" "),s+=t);return s};let c=e=>{let{isBlurred:t,src:n,alt:r}=e;return(0,s.jsx)("div",{className:"".concat(t?"brightness-50 filter":""),children:(0,s.jsx)(i(),{src:n,alt:r,width:40,height:40,priority:!0,className:"rounded"})})},d=e=>{let{name:t,isBlurred:n}=e;return(0,s.jsx)("div",{className:"".concat(n?"line-through":""),children:t})};function u(e){let{characters:t,isBlurred:n,timer:a,setTimer:i,gameEnded:o}=e;return(0,r.useEffect)(()=>{let e;return o||(e=setInterval(()=>{i(e=>e+10)},10)),()=>clearInterval(e)},[o,i]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("nav",{className:l("sticky top-0 z-10 flex h-20 w-screen items-center bg-stone-900 px-8 text-white",{"brightness-50":o}),children:[(0,s.jsxs)("a",{href:"/",className:"cursor-pointer rounded-md px-3 py-2 text-2xl font-medium hover:bg-stone-800",children:["Pirate",(0,s.jsx)("span",{className:"text-yellow-400",children:"Hunt"})]}),(0,s.jsxs)("div",{className:"ml-5 flex items-center gap-4 px-2",children:[(0,s.jsx)(c,{src:"/Zoro.png",alt:"Zoro",isBlurred:n.Zoro}),(0,s.jsx)(d,{name:"Zoro",isBlurred:n.Zoro}),(0,s.jsx)(c,{src:"/Law.png",alt:"Law",isBlurred:n.Law}),(0,s.jsx)(d,{name:"Law",isBlurred:n.Law}),(0,s.jsx)(c,{src:"/Hancock.png",alt:"Hancock",isBlurred:n.Hancock}),(0,s.jsx)(d,{name:"Hancock",isBlurred:n.Hancock})]},"Zoro"),t&&(0,s.jsx)("div",{className:"ml-auto",children:"".concat(String(Math.floor(a/6e4)).padStart(2,"0"),":").concat(String(Math.floor(a%6e4/1e3)).padStart(2,"0"),":").concat(String(a%1e3).padStart(3,"0"))})]})})}var m=n(4033);function h(e){let{gameEnded:t,timer:n}=e,[a,i]=(0,r.useState)(""),o=(0,m.useRouter)();async function l(){let e={name:a,time:c()};try{(await fetch("https://wheres-waldo-api.adaptable.app/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok&&o.push("/leaderboard")}catch(e){console.log(e)}}let c=()=>{let e="".concat(String(n%1e3).padStart(3,"0"));return"".concat("".concat(60*Math.floor(n/6e4)+Math.floor(n%6e4/1e3)),".").concat(e)};return(0,s.jsx)(s.Fragment,{children:t&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"fixed inset-0 flex flex-col items-center justify-center",children:(0,s.jsxs)("div",{className:"rounded-md bg-stone-900 p-4",children:[(0,s.jsxs)("div",{className:"text-lg font-medium text-white",children:["You finished in ",c(),"s!"]}),(0,s.jsx)("div",{className:" mb-3 text-sm text-gray-300",children:"Submit your score to the leaderboard"}),(0,s.jsxs)("form",{action:"",className:"flex flex-col gap-2",children:[(0,s.jsx)("label",{htmlFor:"name",className:"block text-gray-300",children:"Username"}),(0,s.jsx)("input",{type:"text",id:"name",className:"h-10 rounded-md border border-stone-300 bg-transparent px-1 text-gray-300",onChange:e=>i(e.target.value)}),(0,s.jsx)("button",{type:"button",className:"h-10 transform self-start rounded-md bg-yellow-400 px-4 font-semibold text-gray-900 transition hover:bg-yellow-300 active:bg-yellow-500",onClick:()=>l(),children:"Submit"})]})]})})})})}function x(){let[e,t]=(0,r.useState)([]),[n,a]=(0,r.useState)(!1),[c,d]=(0,r.useState)({isOpen:!1,position:{x:0,y:0}}),[m,x]=(0,r.useState)(null),[p,f]=(0,r.useState)({}),[g,w]=(0,r.useState)(0),[y,j]=(0,r.useState)(0),[b,v]=(0,r.useState)(!1),[N,S]=(0,r.useState)(null);(0,r.useEffect)(()=>{(async()=>{try{let e=await fetch("https://wheres-waldo-api.adaptable.app/characters");if(e.ok){let n=await e.json();t(n.data)}}catch(e){console.log(e)}})()},[]),(0,r.useEffect)(()=>{if(n){let e=()=>{a(!1),d({isOpen:!1,position:{x:0,y:0}})};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}},[n]),(0,r.useEffect)(()=>{3===g&&v(!0)},[g,v]),(0,r.useEffect)(()=>(b?document.body.classList.add("game-ended"):document.body.classList.remove("game-ended"),()=>{document.body.classList.remove("game-ended")}),[b]);let k=e=>{S(e),setTimeout(()=>{S(null)},3e3)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u,{characters:e,isBlurred:p,timer:y,setTimer:j,gameEnded:b}),(0,s.jsx)("div",{className:l("relative flex h-screen items-start justify-center bg-page-yellow",{"brightness-50":b}),children:(0,s.jsx)(i(),{src:"/onepiece.png",alt:"",width:2e3,height:2e3,className:"cursor-crosshair",onClick:t=>{let n=t.target.getBoundingClientRect(),s=(t.clientX-n.left)/n.width*100,r=(t.clientY-n.top)/n.height*100;e.map(e=>{let{topLeft:t,bottomRight:n}=e.boundingBox;null!==t.x&&null!==t.y&&null!==n.x&&null!==n.y&&s>=t.x&&s<=n.x&&r>=t.y&&r<=n.y&&x(e)}),a(!0),d({isOpen:!0,position:{x:t.clientX,y:t.clientY}})},priority:!0})}),(0,s.jsx)(o,{characters:e,handleItemClick:function(e){null!==m&&m._id===e?(k("You found ".concat(m.name,"!")),f(e=>({...e,[m.name]:!0})),w(e=>e+1)):k("Try again!"),n&&d({isOpen:!1,position:{x:0,y:0}})},menuState:c,isBlurred:p}),(0,s.jsx)(h,{gameEnded:b,timer:y}),N&&(0,s.jsx)("div",{className:"fixed left-1/2 top-32 z-10 -translate-x-1/2 transform rounded bg-stone-900 px-4 py-2 text-white",children:N})]})}},4033:function(e,t,n){e.exports=n(5313)}},function(e){e.O(0,[986,971,938,744],function(){return e(e.s=445)}),_N_E=e.O()}]);