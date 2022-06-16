(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{475:function(s,a,t){"use strict";t.r(a);var e=t(11),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[s._v("#")]),s._v(" 事务")]),s._v(" "),t("blockquote",[t("p",[s._v("事务指的是满足 ACID 特性的一组操作，可以通过 Commit 提交一个事务，也可以使用 Rollback 进行回滚。")])]),s._v(" "),t("h4",{attrs:{id:"_1、事务的四个特性-acid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、事务的四个特性-acid"}},[s._v("#")]),s._v(" 1、事务的四个特性(ACID)")]),s._v(" "),t("h5",{attrs:{id:"_1-原子性-atomicity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-原子性-atomicity"}},[s._v("#")]),s._v(" ① 原子性(Atomicity)")]),s._v(" "),t("blockquote",[t("p",[s._v("事务被视为不可分割的最小单元，事务的所有操作要么全部提交成功，要么全部失败回滚。")])]),s._v(" "),t("ul",[t("li",[s._v("redo")])]),s._v(" "),t("h5",{attrs:{id:"_2-一致性-consistency"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-一致性-consistency"}},[s._v("#")]),s._v(" ② 一致性(Consistency)")]),s._v(" "),t("blockquote",[t("p",[s._v("数据库在事务执行前后都保持一致性状态。在一致性状态下，所有事务对同一个数据的读取结果都是相同的。")])]),s._v(" "),t("ul",[t("li",[s._v("undo")])]),s._v(" "),t("h5",{attrs:{id:"_3-隔离性-isolation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-隔离性-isolation"}},[s._v("#")]),s._v(" ③ 隔离性(Isolation)")]),s._v(" "),t("blockquote",[t("p",[s._v("一个事务所做的修改在最终提交以前，对其它事务是不可见的。")])]),s._v(" "),t("ul",[t("li",[s._v("lock")])]),s._v(" "),t("h5",{attrs:{id:"_4-持久性-durable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-持久性-durable"}},[s._v("#")]),s._v(" ④ 持久性(Durable)")]),s._v(" "),t("blockquote",[t("p",[s._v("一旦事务提交，则其所做的修改将会永远保存到数据库中。即使系统发生崩溃，事务执行的结果也不能丢失。")])]),s._v(" "),t("ul",[t("li",[s._v("redo & undo")])]),s._v(" "),t("h4",{attrs:{id:"_2-基本操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-基本操作"}},[s._v("#")]),s._v(" 2. 基本操作")]),s._v(" "),t("blockquote",[t("p",[s._v("不使用begin，然后rollback，不起作用，因为MySQL默认是自动提交(autocommit)")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" variables "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'autocommit'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------+-------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Variable_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Value")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------+-------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" autocommit    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------+-------+")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("开启事务")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("start")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transaction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("设置回滚保存点")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("savepoint")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("提交事务")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("commit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("回滚事务")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rollback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rollback")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#回滚到s1，事务还未完成，需要commit提交")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h4",{attrs:{id:"_3-分布式事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-分布式事务"}},[s._v("#")]),s._v(" 3. 分布式事务")]),s._v(" "),t("blockquote",[t("p",[s._v("在分布式环境下运行的扁平事务")]),s._v(" "),t("p",[s._v("每个事务都要符合ACID")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("例子")]),s._v(" "),t("p",[s._v("持卡人从工行银行的储蓄卡转账1000元到建设银行的账户里。")])])]),s._v(" "),t("h4",{attrs:{id:"_4-事务隔离级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-事务隔离级别"}},[s._v("#")]),s._v(" 4. 事务隔离级别")]),s._v(" "),t("blockquote",[t("p",[s._v("解决脏读、幻读、不可重复读")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("脏读：一个事务读到了另一个未提交事务修改过的数据")])]),s._v(" "),t("li",[t("strong",[s._v("不可重复读：一个事务修改了另一个未提交事务读取的数据")])]),s._v(" "),t("li",[t("strong",[s._v("幻读：一个事务先根据某些搜索条件查询出一些记录，在该事务未提交时，另一个事务写入了一些符合那些搜索条件的记录")])])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" variables "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tx_isolation'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------+-----------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Variable_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Value")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------+-----------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" tx_isolation  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPEATABLE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("READ")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------+-----------------+")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h5",{attrs:{id:"_1-未提交读-read-uncommitted"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-未提交读-read-uncommitted"}},[s._v("#")]),s._v(" ① 未提交读（READ UNCOMMITTED）")]),s._v(" "),t("blockquote",[t("p",[s._v("事务中的修改，即使没有提交，对其它事务也是可见的。")])]),s._v(" "),t("h5",{attrs:{id:"_2-提交读-read-committed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-提交读-read-committed"}},[s._v("#")]),s._v(" ② 提交读（READ COMMITTED）")]),s._v(" "),t("blockquote",[t("p",[s._v("一个事务只能读取已经提交的事务所做的修改。换句话说，一个事务所做的修改在提交之前对其它事务是不可见的。")])]),s._v(" "),t("h5",{attrs:{id:"_3-可重复读-repeatable-read"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-可重复读-repeatable-read"}},[s._v("#")]),s._v(" ③ 可重复读（REPEATABLE READ）")]),s._v(" "),t("blockquote",[t("p",[s._v("保证在同一个事务中多次读取同一数据的结果是一样的。")])]),s._v(" "),t("h5",{attrs:{id:"_4-可串行化-serializable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-可串行化-serializable"}},[s._v("#")]),s._v(" ④ 可串行化（SERIALIZABLE）")]),s._v(" "),t("blockquote",[t("p",[s._v("强制事务串行执行，这样多个事务互不干扰，不会出现并发一致性问题。")]),s._v(" "),t("p",[s._v("该隔离级别需要加锁实现，因为要使用加锁机制保证同一时间只有一个事务执行，也就是保证事务串行执行。")])]),s._v(" "),t("img",{staticStyle:{zoom:"40%"},attrs:{src:"/Users/lemoba/Library/Application Support/typora-user-images/image-20220314094306012.png",alt:"image-20220314094306012"}}),s._v(" "),t("h4",{attrs:{id:"_5-redo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-redo"}},[s._v("#")]),s._v(" 5. REDO")]),s._v(" "),t("blockquote",[t("p",[s._v("记录对页所做的修改")])]),s._v(" "),t("img",{staticStyle:{zoom:"40%"},attrs:{src:"/Users/lemoba/Library/Application Support/typora-user-images/image-20220313175531868.png",alt:"image-20220313175531868"}}),s._v(" "),t("img",{staticStyle:{zoom:"35%"},attrs:{src:"/Users/lemoba/Library/Application Support/typora-user-images/image-20220314105624271.png",alt:"image-20220314105624271"}}),s._v(" "),t("img",{staticStyle:{zoom:"35%"},attrs:{src:"/Users/lemoba/Library/Application Support/typora-user-images/image-20220314110901269.png",alt:"image-20220314110901269"}}),s._v(" "),t("img",{staticStyle:{zoom:"30%"},attrs:{src:"/Users/lemoba/Library/Application Support/typora-user-images/image-20220314111804769.png",alt:"image-20220314111804769"}}),s._v(" "),t("img",{staticStyle:{zoom:"35%"},attrs:{src:"/Users/lemoba/Library/Application Support/typora-user-images/image-20220314112556895.png",alt:"image-20220314112556895"}}),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" variables "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'innodb%log%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" variables "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'innodb%log%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("innodb_flush_log_at_trx_commit")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("= 0：写入缓存不刷新到磁盘中")])]),s._v(" "),t("li",[t("p",[s._v("= 1：innodb真正意义上达到持久性的标准，当一个事务进行提交了即使master thread没有进行刷新，redo log buffer使用率没有大于1/2，也会将重做日志持久化到硬盘中去")])]),s._v(" "),t("li",[t("p",[s._v("= 2：写入到操作系统缓存")])])])]),s._v(" "),t("li",[t("p",[s._v("redo和binlog的区别")]),s._v(" "),t("ul",[t("li",[s._v("binlog是逻辑日志，就是事务所提交的顺序，值在commit的时候记录")]),s._v(" "),t("li",[s._v("redo是物理日志，记录的page_no和space，每次操作都会记录")])])])]),s._v(" "),t("img",{staticStyle:{zoom:"30%"},attrs:{src:"/Users/lemoba/Library/Application Support/typora-user-images/image-20220314114347193.png",alt:"image-20220314114347193"}})])}),[],!1,null,null,null);a.default=r.exports}}]);