(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{512:function(s,a,t){"use strict";t.r(a);var e=t(11),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制"}},[s._v("#")]),s._v(" 复制")]),s._v(" "),t("h2",{attrs:{id:"_1-建立复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-建立复制"}},[s._v("#")]),s._v(" 1. 建立复制")]),s._v(" "),t("ul",[t("li",[s._v("在配置文件中加入slaveof {masterHost} {masterPort}")]),s._v(" "),t("li",[s._v("在redis-server启动命令后加入slaveof {masterHost} {masterPort}")]),s._v(" "),t("li",[s._v("在从节点中执行slaveof {masterHost} {masterPort}")])]),s._v(" "),t("h2",{attrs:{id:"_2-配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置文件"}},[s._v("#")]),s._v(" 2. 配置文件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-6379.conf")]),s._v("\nrequirepass "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxx"')]),s._v("\nport "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\ndaemonize "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\npidfile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/run/redis_6379.pid"')]),s._v("\nlogfile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Data/redis/log/redis-6379.log"')]),s._v("\ndbfilename "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dump-6379.rdb"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Data/redis/data"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Generated by CONFIG REWRITE")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-6382.conf")]),s._v("\nmasterauth "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxx"')]),s._v("\nport "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6382")]),s._v("\ndaemonize "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\npidfile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/run/redis_6382.pid"')]),s._v("\nlogfile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Data/redis/log/redis-6382.log"')]),s._v("\ndbfilename "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dump-6382.rdb"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Data/redis/data"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Generated by CONFIG REWRITE")]),s._v("\nslaveof "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-server redis-6379.conf")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-server redis-6382.conf")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在主节点查看复制状态信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" info replication\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Replication")]),s._v("\nrole:master\nconnected_slaves:1\nslave0:ip"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1,port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6382")]),s._v(",state"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("online,offset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1072298")]),s._v(",lag"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nmaster_replid:e4541f855ee0607c09d531cecb7084e10922826b\nmaster_replid2:0000000000000000000000000000000000000000\nmaster_repl_offset:1072298\nsecond_repl_offset:-1\nrepl_backlog_active:1\nrepl_backlog_size:1048576\nrepl_backlog_first_byte_offset:23723\nrepl_backlog_histlen:1048576\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在从节点查看复制状态信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:638"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" info replication\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Replication")]),s._v("\nrole:slave\nmaster_host:127.0.0.1\nmaster_port:6379\nmaster_link_status:up\nmaster_last_io_seconds_ago:2\nmaster_sync_in_progress:0\nslave_repl_offset:1072368\nslave_priority:100\nslave_read_only:1\nconnected_slaves:0\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br")])]),t("h2",{attrs:{id:"_3-断开复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-断开复制"}},[s._v("#")]),s._v(" 3. 断开复制")]),s._v(" "),t("blockquote",[t("p",[s._v("在从节点执行salveof no one来断开复制")])]),s._v(" "),t("h3",{attrs:{id:"_3-1-断开复制流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-断开复制流程"}},[s._v("#")]),s._v(" 3.1 断开复制流程")]),s._v(" "),t("p",[t("strong",[s._v("1. 断开与主节点的复制关系")])]),s._v(" "),t("p",[t("strong",[s._v("2. 将从节点晋升为主节点")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:638"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" slaveof no one\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3-2-切主流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-切主流程"}},[s._v("#")]),s._v(" 3.2 切主流程")]),s._v(" "),t("blockquote",[t("p",[s._v("切主后从节点会清除以前的全部数据。")])]),s._v(" "),t("p",[t("strong",[s._v("1. 断开与旧主节点的复制关系")])]),s._v(" "),t("p",[t("strong",[s._v("2. 与新主节点建立复制关系")])]),s._v(" "),t("p",[t("strong",[s._v("3. 删除从节点当前全部数据")])]),s._v(" "),t("p",[t("strong",[s._v("4. 对新主节点进行复制操作")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:638"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" slaveof "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6383")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3-3-安全性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-安全性"}},[s._v("#")]),s._v(" 3.3 安全性")]),s._v(" "),t("ul",[t("li",[s._v("master: "),t("strong",[s._v("requirepass")]),s._v(" xxxxx")]),s._v(" "),t("li",[s._v("salve: "),t("strong",[s._v("masterauth")]),s._v(" xxxx")])]),s._v(" "),t("h3",{attrs:{id:"_3-4-只读与传输延迟"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-只读与传输延迟"}},[s._v("#")]),s._v(" 3.4 只读与传输延迟")]),s._v(" "),t("p",[t("strong",[s._v("1）只读")]),s._v("：默认情况下，从节点使用slave-read-only=yes来配置只读。因为复制只能从主节点到从节点，对于从节点的任何修改对于主节点都是无法感知，否则会造成主从数据不一致。")]),s._v(" "),t("p",[t("strong",[s._v("2）传输延迟")]),s._v("：redis提供repl-disable-tcp-nodelay参数用于控制是否关闭TCP_NODELAY，默认为no")]),s._v(" "),t("ul",[t("li",[s._v("no，主节点产生的命令数据无论多大都会及时地发送给从节点，增加了网络带宽的消耗，但降低了主从间的延迟，适用于主从之间网络环境良好的场景。")]),s._v(" "),t("li",[s._v("yes，主节点会合并较小的tcp数据包，从而节省带宽。默认间隔为40ms。增大了主从间的延迟，但节省了带宽，适用于网络环境较为复杂的场景。")])]),s._v(" "),t("h2",{attrs:{id:"_4-拓扑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-拓扑"}},[s._v("#")]),s._v(" 4. 拓扑")]),s._v(" "),t("blockquote",[t("p",[s._v("redis的复制拓扑结构可以支持单层或多层复制关系")])]),s._v(" "),t("h3",{attrs:{id:"_4-1-一主一从结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-一主一从结构"}},[s._v("#")]),s._v(" 4.1 一主一从结构")]),s._v(" "),t("h3",{attrs:{id:"_4-1-一主多从结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-一主多从结构"}},[s._v("#")]),s._v(" 4.1 一主多从结构")]),s._v(" "),t("h3",{attrs:{id:"_4-1-树状主从结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-树状主从结构"}},[s._v("#")]),s._v(" 4.1 树状主从结构")]),s._v(" "),t("h2",{attrs:{id:"_5-实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-实现原理"}},[s._v("#")]),s._v(" 5. 实现原理")])])}),[],!1,null,null,null);a.default=n.exports}}]);