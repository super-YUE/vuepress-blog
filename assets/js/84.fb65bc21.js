(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{435:function(e,a,s){"use strict";s.r(a);var t=s(25),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"babel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel"}},[e._v("#")]),e._v(" babel")]),e._v(" "),s("p",[e._v("babel相关的知识点，包括babel配置和写个小插件.")]),e._v(" "),s("h2",{attrs:{id:"常用的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用的配置"}},[e._v("#")]),e._v(" 常用的配置")]),e._v(" "),s("h3",{attrs:{id:"插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[e._v("#")]),e._v(" 插件")]),e._v(" "),s("p",[e._v("Babel 是一个编译器（输入源码 => 输出编译后的代码）;编译过程分为：解析、转换、和打印输出。这些插件用于转换你的代码。")]),e._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"plugins"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"array-includes"')]),e._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[s("a",{attrs:{href:"https://www.babeljs.cn/docs/plugins",target:"_blank",rel:"noopener noreferrer"}},[e._v("常用的插件"),s("OutboundLink")],1)]),e._v(" "),s("h3",{attrs:{id:"preset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preset"}},[e._v("#")]),e._v(" preset")]),e._v(" "),s("p",[e._v("预设是已经定义好的一组插件。")]),e._v(" "),s("p",[s("code",[e._v("@babel/preset-env")]),e._v(": 不需要指定es版本,直接支持到最新标准。\n如果需要使用一些实验性质的"),s("code",[e._v("Presets")]),e._v("，需要安装"),s("code",[e._v("babel-preset-stage-x")])]),e._v(" "),s("ul",[s("li",[e._v("stage-0-设想（Strawman）:只是一个想法，可能有Babel插件。")]),e._v(" "),s("li",[e._v("stage-1-建议（Proposal）:值得跟进的。")]),e._v(" "),s("li",[e._v("stage-2-草案（Draft）:初始规范。")]),e._v(" "),s("li",[e._v("stage-3-候选（Candidate）:完成规范并在浏览器上初步实现。")]),e._v(" "),s("li",[e._v("stage-4-完成（Finished）:将添加到下一个年度版本中的。")])]),e._v(" "),s("h3",{attrs:{id:"polyfills"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#polyfills"}},[e._v("#")]),e._v(" Polyfills")]),e._v(" "),s("blockquote",[s("p",[e._v("@babel/polyfill")])]),e._v(" "),s("p",[e._v("在运行环境中并没有实现的一些方法，babel-polyfill 会给其做兼容。 但是这样做也有一个缺点，就是会污染全局变量，而且项目打包以后体积会增大很多，因为把整个依赖包也搭了进去。所以并不推荐在一些方法类库中去使用。")]),e._v(" "),s("p",[e._v("在babel7中，@babel/polyfill集成了"),s("code",[e._v("core-js/stable")]),e._v("，"),s("code",[e._v("core.js")]),e._v("使用了"),s("code",[e._v("es5")]),e._v("实现"),s("code",[e._v("es6，7，8，9，10")]),e._v("的功能，并且支持按需引入。\n"),s("code",[e._v("regenerator-runtime/runtime")]),e._v("，则是一个转化器的补充。像"),s("code",[e._v("Promise or WeakMap")]),e._v("这样的方法。")]),e._v(" "),s("h3",{attrs:{id:"babel-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-cli"}},[e._v("#")]),e._v(" @babel/cli")]),e._v(" "),s("p",[e._v("babel-cli可以支持在命令行中对js进行转换。")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("babel xxx.js\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h4",{attrs:{id:"指定输出文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指定输出文件"}},[e._v("#")]),e._v(" 指定输出文件")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("npx babel script.js --out-file script-compiled.js\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h4",{attrs:{id:"监听文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监听文件"}},[e._v("#")]),e._v(" 监听文件")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("npx babel script.js --watch --out-file script-compiled.js\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h4",{attrs:{id:"加入source-maps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加入source-maps"}},[e._v("#")]),e._v(" 加入Source Maps")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("npx babel script.js --out-file script-compiled.js --source-maps\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"babel-plugin-transform-runtime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-plugin-transform-runtime"}},[e._v("#")]),e._v(" @babel/plugin-transform-runtime")]),e._v(" "),s("p",[e._v("每个Babel编译后的脚本文件，都以导入的方式使用Babel的帮助函数，而不是每个文件都复制一份帮助函数的代码。")]),e._v(" "),s("ul",[s("li",[e._v("提高代码重用性，缩小编译后的代码体积。")]),e._v(" "),s("li",[e._v("防止污染全局作用域。（启用corejs配置），babel-polyfill会将Promise等添加成全局变量，污染全局空间。但是@babel/polyfill并不会。")]),e._v(" "),s("li",[e._v("默认使用@babel/runtime，corejs配置为2时，改为使用@babel/runtime-corejs2。")])]),e._v(" "),s("p",[e._v("几个包的包含关系")]),e._v(" "),s("ul",[s("li",[e._v("babel-polyfill仅仅是引用core-js、regenerator-runtime这两个npm包")]),e._v(" "),s("li",[e._v("@babel/runtime包含两个文件夹：helpers（定义了一些处理新的语法关键字的帮助函数）、regenerator（仅仅是引用regenerator-runtime这个npm包）。")]),e._v(" "),s("li",[e._v("@babel/runtime-corejs2包含三个文件夹：core-js（引用core-js这个npm包）、helpers（定义了一些处理新的语法关键字的帮助函数）、regenerator（仅仅是引用regenerator-runtime这个npm包）。")])]),e._v(" "),s("p",[e._v("@babel/runtime-corejs2 ≈ @babel/runtime + babel-polyfill;")]),e._v(" "),s("p",[e._v("@babel/runtime只能处理语法关键字，而@babel/runtime-corejs2还能处理新的全局变量（例如，Promise）、新的原生方法（例如，String.padStart")]),e._v(" "),s("h2",{attrs:{id:"babel解析原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel解析原理"}},[e._v("#")]),e._v(" babel解析原理")]),e._v(" "),s("p",[e._v("和编译器类似，babel 的转译过程也分为三个阶段，这三步具体是：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/4RpgZD.png",alt:"img"}})]),e._v(" "),s("h3",{attrs:{id:"解析-parse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析-parse"}},[e._v("#")]),e._v(" 解析 Parse")]),e._v(" "),s("p",[e._v("将代码解析生成抽象语法树( 即AST )，也就是计算机理解我们代码的方式，一般来说每个 js 引擎都有自己的 AST，比如熟知的 v8，chrome 浏览器会把 js 源码转换为抽象语法树，再进一步转换为字节码或机器代码，而 "),s("code",[e._v("babel")]),e._v(" 则是通过 "),s("code",[e._v("babylon")]),e._v(" 实现的。简单来说就是一个对于 JS 代码的一个编译过程，进行了词法分析与语法分析的过程。")]),e._v(" "),s("h3",{attrs:{id:"转换-transform"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换-transform"}},[e._v("#")]),e._v(" 转换 Transform")]),e._v(" "),s("p",[e._v("对于 AST 进行变换一系列的操作，"),s("code",[e._v("babel")]),e._v(" 接受得到 "),s("code",[e._v("AST")]),e._v(" 并通过 "),s("code",[e._v("babel-traverse")]),e._v(" 对其进行遍历，在此过程中进行添加、更新及移除等操作，通过 ImportDeclaration 可以得到依赖属性。")]),e._v(" "),s("h3",{attrs:{id:"生成-generate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成-generate"}},[e._v("#")]),e._v(" 生成 Generate")]),e._v(" "),s("p",[e._v("将变换后的 AST 再转换为 JS 代码, 使用到的模块是 babel-generator。")]),e._v(" "),s("p",[e._v("而 babel-core 模块则是将三者结合使得对外提供的API做了一个简化。")]),e._v(" "),s("p",[e._v("babel 只是转译新标准引入的语法，这些是不会转译的，需要引入对应的 polyfill 来解决。在我们编写插件的主要专注于第二步转换过程的工作，专注于对于代码的转化规则的拓展，解析与生成的偏底层相关操作则有对应的模块支持。")]),e._v(" "),s("h3",{attrs:{id:"抽象语法树（ast）是怎么生成的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#抽象语法树（ast）是怎么生成的"}},[e._v("#")]),e._v(" 抽象语法树（AST）是怎么生成的")]),e._v(" "),s("ul",[s("li",[e._v("分词：将整个代码字符串分割成语法单元数组（token）")])]),e._v(" "),s("p",[e._v("JS代码中的语法单元主要指如标识符、运算符、括号、数字、字符串、空格解析成最小单元。")]),e._v(" "),s("ul",[s("li",[e._v("语义分析：在分词结果的基础上分析语法单元之间的关系。")])]),e._v(" "),s("p",[e._v("将得到的词汇进行一个立体的组合，确定词语之间的关系。")]),e._v(" "),s("ol",[s("li",[e._v("语句(statement)，即指一个具备边界的代码区域，相邻的两个语句之间从语法上来讲互不影响，即调换顺序也不会产生语法错误。")]),e._v(" "),s("li",[e._v("表达式(expression)，则指最终有个结果的一小段代码，他可以嵌入到另一个表达式，且包含在语句中。")])]),e._v(" "),s("p",[e._v("简单来说语义分析既是对语句和表达式识别，这是个递归过程，解析中，babel会在解析每个语句和表达式的过程中设置一个暂存器，用来暂存当前读取到的词法单元，如果解析失败，就会返回之前的暂存点，再按照另一种方式进行解析，如果解析成功，则将暂存点销毁。类似于回溯算法。")])])}),[],!1,null,null,null);a.default=r.exports}}]);