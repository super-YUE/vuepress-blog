(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{480:function(t,v,_){"use strict";_.r(v);var a=_(25),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"安全"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[t._v("#")]),t._v(" 安全")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/wpJYkZ.png",alt:"img"}})]),t._v(" "),_("h2",{attrs:{id:"浏览器安全"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器安全"}},[t._v("#")]),t._v(" 浏览器安全")]),t._v(" "),_("p",[t._v("浏览器的安全由浏览器控制，主要从浏览器运行机制的安全，同源策略体现出来")]),t._v(" "),_("h3",{attrs:{id:"同源策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#同源策略"}},[t._v("#")]),t._v(" 同源策略")]),t._v(" "),_("p",[_("a",{attrs:{href:"/network/crossDomain"}},[t._v("跨域")])]),t._v(" "),_("h3",{attrs:{id:"浏览器沙箱机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器沙箱机制"}},[t._v("#")]),t._v(" 浏览器沙箱机制")]),t._v(" "),_("p",[t._v("Google Chrome 是第一个采取多进程架构的浏览器，其主要进程分为：浏览器进程、渲染进程、插件进程、扩展进程。")]),t._v(" "),_("p",[t._v("插件进程与浏览器进程严格隔离，互不影响。")]),t._v(" "),_("p",[t._v("渲染引擎由 Sandbox 隔离，网页代码要与浏览器内核进程通信、与操作系统通信都需要通过 IPC channel，在其中会进行一些安全检查。")]),t._v(" "),_("p",[t._v("Sandbox 目的：让不可信任的代码运行在一定的环境中，限制其访问隔离区外的资源，如果一定要跨域边界产生数据交换，则只能通过指定的数据通道，比如经过封装的 API 来完成，在这些 API 中会严格检查请求的合法性。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/pPbQaA.png",alt:"img"}})]),t._v(" "),_("h2",{attrs:{id:"跨站脚本攻击（xss）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#跨站脚本攻击（xss）"}},[t._v("#")]),t._v(" 跨站脚本攻击（XSS）")]),t._v(" "),_("p",[t._v("XSS(Cross-Site Scripting)跨站脚本攻击，黑客通过“HTML注入”篡改了网页，插入了恶意的脚本，从而在用户浏览网页时，控制用户浏览器的一种攻击。\n跨站脚本攻击有可能造成以下影响:")]),t._v(" "),_("ul",[_("li",[t._v("利⽤虚假输⼊表单骗取⽤户个⼈信息。")]),t._v(" "),_("li",[t._v("利⽤脚本窃取⽤户的Cookie值，被害者在不知情的情况下，帮助攻击者发送恶意请求。")]),t._v(" "),_("li",[t._v("显示伪造的⽂章或图⽚。")]),t._v(" "),_("li",[t._v("窃取 Cookie 信息")]),t._v(" "),_("li",[t._v("监听用户行为")]),t._v(" "),_("li",[t._v("可以通过修改 DOM伪造假的登录窗口，用来欺骗用户输入用户名和密码等信息。")]),t._v(" "),_("li",[t._v("在页面内生成浮窗广告")])]),t._v(" "),_("h3",{attrs:{id:"反射型xss"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#反射型xss"}},[t._v("#")]),t._v(" 反射型XSS")]),t._v(" "),_("p",[t._v("也称“非持久型XSS”，简单的把用户输入的数据“反射”给浏览器，即黑客往往需要诱使用户“点击”一个恶意链接才能攻击成功。")]),t._v(" "),_("ul",[_("li",[t._v("恶意 JavaScript 脚本属于用户发送给网站请求中的一部 分")]),t._v(" "),_("li",[t._v("随后网站又把恶意 JavaScript 脚本返回给用户")]),t._v(" "),_("li",[t._v("当恶意 JavaScript 脚本在用户页面中 被执行时，黑客就可以利用该脚本做一些恶意操作。")])]),t._v(" "),_("h3",{attrs:{id:"存储型xss"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#存储型xss"}},[t._v("#")]),t._v(" 存储型XSS")]),t._v(" "),_("p",[t._v("也称“持久型XSS”，把用户输入的数据“存储”在服务器，具有很强的稳定性。例如在富文本中加入一些 JavaScript 代码的博客文章，黑客把恶意脚本保存到服务端。")]),t._v(" "),_("p",[t._v("存储型 XSS 攻击大致需要经过如下步骤:")]),t._v(" "),_("ul",[_("li",[t._v("首先黑客利用站点漏洞将一段恶意 JavaScript 代码提交到网站的数据库中;")]),t._v(" "),_("li",[t._v("然后用户向网站请求包含了恶意 JavaScript 脚本的页面;")]),t._v(" "),_("li",[t._v("当用户浏览该页面的时候，恶意脚本就会将用户的 Cookie 信息等数据上传到服务器。")])]),t._v(" "),_("h3",{attrs:{id:"xss攻击的危害"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#xss攻击的危害"}},[t._v("#")]),t._v(" XSS攻击的危害")]),t._v(" "),_("p",[t._v("利用脚本特性，干脚本能干的一切")]),t._v(" "),_("ul",[_("li",[t._v("获取⻚⾯数据")]),t._v(" "),_("li",[t._v("获取Cookies")]),t._v(" "),_("li",[t._v("劫持前端逻辑")]),t._v(" "),_("li",[t._v("发送请求")]),t._v(" "),_("li",[t._v("偷取⽹站的任意数据")]),t._v(" "),_("li",[t._v("获取用户信息")]),t._v(" "),_("li",[t._v("用户欺骗")])]),t._v(" "),_("h3",{attrs:{id:"防范手段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#防范手段"}},[t._v("#")]),t._v(" 防范手段")]),t._v(" "),_("ul",[_("li",[t._v("在 Set-Cookie 时给关键 Cookie 植入 HttpOnly 标识；")]),t._v(" "),_("li",[t._v("服务器对输入脚本进行过滤或转码，转译字符")]),t._v(" "),_("li",[t._v("充分利用 CSP，")]),t._v(" "),_("li",[t._v("把 Cookie 与客户端IP绑定\n"),_("ul",[_("li",[t._v("构造 GET 和 POST 请求")]),t._v(" "),_("li",[t._v("XSS 钓鱼")]),t._v(" "),_("li",[t._v("识别用户浏览器")]),t._v(" "),_("li",[t._v("识别用户安装的软件")]),t._v(" "),_("li",[t._v("获取用户的真实 IP 地址")])])])]),t._v(" "),_("h4",{attrs:{id:"csp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#csp"}},[t._v("#")]),t._v(" CSP")]),t._v(" "),_("p",[t._v("内容安全策略 (CSP, Content Security Policy) 是⼀个附加的安全层，⽤于帮助检测和缓解某些类型的攻击，包括跨站脚本 (XSS) 和数据注⼊等攻击。 这些攻击可⽤于实现从数据窃取到⽹站破坏或作为恶意软件分发版本等⽤途。")]),t._v(" "),_("p",[t._v("CSP 本质上就是建⽴⽩名单，开发者明确告诉浏览器哪些外部资源可以加载和执⾏。我们只需要配置规则，如何拦截是由浏览器⾃⼰实现的。我们可以通过这种⽅式来尽量减少 XSS 攻击。")]),t._v(" "),_("div",{staticClass:"language-js line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只允许加载本站资源")]),t._v("\nContent"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Security"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Policy"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("src "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'self'")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只允许加载 HTTPS 协议图⽚")]),t._v("\nContent"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Security"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Policy"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" img"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("src https"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n// 不允许加载任何来源框架\nContent-Security-Policy: child-src 'none'\n")])])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br")])]),_("p",[t._v("实施严格的 CSP 可以有效地防范 XSS 攻击，具体来讲 CSP 有如下几个功能:")]),t._v(" "),_("ul",[_("li",[t._v("限制加载其他域下的资源文件，这样即使黑客插入了一个 JavaScript 文件，这个 JavaScript 文件也是无法被加载的;")]),t._v(" "),_("li",[t._v("禁止向第三方域提交数据，这样用户数据也不会外泄;")]),t._v(" "),_("li",[t._v("禁止执行内联脚本和未授权的脚本;")])]),t._v(" "),_("h3",{attrs:{id:"httponly-cookie"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#httponly-cookie"}},[t._v("#")]),t._v(" HttpOnly Cookie")]),t._v(" "),_("p",[t._v("这是预防XSS攻击窃取⽤户cookie最有效的防御⼿段。Web应 ⽤程序在设置cookie时，将其属性设为HttpOnly，就可以避免该⽹⻚的cookie被客户端恶意JavaScript窃取，保护⽤户cookie信息。")]),t._v(" "),_("h4",{attrs:{id:"⿊名单"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#⿊名单"}},[t._v("#")]),t._v(" ⿊名单")]),t._v(" "),_("p",[t._v("⽤户的输⼊永远不可信任的，最普遍的做法就是转义输⼊输出的内容，对于引号、尖括号、斜杠进⾏转义")]),t._v(" "),_("h2",{attrs:{id:"csrf（cross-site-request-forgery）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#csrf（cross-site-request-forgery）"}},[t._v("#")]),t._v(" csrf（Cross Site Request Forgery）")]),t._v(" "),_("p",[t._v("它利⽤⽤户已登录的身份，在⽤户毫不知情的情况下，以⽤户的名义完成⾮法操作。")]),t._v(" "),_("ol",[_("li",[t._v("⽤户已经登录了站点 A，并在本地记录了 cookie")]),t._v(" "),_("li",[t._v("在⽤户没有登出站点 A 的情况下（也就是 cookie ⽣效的情况下），访问了恶意攻击者提供的引诱危险站点 B (B 站点要求访问站点A)。")]),t._v(" "),_("li",[t._v("站点 A 没有做任何 CSRF 防御")])]),t._v(" "),_("h3",{attrs:{id:"csrf攻击危害"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#csrf攻击危害"}},[t._v("#")]),t._v(" CSRF攻击危害")]),t._v(" "),_("ul",[_("li",[t._v("利⽤⽤户登录态")]),t._v(" "),_("li",[t._v("⽤户不知情")]),t._v(" "),_("li",[t._v("完成业务请求")]),t._v(" "),_("li",[t._v("盗取⽤户资⾦（转账，消费）")]),t._v(" "),_("li",[t._v("冒充⽤户发帖背锅")]),t._v(" "),_("li",[t._v("损害⽹站声誉")])]),t._v(" "),_("h3",{attrs:{id:"防御"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#防御"}},[t._v("#")]),t._v(" 防御")]),t._v(" "),_("ul",[_("li",[t._v("禁⽌第三⽅⽹站带Cookie")]),t._v(" "),_("li",[t._v("Referer Check - Https不发送referer，验证请求的来源站点")]),t._v(" "),_("li",[t._v("加验证码")]),t._v(" "),_("li",[t._v("Cookie加SameSite，用来防止 CSRF 攻击和用户追踪")]),t._v(" "),_("li",[t._v("CSRF Token")])]),t._v(" "),_("h3",{attrs:{id:"cookie-samesite"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cookie-samesite"}},[t._v("#")]),t._v(" cookie,SameSite")]),t._v(" "),_("p",[t._v("SameSite 选项通常有 Strict、Lax 和 None 三个值。")]),t._v(" "),_("ul",[_("li",[t._v("Strict 最为严格。如果 SameSite 的值是 Strict，那么浏览器会完全禁止第三方 Cookie。简言之，如果你从极客时间的页面中访问 InfoQ 的资源，而 InfoQ 的某些 Cookie 设置了 SameSite = Strict 的话，那么这些 Cookie 是不会被发送到 InfoQ 的服 务器上的。只有你从 InfoQ 的站点去请求 InfoQ 的资源时，才会带上这些 Cookie。")]),t._v(" "),_("li",[t._v("Lax 相对宽松一点。在跨站点的情况下，从第三方站点的链接打开和从第三方站点提交 Get 方式的表单这两种方式都会携带 Cookie。但如果在第三方站点中使用 Post 方法， 或者通过 img、iframe 等标签加载的 URL，这些场景都不会携带 Cookie。")]),t._v(" "),_("li",[t._v("而如果使用 None 的话，在任何情况下都会发送 Cookie 数据。")])]),t._v(" "),_("h2",{attrs:{id:"点击劫持"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#点击劫持"}},[t._v("#")]),t._v(" 点击劫持")]),t._v(" "),_("p",[t._v("点击劫持是⼀种视觉欺骗的攻击⼿段。攻击者将需要攻击的⽹站通过 iframe 嵌套的⽅式嵌⼊⾃⼰的⽹⻚中，并将 iframe 设置为透明，在⻚⾯中透出⼀个按钮诱导⽤户点击。")]),t._v(" "),_("h3",{attrs:{id:"如何防御"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何防御"}},[t._v("#")]),t._v(" 如何防御")]),t._v(" "),_("p",[t._v("X-FRAME-OPTIONS")]),t._v(" "),_("p",[t._v("X-FRAME-OPTIONS 是⼀个 HTTP 响应头，在现代浏览器有⼀个很好的⽀持。这个 HTTP 响应头 就是为了防御⽤ iframe 嵌套的点击劫持攻击。\n该响应头有三个值可选，分别是")]),t._v(" "),_("ul",[_("li",[t._v("DENY，表示⻚⾯不允许通过 iframe 的⽅式展示")]),t._v(" "),_("li",[t._v("SAMEORIGIN，表示⻚⾯可以在相同域名下通过 iframe 的⽅式展示")]),t._v(" "),_("li",[t._v("ALLOW-FROM，表示⻚⾯可以在指定来源的 iframe 中展示")])]),t._v(" "),_("h2",{attrs:{id:"请求劫持"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#请求劫持"}},[t._v("#")]),t._v(" 请求劫持")]),t._v(" "),_("ul",[_("li",[t._v("DNS劫持")])]),t._v(" "),_("p",[t._v("顾名思义，DNS服务器(DNS解析各个步骤)被篡改，修改了域名解析的结果，使得访问到的不是预期的ip")]),t._v(" "),_("ul",[_("li",[t._v("请求劫持")])]),t._v(" "),_("p",[t._v("运营商劫持，此时⼤概只能升级HTTPS了")]),t._v(" "),_("h2",{attrs:{id:"其他"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),_("h3",{attrs:{id:"爬虫"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#爬虫"}},[t._v("#")]),t._v(" 爬虫")]),t._v(" "),_("ul",[_("li",[t._v("针对爬虫机器，首先对应用加上防爬工具，比如利用debug")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/3wgpMw.png",alt:"img"}})]),t._v(" "),_("ul",[_("li",[t._v("针对黄牛")])]),t._v(" "),_("p",[t._v("黄牛是让人又爱又恨的一群人，一般防他们就是通过数据策略分析，然后判断是否是黄牛。")]),t._v(" "),_("h2",{attrs:{id:"网络安全"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络安全"}},[t._v("#")]),t._v(" 网络安全")]),t._v(" "),_("p",[t._v("网络安全必不可少")]),t._v(" "),_("h3",{attrs:{id:"同源策略-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#同源策略-2"}},[t._v("#")]),t._v(" 同源策略")]),t._v(" "),_("p",[t._v("如果两个 "),_("code",[t._v("URL")]),t._v(" 的协议、域名和端口都相同，我们就称这两个 "),_("code",[t._v("URL")]),t._v(" 同源。")]),t._v(" "),_("p",[t._v("两个相同的源之间是可以相互访问资源和操作 DOM ,两个不同的源之间若想要相互访问资源或者操作 DOM，那么会有一套基础的安全策略的制约。\n同源策略表现在DOM、Web 数据和网络这三个层面。")]),t._v(" "),_("ul",[_("li",[t._v("DOM层面：同源策略限制了来自不同的Javascript脚本对当前DOM读写的操作。")]),t._v(" "),_("li",[t._v("数据层面：同源策略限制了不同源的站点读取当前站点的 Cookie、IndexDB、LocalStorage 等数据。")]),t._v(" "),_("li",[t._v("网络层面：同源策略限制了通过 XMLHttpRequest 等方式将站点的数据发送给不同源的站点。")])]),t._v(" "),_("h4",{attrs:{id:"安全和便利性的权衡"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安全和便利性的权衡"}},[t._v("#")]),t._v(" 安全和便利性的权衡")]),t._v(" "),_("p",[t._v("不过安全性和便利性是相互对立的，让不同的源之间绝对隔离，无疑是最安全的措施，但这也会使得 Web 项目难以开发和使用。")]),t._v(" "),_("p",[t._v("浏览器出让了同源策略的哪些安全性")]),t._v(" "),_("ul",[_("li",[t._v("页面中可以嵌入第三方资源：web世界是开放的，可以接入任何资源，同源策略要让一个页面的所有资源都来自于同一个源，会带来XSS攻击。注入外部的恶意脚本。为了解决 XSS 攻击，浏览器中引入了内容安全策略，称为 CSP。CSP的核心思想就是让服务器决定浏览器能够加载哪些资源，让服务器决定浏览器是否能够执行内联 JavaScript 代码。")]),t._v(" "),_("li",[t._v("跨域资源共享和跨文档消息机制：引入了跨域资源共享（CORS），使用该机制可以进行跨域访问控制。")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("规则")]),t._v(" "),_("th",[t._v("问题")]),t._v(" "),_("th",[t._v("策略")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("页面中可以引用第三方资源")]),t._v(" "),_("td",[t._v("暴露了很多诸如 XSS 的安全问题")]),t._v(" "),_("td",[t._v("引入了 CSP 来限制其自由程度")])]),t._v(" "),_("tr",[_("td",[t._v("同源策略")]),t._v(" "),_("td",[t._v("使用 XMLHttpRequest 和 Fetch 都是无法直接进行跨域请求的")]),t._v(" "),_("td",[t._v("跨域资源共享策略(CORS)")])]),t._v(" "),_("tr",[_("td",[t._v("同源策略")]),t._v(" "),_("td",[t._v("两个不同源的 DOM 是不能相互操纵的")]),t._v(" "),_("td",[t._v("跨文档消息机制(postMessage)")])])])]),t._v(" "),_("h3",{attrs:{id:"xss攻击-跨站脚本攻击"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#xss攻击-跨站脚本攻击"}},[t._v("#")]),t._v(" XSS攻击(跨站脚本攻击)")]),t._v(" "),_("p",[t._v("XSS 攻击是指黑客往 HTML 文件中或者 DOM 中注入恶意脚本，从而在用户浏览页面时利用注入的恶意脚本对用户实施攻击的一种手段。")]),t._v(" "),_("h4",{attrs:{id:"恶意脚本可以做的事情"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#恶意脚本可以做的事情"}},[t._v("#")]),t._v(" 恶意脚本可以做的事情")]),t._v(" "),_("ul",[_("li",[t._v("窃取 Cookie 信息：恶意 JavaScript 可以通过“document.cookie”获取 Cookie 信息，然后通过 XMLHttpRequest 或者 Fetch 加上 CORS 功能将数据发送给恶意服务器。")]),t._v(" "),_("li",[t._v("监听用户行为：恶意 JavaScript 可以使用“addEventListener”接口来监听键盘事件，比如可以获取用户输入的信用卡等信息，将其发送到恶意服务器。")]),t._v(" "),_("li",[t._v("修改 DOM伪造假的登录窗口")]),t._v(" "),_("li",[t._v("在页面内生成浮窗广告")])]),t._v(" "),_("h4",{attrs:{id:"恶意脚本是怎么注入的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#恶意脚本是怎么注入的"}},[t._v("#")]),t._v(" 恶意脚本是怎么注入的")]),t._v(" "),_("p",[t._v("通常情况下，主要有存储型 XSS 攻击、反射型 XSS 攻击和基于 DOM 的 XSS 攻击三种方式来注入恶意脚本。")]),t._v(" "),_("blockquote",[_("p",[t._v("存储型 XSS 攻击")])]),t._v(" "),_("ul",[_("li",[t._v("黑客利用站点漏洞将一段恶意 JavaScript 代码提交到网站的数据库中；")]),t._v(" "),_("li",[t._v("用户向网站请求包含了恶意 JavaScript 脚本的页面；")]),t._v(" "),_("li",[t._v("当用户浏览该页面的时候，恶意脚本就会将用户的 Cookie 信息等数据上传到服务器。")])]),t._v(" "),_("blockquote",[_("p",[t._v("反射型 XSS 攻击")])]),t._v(" "),_("ul",[_("li",[t._v("用户将一段含有恶意代码的请求提交给 Web 服务器")]),t._v(" "),_("li",[t._v("Web 服务器接收到请求时，又将恶意代码反射给了浏览器端")])]),t._v(" "),_("blockquote",[_("p",[t._v("基于 DOM 的 XSS 攻击")])]),t._v(" "),_("p",[t._v("基于 DOM 的 XSS 攻击是不牵涉到页面 Web 服务器的。其原理就是修改页面中的DOM。")]),t._v(" "),_("h4",{attrs:{id:"如何阻止xss攻击"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何阻止xss攻击"}},[t._v("#")]),t._v(" 如何阻止XSS攻击")]),t._v(" "),_("p",[t._v("存储型 XSS 攻击和反射型 XSS 攻击都是需要经过 Web 服务器，这两种类型的漏洞是服务端的安全漏洞。\n而基于 DOM 的 XSS 攻击全部都是在浏览器端完成的，因此基于 DOM 的 XSS 攻击是属于前端的安全漏洞。")]),t._v(" "),_("h4",{attrs:{id:"常用的阻止-xss-攻击的策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用的阻止-xss-攻击的策略"}},[t._v("#")]),t._v(" 常用的阻止 XSS 攻击的策略")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("服务器对输入脚本进行过滤或转码")])]),t._v(" "),_("li",[_("p",[t._v("实施严格的 CSP 可以有效地防范 XSS 攻击，具体来讲 CSP 有如下几个功能")])])]),t._v(" "),_("ol",[_("li",[_("p",[t._v("限制加载其他域下的资源文件，这样即使黑客插入了一个 JavaScript 文件，这个 JavaScript 文件也是无法被加载的；")])]),t._v(" "),_("li",[_("p",[t._v("禁止向第三方域提交数据，这样用户数据也不会外泄；")])]),t._v(" "),_("li",[_("p",[t._v("禁止执行内联脚本和未授权的脚本；")])]),t._v(" "),_("li",[_("p",[t._v("还提供了上报机制，这样可以帮助我们尽快发现有哪些 XSS 攻击，以便尽快修复问题。")])])]),t._v(" "),_("ul",[_("li",[t._v("使用 HttpOnly 属性")])]),t._v(" "),_("ol",[_("li",[t._v("由于很多 XSS 攻击都是来盗用 Cookie 的，因此还可以通过使用 HttpOnly 属性来保护我们 Cookie 的安全。")]),t._v(" "),_("li",[t._v("使用 HttpOnly 标记的 Cookie 只能使用在 HTTP 请求过程中，所以无法通过 JavaScript 来读取这段 Cookie")])]),t._v(" "),_("h3",{attrs:{id:"csrf攻击"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#csrf攻击"}},[t._v("#")]),t._v(" CSRF攻击")]),t._v(" "),_("p",[t._v("Cross-site request forgery(跨站请求伪造)，指的是黑客引诱用户打开黑客的网站，在黑客的网站中，利用用户登录状态发起跨站请求。")]),t._v(" "),_("h4",{attrs:{id:"攻击流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#攻击流程"}},[t._v("#")]),t._v(" 攻击流程")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("用户发起登录请求，服务器返回一些登录状态给浏览器，这些信息包括了cookie,session等，这样用户在浏览器中就属于登录状态了。")])]),t._v(" "),_("li",[_("p",[t._v("接着，黑客通过各种手段去引诱用户打开他的链接，在黑客的链接中，黑客会编写好一个邮件过滤器，通过邮件网站提供的HTTP设置设置好新的邮件过滤功能。该过滤会将所有邮箱都转发到黑客的邮箱中。")])]),t._v(" "),_("li",[_("p",[t._v("最后，去服务商重置用户的密码。")])])]),t._v(" "),_("h4",{attrs:{id:"攻击方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#攻击方案"}},[t._v("#")]),t._v(" 攻击方案")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("自动发起get请求，将接口放到img标签中，加载页面时自动发起get请求.")])]),t._v(" "),_("li",[_("p",[t._v("自动发起post请求，直接提交一个表单。")])]),t._v(" "),_("li",[_("p",[t._v("引诱用户点击恶意链接。")])])]),t._v(" "),_("h3",{attrs:{id:"如何防止csrf攻击"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何防止csrf攻击"}},[t._v("#")]),t._v(" 如何防止CSRF攻击")]),t._v(" "),_("p",[t._v("发起CSRF的三个必要条件")]),t._v(" "),_("ul",[_("li",[t._v("目标站点一定有CSRF漏洞")]),t._v(" "),_("li",[t._v("用户要登录过目标站点，并且在浏览器上保持该站点的登录状态")]),t._v(" "),_("li",[t._v("需要用户打开一个第三方站点，可以是黑客站点，也可以是一些论坛。")])]),t._v(" "),_("p",[t._v("避免CSRF")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("充分利用好Cookie的SameSite属性：strict最为严格:完全禁止第三方cookie。Lax宽松:Get请求才会携带，None在任何情况下都会发送。")])]),t._v(" "),_("li",[_("p",[t._v("验证请求的来源站点：利用请求头中的 "),_("code",[t._v("referer")]),t._v(" 字段，该字段记录了该"),_("code",[t._v("http")]),t._v("请求的来源地址。Origin属性只包含了域名信息，并没有包含具体的URL路径，这是Origin和Referer的主要区别。")])]),t._v(" "),_("li",[_("p",[t._v("CSRF TOKEN：类似于JWT。")])])]),t._v(" "),_("h3",{attrs:{id:"csp常用设置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#csp常用设置"}},[t._v("#")]),t._v(" CSP常用设置")]),t._v(" "),_("ul",[_("li",[t._v("内容均来自同一站点："),_("code",[t._v("Content-Security-Policy: default-src 'self'")])]),t._v(" "),_("li",[t._v("允许内容来自信任的域名及其子域名: "),_("code",[t._v("Content-Security-Policy: default-src 'self' *.trusted.com")])]),t._v(" "),_("li",[t._v("允许网页应用的用户在他们自己的内容中包含来自任何源的图片："),_("code",[t._v("Content-Security-Policy: default-src 'self'; img-src *; media-src media1.com media2.com; script-src userscripts.example.com")])]),t._v(" "),_("li",[t._v("一个线上银行网站的管理者想要确保网站的所有内容都要通过SSL方式获取，以避免攻击者窃听用户发出的请求："),_("code",[t._v("Content-Security-Policy: default-src https://onlinebanking.jumbobank.com")])]),t._v(" "),_("li",[t._v("一个在线邮箱的管理者想要允许在邮件里包含HTML，同样图片允许从任何地方加载，但不允许JavaScript或者其他潜在的危险内容(从任意位置加载):"),_("code",[t._v("Content-Security-Policy: default-src 'self' *.mailsite.com; img-src *")])])]),t._v(" "),_("blockquote",[_("p",[t._v("对策略进行测试")])]),t._v(" "),_("p",[t._v("CSP可以部署为报告(report-only)模式。在此模式下，CSP策略不是强制性的，但是任何违规行为将会报告给一个指定的URI地址。此外，一个报告模式的头部可以用来测试一个修订后的未来将应用的策略而不用实际部署它。")]),t._v(" "),_("p",[_("code",[t._v("Content-Security-Policy-Report-Only: policy")])])])}),[],!1,null,null,null);v.default=s.exports}}]);