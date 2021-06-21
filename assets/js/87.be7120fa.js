(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{438:function(_,v,t){"use strict";t.r(v);var i=t(25),l=Object(i.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"js核心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js核心"}},[_._v("#")]),_._v(" JS核心")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/FmL7nI.png",alt:"img"}})]),_._v(" "),t("p",[_._v("js的几大核心问题")]),_._v(" "),t("h2",{attrs:{id:"解释执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解释执行"}},[_._v("#")]),_._v(" 解释执行")]),_._v(" "),t("ul",[t("li",[_._v("代码编译阶段\n"),t("ul",[t("li",[_._v("编译器\n"),t("ul",[t("li",[_._v("高级语言")]),_._v(" "),t("li",[_._v("汇编指令集")]),_._v(" "),t("li",[_._v("机器码")])])]),_._v(" "),t("li",[_._v("编译器\n"),t("ul",[t("li",[_._v("词法分析和语法分析生成AST")]),_._v(" "),t("li",[_._v("语义分析生成中间代码")]),_._v(" "),t("li",[_._v("代码优化生成二进制文件")]),_._v(" "),t("li",[_._v("直接执行二进制文件")])])]),_._v(" "),t("li",[_._v("解释器\n"),t("ul",[t("li",[_._v("词法分析和语法分析生成AST")]),_._v(" "),t("li",[_._v("语义分析生成字节码")]),_._v(" "),t("li",[_._v("解释执行")])])])])]),_._v(" "),t("li",[_._v("V8执行代码阶段\n"),t("ul",[t("li",[_._v("生成抽象语法树(AST)和执行上下文（编译阶段）\n"),t("ul",[t("li",[_._v("使用编译器")]),_._v(" "),t("li",[_._v("分词")]),_._v(" "),t("li",[_._v("解析")])])]),_._v(" "),t("li",[_._v("生成字节码\n"),t("ul",[t("li",[_._v("ast")]),_._v(" "),t("li",[_._v("机器码")])])]),_._v(" "),t("li",[_._v("执行代码\n"),t("ul",[t("li",[_._v("使用解释器")]),_._v(" "),t("li",[_._v("热点代码的缓存")])])])])])]),_._v(" "),t("h2",{attrs:{id:"作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[_._v("#")]),_._v(" 作用域")]),_._v(" "),t("ul",[t("li",[_._v("全局作用域")]),_._v(" "),t("li",[_._v("函数作用域\n"),t("ul",[t("li",[_._v("执行上下文")]),_._v(" "),t("li",[_._v("词法作用域")])])]),_._v(" "),t("li",[_._v("块级作用域")]),_._v(" "),t("li",[_._v("闭包")]),_._v(" "),t("li",[_._v("作用域链")])]),_._v(" "),t("h2",{attrs:{id:"原型链"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[_._v("#")]),_._v(" 原型链")]),_._v(" "),t("h2",{attrs:{id:"事件循环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[_._v("#")]),_._v(" 事件循环")]),_._v(" "),t("h2",{attrs:{id:"垃圾回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收"}},[_._v("#")]),_._v(" 垃圾回收")]),_._v(" "),t("ul",[t("li",[_._v("栈空间\n"),t("ul",[t("li",[_._v("执行状态指针")])])]),_._v(" "),t("li",[_._v("堆空间\n"),t("ul",[t("li",[_._v("新生代\n"),t("ul",[t("li",[_._v("swap")]),_._v(" "),t("li",[_._v("对象晋升")])])]),_._v(" "),t("li",[_._v("老生代\n"),t("ul",[t("li",[_._v("标记清除法")]),_._v(" "),t("li",[_._v("引用计数法")]),_._v(" "),t("li",[_._v("内存整理")])])])])])]),_._v(" "),t("p",[_._v("垃圾回收算法有多种，我们从 "),t("code",[_._v("吞吐量 throughput")]),_._v(",  "),t("code",[_._v("最大暂停时间")]),_._v(", "),t("code",[_._v("堆使用效率")]),_._v(", "),t("code",[_._v("访问的局部性")]),_._v("来评测算法的好坏。")]),_._v(" "),t("h3",{attrs:{id:"标记-清除算法（-mark-sweep-gc）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标记-清除算法（-mark-sweep-gc）"}},[_._v("#")]),_._v(" 标记-清除算法（ Mark-Sweep GC）")]),_._v(" "),t("p",[_._v("标记清除法分两个阶段：")]),_._v(" "),t("ul",[t("li",[_._v("标记阶段：从根集合出发，将所有活动对象及其子对象打上标记")]),_._v(" "),t("li",[_._v("清除阶段：遍历堆，将非活动对象（未打上标记）的连接到空闲链表上")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/nmF8wj.png",alt:"img"}})]),_._v(" "),t("p",[_._v("优点：")]),_._v(" "),t("p",[_._v("实现简单， 容易和其他算法组合")]),_._v(" "),t("p",[_._v("缺点：")]),_._v(" "),t("ul",[t("li",[_._v("碎片化， 会导致无数小分块散落在堆的各处")]),_._v(" "),t("li",[_._v("分配速度不理想，每次分配都需要遍历空闲列表找到足够大的分块")]),_._v(" "),t("li",[_._v("与写时复制技术不兼容，因为每次都会在活动对象上打上标记")])]),_._v(" "),t("h3",{attrs:{id:"标记-压缩（mark-compact）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标记-压缩（mark-compact）"}},[_._v("#")]),_._v(" 标记-压缩（Mark-Compact）")]),_._v(" "),t("p",[_._v("和“标记－清除”相似，不过在标记阶段后它将所有活动对象紧密的排在堆的一侧（压缩），消除了内存碎片，不过压缩是需要花费计算成本的。如下图过程，标记后需要定位各个活动对象的新内存地址，然后再移动对象，总共搜索了3次堆。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/z0sV6k.png",alt:"img"}})]),_._v(" "),t("p",[_._v("有效利用了堆，不会出现内存碎片 也不会像复制算法那样只能利用堆的一部分")]),_._v(" "),t("p",[_._v("压缩过程的开销，需要多次搜索堆")]),_._v(" "),t("h3",{attrs:{id:"引用计数-reference-counting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用计数-reference-counting"}},[_._v("#")]),_._v(" 引用计数 Reference Counting")]),_._v(" "),t("p",[_._v("引用计数，就是记录每个对象被引用的次数，每次新建对象、赋值引用和删除引用的同时更新计数器，如果计数器值为0则直接回收内存。 很明显，引用计数最大的优势是暂停时间短")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("优点")]),_._v(" "),t("ul",[t("li",[_._v("可即刻回收垃圾")]),_._v(" "),t("li",[_._v("最大暂停时间短")]),_._v(" "),t("li",[_._v("没有必要沿指针查找，不要和标记-清除算法一样沿着根集合开始查找")])])]),_._v(" "),t("li",[t("p",[_._v("缺点")]),_._v(" "),t("ul",[t("li",[_._v("计数器的增减处理繁重")]),_._v(" "),t("li",[_._v("计数器需要占用很多位")]),_._v(" "),t("li",[_._v("实现繁琐复杂， 每个赋值操作都得替换成引用更新操作")]),_._v(" "),t("li",[_._v("循环引用无法回收")])])])]),_._v(" "),t("h3",{attrs:{id:"gc复制算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc复制算法"}},[_._v("#")]),_._v(" GC复制算法")]),_._v(" "),t("p",[_._v("将堆分为两个大小相同的空间 From 和 To， 利用 From 空间进行分配，当 From 空间满的时候，GC将其中的活动对象复制到 To 空间，之后将两个空间互换即完成GC。")]),_._v(" "),t("ul",[t("li",[_._v("优点\n"),t("ul",[t("li",[_._v("优秀的吞吐量， 只需要关心活动对象")]),_._v(" "),t("li",[_._v("可实现高速分配； 因为分块是连续的，不需要使用空闲链表")]),_._v(" "),t("li",[_._v("不会发生碎片化")]),_._v(" "),t("li",[_._v("与缓存兼容")])])]),_._v(" "),t("li",[_._v("缺点\n"),t("ul",[t("li",[_._v("堆使用率低")]),_._v(" "),t("li",[_._v("需要空间大")]),_._v(" "),t("li",[_._v("递归调用函数， 复制子对象需要递归调用复制函数消耗栈")])])])]),_._v(" "),t("h3",{attrs:{id:"三色标记算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三色标记算法"}},[_._v("#")]),_._v(" 三色标记算法")]),_._v(" "),t("ul",[t("li",[_._v("白色： 没有检查")]),_._v(" "),t("li",[_._v("灰色： 自身被检查了，成员没被检查完（可以认为访问到了，但是正在被检查，就是遍历里那些在队列中的节点）")]),_._v(" "),t("li",[_._v("黑色： 自身和成员都被检查完了")])]),_._v(" "),t("p",[_._v("根查找阶段： 对能直接从根引用的对象打上标记，堆放到标记栈里（白色 涂成 灰色）\n标记阶段： 从标记栈中取出对象，将其子对象涂成灰色；这个阶段不是一下子处理所有的灰色对象，而只是处理一定个数，然后暂停gc\n清除阶段： 将没被标记的白色对象连接到空闲链表，并重置已标记的对象标记位")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/Ws6vCZ.png",alt:"img"}}),_._v(" "),t("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/Lf382t.png",alt:"img"}}),_._v(" "),t("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/qDWHNH.png",alt:"img"}})]),_._v(" "),t("p",[_._v("优点： 缩短最大暂停时间\n缺点： 降低了吞吐量")]),_._v(" "),t("h2",{attrs:{id:"this指向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#this指向"}},[_._v("#")]),_._v(" this指向")]),_._v(" "),t("ul",[t("li",[_._v("call")]),_._v(" "),t("li",[_._v("bind")]),_._v(" "),t("li",[_._v("apply")]),_._v(" "),t("li",[_._v("箭头函数")])])])}),[],!1,null,null,null);v.default=l.exports}}]);