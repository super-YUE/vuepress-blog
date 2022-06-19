import{_ as s,o as a,c as n,a as e}from"./app.409fe74b.js";const b=JSON.parse('{"title":"\u90E8\u7F72\u5DE5\u5177","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u6D41\u7A0B","slug":"\u57FA\u672C\u6D41\u7A0B"},{"level":3,"title":"\u89E6\u53D1\u5668","slug":"\u89E6\u53D1\u5668"},{"level":3,"title":"CI","slug":"ci"},{"level":3,"title":"CD","slug":"cd"},{"level":2,"title":"\u9759\u6001\u7F51\u7AD9\u90E8\u7F72","slug":"\u9759\u6001\u7F51\u7AD9\u90E8\u7F72"},{"level":3,"title":"vercel","slug":"vercel"},{"level":3,"title":"githubPages","slug":"githubpages"},{"level":2,"title":"serverless","slug":"serverless"},{"level":3,"title":"\u817E\u8BAF\u4E91","slug":"\u817E\u8BAF\u4E91"},{"level":3,"title":"vercel \u4E91\u51FD\u6570","slug":"vercel-\u4E91\u51FD\u6570"},{"level":2,"title":"\u5BB9\u5668\u6258\u7BA1","slug":"\u5BB9\u5668\u6258\u7BA1"},{"level":3,"title":"\u5FAE\u4FE1\u4E91\u6258\u7BA1","slug":"\u5FAE\u4FE1\u4E91\u6258\u7BA1"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"}],"relativePath":"article/record/deploy.md","lastUpdated":1655637523000}'),l={name:"article/record/deploy.md"},p=e(`<h1 id="\u90E8\u7F72\u5DE5\u5177" tabindex="-1">\u90E8\u7F72\u5DE5\u5177 <a class="header-anchor" href="#\u90E8\u7F72\u5DE5\u5177" aria-hidden="true">#</a></h1><p>\u63A5\u89E6\u8FC7\u5F88\u591A\u90E8\u7F72\u7F51\u7AD9\u7684\u5DE5\u5177\uFF0C\u603B\u4F53\u6765\u8BF4\u5206\u4E3A\u9759\u6001\u7F51\u7AD9\u6258\u7BA1\u548C <code>serverless</code>\u3002</p><h2 id="\u57FA\u672C\u6D41\u7A0B" tabindex="-1">\u57FA\u672C\u6D41\u7A0B <a class="header-anchor" href="#\u57FA\u672C\u6D41\u7A0B" aria-hidden="true">#</a></h2><p>\u90E8\u7F72\u5DE5\u5177\u57FA\u672C\u5305\u542B\u4EE5\u4E0B\u4E09\u5927\u5757\uFF1A\u89E6\u53D1\u5668\u3001CI\u3001CD</p><h3 id="\u89E6\u53D1\u5668" tabindex="-1">\u89E6\u53D1\u5668 <a class="header-anchor" href="#\u89E6\u53D1\u5668" aria-hidden="true">#</a></h3><p>\u89E6\u53D1\u5668\u6307\u7684\u662F\u89E6\u53D1\u90E8\u7F72\u52A8\u4F5C\uFF0C\u5206\u4E3A\u4E24\u5927\u7C7B\uFF1A</p><ul><li>cli: \u817E\u8BAF\u4E91 <code>TCD</code>, <code>vercel-cli</code> \u8FD9\u7C7B\u5DE5\u5177\u5B9E\u73B0\u672C\u5730\u547D\u4EE4\u884C\u767B\u9646\u8D26\u53F7\uFF0C\u901A\u8FC7\u672C\u5730\u547D\u4EE4\u884C\u51FA\u53D1\u6784\u5EFA\u90E8\u7F72\u3002</li><li>webhook: \u901A\u8FC7 <code>GitHub</code>, <code>gitlab</code> \u8FD9\u7C7B\u5E73\u53F0\u7684 <code>webhook</code> \u76D1\u542C\u5230\u6307\u5B9A\u7684\u5206\u652F\u4EE3\u7801\u63A8\u9001\uFF0C\u89E6\u53D1\u76F8\u5E94\u7684\u6784\u5EFA\u548C\u90E8\u7F72\u3002</li></ul><h3 id="ci" tabindex="-1">CI <a class="header-anchor" href="#ci" aria-hidden="true">#</a></h3><p>\u6301\u7EED\u96C6\u6210\u8FC7\u7A0B\uFF0C\u5728 <code>ci</code> \u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u547D\u4EE4\u884C\u53EF\u4EE5\u64CD\u4F5C\u7684\u4E00\u5207\u4E1C\u897F\uFF0C\u901A\u5E38\u7528\u6765\u505A\u4EE3\u7801\u6D4B\u8BD5\uFF0C\u4EE3\u7801\u68C0\u67E5\uFF0C\u4EA7\u7269\u5305\u5927\u5C0F\u5BF9\u6BD4\uFF0C(<code>npm</code>\u5305\u3001<code>docker</code>\u955C\u50CF\u3001\u9759\u6001\u8D44\u6E90)\u7684\u6784\u5EFA\u4E0E\u63A8\u9001\u7B49\u3002</p><h3 id="cd" tabindex="-1">CD <a class="header-anchor" href="#cd" aria-hidden="true">#</a></h3><p>\u4EA7\u7269\u90E8\u7F72\u9636\u6BB5\u9700\u8981\u8FDB\u5165\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C\u5206\u4E3A\u4EE5\u4E0B\u4E09\u7C7B\uFF1A</p><ul><li>\u9759\u6001\u8D44\u6E90\uFF1A\u9759\u6001\u8D44\u6E90\uFF0C\u65E0\u6CD5\u90E8\u7F72 <code>node</code> \u670D\u52A1,\u901A\u5E38\u7528\u6237\u9759\u6001\u8D44\u6E90\u7684CDN\u52A0\u901F\u573A\u666F\uFF0C\u9002\u7528\u4E8E\u535A\u5BA2\u7C7B\uFF0C\u65E0\u6CD5\u90E8\u7F72API\u3002</li><li>serverless\uFF1A\u4E91\u51FD\u6570\u7C7B\uFF0C\u90E8\u7F72\u7684\u662F\u51FD\u6570\u670D\u52A1\uFF0C\u4F7F\u7528\u573A\u666F\u53D7\u9650\uFF0C\u9002\u5408\u8F7B\u91CF\u7684 <code>API</code> \u670D\u52A1</li><li>\u5BB9\u5668\uFF1A\u5FAE\u4FE1\u4E91\u6258\u7BA1\uFF0C\u6258\u7BA1\u5BB9\u5668\uFF0C\u6700\u4E3A\u7075\u6D3B\uFF0C\u53EF\u4EE5\u90E8\u7F72\u4EFB\u4F55\u4F60\u60F3\u90E8\u7F72\u7684\u4E1C\u897F\uFF0C\u548C\u4F01\u4E1A\u7EA7\u7684\u90E8\u7F72\u65B9\u5F0F\u7C7B\u4F3C\u3002</li></ul><h2 id="\u9759\u6001\u7F51\u7AD9\u90E8\u7F72" tabindex="-1">\u9759\u6001\u7F51\u7AD9\u90E8\u7F72 <a class="header-anchor" href="#\u9759\u6001\u7F51\u7AD9\u90E8\u7F72" aria-hidden="true">#</a></h2><h3 id="vercel" tabindex="-1">vercel <a class="header-anchor" href="#vercel" aria-hidden="true">#</a></h3><p><a href="https://vercel.com/dashboard" target="_blank" rel="noopener noreferrer">vercel</a> \u662F\u4E00\u4E2A\u524D\u7AEF\u660E\u661F\u56E2\u961F\u3002\u4F7F\u7528 <code>vercel</code> \u90E8\u7F72\u975E\u5E38\u7B80\u5355\uFF1A</p><ul><li>\u4E0A <code>vercel</code> \u5B98\u7F51\uFF0C\u9009\u62E9\u5BF9\u5E94\u7684\u6A21\u7248</li><li>\u9009\u62E9\u5BF9\u5E94\u7684\u4EE3\u7801\u6258\u7BA1\u5E73\u53F0\u5E76\u4E14\u6388\u6743\uFF0C\u4EE5 <code>github</code> \u4E3A\u4F8B\uFF0C\u4F1A\u81EA\u52A8\u5B89\u88C5 <code>vercel app</code>\u3002</li><li>\u9009\u62E9\u5BF9\u5E94\u7684 <code>group</code> \u6216\u4E2A\u4EBA</li><li>\u521B\u5EFA\u4EE3\u7801\u5E93\uFF0C\u5F00\u59CB\u90E8\u7F72\u3002</li></ul><p>\u6309\u6D41\u7A0B\u6765\u4E00\u904D\u5373\u53EF\uFF0C\u975E\u5E38\u7B80\u5355</p><h3 id="githubpages" tabindex="-1">githubPages <a class="header-anchor" href="#githubpages" aria-hidden="true">#</a></h3><p><code>githubPages</code> \u662F <code>github</code> \u7528\u6765\u90E8\u7F72\u9879\u76EE\u4E3B\u9875\u7684\u5DE5\u5177\uFF0C\u7ED3\u5408 <code>workflow</code>, \u5229\u7528 <code>gh-pages</code> \u8FD9\u4E2A <code>action</code>\uFF0C \u90E8\u7F72\u8D77\u6765\u975E\u5E38\u5FEB\u3002\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-shell line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">name: my-blog deploy to gh-pages</span></span>
<span class="line"><span style="color:#A6ACCD;">on:</span></span>
<span class="line"><span style="color:#A6ACCD;">  push:</span></span>
<span class="line"><span style="color:#A6ACCD;">    branches:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - master</span></span>
<span class="line"><span style="color:#A6ACCD;">jobs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  build-and-deploy:</span></span>
<span class="line"><span style="color:#A6ACCD;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    steps:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Checkout \u{1F6CE}\uFE0F</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: actions/checkout@v2.3.1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Install and Build \u{1F527}</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;">          npx pnpm install --no-frozen-lockfile</span></span>
<span class="line"><span style="color:#A6ACCD;">          npm run build</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Deploy \u{1F680}</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: JamesIves/github-pages-deploy-action@4.1.3</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          branch: gh-pages</span></span>
<span class="line"><span style="color:#A6ACCD;">          folder: docs/.vitepress/dist</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u9700\u8981\u5230 <code>github</code> \u9879\u76EE\u4E2D <code>settings</code> -&gt; <code>pages</code> \u5F00\u542F\u5BF9\u5E94\u7684\u5206\u652F\u3002\u4E5F\u53EF\u4EE5\u89E3\u6790\u5230\u81EA\u5DF1\u7684 <code>domain</code>\u3002\u9ED8\u8BA4\u57DF\u540D\u4E3A <code>https://pengyyyyy.github.io/project-name/</code>\u3002\u7531\u4E8E\u4F7F\u7528\u4E86 <code>base-url</code> \u4E3A\u9879\u76EE\u540D\uFF0C\u6784\u5EFA\u65F6\u9700\u8981\u505A\u76F8\u5E94\u7684\u914D\u7F6E\u3002</p></div><h2 id="serverless" tabindex="-1">serverless <a class="header-anchor" href="#serverless" aria-hidden="true">#</a></h2><p><code>serverless</code> \u8FD1\u51E0\u5E74\u53D1\u5C55\u6BD4\u8F83\u5FEB\uFF0C\u4ECE <code>aws lambda</code> \u5F00\u59CB\uFF0C\u5404\u5BB6\u4E91\u5382\u5546\u4E5F\u6709\u4E86\u5BF9\u6807\u7684\u4EA7\u54C1\uFF0C\u5728\u8FD9\u4E00\u5757\uFF0C\u817E\u8BAF\u4E91\u51FD\u6570\u505A\u7684\u633A\u4E0D\u9519\u7684\u3002</p><h3 id="\u817E\u8BAF\u4E91" tabindex="-1">\u817E\u8BAF\u4E91 <a class="header-anchor" href="#\u817E\u8BAF\u4E91" aria-hidden="true">#</a></h3><p>\u817E\u8BAF\u4E91\u5728serverless \u65B9\u9762\u6709\u4E24\u4E2A\u4EA7\u54C1\uFF0C\u4E91\u51FD\u6570\u548C\u4E91\u5F00\u53D1\uFF0C\u529F\u80FD\u5BF9\u6BD4\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u529F\u80FD</th><th>\u4E91\u51FD\u6570Serverless</th><th>\u4E91\u5F00\u53D1</th></tr></thead><tbody><tr><td>\u5728\u7EBF\u4EE3\u7801\u7F16\u8F91</td><td>\u2705</td><td>\u274C</td></tr><tr><td>\u51FD\u6570\u5C42\u7BA1\u7406</td><td>\u2705</td><td>\u274C</td></tr><tr><td>\u89E6\u53D1\u5668\u914D\u7F6E</td><td>\u2705</td><td>\u2705</td></tr><tr><td>\u6D41\u91CF\u76D1\u63A7</td><td>\u2705</td><td>\u2705</td></tr><tr><td>\u65E5\u5FD7\u76D1\u63A7</td><td>\u2705</td><td>\u2705</td></tr><tr><td>\u79C1\u6709\u7F51\u7EDC\u914D\u7F6E</td><td>\u2705</td><td>\u2705</td></tr><tr><td>\u51FD\u6570\u670D\u52A1</td><td>\u2705</td><td>\u2705</td></tr><tr><td>\u9759\u6001\u8D44\u6E90\u6258\u7BA1</td><td>\u274C</td><td>\u2705</td></tr><tr><td>\u8BBF\u95EE\u670D\u52A1</td><td>\u274C</td><td>\u2705</td></tr><tr><td>\u4E91\u6258\u7BA1</td><td>\u274C</td><td>\u2705</td></tr><tr><td>\u6570\u636E\u5E93</td><td>\u274C</td><td>\u2705</td></tr><tr><td>\u5BF9\u8C61\u5B58\u50A8</td><td>\u274C</td><td>\u2705</td></tr><tr><td>\u7528\u6237\u7BA1\u7406</td><td>\u274C</td><td>\u2705</td></tr></tbody></table><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u4E91\u51FD\u6570Serverless\u5728\u51FD\u6570\u670D\u52A1\u7EC6\u5206\u6A21\u5757\u7684\u529F\u80FD\u8981\u66F4\u5F3A\u5927\u4E00\u70B9\uFF0C\u800C\u4E91\u5F00\u53D1\u5219\u5E94\u7528\u9762\u66F4\u5E7F\u3002\u4E00\u5F00\u59CB\u6211\u4E5F\u6BD4\u8F83\u7EB3\u95F7\u4E3A\u4EC0\u4E48\u4F1A\u6709\u4E24\u4E2A\u540C\u7C7B\u578B\u7684\u4EA7\u54C1\uFF0C\u4E00\u5BF9\u6BD4\u540E\u53D1\u73B0\u8FD8\u662F\u6709\u5F88\u5927\u533A\u522B\u7684\u3002</p><p>\u4E24\u4E2A\u670D\u52A1\u4F7F\u7528\u8D77\u6765\u90FD\u5F88\u7B80\u5355\uFF0C\u5C31\u4E0D\u505A\u8FC7\u591A\u5B9E\u8DF5\u4E86\uFF0C\u53BB\u5B98\u7F51\u8BD5\u4E00\u4E0B\u5C31\u53EF\u4EE5\uFF0C\u90E8\u7F72\u4E00\u4E9B\u8F7B\u91CFAPI\u8FD8\u662F\u5F88\u65B9\u4FBF\u7684\u3002\u4E0D\u9700\u8981\u81EA\u5DF1\u4E70\u670D\u52A1\u5668\uFF0C\u4EF7\u683C\u4E5F\u5F88\u4FBF\u5B9C\uFF0C\u4E5F\u6709\u514D\u8D39\u989D\u5EA6\u3002</p><h3 id="vercel-\u4E91\u51FD\u6570" tabindex="-1">vercel \u4E91\u51FD\u6570 <a class="header-anchor" href="#vercel-\u4E91\u51FD\u6570" aria-hidden="true">#</a></h3><p><code>vercel</code> \u7684\u4E91\u51FD\u6570\uFF0C\u9002\u5408\u90E8\u7F72\u8F7B\u91CF <code>API</code>, \u589E\u52A0\u4E00\u4E2A <code>vercel.json</code> \u914D\u7F6E\u6587\u4EF6\uFF0C\u4E14\u5B89\u88C5 <code>@vercel/node</code>\u3002</p><div class="language-json line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">builds</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">use</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">src</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">index.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u51FD\u6570\u5165\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">use</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@vercel/node</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u4F7F\u7528@vercel/node</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">routes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">src</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/(.*)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">dest</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">index.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u51FD\u6570\u5F55\u8DEF\u7531</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h4 id="\u90E8\u7F72\u4E0E\u8C03\u8BD5" tabindex="-1">\u90E8\u7F72\u4E0E\u8C03\u8BD5 <a class="header-anchor" href="#\u90E8\u7F72\u4E0E\u8C03\u8BD5" aria-hidden="true">#</a></h4><p>\u4F7F\u7528 <code>vercel-cli</code> \u8FDB\u884C\u90E8\u7F72\u5373\u53EF\u3002</p><div class="language-shell line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u6B63\u5F0F\u73AF\u5883</span></span>
<span class="line"><span style="color:#A6ACCD;">vercel</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5F00\u53D1\u73AF\u5883</span></span>
<span class="line"><span style="color:#A6ACCD;">vercel dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5177\u4F53\u53EF\u53C2\u8003 <a href="https://github.com/pengYYYYY/figma-api-live/blob/master/server" target="_blank" rel="noopener noreferrer">figma-api-live</a></p><h2 id="\u5BB9\u5668\u6258\u7BA1" tabindex="-1">\u5BB9\u5668\u6258\u7BA1 <a class="header-anchor" href="#\u5BB9\u5668\u6258\u7BA1" aria-hidden="true">#</a></h2><p>\u5BB9\u5668\u6280\u672F\u8FD1\u4E9B\u5E74\u6765\u53D1\u5C55\u8FC5\u731B\uFF0C\u6210\u4E3A\u4E86\u4E3B\u6D41\u7684\u8FD0\u7EF4\u73AF\u5883\uFF0C\u5927\u5BB6\u719F\u77E5\u7684 <code>docker</code>, <code>k8s</code>\u7B49\u7B49\uFF0C\u57FA\u672C\u4E0A\u516C\u53F8\u91CC\u9762\u7684\u90E8\u7F72\u4E5F\u662F\u901A\u8FC7\u8FD9\u4E00\u5957\u6D41\u7A0B\u6765\u505A\u7684\u3002\u5728\u9762\u5411\u4E2A\u4EBA\u7528\u6237\u4E91\u6258\u7BA1\u53EF\u4EE5\u6210\u4E3A\u4E00\u4E2A\u5F88\u597D\u7684\u9009\u62E9\u3002</p><h3 id="\u5FAE\u4FE1\u4E91\u6258\u7BA1" tabindex="-1">\u5FAE\u4FE1\u4E91\u6258\u7BA1 <a class="header-anchor" href="#\u5FAE\u4FE1\u4E91\u6258\u7BA1" aria-hidden="true">#</a></h3><p>2021\u5E74\u7684\u65F6\u5019\uFF0C\u4F7F\u7528\u8FC7\u817E\u8BAF\u4E91\u6258\u7BA1\u5BB9\u5668\u4F7F\u7528\u8FC7\uFF0C\u4F46\u662F\u5404\u65B9\u9762\u90FD\u4E0D\u6210\u719F\uFF0C\u9664\u4E86demo\u5176\u4ED6\u7684\u9879\u76EE\u5C31\u6CA1\u90E8\u7F72\u6210\u529F\u8FC7\u3002\u6700\u8FD1\u4E0A\u817E\u8BAF\u4E91\u5F00\u53D1\u7684\u65F6\u5019\u53D1\u73B0\u6574\u4F53\u8FC1\u79FB\u5230\u4E86\u5FAE\u4FE1\u4E91\u6258\u7BA1\u4E0A\u9762\u4E86\uFF0C\u4E8E\u662F\u5C1D\u8BD5\u4F7F\u7528\u3002\u8BA9\u4EBA\u975E\u5E38\u60CA\u559C\uFF0C\u9664\u4E86\u516C\u7F51\u670D\u52A1\u53EA\u80FD\u7528\u4E8E\u6D4B\u8BD5\uFF08\u5F88\u75DB\uFF09\u4EE5\u5916 \uFF0C\u5176\u4ED6\u7684\u670D\u52A1\u5B8C\u7F8E\u3002\u671F\u5F85\u540E\u9762\u80FD\u591F\u5F00\u653E\u516C\u7F51\u670D\u52A1\u3002</p><p><a href="https://developers.weixin.qq.com/miniprogram/dev/wxcloudrun/src/basic/intro.html" target="_blank" rel="noopener noreferrer">\u5F00\u53D1\u6587\u6863</a></p><h4 id="\u5BB9\u5668\u670D\u52A1" tabindex="-1">\u5BB9\u5668\u670D\u52A1 <a class="header-anchor" href="#\u5BB9\u5668\u670D\u52A1" aria-hidden="true">#</a></h4><p>\u90E8\u7F72\u5BB9\u5668\u670D\u52A1\u975E\u5E38\u7B80\u5355\uFF0C\u7EC6\u8282\u53EF\u4EE5\u770B\u5F00\u53D1\u6587\u6863\uFF0C\u5728github\u4E5F\u6709\u4EE3\u7801\u793A\u4F8B\uFF0C\u4E3B\u8981\u662F\u4EE5\u4E0B\u6B65\u9AA4\uFF0C</p><ul><li>\u521B\u5EFA\u9879\u76EE\uFF1A\u9879\u76EE\u540D\uFF0C<code>github</code> \u4ED3\u5E93\uFF0C\u89E6\u53D1\u5668\uFF0C\u670D\u52A1\u76D1\u542C\u7AEF\u53E3</li><li>\u9879\u76EE\u7F16\u5199 <code>dockerfile</code>\uFF0C\u6839\u636E\u9879\u76EE\u4E0D\u540C\uFF0C\u5199\u597D\u5BF9\u5E94\u903B\u8F91\uFF0C\u66B4\u9732API\u5BF9\u5E94\u7AEF\u53E3</li><li>\u63A8\u9001\u4EE3\u7801\uFF0C\u89E6\u53D1 CI \u6D41\u7A0B</li><li>CI \u6267\u884C <code>dockerfile</code> \u6784\u5EFA\u955C\u50CF</li><li>CD \u5E94\u7528\u955C\u50CF\uFF0C\u542F\u52A8\u5BB9\u5668\uFF0C\u5F00\u542F\u670D\u52A1</li></ul><h4 id="\u6570\u636E\u5E93\u670D\u52A1" tabindex="-1">\u6570\u636E\u5E93\u670D\u52A1 <a class="header-anchor" href="#\u6570\u636E\u5E93\u670D\u52A1" aria-hidden="true">#</a></h4><p>\u5FAE\u4FE1\u4E91\u6258\u7BA1\u8FD8\u63D0\u4F9B\u4E86 <code>mysql</code> \u6570\u636E\u5E93\u670D\u52A1\uFF0C\u8FD9\u662F\u975E\u5E38\u8BA9\u4EBA\u610F\u5916\u7684\uFF0C\u4E4B\u524D\u4F7F\u7528\u7684\u5FAE\u4FE1\u4E91\u5F00\u53D1\u90FD\u662F <code>noSql</code> \u7684\u670D\u52A1\u3002\u5E76\u4E14\u8FD9\u4E2A <code>mysql</code> \u548C <code>TDSql</code> \u7684\u670D\u52A1\u4E00\u6A21\u4E00\u6837\u3002\u6211\u4E70\u7684\u4E91\u6570\u636E\u5E93\u4E00\u4E2A\u6708\u4E5F\u5F97\u5C06\u8FD1 <code>50</code>\u3002</p><h4 id="\u5BF9\u8C61\u5B58\u50A8" tabindex="-1">\u5BF9\u8C61\u5B58\u50A8 <a class="header-anchor" href="#\u5BF9\u8C61\u5B58\u50A8" aria-hidden="true">#</a></h4><p>\u5BF9\u8C61\u5B58\u50A8\u5C31\u548C\u817E\u8BAF\u4E91\u5F00\u53D1\u7684\u57FA\u672C\u4E00\u6837\u4E86\u3002\u5C31\u662F\u7B80\u5316\u7248\u7684 <code>cos</code>\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u5F53\u524D\u5904\u4E8E\u4E91\u539F\u751F\u65F6\u4EE3\uFF0C\u5BF9\u524D\u7AEF\u5F00\u53D1\u4EBA\u5458\u4E5F\u8D8A\u6765\u8D8A\u53CB\u597D\uFF0C\u5404\u79CD\u90E8\u7F72\u5DE5\u5177\u5C42\u51FA\u4E0D\u7A77\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u4E13\u6CE8\u4E8E\u81EA\u5DF1\u7684\u6838\u5FC3\u80FD\u529B\u5373\u53EF\uFF0C\u80FD\u591F\u88AB\u6807\u51C6\u5316\u7684\u4EA7\u4E1A\u80AF\u5B9A\u4F1A\u88AB\u6807\u51C6\u5316\u7684\uFF0C\u4E91\u51FD\u6570\u4E5F\u597D\uFF0C\u4E91\u6258\u7BA1\u4E5F\u597D\uFF0C\u672C\u8D28\u4E0A\u5C31\u662F\u8BA9\u5F00\u53D1\u8005\u80FD\u591F\u66F4\u5FEB\u66F4\u7B80\u5355\u7684\u53BB\u4E0A\u7EBF\u81EA\u5DF1\u7684\u521B\u610F\uFF0C\u81EA\u5DF1\u7684\u9879\u76EE\u3002\u5E76\u4E14\u6536\u8D39\u65B9\u9762\u4E5F\u975E\u5E38\u4EBA\u6027\u5316\uFF0C\u9002\u5408\u4E2A\u4EBA\u548C\u521B\u4E1A\u516C\u53F8\u4F7F\u7528\u3002</p>`,49),o=[p];function r(c,t,d,i,D,u){return a(),n("div",null,o)}var y=s(l,[["render",r]]);export{b as __pageData,y as default};
