# 复制
## 1. 建立复制

* 在配置文件中加入slaveof {masterHost} {masterPort}
* 在redis-server启动命令后加入slaveof {masterHost} {masterPort}
* 在从节点中执行slaveof {masterHost} {masterPort}

## 2. 配置文件

```shell
# redis-6379.conf
requirepass "xxxx"
port 6379
daemonize yes
pidfile "/var/run/redis_6379.pid"
logfile "/Data/redis/log/redis-6379.log"
dbfilename "dump-6379.rdb"
dir "/Data/redis/data"
# Generated by CONFIG REWRITE


# redis-6382.conf
masterauth "xxxx"
port 6382
daemonize yes
pidfile "/var/run/redis_6382.pid"
logfile "/Data/redis/log/redis-6382.log"
dbfilename "dump-6382.rdb"
dir "/Data/redis/data"

# Generated by CONFIG REWRITE
slaveof 127.0.0.1 6379

# redis-server redis-6379.conf
# redis-server redis-6382.conf

# 在主节点查看复制状态信息
127.0.0.1:6379> info replication
# Replication
role:master
connected_slaves:1
slave0:ip=127.0.0.1,port=6382,state=online,offset=1072298,lag=1
master_replid:e4541f855ee0607c09d531cecb7084e10922826b
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:1072298
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:23723
repl_backlog_histlen:1048576


# 在从节点查看复制状态信息
127.0.0.1:6382> info replication
# Replication
role:slave
master_host:127.0.0.1
master_port:6379
master_link_status:up
master_last_io_seconds_ago:2
master_sync_in_progress:0
slave_repl_offset:1072368
slave_priority:100
slave_read_only:1
connected_slaves:0
...
```
## 3. 断开复制

> 在从节点执行salveof no one来断开复制

### 3.1 断开复制流程

**1. 断开与主节点的复制关系**

**2. 将从节点晋升为主节点**

```shell
127.0.0.1:6382> slaveof no one
```

### 3.2 切主流程

> 切主后从节点会清除以前的全部数据。

**1. 断开与旧主节点的复制关系**

**2. 与新主节点建立复制关系**

**3. 删除从节点当前全部数据**

**4. 对新主节点进行复制操作**

```shell
127.0.0.1:6382> slaveof 127.0.0.1 6383
```

### 3.3 安全性

* master: **requirepass** xxxxx
* salve: **masterauth** xxxx

### 3.4 只读与传输延迟

**1）只读**：默认情况下，从节点使用slave-read-only=yes来配置只读。因为复制只能从主节点到从节点，对于从节点的任何修改对于主节点都是无法感知，否则会造成主从数据不一致。

**2）传输延迟**：redis提供repl-disable-tcp-nodelay参数用于控制是否关闭TCP_NODELAY，默认为no

* no，主节点产生的命令数据无论多大都会及时地发送给从节点，增加了网络带宽的消耗，但降低了主从间的延迟，适用于主从之间网络环境良好的场景。
* yes，主节点会合并较小的tcp数据包，从而节省带宽。默认间隔为40ms。增大了主从间的延迟，但节省了带宽，适用于网络环境较为复杂的场景。

## 4. 拓扑

> redis的复制拓扑结构可以支持单层或多层复制关系

### 4.1 一主一从结构

### 4.1 一主多从结构

### 4.1 树状主从结构

## 5. 实现原理