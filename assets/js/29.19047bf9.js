(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{467:function(t,s,r){"use strict";r.r(s);var a=r(11),_=Object(a.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),r("h2",{attrs:{id:"_1-什么是消息中间件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是消息中间件"}},[t._v("#")]),t._v(" 1. 什么是消息中间件")]),t._v(" "),r("p",[r("strong",[t._v("消息(Message)")]),t._v("：在应用间传递的数据(文本、字符串、json、对象等)。")]),t._v(" "),r("p",[r("strong",[t._v("消息队列中间件（Message Queue Middleware 称为MQ）")]),t._v("：利用高效可靠的消息传递机制与平台无关的数据进行交流，并基于数据通信来进行分布式系统的集成。通过提供消息传 递和消息排队模型，它可以在分布式环境下扩展进程间的通信。")]),t._v(" "),r("p",[r("strong",[t._v("传递模式")])]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("点对点(p2p)模式")]),t._v("：基于队列，消息生产者发布消息到队列，消息消费者从队列接受消息，消息队列的存在使得消息传输成为异步的可能。")]),t._v(" "),r("li",[r("strong",[t._v("发布订阅(Pub/Sub)模式")]),t._v("：改模式定义了如何向一个内容节点发布和订阅消息，内容节点称为"),r("strong",[t._v("主题(topic)")]),t._v("，主题可以认为是消息传递的中介，消息发布者将消息发送至某一主题，而消息订阅者可以从主题中订阅消息。两者保持独立，多在一对多广播时采用。")])]),t._v(" "),r("h2",{attrs:{id:"_2-消息中间件的作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-消息中间件的作用"}},[t._v("#")]),t._v(" 2. 消息中间件的作用")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("解耦")]),t._v("：在服务两端插入一个隐藏的数据接口层，两边的处理过程都需要实现这一接口，并且可以独立扩展与实现不受对方约束只要遵循接口的规范就好。")]),t._v(" "),r("li",[r("strong",[t._v("冗余(存储)")]),t._v("：在某些情况下，数据处理可能会失败，MQ可以把数据进行持久化，直到它们完全被处理，避免了数据丢失的风险。在从MQ中删除消息之前，系统要确保该消息已经被处理完成。（总是能够保证最终一致性）")]),t._v(" "),r("li",[r("strong",[t._v("扩展性")]),t._v("：因为消息中间件解耦了应用的处理过程，所以提高消息入队和处理的效率是很容 易的，只要另外增加处理过程即可，不需要改变代码，也不需要调节参数。")]),t._v(" "),r("li",[r("strong",[t._v("削峰")]),t._v("：在访问量剧增的情况下，应用仍然需要继续发挥作用，但是这样的突发流量并不常 见。如果以能处理这类峰值为标准而投入资源，无疑是巨大的浪费。使用消息中间件能够使关 键组件支撑突发访问压力，不会因为突发的超负荷请求而完全崩溃。")]),t._v(" "),r("li",[r("strong",[t._v("可恢复性")]),t._v("：当系统一部分组件失效时，不会影响到整个系统。消息中间件降低了进程间的 耦合度，所以即使一个处理消息的进程挂掉，加入消息中间件中的消息仍然可以在系统恢复后 进行处理。")]),t._v(" "),r("li",[r("strong",[t._v("顺序保证")]),t._v("：在大多数使用场景下，数据处理的顺序很重要，大部分消息中间件支持一定程 度上的顺序性。")]),t._v(" "),r("li",[r("strong",[t._v("缓冲")]),t._v("：在任何重要的系统中，都会存在需要不同处理时间的元素。消息中间件通过一个缓 冲层来帮助任务最高效率地执行，写入消息中间件的处理会尽可能快速。该缓冲层有助于控制 和优化数据流经过系统的速度。")]),t._v(" "),r("li",[r("strong",[t._v("异步通信")]),t._v("：系统不需要立即处理消息，放入MQ中，等需要时再慢慢处理。")])]),t._v(" "),r("h2",{attrs:{id:"_3-安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装"}},[t._v("#")]),t._v(" 3. 安装")]),t._v(" "),r("div",{staticClass:"language-dockerfile line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[r("code",[t._v("docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 -d rabbitmq:3.10-management\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 管理页面 http://127.0.0.1:15672")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br")])])])}),[],!1,null,null,null);s.default=_.exports}}]);