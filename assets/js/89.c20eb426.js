(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{440:function(s,a,t){"use strict";t.r(a);var e=t(25),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[s._v("#")]),s._v(" webpack")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/k7xwFY.png",alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:"webpack的文件监听以及热更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack的文件监听以及热更新"}},[s._v("#")]),s._v(" webpack的文件监听以及热更新")]),s._v(" "),t("p",[s._v("文件监听原理，轮询判断文件的最后编辑时间是否发生变化")]),s._v(" "),t("p",[s._v("某个文件发生了变化，并不会立即告诉监听者，而是先缓存起来，等aggregateTimeout")]),s._v(" "),t("h3",{attrs:{id:"热更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#热更新"}},[s._v("#")]),s._v(" 热更新")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("webpack-dev-server + HotModuleReplacementPlugin插件: 热跟新不输出文件，直接放在内存中。")])]),s._v(" "),t("li",[t("p",[s._v("webpack-dev-middleware:将webpack输出等文件传输给服务器：较为灵活。")])])]),s._v(" "),t("h3",{attrs:{id:"热更新原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#热更新原理"}},[s._v("#")]),s._v(" 热更新原理")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844904020528594957",target:"_blank",rel:"noopener noreferrer"}},[s._v("从零实现webpack热更新HMR"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"文件指纹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件指纹"}},[s._v("#")]),s._v(" 文件指纹")]),s._v(" "),t("p",[s._v("通常用于文件的版本管理")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Hash:和整个项目的构建目录有关，只要项目文件有修改，整个项目构建的hash值就会变。")])]),s._v(" "),t("li",[t("p",[s._v("chunkHash: 和webpack打包的chunk有关，不同的entry会生成不同的chunkHash值。")])]),s._v(" "),t("li",[t("p",[s._v("contentHash: 根据文件内容来定义hash,文件内容不变，则contentHash不变")])]),s._v(" "),t("li",[t("p",[s._v("css指纹设置：通过miniCssExtractPlugin来做")])])]),s._v(" "),t("h2",{attrs:{id:"代码压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码压缩"}},[s._v("#")]),s._v(" 代码压缩")]),s._v(" "),t("p",[s._v("代码压缩处理")]),s._v(" "),t("h3",{attrs:{id:"js压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js压缩"}},[s._v("#")]),s._v(" js压缩")]),s._v(" "),t("p",[s._v("js内置了"),t("code",[s._v("uglifyjs-webpack-plugin")]),s._v("进行压缩")]),s._v(" "),t("h3",{attrs:{id:"css压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css压缩"}},[s._v("#")]),s._v(" css压缩")]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("optimize-css-assets-webpack-plugin")]),s._v("\n同时使用"),t("code",[s._v("cssnano")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("plugins"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OptimizeCssAssetsPlugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    assetNameRegExp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.css$/g")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    cssProcessor"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cssnano'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩"}},[s._v("#")]),s._v(" 压缩")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("html-webpack-plugin")])]),s._v(" "),t("h2",{attrs:{id:"资源内连"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#资源内连"}},[s._v("#")]),s._v(" 资源内连")]),s._v(" "),t("p",[s._v("通过资源内连优化性能")]),s._v(" "),t("h3",{attrs:{id:"代码层面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码层面"}},[s._v("#")]),s._v(" 代码层面")]),s._v(" "),t("ul",[t("li",[s._v("页面框架的初始化脚本")]),s._v(" "),t("li",[s._v("上报相关的打点")]),s._v(" "),t("li",[s._v("css内连避免页面的闪动")])]),s._v(" "),t("h3",{attrs:{id:"请求层面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求层面"}},[s._v("#")]),s._v(" 请求层面")]),s._v(" "),t("p",[s._v("减少http请求")]),s._v(" "),t("ul",[t("li",[s._v("小图片或者字体内嵌")])]),s._v(" "),t("h3",{attrs:{id:"如何内连"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何内连"}},[s._v("#")]),s._v(" 如何内连")]),s._v(" "),t("p",[s._v("raw-loader内连html，js")]),s._v(" "),t("p",[s._v("css内连：")]),s._v(" "),t("ul",[t("li",[s._v("借助：style-loader,设置选项options")]),s._v(" "),t("li",[s._v("借助：html-inline-css-webpack-plugin")])]),s._v(" "),t("h2",{attrs:{id:"多页面应用打包（mpa）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多页面应用打包（mpa）"}},[s._v("#")]),s._v(" 多页面应用打包（MPA）")]),s._v(" "),t("p",[s._v("多页面通用打包方案")]),s._v(" "),t("p",[s._v("动态获取entry和设置html-webpack-plugin数量")]),s._v(" "),t("p",[s._v("利用glob.sync")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("entry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" glob"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/*/index.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"事件流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件流"}},[s._v("#")]),s._v(" 事件流")]),s._v(" "),t("ul",[t("li",[s._v("webpack 通过 Tapable 来组织这条复杂的生产线。")]),s._v(" "),t("li",[s._v("webpack 的事件流机制保证了插件的有序性，使得整个系统扩展性很好。")]),s._v(" "),t("li",[s._v("webpack 的事件流机制应用了观察者模式，和 Node.js 中的 EventEmitter 非常相似。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);