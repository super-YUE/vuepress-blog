import{_ as a,o as s,c as e,b as l,r as t,d as i,t as c,e as r,f as n,F as o,g as d,h as v,u as p,i as u,w as b,v as m,V as _,j as g,k,l as f}from"./app.8e91bad3.js";const h={class:"TeamHero"},j={class:"container"},w={class:"title"},I={class:"lead"},U={class:"action"};var $=a({},[["render",function(a,i){return s(),e("div",h,[l("div",j,[l("h1",w,[t(a.$slots,"title",{},void 0,!0)]),l("p",I,[t(a.$slots,"lead",{},void 0,!0)]),l("p",U,[t(a.$slots,"action",{},void 0,!0)])])])}],["__scopeId","data-v-9f95547a"]]);const y={class:"banner"},A=["src"],C={key:1,class:"banner-tip"},x={class:"info"},P={class:"name"},F={class:"desc"};var H=a(i({props:{article:null},setup(a){const t=a,i=()=>{window.location.href=t.article.linkUrl};return(t,r)=>(s(),e("article",{class:"ArticleItem",onClick:i},[l("figure",y,[a.article.bannerUrl?(s(),e("img",{key:0,class:"banner-img",src:a.article.bannerUrl},null,8,A)):(s(),e("div",C,c(a.article.tip),1))]),l("div",x,[l("h1",P,c(a.article.name),1),l("section",F,c(a.article.desc),1)])]))}}),[["__scopeId","data-v-776ab5b6"]]);const L={class:"ArticleList"},O={class:"container"},T={class:"info"},V={class:"title"},q={class:"lead"},z={class:"articles"},B={key:0,class:"building"},D={class:"pagination"},E={class:"item"},G=k(" 上一页 "),J={class:"item"},K=k(" 下一页 ");var M=a(i({props:{articles:null},setup(a){const i=a,c=r(1),k=n((()=>{const a=5*(c.value-1);return i.articles.slice(a,a+5)})),f=n((()=>5*c.value<i.articles.length)),h=a=>{c.value+=1===a?1:-1};return(a,i)=>(s(),e("section",L,[l("div",O,[l("div",T,[l("h2",V,[t(a.$slots,"title",{},void 0,!0)]),l("p",q,[t(a.$slots,"lead",{},void 0,!0)])]),l("div",z,[(s(!0),e(o,null,d(p(k),(a=>(s(),e("div",{key:a.name,class:"article"},[v(H,{article:a},null,8,["article"])])))),128)),0===p(k).length?(s(),e("div",B," 🚧 建设中 🏗️ ")):u("",!0),l("div",D,[l("div",{onClick:i[0]||(i[0]=a=>h(2))},[b(l("div",E,[v(p(_),{class:"icon"}),G],512),[[m,c.value>1]])]),l("div",{onClick:i[1]||(i[1]=a=>h(1))},[b(l("div",J,[K,v(p(g),{class:"icon"})],512),[[m,p(f)]])])])])])]))}}),[["__scopeId","data-v-573e56ae"]]);const N={class:"ArticlePage"},Q=k("写的一些东西"),R=k("涵盖各个知识面的文章，有专业内入也有工作记录的，还有一些杂事儿"),S=k("🔖 专业文章"),W=k("写的一些专业文章，理论总结。花了点心思的东西。"),X=k("👷 搬砖记录"),Y=k("在日常工作中遇到的一些坑，主要是实战记录。"),Z=k("👽️ 杂七杂八"),aa=k("在日常工作中遇到的一些坑，主要是实战记录。");var sa=a(i({setup(a){const l={article:[],project:[{bannerUrl:"/article/images/vitejs.webp",tip:"",name:"vite 工程优化",desc:"项目中切换vite的记录,对于webpack来说，vite是个实打实的杀手",linkUrl:"../work/tencent/vite-build"}],personal:[]};return(a,t)=>(s(),e("div",N,[v($,null,{title:f((()=>[Q])),lead:f((()=>[R])),_:1}),v(M,{articles:l.article},{title:f((()=>[S])),lead:f((()=>[W])),_:1},8,["articles"]),v(M,{articles:l.project},{title:f((()=>[X])),lead:f((()=>[Y])),_:1},8,["articles"]),v(M,{articles:l.personal},{title:f((()=>[Z])),lead:f((()=>[aa])),_:1},8,["articles"])]))}}),[["__scopeId","data-v-5d176423"]]);const ea='{"title":"文章","description":"","frontmatter":{"page":true,"title":"文章"},"headers":[],"relativePath":"article/index.md"}',la={},ta=Object.assign(la,{setup:a=>(a,l)=>(s(),e("div",null,[v(sa)]))});export{ea as __pageData,ta as default};
