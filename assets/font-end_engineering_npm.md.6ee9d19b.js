import{_ as n,o as e,c as a,a as s}from"./app.907aa5fd.js";const l="/blog/assets/tXnw6a.42672ef4.png",u=JSON.parse('{"title":"包管理","description":"","frontmatter":{},"headers":[{"level":2,"title":"yarn","slug":"yarn","link":"#yarn","children":[{"level":3,"title":"和npm区别","slug":"和npm区别","link":"#和npm区别","children":[]},{"level":3,"title":"yarn工作流程","slug":"yarn工作流程","link":"#yarn工作流程","children":[]}]},{"level":2,"title":"lerna","slug":"lerna","link":"#lerna","children":[{"level":3,"title":"monorepo管理","slug":"monorepo管理","link":"#monorepo管理","children":[]}]},{"level":2,"title":"pnpm","slug":"pnpm","link":"#pnpm","children":[{"level":3,"title":"pnpm 原理","slug":"pnpm-原理","link":"#pnpm-原理","children":[]}]},{"level":2,"title":"版本规范","slug":"版本规范","link":"#版本规范","children":[{"level":3,"title":"修改版本","slug":"修改版本","link":"#修改版本","children":[]}]}],"relativePath":"font-end/engineering/npm.md","lastUpdated":1690278049000}'),p={name:"font-end/engineering/npm.md"},o=s(`<h1 id="包管理" tabindex="-1">包管理 <a class="header-anchor" href="#包管理" aria-hidden="true">#</a></h1><h2 id="yarn" tabindex="-1">yarn <a class="header-anchor" href="#yarn" aria-hidden="true">#</a></h2><h3 id="和npm区别" tabindex="-1">和npm区别 <a class="header-anchor" href="#和npm区别" aria-hidden="true">#</a></h3><ul><li><code>yarn</code> 在下载和安装依赖包采用的是多线程的方式，而 <code>npm</code> 是单线程的方式执行，速度上就拉开了差距。</li><li><code>yarn</code> 会在用户本地缓存已下载过的依赖包，优先会从缓存中读取依赖包，只有本地缓存不存在的情况才会采取远端请求的方式；反观 <code>npm</code> 则是全量请求，速度上再次拉开差距。</li><li><code>yarn</code> 把所有的依赖躺平至同级，有效的减少了相同依赖包重复下载的情况，加快了下载速度而且也减少了 <code>node_modules</code> 的体积；<code>npm</code>则是严格的根据依赖树下载并放置到对应位置，导致相同的包多次下载 <code>node_modules</code> 体积大的问题</li></ul><h3 id="yarn工作流程" tabindex="-1">yarn工作流程 <a class="header-anchor" href="#yarn工作流程" aria-hidden="true">#</a></h3><p><code>yarn</code> 在安装依赖包时会分为主要 5 个步骤：</p><ul><li>checking：检查配置项（.yarnrc、命令行参数、package.json 信息等）、兼容性（cpu、nodejs 版本、操作系统等）是否符合约定</li><li>resolveStep：解析依赖包信息，并且会解析出整个依赖树上所有包的具体版本信息</li><li>fetchStep：下载全部依赖包，如果依赖包已经在缓存中存在则跳过下载，反之则下载对应依赖包到缓存文件夹内，当这一步都完成后代表着所有依赖包都已经存在缓存中了</li><li>linkStep：将缓存的依赖包扁平化的复制副本到项目的依赖目录下</li><li>buildStep：对于一些二进制包，需要进行编译，在这一步进行</li></ul><h2 id="lerna" tabindex="-1">lerna <a class="header-anchor" href="#lerna" aria-hidden="true">#</a></h2><p>Lerna 是一个管理多个 npm 模块的工具，是 Babel 自己用来维护自己的 Monorepo 并开源出的一个项目。优化维护多包的工作流，解决多个包互相依赖，且发布需要手动维护多个包的问题。</p><h3 id="monorepo管理" tabindex="-1">monorepo管理 <a class="header-anchor" href="#monorepo管理" aria-hidden="true">#</a></h3><p>Monorepo 是管理项目代码的一个方式，指在一个项目仓库 (repo) 中管理多个模块/包 (package)，不同于常见的每个模块建一个 repo。常见</p><p>目录结构如下:</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">├── packages</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   ├── pkg1</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   ├── package</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   ├── pkg2</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   ├── package</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"><span style="color:#A6ACCD;">├── package</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>monorepo 最主要的好处是统一的工作流和 Code Sharing。使用统一的流程管理，统一测试、统一发版。只要搭建一套脚手架，就能管理（构建、测试、发布）多个 package。</p><p><img src="`+l+`" alt="img"></p><p><a href="https://github.com/lerna/lerna" target="_blank" rel="noreferrer">lerna官网</a></p><p><a href="https://zhuanlan.zhihu.com/p/71385053" target="_blank" rel="noreferrer">基于lerna和yarn workspace的monorepo工作流</a></p><h2 id="pnpm" tabindex="-1">pnpm <a class="header-anchor" href="#pnpm" aria-hidden="true">#</a></h2><p><code>pnpm</code> 是新晋的包管理工具，目前很多开源项目都使用了 <code>pnpm</code>, 其名字为 <code>performance npm</code>。其特性如下：</p><ul><li>快速： <code>pnpm</code> 是同类工具速度的将近 2 倍</li><li>高效：<code>node_modules</code> 中的所有文件均链接自单一存储位置</li><li>支持 <code>monorepo</code> 仓库：自带 <code>workspance</code>, <code>pnpm</code> 内置了对单个源码仓库中包含多个软件包的支持</li></ul><h3 id="pnpm-原理" tabindex="-1">pnpm 原理 <a class="header-anchor" href="#pnpm-原理" aria-hidden="true">#</a></h3><p>todo</p><h2 id="版本规范" tabindex="-1">版本规范 <a class="header-anchor" href="#版本规范" aria-hidden="true">#</a></h2><ul><li>beta: 内部测试版本</li><li>alpha: 开放测试</li><li>rc: 预选发布版本，主要着重于除错</li></ul><p>x.y.z</p><p>x：主版本号，当做了不兼容当API修改 y：次版本号：当你做了向下兼容的功能性新增 z：修订号：当你做了向下兼容的问题修正</p><h3 id="修改版本" tabindex="-1">修改版本 <a class="header-anchor" href="#修改版本" aria-hidden="true">#</a></h3><p>如何修改版本</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[&lt;</span><span style="color:#A6ACCD;">newVersion</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> major </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> minor </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> patch </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> premajor </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> preminor </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> prepatch </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> prerelease </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">custom version</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,29),r=[o];function c(i,t,d,h,m,y){return e(),a("div",null,r)}const C=n(p,[["render",c]]);export{u as __pageData,C as default};
