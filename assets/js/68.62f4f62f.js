(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{509:function(s,t,a){"use strict";a.r(t);var n=a(11),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"跳表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跳表"}},[s._v("#")]),s._v(" 跳表")]),s._v(" "),a("blockquote",[a("p",[s._v("跳表(skiplist)是一种有序数据结构，它通过在每个节点中维持多个指向其他节点的指针，从而达到快速访问节点的目的。")]),s._v(" "),a("p",[s._v("时间复杂度：平均O(logN)  最快O(N)")])]),s._v(" "),a("p",[a("strong",[s._v("优点")])]),s._v(" "),a("p",[s._v("在大部分情况下，跳表的效率可以和平衡树相媲美，并且跳表的实现比平衡树来更简单。")]),s._v(" "),a("p",[a("strong",[s._v("应用")])]),s._v(" "),a("ul",[a("li",[s._v("Redis使用跳表来作为有序集合键的底层实现之一，如果一个有序集合包含的元素数量比较多，又或者有序集合中元素的成员(member)是比较长的字符串时，Redis就会使用跳表来作为有序集合键的底层实现。")]),s._v(" "),a("li",[s._v("集群节点中用作内部数据结构。")])]),s._v(" "),a("h2",{attrs:{id:"跳表的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跳表的实现"}},[s._v("#")]),s._v(" 跳表的实现")]),s._v(" "),a("blockquote",[a("p",[s._v("zskiplistNode用于表示跳表节点，zskiplist结构则用于保存跳表节点相关信息(节点数量，指向表头节点和表尾节点的指针 )")])]),s._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/20220517115403.png"}}),s._v(" "),a("ul",[a("li",[a("strong",[s._v("header")]),s._v("：指向跳跃表的表头节点")]),s._v(" "),a("li",[a("strong",[s._v("tail")]),s._v("：指向跳跃表的表尾节点")]),s._v(" "),a("li",[a("strong",[s._v("level")]),s._v("：跳表内，层数最大的那个节点的层数(不包括头节点)")]),s._v(" "),a("li",[a("strong",[s._v("length")]),s._v("：记录跳表的长度，也就是跳表包含的节点数(不包括头节点)")]),s._v(" "),a("li",[a("strong",[s._v("层")]),s._v("：用L1、L2...表示，每个层都带有两个属性，前进指针和跨度，前进指针用于访问位于表尾方向的其他节点，而跨度记录了当前节点与前进指针指向的节点间的距离")]),s._v(" "),a("li",[a("strong",[s._v("后退(backward)指针")]),s._v("：它执行当前节点的前一节点。在反向遍历时使用")]),s._v(" "),a("li",[a("strong",[s._v("分数(score)")]),s._v("：如1.0、2.0是节点所保存的分数。在跳表中，节点按各自所保存的分数从小到大排列")]),s._v(" "),a("li",[a("strong",[s._v("成员对象(obj)")]),s._v("：如o1、o2是节点所保存的成员对象")])]),s._v(" "),a("h3",{attrs:{id:"_1-跳表的节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-跳表的节点"}},[s._v("#")]),s._v(" 1 跳表的节点")]),s._v(" "),a("p",[a("strong",[s._v("代码实现")])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// redis.h")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("zskiplistNode")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 成员对象")]),s._v("\n    robj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 分值")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 后退指针")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("zskiplistNode")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("backward"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 层")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("zskiplistLevel")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 前进指针")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("zskiplistNode")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("forward"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 跨度")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" span"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" zskiplistNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[a("strong",[s._v("层")])]),s._v(" "),a("ul",[a("li",[s._v("跳表的level数组可以包含多个元素，每个元素都包含一个指向其他节点的指针，一般来说，层的数量越多，访问其他节点的速度就越快")]),s._v(" "),a("li",[s._v("在创建新跳表节点时，程序根据"),a("strong",[s._v("幂次定律")]),s._v('(越大的数出现的概率越小)，随机生成1-32的数作为level数组的大小，也就是层的"高度"')])]),s._v(" "),a("p",[a("strong",[s._v("前进指针")])]),s._v(" "),a("ul",[a("li",[s._v("每一层都有一个指向表尾方向的前进指针(level[i].forward)，用于从表头向表尾方向访问节点")]),s._v(" "),a("li",[s._v("如上图所示，遍历步骤如下：\n"),a("ul",[a("li",[s._v("迭代程序首先访问跳表的头结点，然后从L4的前进指针移动到第二个节点")]),s._v(" "),a("li",[s._v("在第二个结点，程序沿着L2的前进指针移动到第三个节点")]),s._v(" "),a("li",[s._v("在第三个节点，程序沿着L2的前进指针移动到第四个节点")]),s._v(" "),a("li",[s._v("直到遇到NULL则表示已遍历至表尾")])])])]),s._v(" "),a("p",[a("strong",[s._v("跨度")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("层的跨度(level[i].span属性)用于记录两节点间的距离：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("两个节点间的跨度越大，它们相距得就越远")])]),s._v(" "),a("li",[a("p",[s._v("指向 NULL的所有前进指针的跨度都为0")])])])]),s._v(" "),a("li",[a("p",[s._v("跨度与遍历操作无关，它是用来计排位(rank)的：在查找某个节点的过程中，将沿途访问过的所有层的跨度累计起来，就能得到目标节点在跳表中的排位")])])]),s._v(" "),a("p",[a("strong",[s._v("后退指针")])]),s._v(" "),a("p",[s._v("后退指针用于从表尾向表头方向访问节点：跟前进指针一次可以跳过多个节点不一样，后退指针一次只能后退一个节点")]),s._v(" "),a("p",[a("strong",[s._v("分值和成员")])]),s._v(" "),a("ul",[a("li",[s._v("节点的分值(score)是一个double类型的浮点数，跳表中的所有节点都按分值从小到大排序的")]),s._v(" "),a("li",[s._v("节点的成员对象(obj属性)是一个指针，它执行一个字符串对象，而字符串对象则保存着一个SDS值")]),s._v(" "),a("li",[s._v("在同一个跳表中，各节点保存的成员对象必须是唯一的，但是多个节点保存的分值却可以是相同的："),a("strong",[s._v("分值相同")]),s._v("的节点将按照成员对象在"),a("strong",[s._v("字典序")]),s._v("中的大小来进行"),a("strong",[s._v("排序")])])]),s._v(" "),a("h3",{attrs:{id:"_2-跳表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-跳表"}},[s._v("#")]),s._v(" 2 跳表")]),s._v(" "),a("p",[a("strong",[s._v("代码实现")])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("zskiplist")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 表头节点和表尾节点")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("zskiplistNode")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("tail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 表中节点的数量")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 表中层数最大的节点的层数")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" zskiplist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("ul",[a("li",[s._v("header和tail指针分别指向跳表的表头和表尾结节点，可通过O(1)的复杂度快速定位到表头和表尾")]),s._v(" "),a("li",[s._v("length属性记录节点的数量，O(1)复杂度内获取跳表长度")]),s._v(" "),a("li",[s._v("level属性在O(1)复杂度内获取跳表中层高最大的那个节点的层数量(不含头节点)")])])])}),[],!1,null,null,null);t.default=e.exports}}]);