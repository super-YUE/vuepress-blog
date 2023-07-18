import{_ as s,o as n,c as a,a as l}from"./app.2ed21e55.js";const e="/blog/assets/KHYAuV.d0cdd54c.png",D=JSON.parse('{"title":"diff过程","description":"","frontmatter":{},"headers":[{"level":2,"title":"vue的diff","slug":"vue的diff","link":"#vue的diff","children":[]},{"level":2,"title":"react的diff过程","slug":"react的diff过程","link":"#react的diff过程","children":[]}],"relativePath":"font-end-framework/architecture/diff.md","lastUpdated":1689695837000}'),p={name:"font-end-framework/architecture/diff.md"},o=l('<h1 id="diff过程" tabindex="-1">diff过程 <a class="header-anchor" href="#diff过程" aria-hidden="true">#</a></h1><p><img src="'+e+`" alt="img"></p><p>两个框架都是同层比较，深度优先，可以参考树的前序遍历</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dsf</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dealFn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">node</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">node</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 处理当前节点</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">dealFn</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">dealFn</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">dealFn</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="vue的diff" tabindex="-1">vue的diff <a class="header-anchor" href="#vue的diff" aria-hidden="true">#</a></h2><p>优势：</p><ul><li>新老两棵树：头尾两个节点，四节点间对比</li></ul><p>key的作用：</p><p>复用节点</p><h2 id="react的diff过程" tabindex="-1">react的diff过程 <a class="header-anchor" href="#react的diff过程" aria-hidden="true">#</a></h2><p>diff策略</p><ul><li>同级比较，Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计。</li><li>拥有不同类型的两个组件将会生成不同的树形结构。</li><li>可以通过 key 来暗示哪些子元素在不同的渲染下能保持稳定。</li></ul><p>diff过程</p><ul><li>删除:newVnode不存在时</li><li>替换:vnode和newVnode类型不同或key不同时</li><li>更新:有相同类型和key但vnode和newVnode不同时</li></ul>`,14),t=[o];function r(c,i,d,f,y,F){return n(),a("div",null,t)}const A=s(p,[["render",r]]);export{D as __pageData,A as default};