"use strict";(()=>{var e={};e.id=495,e.ids=[495,888,660],e.modules={8695:(e,t,r)=>{r.r(t),r.d(t,{config:()=>P,default:()=>m,getServerSideProps:()=>S,getStaticPaths:()=>b,getStaticProps:()=>g,reportWebVitals:()=>x,routeModule:()=>y,unstable_getServerProps:()=>f,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>q,unstable_getStaticProps:()=>h});var a={};r.r(a),r.d(a,{default:()=>_});var s=r(7093),i=r(5244),l=r(1323),n=r(9209),o=r.n(n),u=r(5702),p=r(997),d=r(7411),c=r(5006);let _=(0,c.Z)(()=>{let handleSubmit=async e=>{let t=await fetch("http://localhost/register",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"}),r=await t.json();console.log(r)};return p.jsx(d.l,{fields:[{name:"id",label:"ID",type:"text",required:!0},{name:"name",label:"Name",type:"text",required:!0},{name:"password",label:"Password",type:"password",required:!0},{name:"department",label:"Department",type:"text"}],submitText:"Register Enroller",onSubmit:handleSubmit})}),m=(0,l.l)(a,"default"),g=(0,l.l)(a,"getStaticProps"),b=(0,l.l)(a,"getStaticPaths"),S=(0,l.l)(a,"getServerSideProps"),P=(0,l.l)(a,"config"),x=(0,l.l)(a,"reportWebVitals"),h=(0,l.l)(a,"unstable_getStaticProps"),q=(0,l.l)(a,"unstable_getStaticPaths"),v=(0,l.l)(a,"unstable_getStaticParams"),f=(0,l.l)(a,"unstable_getServerProps"),w=(0,l.l)(a,"unstable_getServerSideProps"),y=new s.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/register",pathname:"/register",bundlePath:"",filename:""},components:{App:u.default,Document:o()},userland:a})},5006:(e,t,r)=>{r.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var a=r(997);r(6689),r(1163);let __WEBPACK_DEFAULT_EXPORT__=e=>t=>{let r={isAdmin:!0};return r&&r.isAdmin?a.jsx(e,{...t}):null}},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[801,61,209,450,163,702,411],()=>__webpack_exec__(8695));module.exports=r})();