import{_ as s,o as l,c as a,a as n}from"./app.3896a45a.js";var o="/blog/assets/mowrg2.c5aa0079.png";const u=JSON.parse('{"title":"Load \u4E0E DOMContentLoaded","description":"","frontmatter":{},"headers":[{"level":2,"title":"HTML\u89E3\u6790","slug":"html\u89E3\u6790"},{"level":2,"title":"HTML\u6587\u6863\u7684\u52A0\u8F7D\u4E0E\u9875\u9762\u7684\u9996\u6B21\u6E32\u67D3","slug":"html\u6587\u6863\u7684\u52A0\u8F7D\u4E0E\u9875\u9762\u7684\u9996\u6B21\u6E32\u67D3"},{"level":2,"title":"head \u4E2D\u8D44\u6E90\u7684\u52A0\u8F7D","slug":"head-\u4E2D\u8D44\u6E90\u7684\u52A0\u8F7D"},{"level":2,"title":"body \u4E2D\u8D44\u6E90\u7684\u52A0\u8F7D","slug":"body-\u4E2D\u8D44\u6E90\u7684\u52A0\u8F7D"},{"level":2,"title":"DomContentLoaded \u4E8B\u4EF6\u7684\u89E6\u53D1","slug":"domcontentloaded-\u4E8B\u4EF6\u7684\u89E6\u53D1"},{"level":2,"title":"load \u4E8B\u4EF6\u7684\u89E6\u53D1","slug":"load-\u4E8B\u4EF6\u7684\u89E6\u53D1"}],"relativePath":"font-end/html/load.md","lastUpdated":1655482972000}'),p={name:"font-end/html/load.md"},e=n(`<h1 id="load-\u4E0E-domcontentloaded" tabindex="-1">Load \u4E0E DOMContentLoaded <a class="header-anchor" href="#load-\u4E0E-domcontentloaded" aria-hidden="true">#</a></h1><ul><li>load: load \u5E94\u8BE5\u4EC5\u7528\u4E8E\u68C0\u6D4B\u4E00\u4E2A\u5B8C\u5168\u52A0\u8F7D\u7684\u9875\u9762 \u5F53\u4E00\u4E2A\u8D44\u6E90\u53CA\u5176\u4F9D\u8D56\u8D44\u6E90\u5DF2\u5B8C\u6210\u52A0\u8F7D\u65F6\uFF0C\u5C06\u89E6\u53D1load\u4E8B\u4EF6\u3002</li><li>DOMContentLoaded: \u5F53\u521D\u59CB\u7684 HTML \u6587\u6863\u88AB\u5B8C\u5168\u52A0\u8F7D\u548C\u89E3\u6790\u5B8C\u6210\u4E4B\u540E\uFF0CDOMContentLoaded \u4E8B\u4EF6\u88AB\u89E6\u53D1\uFF0C\u800C\u65E0\u9700\u7B49\u5F85\u6837\u5F0F\u8868\u3001\u56FE\u50CF\u548C\u5B50\u6846\u67B6\u7684\u5B8C\u6210\u52A0\u8F7D\u3002</li></ul><h2 id="html\u89E3\u6790" tabindex="-1">HTML\u89E3\u6790 <a class="header-anchor" href="#html\u89E3\u6790" aria-hidden="true">#</a></h2><p>\u89E3\u6790\u7684\u610F\u601D\u662F\u5C06\u4E00\u4E2A\u5143\u7D20\u901A\u8FC7\u4E00\u5B9A\u7684\u65B9\u5F0F\u8F6C\u6362\u6210\u53E6\u4E00\u79CD\u5F62\u5F0F\u3002 \u6BD4\u5982 html \u7684\u89E3\u6790\u3002\u9996\u5148\u8981\u660E\u786E\uFF0Chtml \u4E0B\u8F7D\u5230\u6D4F\u89C8\u5668\u7684\u8868\u73B0\u5F62\u5F0F\u5C31\u662F \u5305\u542B\u5B57\u7B26\u4E32\u7684\u6587\u4EF6\u3002\u6D4F\u89C8\u5668\u5C06 html \u6587\u4EF6\u91CC\u9762\u7684\u5B57\u7B26\u4E32\u8BFB\u53D6\u5230\u5185\u5B58\u4E2D\uFF0C\u6309\u7167 html \u89C4\u5219\uFF0C\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u53D6\u8BCD\u7F16\u8BD1\uFF0C\u5C06\u5B57\u7B26\u4E32\u8F6C\u5316\u6210\u53E6\u4E00\u79CD\u6613\u4E8E\u8868\u8FBE\u7684\u6570\u636E\u7ED3\u6784\u3002\u6211\u4EEC\u770B\u4E0B\u4E00\u6BB5\u4EE3\u7801\uFF1A</p><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#A6ACCD;">DOCTYPE html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">X-UA-Compatible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ie=edge</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u53EA\u6709css</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./index.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./c1.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./c3.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://test.com:9000/mine/load/case2/j1.js</span></span>
<span class="line"><span style="color:#C3E88D;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./c4.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u6D4F\u89C8\u5668\u4F1A\u5BF9\u8FD9\u4E2A html \u6587\u4EF6\u8FDB\u884C\u7F16\u8BD1\uFF0C\u8F6C\u5316\u6210\u7C7B\u4F3C\u4E0B\u9762\u7684\u7ED3\u6784.</p><p><img src="`+o+'" alt="img"></p><p>\u6D4F\u89C8\u5668\u4F1A\u5BF9\u8F6C\u5316\u540E\u7684\u6570\u636E\u7ED3\u6784\u81EA\u4E0A\u800C\u4E0B\u8FDB\u884C\u5206\u6790\uFF1A\u9996\u5148\u5F00\u542F\u4E0B\u8F7D\u7EBF\u7A0B\uFF0C\u5BF9\u6240\u6709\u7684\u8D44\u6E90\u8FDB\u884C\u4F18\u5148\u7EA7\u6392\u5E8F\u4E0B\u8F7D\uFF08\u6CE8\u610F\uFF0C\u8FD9\u91CC\u4EC5\u4EC5\u662F\u4E0B\u8F7D\uFF09\u3002\u540C\u65F6\u4E3B\u7EBF\u7A0B\u4F1A\u5BF9\u6587\u6863\u8FDB\u884C\u89E3\u6790\uFF1A</p><ul><li><p>\u9047\u5230 script \u6807\u7B7E\u65F6\uFF0C\u9996\u5148\u963B\u585E\u540E\u7EED\u5185\u5BB9\u7684\u89E3\u6790\uFF0C\u540C\u65F6\u68C0\u67E5\u8BE5script\u662F\u5426\u5DF2\u7ECF\u4E0B\u8F7D\u4E0B\u6765\uFF0C\u5982\u679C\u5DF2\u4E0B\u8F7D\uFF0C\u4FBF\u6267\u884C\u4EE3\u7801\u3002</p></li><li><p>\u9047\u5230 link \u6807\u7B7E\u65F6\uFF0C\u4E0D\u4F1A\u963B\u585E\u540E\u7EED\u5185\u5BB9\u7684\u89E3\u6790\uFF08\u6BD4\u5982 DOM \u6784\u5EFA\uFF09\uFF0C\u68C0\u67E5 link \u8D44\u6E90\u662F\u5426\u5DF2\u4E0B\u8F7D\uFF0C\u5982\u679C\u5DF2\u4E0B\u8F7D\uFF0C\u5219\u6784\u5EFA cssom\u3002</p></li><li><p>\u9047\u5230 DOM \u6807\u7B7E\u65F6\uFF0C\u6267\u884C DOM \u6784\u5EFA\uFF0C\u5C06\u8BE5 DOM \u5143\u7D20\u6DFB\u52A0\u5230\u6587\u6863\u6811\u4E2D\u3002</p></li><li><p>DOM \u6784\u5EFA</p></li></ul><p>DOM \u6784\u5EFA\u7684\u610F\u601D\u662F\uFF0C\u5C06\u6587\u6863\u4E2D\u7684\u6240\u6709 DOM \u5143\u7D20\u6784\u5EFA\u6210\u4E00\u4E2A\u6811\u578B\u7ED3\u6784\u3002</p><ul><li>CSS \u6784\u5EFA</li></ul><p>\u5C06\u6587\u6863\u4E2D\u7684\u6240\u6709 css \u8D44\u6E90\u5408\u5E76\u3002</p><ul><li>render \u6811 \u5C06 DOM \u6811\u548C CSS \u5408\u5E76\u6210\u4E00\u68F5\u6E32\u67D3\u6811\uFF0Crender \u6811\u5728\u5408\u9002\u7684\u65F6\u673A\u4F1A\u88AB\u6E32\u67D3\u5230\u9875\u9762\u4E2D\u3002\uFF08\u6BD4\u5982\u9047\u5230 script \u65F6, \u8BE5 script \u8FD8\u6CA1\u6709\u4E0B\u8F7D\u5230\u672C\u5730\u65F6\uFF09\u3002</li></ul><h2 id="html\u6587\u6863\u7684\u52A0\u8F7D\u4E0E\u9875\u9762\u7684\u9996\u6B21\u6E32\u67D3" tabindex="-1">HTML\u6587\u6863\u7684\u52A0\u8F7D\u4E0E\u9875\u9762\u7684\u9996\u6B21\u6E32\u67D3 <a class="header-anchor" href="#html\u6587\u6863\u7684\u52A0\u8F7D\u4E0E\u9875\u9762\u7684\u9996\u6B21\u6E32\u67D3" aria-hidden="true">#</a></h2><p>\u8F93\u5165\u4E00\u4E2A\u9875\u9762\u5730\u5740\uFF0C\u53D1\u751F\u4E86\u4E0B\u9762\u7684\u4E8B\u60C5\uFF1A</p><ul><li>\u6D4F\u89C8\u5668\u9996\u5148\u4E0B\u8F7D\u8BE5\u5730\u5740\u6240\u5BF9\u5E94\u7684 html \u9875\u9762</li><li>\u6D4F\u89C8\u5668\u89E3\u6790 html \u9875\u9762\u7684 DOM \u7ED3\u6784</li><li>\u5F00\u542F\u4E0B\u8F7D\u7EBF\u7A0B\u5BF9\u6587\u6863\u4E2D\u7684\u6240\u6709\u8D44\u6E90\u6309\u4F18\u5148\u7EA7\u6392\u5E8F\u4E0B\u8F7D\u3002</li><li>\u4E3B\u7EBF\u7A0B\u7EE7\u7EED\u89E3\u6790\u6587\u6863\uFF0C\u5230\u8FBE head \u8282\u70B9 \uFF0Chead \u91CC\u7684\u5916\u90E8\u8D44\u6E90\u65E0\u975E\u662F\u5916\u94FE\u6837\u5F0F\u8868\u548C\u5916\u94FE js\u3002</li><li>\u89E3\u6790\u5230 body <ul><li>\u53EA\u6709 DOM \u5143\u7D20\uFF1ADOM \u6811\u6784\u5EFA\u5B8C\uFF0C\u9875\u9762\u6267\u884C\u9996\u6B21\u6E32\u67D3\u3002</li><li>\u6709 DOM \u5143\u7D20\u3001\u5916\u94FE js\uFF1A\u5F53\u89E3\u6790\u5230\u5916\u94FE js \u7684\u65F6\u5019\uFF0C\u8BE5 js \u5C1A\u672A\u4E0B\u8F7D\u5230\u672C\u5730\uFF0C\u5219 js \u4E4B\u524D\u7684 DOM \u4F1A\u88AB\u6E32\u67D3\u5230\u9875\u9762\u4E0A\uFF0C\u540C\u65F6 js \u4F1A\u963B\u6B62\u540E\u9762 DOM \u7684\u6784\u5EFA\uFF0C\u5373\u540E\u9762\u7684 DOM \u8282\u70B9\u5E76\u4E0D\u4F1A\u6DFB\u52A0\u5230\u6587\u6863\u7684 DOM \u6811\u4E2D\u3002\u6240\u4EE5\uFF0Cjs \u6267\u884C\u5B8C\u4E4B\u524D\uFF0C\u6211\u4EEC\u5728\u9875\u9762\u4E0A\u770B\u4E0D\u5230\u8BE5 js \u540E\u9762\u7684 DOM \u5143\u7D20\u3002</li><li>\u6709 DOM \u5143\u7D20\u3001\u5916\u94FE css\uFF1A\u5916\u94FE css \u4E0D\u4F1A\u5F71\u54CD css \u540E\u9762\u7684 DOM \u6784\u5EFA\uFF0C\u4F46\u662F\u4F1A\u963B\u788D\u6E32\u67D3\u3002\u7B80\u5355\u70B9\u8BF4\uFF0C\u5916\u94FE css \u52A0\u8F7D\u5B8C\u4E4B\u524D\uFF0C\u9875\u9762\u8FD8\u662F\u767D\u5C4F\u3002</li><li>\u6709 DOM \u5143\u7D20\u3001\u5916\u94FE js\u3001\u5916\u94FE css\uFF1A\u5916\u94FE js \u548C\u5916\u94FE css \u7684\u987A\u5E8F\u4F1A\u5F71\u54CD\u9875\u9762\u6E32\u67D3\uFF0C\u8FD9\u70B9\u5C24\u4E3A\u91CD\u8981\u3002\u5F53 body \u4E2D js \u4E4B\u524D\u7684\u5916\u94FE css \u672A\u52A0\u8F7D\u5B8C\u4E4B\u524D\uFF0C\u9875\u9762\u662F\u4E0D\u4F1A\u88AB\u6E32\u67D3\u7684\u3002\u5F53body\u4E2D js \u4E4B\u524D\u7684 \u5916\u94FE css \u52A0\u8F7D\u5B8C\u4E4B\u540E\uFF0Cjs \u4E4B\u524D\u7684 DOM \u6811\u548C css \u5408\u5E76\u6E32\u67D3\u6811\uFF0C\u9875\u9762\u6E32\u67D3\u51FA\u8BE5 js \u4E4B\u524D\u7684 DOM \u7ED3\u6784\u3002</li></ul></li><li>\u6587\u6863\u89E3\u6790\u5B8C\u6BD5\uFF0C\u9875\u9762\u91CD\u65B0\u6E32\u67D3\u3002\u5F53\u9875\u9762\u5F15\u7528\u7684\u6240\u6709 js \u540C\u6B65\u4EE3\u7801\u6267\u884C\u5B8C\u6BD5\uFF0C\u89E6\u53D1 DOMContentLoaded \u4E8B\u4EF6\u3002</li><li>html \u6587\u6863\u4E2D\u7684\u56FE\u7247\u8D44\u6E90\uFF0Cjs \u4EE3\u7801\u4E2D\u6709\u5F02\u6B65\u52A0\u8F7D\u7684 css\u3001js \u3001\u56FE\u7247\u8D44\u6E90\u90FD\u52A0\u8F7D\u5B8C\u6BD5\u4E4B\u540E\uFF0Cload \u4E8B\u4EF6\u89E6\u53D1\u3002</li></ul><h2 id="head-\u4E2D\u8D44\u6E90\u7684\u52A0\u8F7D" tabindex="-1">head \u4E2D\u8D44\u6E90\u7684\u52A0\u8F7D <a class="header-anchor" href="#head-\u4E2D\u8D44\u6E90\u7684\u52A0\u8F7D" aria-hidden="true">#</a></h2><ul><li>head \u4E2D js \u8D44\u6E90\u52A0\u8F7D\u90FD\u4F1A\u505C\u6B62\u540E\u9762 DOM \u7684\u6784\u5EFA\uFF0C\u4F46\u662F\u4E0D\u5F71\u54CD\u540E\u9762\u8D44\u6E90\u7684\u4E0B\u8F7D\u3002</li><li>css\u8D44\u6E90\u4E0D\u4F1A\u963B\u788D\u540E\u9762 DOM \u7684\u6784\u5EFA\uFF0C\u4F46\u662F\u4F1A\u963B\u788D\u9875\u9762\u7684\u9996\u6B21\u6E32\u67D3\u3002</li></ul><h2 id="body-\u4E2D\u8D44\u6E90\u7684\u52A0\u8F7D" tabindex="-1">body \u4E2D\u8D44\u6E90\u7684\u52A0\u8F7D <a class="header-anchor" href="#body-\u4E2D\u8D44\u6E90\u7684\u52A0\u8F7D" aria-hidden="true">#</a></h2><ul><li>body \u4E2D js \u8D44\u6E90\u52A0\u8F7D\u90FD\u4F1A\u505C\u6B62\u540E\u9762 DOM \u7684\u6784\u5EFA\uFF0C\u4F46\u662F\u4E0D\u5F71\u54CD\u540E\u9762\u8D44\u6E90\u7684\u4E0B\u8F7D\u3002</li><li>css \u8D44\u6E90\u4E0D\u4F1A\u963B\u788D\u540E\u9762 DOM \u7684\u6784\u5EFA\uFF0C\u4F46\u662F\u4F1A\u963B\u788D\u9875\u9762\u7684\u9996\u6B21\u6E32\u67D3\u3002</li></ul><h2 id="domcontentloaded-\u4E8B\u4EF6\u7684\u89E6\u53D1" tabindex="-1">DomContentLoaded \u4E8B\u4EF6\u7684\u89E6\u53D1 <a class="header-anchor" href="#domcontentloaded-\u4E8B\u4EF6\u7684\u89E6\u53D1" aria-hidden="true">#</a></h2><p>DOMContentLoaded \u4E8B\u4EF6\u5728 html\u6587\u6863\u52A0\u8F7D\u5B8C\u6BD5\uFF0C\u5E76\u4E14 html \u6240\u5F15\u7528\u7684\u5185\u8054 js\u3001\u4EE5\u53CA\u5916\u94FE js \u7684\u540C\u6B65\u4EE3\u7801\u90FD\u6267\u884C\u5B8C\u6BD5\u540E\u89E6\u53D1\u3002</p><h2 id="load-\u4E8B\u4EF6\u7684\u89E6\u53D1" tabindex="-1">load \u4E8B\u4EF6\u7684\u89E6\u53D1 <a class="header-anchor" href="#load-\u4E8B\u4EF6\u7684\u89E6\u53D1" aria-hidden="true">#</a></h2><p>\u5F53\u9875\u9762 DOM \u7ED3\u6784\u4E2D\u7684 js\u3001css\u3001\u56FE\u7247\uFF0C\u4EE5\u53CA js \u5F02\u6B65\u52A0\u8F7D\u7684 js\u3001css \u3001\u56FE\u7247\u90FD\u52A0\u8F7D\u5B8C\u6210\u4E4B\u540E\uFF0C\u624D\u4F1A\u89E6\u53D1 load \u4E8B\u4EF6\u3002</p><ul><li>\u9875\u9762\u4E2D\u5F15\u7528\u7684js \u4EE3\u7801\u5982\u679C\u6709\u5F02\u6B65\u52A0\u8F7D\u7684 js\u3001css\u3001\u56FE\u7247\uFF0C\u662F\u4F1A\u5F71\u54CD load \u4E8B\u4EF6\u89E6\u53D1\u7684\u3002</li><li>video\u3001audio\u3001flash \u4E0D\u4F1A\u5F71\u54CD load \u4E8B\u4EF6\u89E6\u53D1\u3002</li></ul><p><a href="https://juejin.cn/post/6844903623583891469" target="_blank" rel="noopener noreferrer">\u53C2\u80031</a><a href="https://juejin.cn/post/6844903504025223176" target="_blank" rel="noopener noreferrer">\u53C2\u80032</a></p>',26),t=[e];function r(c,D,F,y,i,d){return l(),a("div",null,t)}var C=s(p,[["render",r]]);export{u as __pageData,C as default};