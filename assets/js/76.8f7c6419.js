(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{427:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"事件系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件系统"}},[t._v("#")]),t._v(" 事件系统")]),t._v(" "),a("h2",{attrs:{id:"react事件系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react事件系统"}},[t._v("#")]),t._v(" react事件系统")]),t._v(" "),a("p",[t._v("React 事件机制其实是使用了 "),a("strong",[t._v("事件委托")]),t._v(" 的方式，React 在内部自己实现了浏览器中对应事件的合成事件。在 web 浏览器中，浏览器在生成虚拟 DOM 树的时候，解析出的合成事件挂载到 document 上，部分事件仍然在 DOM 元素上，事件实现机制是插件机制，方便后续拓展。")]),t._v(" "),a("h3",{attrs:{id:"特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),a("ol",[a("li",[t._v("React 将事件都挂载在 document 上，减少了 DOM 节点上的事件信息，能够做到性能的优化；")]),t._v(" "),a("li",[t._v("React 事件机制其实和 React Virtual DOM 的功能相似，React 团队希望 React 能够在多端运行，而事件的挂载可以在不同运行环境挂载到不同的节点上，从而事件不同端的运行，只需要在事件机制中做兼容处理；")]),t._v(" "),a("li",[t._v("事件分发：React 最新的调度算法 Fiber 会优化交互体验，内部优化浏览器渲染，干预事件分发也可以做更多的优化。")])]),t._v(" "),a("h3",{attrs:{id:"实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[t._v("#")]),t._v(" 实现原理")]),t._v(" "),a("p",[t._v("React 事件机制我们主要分三部分来说：")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("插件注册")]),t._v("：插件注册到一起，方便后面使用")]),t._v(" "),a("li",[a("strong",[t._v("事件注册")]),t._v("：DOM 的 props 中有事件属性，将事件挂载到 document，注册相应的 listener")]),t._v(" "),a("li",[a("strong",[t._v("事件分发")]),t._v("：在监听的 listener 中，关联到插件，执行对应事件，根据不同的事件类型，事件执行也有不同的方式")])]),t._v(" "),a("h4",{attrs:{id:"插件注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件注册"}},[t._v("#")]),t._v(" 插件注册")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/7/2/1730fdaad30d69f1?imageslim",alt:"img"}})]),t._v(" "),a("p",[t._v("从上图中，我们可以看到目前 React 一共有 6 个事件插件，但是目前版本中 ChangeEventPlugin 没有在使用，同时 ResponderEventPlugin 只有 RN 在使用。")]),t._v(" "),a("p",[t._v("每个插件内部包含很多事件，插件主要是用来组合事件信息，提取事件对象的。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("左边和右边的插件区别在于，simple 就是简单，一般只有一个事件；而右边插件都是由多个事件组合成的事件；")])]),t._v(" "),a("li",[a("p",[t._v("SyntheticEvent 是事件的构造函数，SyntheticEvent 对浏览器原生的事件进行 "),a("strong",[t._v("包装")]),t._v("，生成一个新的 event 对象，里面有合成事件需要的参数，原声 event 变成了 nativeEvent，同时封装了 preventDefault、stopPropagation 等方法，提供了 extend 方法用来继承，采用寄生组合的方式，一些 SyntheticEvent 都是继承自这个构造函数；")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dispatchConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dispatchConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_targetInst "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" targetInst"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nativeEvent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nativeEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("SyntheticEvent 有一个 pool 的概念，为了避免每一次都是用构造函数创建实例，在一个实例使用过后清空自身属性（设置为 null），然后需要创建新的实例时，优先获取空实例，添加对应的属性；")])]),t._v(" "),a("li",[a("p",[t._v("每一个插件主要由两部分组成，一部分是 eventTypes 也就是插件包括的一些事件和事件依赖的一些事件（合成事件会依赖多个事件），另一部分是 extractEvents 获取事件对象，在事件触发时会调用这个方法获取事件对象")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  eventTypes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    change"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      phasedRegistrationNames"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        bubbled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onChange'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        captured"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onChangeCapture'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      dependencies"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TOP_BLUR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("extractEvents")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("事件最后都会继承到 EventHub 上，本质上就是一个数组，只不过是固定顺序的数组，同时继承数组时还剩生成一些 Map 方便以后使用")]),t._v(" "),a("ul",[a("li",[t._v("registrationNameDependencies: eventName -> eventDependencied")]),t._v(" "),a("li",[t._v("registrationNameModules: eventName -> plugin")])])])]),t._v(" "),a("h4",{attrs:{id:"事件注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件注册"}},[t._v("#")]),t._v(" 事件注册")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/7/2/1730fdb22f10d7d5?imageslim",alt:"img"}})]),t._v(" "),a("p",[t._v("这一步主要是针对 DOM 树解析，添加事件的流程。Listener 里面包含了事件获取执行。registrationModules、registrationNameDependencies 就是之前插件注册时生成的对象。")]),t._v(" "),a("ul",[a("li",[t._v("关于合成事件：其实多个事件组合成的事件，但是 simpleEvent 本质上并不算一个合成事件，因为它还是一对一的关系，其他的插件因为有对应多个的 dependencies，所以才是真正的合成事件")]),t._v(" "),a("li",[t._v("合成事件的监听：许多合成事件浏览器没有对应事件，所以我们需要伪装，其实就是监听事件 dependencies 中的事件")]),t._v(" "),a("li",[t._v("关于事件监听节点：是监听的节点其实是 document，但是在不同的运行环境下监听的节点可能不同，可能是 iframe 也可能是其他节点")])]),t._v(" "),a("h4",{attrs:{id:"事件分发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件分发"}},[t._v("#")]),t._v(" 事件分发")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/7/2/1730fdaf8bf23453?imageslim",alt:"img"}})]),t._v(" "),a("p",[t._v("React16 以后开始做浏览器的调度工作，其实调度工作不止 DOM diff 上，在事件上也做了部分调度。")]),t._v(" "),a("p",[t._v("React 把事件做了分类：")]),t._v(" "),a("ul",[a("li",[t._v("DiscreateEvent：失焦、聚焦类事件，调用 dispatchDiscreateEvent")]),t._v(" "),a("li",[t._v("UserBlockingEvent：用户连续行操作，比如鼠标移动、拖拽等，调用 scheduler 的 runWithPriority")]),t._v(" "),a("li",[t._v("ContinuousEvent && default：连续性事件，直接执行")])]),t._v(" "),a("p",[t._v("上面三种事件其实最后都是调用了 dispatchEvent 函数，但是因为优先级的原因，事件的调度方法不一样，最后执行的时间也不一样。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件优先级")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" DiscreteEvent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EventPriority "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" UserBlockingEvent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EventPriority "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ContinuousEvent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EventPriority "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"对比-react-合成事件与-javascript-原生事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对比-react-合成事件与-javascript-原生事件"}},[t._v("#")]),t._v(" 对比 React 合成事件与 JavaScript 原生事件")]),t._v(" "),a("p",[t._v("下面我们从 4 个方面对比 React 合成事件与 JavaScript 原生事件。")]),t._v(" "),a("h4",{attrs:{id:"事件传播与阻止事件传播"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件传播与阻止事件传播"}},[t._v("#")]),t._v(" 事件传播与阻止事件传播")]),t._v(" "),a("p",[t._v("浏览器原生 DOM 事件的传播可以分为 3 个阶段：事件捕获阶段、目标对象本身的事件处理程序调用以及事件冒泡。事件捕获会优先调用结构树最外层的元素上绑定的事件监听器，然后依次向内调用，一直调用到目标元素上的事件监听器为止。事件捕获并非是一个通用的技术，在低于 IE9 版本的浏览器无法使用。而事件冒泡则与事件捕获的表现相反，它会从目标元素向外传播事件，由内而外直到最外层。")]),t._v(" "),a("p",[t._v("可以看出，事件捕获在程序开发中的意义并不大，更致命的是它的兼容性问题。所以，React 的合成事件则并没有实现事件捕获，仅仅支持了事件冒泡机制。这种 API 设计方式统一而简洁，符合 “"),a("em",[t._v("二八原则")]),t._v("”。")]),t._v(" "),a("p",[t._v("阻止原生事件传播需要使用 "),a("code",[t._v("e.preventDefault()")]),t._v(" ，不过对于不支持该方法的浏览器（IE9 以下），只能使用 "),a("code",[t._v("e.cancelBubble = true")]),t._v(" 来阻止。而在 REact 合成事件中，只需要使用 "),a("code",[t._v("e.preventDefault()")]),t._v(" 即可。")]),t._v(" "),a("h4",{attrs:{id:"事件类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件类型"}},[t._v("#")]),t._v(" 事件类型")]),t._v(" "),a("p",[t._v("React 合成事件的事件类型是 JavaScript 原生事件类型的一个子集。")]),t._v(" "),a("h4",{attrs:{id:"事件绑定方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件绑定方式"}},[t._v("#")]),t._v(" 事件绑定方式")]),t._v(" "),a("p",[t._v("受到 DOM 标准的影响，绑定浏览器原生事件的方式也有很多种，具体如下所示：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("直接在 DOM 元素上写内联绑定：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onclick")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("alert(1);"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  Button\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("在 JavaScript 中，通过元素的事件属性赋值的方式实现绑定：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("通过事件监听函数来实现")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onclick'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])]),t._v(" "),a("p",[t._v("相比而言，React 合成事件的绑定方式则简单很多：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onclick")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("this.handleClick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  Button\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h4",{attrs:{id:"事件对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件对象"}},[t._v("#")]),t._v(" 事件对象")]),t._v(" "),a("p",[t._v("原生 DOM 事件对象在 W3C 标准和 IE 标准下存在差异。在低版本的 IE 浏览器中，只能使用 "),a("code",[t._v("window.event")]),t._v(" 来获取事件对象。而在 React 合成事件中，React 抹平了各个浏览器的差异，在事件处理函数中可以得到一个统一的合成事件对象。")])])}),[],!1,null,null,null);s.default=e.exports}}]);