# 一条SQL是如何执行的

## 1. MySQL架构

<img src="https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/20220601144346.png" style="zoom:50%;" />

**Mysql可以分为Server层和存储引擎层两部分**

### 1.1 Server层

> 覆盖MySQL的大多数核心服务功能，以及所有的内置函数(如日期、时间、数学和加密函数等)，所有跨存储引擎的功能都在这一层实现，比如存储过程、触发器、视图等。

* **连接器**：负责与客户端建立连接、获取权限、维持和管理连接。

```shell
mysql -h$ip -P$port -u$user -p
mysql -u root -p
```

* **查询缓存**：当MySQL拿到一个查询请求后，会先到查询缓存看看，之前是不是执行过这条语句。之前执行过的语句及其结果可能会以key-value缓存在内存中。**查询缓存的失效非常频繁，因为只要对一个表更新，则这个表上所有的查询缓存都会被清空。**
* **分析器**：分析器先会做词法分析并键关键字提取出来。
* **优化器**：在表中有多个索引的时候，决定使用哪个索引；或者在一个语句有多表关联的时候，决定各个表的顺序。
* **执行器**：首先会判断你对这个表是否有查询的权限，如果没有则返回权限错误，如果有权限，就继续执行并根据表的引擎定义，去使用这个引擎提供的接口。

### 1.2 存储引擎层

> 负责数据的存储和读取，采用插件式架构模式

支持InnoDB、MyISAM、Memory等多个存储引擎。MySQL5.5.5版本之后变成了默认的存储引擎。建表时如果不指定则默认使用InnoDB。



