(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{459:function(s,t,n){"use strict";n.r(t);var a=n(11),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"docker的存储"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker的存储"}},[s._v("#")]),s._v(" docker的存储")]),s._v(" "),n("blockquote",[n("p",[s._v("默认情况下，在运行中的容器里创建的文件，被保存在一个可写的容器层：")])]),s._v(" "),n("ul",[n("li",[s._v("如果容器被删除，则数据也没有了")]),s._v(" "),n("li",[s._v("这个可写的容器层是和特定的容器绑定的，也就是这些数据无法方便的和其他容器共享")])]),s._v(" "),n("p",[n("strong",[s._v("Docker主要提供了两种方式做数据的持久化")])]),s._v(" "),n("ul",[n("li",[s._v("Data Volume：由Docker管理 (/var/lib/docker/volumes/Liunx)，持久化数据的最好方式")]),s._v(" "),n("li",[s._v("Bind Mount：由用户指定存储的数据具体mount在系统什么位置")])]),s._v(" "),n("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220317123300709.png"}}),s._v(" "),n("p",[n("strong",[s._v("命令")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" volume "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" volume inspece "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("VOLUMENNAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -v 设置volume")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -v cron-data:/app my-cron\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("strong",[s._v("安装mysql5.7")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull mysql:5.7\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" container run --name some-mysql -e "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root -d -v mysql-data:/var/lib/mysql mysql:5.7\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("strong",[s._v("多个机器之间的容器共享数据")])]),s._v(" "),n("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220317164441701.png"}})])}),[],!1,null,null,null);t.default=e.exports}}]);