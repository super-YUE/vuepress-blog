import{_ as e,c as a,o as r,a as t}from"./app.d6a82b7d.js";const d='{"title":"编译","description":"","frontmatter":{},"headers":[{"level":2,"title":"vue","slug":"vue"},{"level":2,"title":"react","slug":"react"},{"level":2,"title":"对比","slug":"对比"}],"relativePath":"font-end-framework/architecture/compile.md"}',i={},c=[t('<h1 id="编译" tabindex="-1">编译 <a class="header-anchor" href="#编译" aria-hidden="true">#</a></h1><p>在模版编译角度上来做两者的对比。两者都是将dsl转换为渲染函数，vue将template转换为。h函数。jsx通过createElement转换为render function。</p><h2 id="vue" tabindex="-1">vue <a class="header-anchor" href="#vue" aria-hidden="true">#</a></h2><p>核心语法，.vue文件，模板通过编译生成AST，再由AST生成Vue的渲染函数。渲染函数结合数据生成Virtual DOM树，对Virtual DOM进行diff和patch后生成新的UI。</p><h2 id="react" tabindex="-1">react <a class="header-anchor" href="#react" aria-hidden="true">#</a></h2><h2 id="对比" tabindex="-1">对比 <a class="header-anchor" href="#对比" aria-hidden="true">#</a></h2><p><code>template</code> 约束性相对来说要高，需要使用 <code>vue</code> 指定的 <code>api</code>, <code>v-if</code>, <code>v-show</code>等。</p><p>jsx的灵活性要高很多。</p>',8)];var h=e(i,[["render",function(e,t,d,i,h,l){return r(),a("div",null,c)}]]);export{d as __pageData,h as default};