const { title } = require("../.vuepress/config");
module.exports = [
  {
    title: "Redis开发与运维",
    collapsable: true,
    children: [
      { title: "安装", path: "/redis/redis-devops/1-install"},
      { title: "持久化", path: "/redis/redis-devops/2-persistence"},
      { title: "复制", path: "/redis/redis-devops/3-replication"},
      { title: "哨兵", path: "/redis/redis-devops/4-sentinel"},
    ]
  },
  {
    title: "Redis45讲",
    collapsable: true,
    children: [
      { title: "基本架构", path: "/redis/redis-45/1-basic"},
      { title: "缓存异常", path: "/redis/redis-45/25-exception-cache"},
    ]
  },
  {
    title: "Redis设计与实现",
    collapsable: true,
    children: [
      { title: "简单动态字符串", path: "/redis/redis-design/1-sds"},
      { title: "链表", path: "/redis/redis-design/2-linkedlist" },
      { title: "字典", path: "/redis/redis-design/3-dict" },
      { title: "跳表", path: "/redis/redis-design/4-skiplist" },
      { title: "整数集合", path: "/redis/redis-design/5-intset" },
      { title: "压缩列表", path: "/redis/redis-design/6-ziplist" },
      { title: "对象", path: "/redis/redis-design/7-object" },
      { title: "数据库", path: "/redis/redis-design/8-database" },
    //   { title: "RDB持久化", path: "/redis/redis-design/sds" },
    //   { title: "AOF持久化", path: "/redis/redis-design/sds" },
    //   { title: "事件", path: "/redis/redis-design/sds" },
    //   { title: "客户端", path: "/redis/redis-design/sds" },
    //   { title: "服务器", path: "/redis/redis-design/sds" },
    //   { title: "复制", path: "/redis/redis-design/sds" },
    //   { title: "哨兵", path: "/redis/redis-design/sds" },
    //   { title: "集群", path: "/redis/redis-design/sds" },
    //   { title: "发布与订阅", path: "/redis/redis-design/sds" },
    //   { title: "事务", path: "/redis/redis-design/sds" },
    //   { title: "Lua脚本", path: "/redis/redis-design/sds" },
    //   { title: "排序", path: "/redis/redis-design/sds" },
    //   { title: "二进制位数组", path: "/redis/redis-design/sds" },
    //   { title: "慢查询日志", path: "/redis/redis-design/sds" },
    //   { title: "监视器", path: "/redis/redis-design/sds" },
    ],
  },
  
];