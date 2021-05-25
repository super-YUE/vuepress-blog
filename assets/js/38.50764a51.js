(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{389:function(a,t,v){"use strict";v.r(t);var _=v(25),r=Object(_.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"小程序原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小程序原理"}},[a._v("#")]),a._v(" 小程序原理")]),a._v(" "),v("p",[a._v("一直认为小程序就是面向文档编程。还是需要了解一下它的原理。")]),a._v(" "),v("h2",{attrs:{id:"小程序基本原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小程序基本原理"}},[a._v("#")]),a._v(" 小程序基本原理")]),a._v(" "),v("p",[a._v("小程序是双线程应用，提高了渲染速度。通过两个webview来达到安全沙箱的目的，线程之间的通信则是通过底层。")]),a._v(" "),v("h3",{attrs:{id:"逻辑层：业务处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#逻辑层：业务处理"}},[a._v("#")]),a._v(" 逻辑层：业务处理")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("加载js => 业务、生命周期(Page、App)、事件、数据加载等处理")])]),a._v(" "),v("li",[v("p",[a._v("单独的线程: iframe（ios/jscore，安卓/v8）")])]),a._v(" "),v("li",[v("p",[a._v("只有一个逻辑层来维护一个App实例（多个Page实例维护在一个App实例中）")])]),a._v(" "),v("li",[v("p",[a._v("更新视图层数据：setData")])])]),a._v(" "),v("h3",{attrs:{id:"渲染层：页面的基本结构、样式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#渲染层：页面的基本结构、样式"}},[a._v("#")]),a._v(" 渲染层：页面的基本结构、样式")]),a._v(" "),v("ul",[v("li",[a._v("wxml：视图内容 => html")]),a._v(" "),v("li",[a._v("wxss: 视图样式 => css")]),a._v(" "),v("li",[a._v("单独的线程: webkit(iframe)")]),a._v(" "),v("li",[a._v("多个视图层（一个 wxml => html 就是一个视图层）")])]),a._v(" "),v("h2",{attrs:{id:"运行时流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运行时流程"}},[a._v("#")]),a._v(" 运行时流程")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/jfosae.png",alt:"img"}}),a._v(" "),v("a",{attrs:{href:"https://juejin.cn/post/6900329244950609928",target:"_blank",rel:"noopener noreferrer"}},[a._v("图片来源"),v("OutboundLink")],1)]),a._v(" "),v("h3",{attrs:{id:"组件系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件系统"}},[a._v("#")]),a._v(" 组件系统")]),a._v(" "),v("h3",{attrs:{id:"逻辑层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#逻辑层"}},[a._v("#")]),a._v(" 逻辑层")]),a._v(" "),v("ul",[v("li",[a._v("提供注册实例/页面方法 App()、Page()")]),a._v(" "),v("li",[a._v("提供通信能力，js => wxml")]),a._v(" "),v("li",[a._v("生命周期维护能力")]),a._v(" "),v("li",[a._v("调用微信原生API能力")]),a._v(" "),v("li",[a._v("执行过程")])]),a._v(" "),v("h3",{attrs:{id:"视图层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#视图层"}},[a._v("#")]),a._v(" 视图层")]),a._v(" "),v("ul",[v("li",[a._v("事件处理")]),a._v(" "),v("li",[a._v("提供通信能力，wxml => js")]),a._v(" "),v("li",[a._v("数据渲染到页面能力")]),a._v(" "),v("li",[a._v("webComponent / render能力")]),a._v(" "),v("li",[a._v("执行过程")])]),a._v(" "),v("h3",{attrs:{id:"与传统web页面显示流程的对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#与传统web页面显示流程的对比"}},[a._v("#")]),a._v(" 与传统web页面显示流程的对比")]),a._v(" "),v("h4",{attrs:{id:"传统-web-页面显示需要经历一下几个步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#传统-web-页面显示需要经历一下几个步骤"}},[a._v("#")]),a._v(" 传统 web 页面显示需要经历一下几个步骤")]),a._v(" "),v("ul",[v("li",[a._v("webview 初始化")]),a._v(" "),v("li",[a._v("加载 HTML, CSS, JS")]),a._v(" "),v("li",[a._v("编译 JS")]),a._v(" "),v("li",[a._v("Render 计算")]),a._v(" "),v("li",[a._v("DOM Path")])]),a._v(" "),v("h4",{attrs:{id:"小程序架构运行流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小程序架构运行流程"}},[a._v("#")]),a._v(" 小程序架构运行流程")]),a._v(" "),v("blockquote",[v("p",[a._v("webview部分")])]),a._v(" "),v("ul",[v("li",[a._v("webview 初始化")]),a._v(" "),v("li",[a._v("加载 HTML，CSS, JS (经过拆分后，体积大幅度减小)")]),a._v(" "),v("li",[a._v("编译 JS")]),a._v(" "),v("li",[a._v("等待页面需要的数据")]),a._v(" "),v("li",[a._v("反序列化数据")]),a._v(" "),v("li",[a._v("执行 Patch")]),a._v(" "),v("li",[a._v("渲染页面")]),a._v(" "),v("li",[a._v("等待更多消息")])]),a._v(" "),v("blockquote",[v("p",[a._v("jsCore部分")])]),a._v(" "),v("ul",[v("li",[a._v("初始化")]),a._v(" "),v("li",[a._v("加载框架 js 代码")]),a._v(" "),v("li",[a._v("编译 js")]),a._v(" "),v("li",[a._v("加载业务逻辑 js 代码")]),a._v(" "),v("li",[a._v("编译 js")]),a._v(" "),v("li",[a._v("计算首屏虚拟 DOM 结构")]),a._v(" "),v("li",[a._v("序列化数据，传输")]),a._v(" "),v("li",[a._v("等待 webview 消息，或者 Native 消息")])]),a._v(" "),v("h2",{attrs:{id:"小程序的优点和缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小程序的优点和缺点"}},[a._v("#")]),a._v(" 小程序的优点和缺点")]),a._v(" "),v("h3",{attrs:{id:"优点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[a._v("#")]),a._v(" 优点")]),a._v(" "),v("ul",[v("li",[a._v("渲染进程和逻辑进程分离，并行处理：")]),a._v(" "),v("li",[a._v("加速首屏渲染速度；避免单线程模型下，js 运算时间过长，UI 出现卡顿。")]),a._v(" "),v("li",[a._v("完全采用数据驱动的方式，不能直接操作 DOM，避免低质量的代码。")])]),a._v(" "),v("h3",{attrs:{id:"缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[a._v("#")]),a._v(" 缺点")]),a._v(" "),v("ul",[v("li",[a._v("不能灵活操作 DOM，无法实现较为复杂的效果")]),a._v(" "),v("li",[a._v("部分和 NA 相关的视图有使用限制，如微信的 scrollView 内不能有 textarea 和原生组件")]),a._v(" "),v("li",[a._v("页面大小、打开页面数量都受到限制")]),a._v(" "),v("li",[a._v("需要单独开发适配，不能复用现有代码资源。")])]),a._v(" "),v("h2",{attrs:{id:"启动加载性能优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#启动加载性能优化"}},[a._v("#")]),a._v(" 启动加载性能优化")]),a._v(" "),v("h3",{attrs:{id:"启动加载原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#启动加载原理"}},[a._v("#")]),a._v(" 启动加载原理")]),a._v(" "),v("p",[a._v("小程序启动主要分为逻辑层的启动和视图层的启动。逻辑层执行js代码逻辑，视图层以 webview 为载体，完成页面内容的渲染和更新。")]),a._v(" "),v("p",[a._v("小程序启动前，客户端会对小程序的基础环境进行预加载，提升小程序加载的速度。在用户打开小程序的时，会首先进行代码包的下载，下载完成后分别在逻辑层和视图层注入执行开发者的业务代码，最终将执行结果聚合渲染出首屏内容。")]),a._v(" "),v("p",[a._v("启动过程三个阶段：")]),a._v(" "),v("ul",[v("li",[a._v("资源准备，代码包的下载和校验工作。")]),a._v(" "),v("li",[a._v("业务代码的注入以及落地页首次渲染，进行业务代码的注入和执行，等待首次渲染完成。")]),a._v(" "),v("li",[a._v("落地页请求时的网络加载状态")])]),a._v(" "),v("p",[a._v("上面三个过程基本与传统web应用类似。")]),a._v(" "),v("h3",{attrs:{id:"控制代码包大小"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#控制代码包大小"}},[a._v("#")]),a._v(" 控制代码包大小")]),a._v(" "),v("p",[a._v("从加载原理上来看，代码包的大小最直接影响整个小程序加载启动性能。提升小程序的启动加载性能，最直接有效的就是减少代码包的大小。")]),a._v(" "),v("ul",[v("li",[a._v("开启“代码压缩”的选项。")]),a._v(" "),v("li",[a._v("编码时规范，减少层级等方式来做。")]),a._v(" "),v("li",[a._v("即时清理废弃的代码，尤其是比较大的第三方库，以及一些不使用的图片等资源文件。")]),a._v(" "),v("li",[a._v("减少本地图片等资源文件，必要时使用网络图片代码。")])]),a._v(" "),v("p",[a._v("以上手段主要通过code的方式来减少代码量。")]),a._v(" "),v("h3",{attrs:{id:"分包"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分包"}},[a._v("#")]),a._v(" 分包")]),a._v(" "),v("h4",{attrs:{id:"分包加载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分包加载"}},[a._v("#")]),a._v(" 分包加载")]),a._v(" "),v("p",[a._v("根据业务场景，将用户访问率高的页面放在主包里，将访问率低的页面放入子包里，按需加载；\n在小程序启动时，默认会下载主包并启动主包内页面，当用户进入分包内某个页面时，客户端会把对应分包下载下来，下载完成后再进行展示。")]),a._v(" "),v("h4",{attrs:{id:"独立分包"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#独立分包"}},[a._v("#")]),a._v(" 独立分包")]),a._v(" "),v("p",[a._v("独立分包是小程序中一种特殊类型的分包，可以独立于主包和其他分包运行。从独立分包中页面进入小程序时，不需要下载主包。当用户进入普通分包或主包内页面时，主包才会被下载。\n可以按需将某些具有一定功能独立性的页面配置到独立分包中。当小程序从普通的分包页面启动时，需要首先下载主包；而独立分包不依赖主包即可运行，可以很大程度上提升分包页面的启动速度。")]),a._v(" "),v("h4",{attrs:{id:"分包预下载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分包预下载"}},[a._v("#")]),a._v(" 分包预下载")]),a._v(" "),v("p",[a._v("开发者可以通过配置，在进入小程序某个页面时，由框架自动预下载可能需要的分包，提升进入后续分包页面时的启动速度。对于独立分包，也可以预下载主包。")]),a._v(" "),v("h3",{attrs:{id:"首屏优化加载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#首屏优化加载"}},[a._v("#")]),a._v(" 首屏优化加载")]),a._v(" "),v("h4",{attrs:{id:"提前请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#提前请求"}},[a._v("#")]),a._v(" 提前请求")]),a._v(" "),v("p",[a._v("数据请求并不依赖页面结构完整，可以在页面加载时或代码注入时即 在页面 onload 就发起，而不需要等待页面渲染完成。用户等待请求返回的时间就会进一步缩短。")]),a._v(" "),v("h4",{attrs:{id:"利用缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#利用缓存"}},[a._v("#")]),a._v(" 利用缓存")]),a._v(" "),v("p",[a._v("利用storage API 对请求结果请进缓存，二次启动时，直接用缓存数据完成渲染。同时，即使在无网环境下，用户也可以使用小程序的部分功能。")]),a._v(" "),v("h4",{attrs:{id:"避免白屏"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#避免白屏"}},[a._v("#")]),a._v(" 避免白屏")]),a._v(" "),v("p",[a._v("使用骨架屏幕，请求过程中，在页面中先展示一个基础的骨架和结合已有的数据进行展示。")]),a._v(" "),v("h2",{attrs:{id:"渲染性能优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#渲染性能优化"}},[a._v("#")]),a._v(" 渲染性能优化")]),a._v(" "),v("h3",{attrs:{id:"小程序更新视图数据的通信流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#小程序更新视图数据的通信流程"}},[a._v("#")]),a._v(" 小程序更新视图数据的通信流程")]),a._v(" "),v("p",[a._v("每当小程序视图数据需要更新时，逻辑层会调用小程序宿主环境提供的 setData 方法将数据从逻辑层传递到视图层，经过一系列渲染步骤之后完成UI视图更新。完整的通信流程如下：")]),a._v(" "),v("ul",[v("li",[a._v("小程序逻辑层调用宿主环境的 setData 方法。")]),a._v(" "),v("li",[a._v("逻辑层执行 JSON.stringify 将待传输数据转换成字符串并拼接到特定的JS脚本，并通过evaluateJavascript 执行脚本将数据传输到渲染层。")]),a._v(" "),v("li",[a._v("渲染层接收到后， WebView JS 线程会对脚本进行编译，得到待更新数据后进入渲染队列等待 WebView 线程空闲时进行页面渲染。")]),a._v(" "),v("li",[a._v("WebView 线程开始执行渲染时，待更新数据会合并到视图层保留的原始 data 数据，并将新数据套用在WXML片段中得到新的虚拟节点树。经过新虚拟节点树与当前节点树的 diff 对比，将差异部分更新到UI视图。同时，将新的节点树替换旧节点树，用于下一次重渲染。")])]),a._v(" "),v("p",[a._v("从架构上，逻辑层和视图层无法直接共享数据的，数据传输是一次跨进程的通信，会有一定的通信开销，这一开销与传输的数据量正相关。")]),a._v(" "),v("h3",{attrs:{id:"正确使用-setdata"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#正确使用-setdata"}},[a._v("#")]),a._v(" 正确使用 setData")]),a._v(" "),v("ul",[v("li",[a._v("避免在 data 中放置与渲染无关的数据，只在 data 中放置与页面渲染相关的数据。")]),a._v(" "),v("li",[a._v("避免使用 setData 一次性传输大量数据，只对发生变化的数据进行 setData。")]),a._v(" "),v("li",[a._v("不要在短时间内连续的频繁调用 setData，对连续的 setData 尽可能的进行合并，做切片。")])]),a._v(" "),v("h3",{attrs:{id:"使用自定义组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用自定义组件"}},[a._v("#")]),a._v(" 使用自定义组件")]),a._v(" "),v("p",[a._v("自定义组件除了有利于代码复用，提升开发效率外，还可以有效的提升页面局部频繁更新时的性能。自定义组件的更新只在组件内部进行，不受页面其他部分内容的影响，可以大大降低页面更新的开销。")]),a._v(" "),v("p",[a._v("在页面引用自定义组件后，当初始化页面时，Exparser 会在创建页面实例的同时，也会根据自定义组件的注册信息进行组件实例化，然后根据组件自带的 data 数据和组件WXML，构造出独立的 Shadow Tree ，并追加到页面 Composed Tree 。创建出来的 Shadow Tree 拥有着自己独立的逻辑空间、数据、样式环境及setData调用：")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/ypg0KE.png",alt:"img"}})]),a._v(" "),v("h3",{attrs:{id:"减少数据结构的嵌套层数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#减少数据结构的嵌套层数"}},[a._v("#")]),a._v(" 减少数据结构的嵌套层数")]),a._v(" "),v("p",[a._v("时间开销大体上与节点树中节点的总量成正比例关系。因而减少WXML中节点的数量可以有效降低初始渲染和重渲染的时间开销，提升渲染性能。")]),a._v(" "),v("p",[a._v("初始渲染时，将初始数据套用在对应的WXML片段上生成节点树。最后根据节点树包含的各个节点，在界面上依次创建出各个组件。")]),a._v(" "),v("h3",{attrs:{id:"key值在列表渲染中的作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#key值在列表渲染中的作用"}},[a._v("#")]),a._v(" key值在列表渲染中的作用")]),a._v(" "),v("p",[a._v("与各大框架的key值作用类似")]),a._v(" "),v("h3",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.cn/post/6844903877041471502#heading-6https://juejin.cn/post/6844903877041471502",target:"_blank",rel:"noopener noreferrer"}},[a._v("浅谈小程序性能优化"),v("OutboundLink")],1)]),a._v(" "),v("p",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/o5MJHozQqCcwUl4yVgUGPA",target:"_blank",rel:"noopener noreferrer"}},[a._v("小程序底层实现原理"),v("OutboundLink")],1)]),a._v(" "),v("p",[v("a",{attrs:{href:"https://juejin.cn/post/6900329244950609928",target:"_blank",rel:"noopener noreferrer"}},[a._v("小程序架构原理"),v("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);