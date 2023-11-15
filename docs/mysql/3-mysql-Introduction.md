# MySql精华总结[转自掘金](https://juejin.cn/post/6850037271233331208#heading-68)

## 一、 MySQL架构

和其他数据库相比，MySQL有点与众不同，他的架构可以在多种不同场景中应用并发挥良好作用。主要体现在存储引擎的架构上，**插件式的存储引擎架构查询处理和其他的系统任务以及数据库的存储提取相分离**。这种架构可以根据业务的需求和实际需要选择合适的存储引擎。

* **连接层**：最上层是一些客户端和连接服务。**主要完成一些类似于连接处理、授权认证、及相关的安全方案。**在改层上引入了线程池的概念，为通过认证安全接入的客户端提供线程。同样在改层上可以实现基于SSL的安全连接。服务器也会为安全接入的每个客户端验证它所具有的操作权限。
* **服务层**：第二层服务层，主要完成大部分的核心服务功能，包括查询解析，分析、优化、缓存、以及所有的内置函数，苏欧欧跨存储引擎的功能也都在这一层实现，包括触发器、存储过程、视图等。
* **引擎层**：第三层存储引擎层，存储引擎真正的负责了MySQL中数据的存储和提取，服务器通过API与存储引擎通信。不同的存储引擎具有的功能不同，这样我们可以根据自己的实际需要进行选取。
* **存储层**：第四层为数据存储层，主要是将数据存储在运行改设备的文件系统之上，并完成与存储引擎的交互。

> 画出MySQL架构图
>
> MySQL的查询具体流程是？or一条SQL语句在MySQL中如何执行的？

**执行流程**

* 客户端请求
* 连接器(验证用户身份，给予权限)  
* 查询缓存(存在缓存则直接返回，不存在则执行后续操作) 
* 分析器(对SQL进行分析和语法分析操作) 
* 优化器(主要对执行的SQL优化选择最优的执行方案方法) 
* 执行器(执行时会看到用户是否有执行权限，有才去使用这个引擎提供的接口) 
* 去引擎层获取数据返回(如果开启查询缓存则会缓存查询结果)

> 说说MySQL有哪些存储引擎？都有哪些区别？

## 二、存储引擎

存储引擎是MySQL的组件，用于处理不同表类型的SQL操作。不同的存储引擎提供不同的存储机制、索引技巧、锁定水平等功能，使用不同的存储引擎，还可以获得指定的功能。

使用哪一种引擎可以灵活选择，**一个数据库中多个表可以使用不同的引擎以满足各种性能和实际需求**，使用合适的存储引擎，将会提高整个数据库的性能。

MySQL服务器使用**可拔插**的存储引擎体系结构，可以从运行中的MySQL服务器加载和卸载存储引擎。

### 1. 查看存储引擎

```sql
-- 查看支持的存储引擎
SHOW ENGINES

-- 查看默认存储引擎
SHOW VARIABLES LIKE 'storage_engine'

--查看具体某一个表所使用的存储引擎，这个默认存储引擎被修改了！
show create table tablename

--准确查看某个数据库中的某一表所使用的存储引擎
show table status like 'tablename'
show table status from database where name="tablename"

```

### 2. 设置存储引擎

```sql
-- 建表时指定存储引擎。默认的就是INNODB，不需要设置
CREATE TABLE t1 (i INT) ENGINE = INNODB;
CREATE TABLE t2 (i INT) ENGINE = CSV;
CREATE TABLE t3 (i INT) ENGINE = MEMORY;

-- 修改存储引擎
ALTER TABLE t ENGINE = InnoDB;

-- 修改默认存储引擎，也可以在配置文件my.cnf中修改默认引擎
SET default_storage_engine=NDBCLUSTER;
```

默认情况下，每当CREATE_TABLE或ALTER TABLE 不能使用默认存储引擎时，都会生成一个警告。为了防止在所需的引擎不可用时出现令人困惑的以外行为，可以启用NO_ENGIN_SUBSTITUTION SQL模式。如果所需的引擎不可用，则此设置将产生错误而不是警告，并且不会创建或更改表。

### 3. 存储引擎对比

常见的存储引擎有InnoDB、MyISAM、Memory、NDB

InnoDB现在是MySQL默认的存储引擎，支持**事务、行级锁定和外键**

#### 3.1 文件存储结构对比

在MySQL中建立任何一张数据表，在其数据目录对应的数据目录都有对应表的.frm文件, .frm文件是用来保存每个数据表的元数据(meta)信息，包括表结构的定义等，与数据库存储引擎无关，也就是任何存储引擎的数据表都必须有.frm文件，命名方式为数据表.frm，如user.frm。

查看MySQL数据保存在哪里：*show variables like 'data%'*

**MyISAM物理文件结构为：**

* .frm文件：与表相关的元数据信息都存放在frm文件，包括表结构的定义信息等
* .MYD(MYData)文件：MyISAM存储引擎专用，用于存储MyISAM表的数据
* .MYI(MYIndex)文件：MyISAM存储引擎专用，用于存储MyISAM表的索引相关信息

**InnoDB物理文件：**

* .frm文件：与表相关的源数据信息都存放在frm文件，包括表结构的定义信息等
* .ibd文件或.ibdata文件：这两种文件都是存放InnoDB数据的文件，之所以有两种文件形式存放InnoDB的数据，是因为InnoDB的数据存储方式能够通过配置来决定是使用**共享表空间存放存储数据**，还是使用**独享表空间**存放存储数据。

独享表空间存储方式使用.ibd文件，并且每个表一个.ibd文件共享表空间存储方式使用.ibdata文件，所有表共同使用一个.ibdata文件(或多个，可自己配置)

#### 3.2 面试回答

* InnoDB支持事务，MyISAM不支持事务。这是MySQL将默认存储引擎从MyISAM变成InnoDB的重要原因之一
* InnoDB支持外键，而MyISAM不支持。对一个包含外键的InnoDB表转为MYISAM会失败。
* InnoDB是聚簇索引，MyISAM是非聚簇索引。聚簇索引的文件存放在主键索引的叶子结点上，因此InnoDB必须要有主键，通过主键索引效率很高。但是辅助索引需要两次查询，先查询到主键，然后通过主键查询到数据。因此，主键不应该过大，因为主键太大，其他索引也会很大。而MyISAM是非聚集索引，数据文件是分离的，索引保存的是数据文件的指针。主键索引和辅助索引是独立的。
* InnoDB不保存表的具体行数，执行 select count(*) from table 是需要全表扫描。而MyISAM用一个变量保存了整个表的行数，执行上述语句时只需要读出改变量即可，速度很快。
* InnoDB最小的锁粒度是行锁。MyISAM最小的锁粒度是表锁，一个更新语句会锁住整张表，导致其他查询和更新都被阻塞，因此并发访问受限。这也是MySQL将默认存储引擎从MyISAM变成InnoDB的重要原因之一。

<table>
    <tr>
        <th>对比项</th>
        <th>MyISAM</th>
        <th>InnoDB</th>
    </tr>
    <tr>
    	<th>主外键</th>
        <th>不支持</th>
        <th>支持</th>
    </tr>
     <tr>
    	<th>事务</th>
        <th>不支持</th>
        <th>支持</th>
    </tr>
     <tr>
    	<th>行表锁</th>
        <th>表锁，即使操作一条记录也会锁住整个表，不适合高并发的操作</th>
        <th>行锁,操作时只锁某一行，不对其它行有影响，适合高并发的操作</th>
    </tr>
    <tr>
    	<th>缓存</th>
        <th>只缓存索引，不缓存真实数据</th>
        <th>不仅缓存索引还要缓存真实数据，对内存要求较高，而且内存大小对性能有决定性的影响</th>
    </tr>
    <tr>
    	<th>表空间</th>
        <th>小</th>
        <th>大</th>
    </tr>
     <tr>
    	<th>关注点</th>
        <th>性能</th>
        <th>事务</th>
    </tr>
     <tr>
    	<th>默认安装</th>
        <th>是</th>
        <th>是</th>
    </tr>
</table>


> 一张表，里面有ID自增主键，当insert了17条记录之后，删除第15，16,17条记录，再把MySQL重启，在insert一条记录，这条记录的ID多少？

如果表的引擎是MyISAM，那么是18。因为MyISAM会把自增主键的最大ID记录到数据文件中，重启MySQL自增主键的最大ID也不会丢失。

如果表的引擎是InnoDB，那么是15。因为InnoDB表只是把自增主键的最大ID记录到内存中，所以重启数据库或对表进行OPTION操作，都会导致最大ID丢失。

> 哪个存储引擎执行select count(*) 更快，为什么？

MyISAM更快，因为MyISAM内部维护了一个计数器，可以直接调取。

* 在MyISAM存储引擎中，把表的总行数存储在磁盘上，当执行select count(*) from t时，直接返回总数据。
* 在InnDB存储引擎中，跟MyISAM不一样，没有将总行数存储在磁盘中，当执行select count(*) from t时，会先把数据读出来，一行一行的累加，最后返回总数据量。

InnoDB中count(*)语句是在执行的时候，全表扫描统计总量，所以当数据越来越大时，语句就越来越耗时了，为什么InnoDB引擎不像MyISAM引擎不像MyISAM引擎一样，将总行数存储到磁盘上？这跟InnoDB的事务特性有关，由于多版本并发控制(MVCC)的原因，InnoDB表"应该返回多少行"也是不确定的。

## 三、数据类型

主要包括以下五大类：

* **整型类型**：BIT、BOOL、TINYINT、SMALLINT、 MEDIUMINT 、INT、 BIG INT
* **浮点数类型**：FLOAT、 DOUBLE、 DECIMAL
* **字符串类型**：CHAR、 VARCHAR、 TINYTEXT、 TEXT、 MEDIUMTEXT、 LONGTEXT、 TINYBLOB、 BLOB、 MEDIUMBLOB 、LONGBLOB
* **日期类型**：Date、DateTime、TimeStamp、Time、Year
* **其他数据类型**：BINARY、VARBINARY、ENUM、SET、Geometry、Point、MultiPoint、LineString、MultiLineString、Polygon、GeometryCollection等

> CHAR 和 VARCHAR 的区别？

char 是固定长度，varchar长度可变。

char(n) 和 varchar(n) 中的n代表字符的个数，并不代表字节个数，比如char(30)就可以存储30个字符。

存储时，char不管实际存储数据的长度，直接按char规定的长度分配存储空间；而varchar会根据实际存储的数据分配最终的存储空间。

**相同点**：

* char(n), varchar(n) 中的n都代表字符的个数。
* 超过char，varchar最大长度n的限制后，字符串会被截断。

**不同点**:

* char不论实际存储的字符数都会占用n个字符的空间，而varchar只会占用实际字符应该占用的字节空间加1（实际长度length，0<=length<255）或加2（length>255）。因为varchar保存数据时除了要保存字符串之外还会加一个字节来记录长度(如果列声明长度大于255则使用2个字节来保存长度)。
* 能存储的最大空间限制不一样：char的存储上限为255字节。
* char在存储时会阶段尾部的空格，而varchar不会。

char是适合存储很短的、一般固定长度的字符串。例如，char非常适合存储密码的MD5值，因为这是一个定长的值。对于非常的短的列，char比varchar在存储空间上也更有效率。

> 列的字符串类型可以是什么？

字符串类型是：SET、BLOB、ENUM、CHAR、TEXT、VARCHAR

> BLOB和TEXT有什么区别？

* BLOB是一个二进制对象，可以容纳可变数量的数据。有四种类型的BLOB：TINYBLOB 、BLOB、MEDIUMBLOB和LONGBLOB。

* TEXT是一个不区分大小写的BLOG。四种TEXT类型：TINYTEXT、TEXT、MEDIUMTEXT和LONGTEXT。
* BLOB保存二进制数据，TEXT保存字符数据。

## 四、索引

> 说说你对MySQL索引的理解？
>
> 数据索引的原理，为什么要用B+书，为什么不用二叉树？
>
> 聚集索引和非聚集索引的区别？
>
> InnoDB引擎中的索引策略，了解过吗？
>
> 创建索引的方式有哪些？
>
> 聚簇索引/非聚簇索引，mysql索引底层实现，为什么不用B-tree，为什么不用hash，叶子结点存放的是数据还是指向数据的内存地址，使用索引需要注意的几个地方？

* MySQL官方对索引的定义为：索引(Index)是帮助MySQL高效获取数据的数据结构，所以说**索引的本质是：数据结构**

* 索引的目的在于提高查询效率，可以类比字典、火车的车次表、图书的目录等。
* 可以简单的理解为"排好序的快速查找数据结构"，数据本身之外，**数据库还维护着一个满足特定查找算法的数据结构**，这些数据结构以某种方法引用(指向数据结构)，这样就可以在这些数据结构上实现高级查找算法。这种数据结构就是索引。下图是一种可能的索引方式示例：

<img src="https://user-gold-cdn.xitu.io/2020/7/14/1734bff356f9f2f0?imageView2/0/w/1280/h/960/ignore-error/1" alt="img" style="zoom: 80%;" />

左边的数据表，一共有两列七条记录，最左边的是数据记录的物理地址

为了加快Col2的查找，可以维护一个右边所示的二叉查找树，每个结点分别包含索引键值，和一个指向对应数据记录物理地址的指针，这样就可以运用二叉树查找在一定的复杂度内获取到对应的数据，从而快速检索出符合条件的记录。

* 索引本身也很大，不可能全部存储在内存中，**一般以索引文件的形式存储在磁盘中**
* 平常说的索引，没有特别指明的话，就是B+树(多路搜索树，不一定是二叉树) 结构组织的索引。其中聚集索引，次要索引，覆盖索引，复合索引，前缀索引，唯一索引默认都是使用B+树索引，统称为索引。此外还有哈希索引等。

### 1. 基本语法

* **创建**

  * 创建索引：*CREATE [UNIQUE] INDEX indexName ON mytable(username(length))*;

    如果是CHAR、VARCHAR类型，length可以小于字段实际长度；如果是BLOB和TEXT类型，必须指定length。

  * 修改表结构(添加索引)：*ALTER table tableName ADD [UNIQUE] INDEX indexName(columnName)*

* **删除**：*DROP INDEX [indexName] ON mytable*;

* **查看**：`SHOW INDEX FROM table_name\G`             --可以通过添加 \G 来格式化输出信息。

* **使用ALER命令**

  * ALER TABLE tbl_name ADD PRIMARY KEY (column_list) 改语句添加一个主键，这意味这索引值必须是唯一的，且不能为NULL。
  * ALTER TABLE tbl_name ADD UNIQUE index_name (column_list) 这条语句创建索引的值必须是唯一的(除了NULL外，NULL可能会出现多次)。
  * ALTER TABLE tbl_name ADD INDEX index_name (column_list) 添加普通索引，索引值可出现多次。
  * ALTER TABLE tbl_name FULLTEXT index_name (column_list) 该语句指定了索引为FULLTEXT，用于全文索引。

### 2. 优势

* **提高数据检索效率，降低数据库IO成本**
* **降低数据排序的成本，降低CPU的消耗**

### 3. 劣势

* 索引也是一张表，保存了主键和索引字段，并指向实体表中的记录，所有也需要占用内存
* 虽然索引大大提高了查询速度，同时却会降低更新表的速度，如对表进行INSERT、UPDATE和DELETE。因为更新表时，MySQL不仅要保存数据，还要保存一下索引文件每次更新添加了索引列的字段，都会调整因为更新所带来的键值变化的索引信息。

### 4. 索引分类

#### 4.1 数据结构角度

* B+树索引
* Hash索引
* FULL-Text全文索引
* R-Tree索引

#### 4.2 物理角度

* 聚集索引

* 非聚集索引也叫辅助索引

  聚集索引和非聚集索引都是B+树结构

#### 4.3 逻辑角度

* 主键索引：主键索引是一种特殊的唯一索引，不允许有空值
* 普通索引或者单列索引：每个索引只包含单个列，一个表可以有多个单列索引
* 多列索引(复合索引、联合索引)：复合索引只多个字段上创建的索引，只有在查询条件中使用了创建索引时的第一个字段，索引才会被引用。使用复合索引时遵循最左前缀集合
* 唯一索引或者非唯一索引
* 空间索引：空间索引时对空间数据类型的字段建立的索引，MYSQL中的空间数据类型有4中，分别是GEOMETRY、PONT、LINESTRING、POLYGON。MySQL使用SPATIAL关键字扩展，使得能够用于创建正规索引类型的语法创建空间索引。创建空间索引的列，必须将其声明为NOT NULL，空间索引只能在存储引擎为MYISAM的表中创建。

> 为什么MySQL索引中用B+tree，不用B-tree或者其他树，为什么不用Hash索引
>
> 聚簇索引/非聚簇索引，MySQL索引底层实现，叶子结点存放的是数据还是指向数据的内存地址，使用索引需要注意的几个地方？
>
> 使用索引查询一定能提高查询的性能吗? 为什么

### 5. MySQL索引结构

****

**首先要明白索引是在存储引擎层面实现的，而不是server层面。**不是所有的存储引擎都支持所有的索引类型。即使多个存储引擎支持某一索引类型，他们的实现和行为也可能有所差别。

#### 5.1 B+树索引

MyISAM和InnoDB存储引擎，都使用B+Tree的数据结构，它相对与B-Tree结构，所有的数据都存在叶子结点上，且把叶子结点通过指针连接到一起，形成了一条数据链表，以加快相邻数据的检索效率。

**B-Tree和B+Tree的区别**

**B-Tree**

B-Tree是为磁盘等外存储设备设计一种平衡查找树。

系统从磁盘读取到内存时是以磁盘块(block)为基本单位的，位于同一个磁盘块中的数据会被一次性读取出来，而不是需要什么取什么。

InnoDB存储引擎中有页(page)的概念，页式其磁盘磁盘管理的最小单位。InnoDB存储引擎中默认每个页的大小为16KB，可以通过参数innodb_page_size将页的大小设置为4k、8k、16k，在MySQL中可以通过如下命令查看页的大小：*show variables like 'innodb_page_size'*;

而系统一个磁盘块的存储空间往往没有这么大，因此InnoDB每次申请申请磁盘空间时都会是若干地址连续磁盘块来达到页的大小 16KB。InnoDB 在把磁盘数据读入到磁盘时会以页为基本单位，在查询数据时如果一个页中的每条数据都能有助于定位数据记录的位置，这将会减少磁盘I/O次数，提高查询效率。

B-Tree 结构的数据可以让系统高效的找到数据所在的磁盘块。为了描述 B-Tree，首先定义一条记录为一个二元组[key, data] ，key为记录的键值，对应表中的主键值，data 为一行记录中除主键外的数据。对于不同的记录，key值互不相同。

一棵m阶的B-Tree有如下特性：

1. 每个节点最多有m个孩子
2. 除了根节点和叶子节点外，其它每个节点至少有Ceil(m/2)个孩子。
3. 若根节点不是叶子节点，则至少有2个孩子
4. 所有叶子节点都在同一层，且不包含其它关键字信息
5. 每个非终端节点包含n个关键字信息（P0,P1,…Pn, k1,…kn）
6. 关键字的个数n满足：ceil(m/2)-1 <= n <= m-1
7. ki(i=1,…n)为关键字，且关键字升序排序
8. Pi(i=1,…n)为指向子树根节点的指针。P(i-1)指向的子树的所有节点关键字均小于ki，但都大于k(i-1)

B-Tree 中的每个节点根据实际情况可以包含大量的关键字信息和分支，如下图所示为一个 3 阶的 B-Tree：

<img src="https://user-gold-cdn.xitu.io/2020/7/14/1734bff356b40f0d?imageView2/0/w/1280/h/960/ignore-error/1" alt="索引" style="zoom:80%;" />

每个节点占用一个盘块的磁盘空间，一个节点上有两个升序排序的关键字和三个指向子树根节点的指针，指针存储的是子节点所在磁盘块的地址。两个关键词划分成的三个范围域对应三个指针指向的子树的数据的范围域。以根节点为例，关键字为17和35，P1指针指向的子树的数据范围为小于17，P2指针指向的子树的数据范围为17~35，P3指针指向的子树的数据范围为大于35。

模拟查找关键字29的过程：

1. 根据根节点找到磁盘块1，读入内存。【磁盘I/O操作第1次】
2. 比较关键字29在区间（17,35），找到磁盘块1的指针P2。
3. 根据P2指针找到磁盘块3，读入内存。【磁盘I/O操作第2次】
4. 比较关键字29在区间（26,30），找到磁盘块3的指针P2。
5. 根据P2指针找到磁盘块8，读入内存。【磁盘I/O操作第3次】
6. 在磁盘块8中的关键字列表中找到关键字29。

分析上面过程，发现需要3次磁盘I/O操作，和3次内存查找操作。由于内存中的关键字是一个有序表结构，可以利用二分法查找提高效率。而3次磁盘I/O操作是影响整个B-Tree查找效率的决定因素。B-Tree相对于AVLTree缩减了节点个数，使每次磁盘I/O取到内存的数据都发挥了作用，从而提高了查询效率。

**B+Tree**

B+Tree 是在 B-Tree 基础上的一种优化，使其更适合实现外存储索引结构，InnoDB 存储引擎就是用 B+Tree 实现其索引结构。

从上一节中的B-Tree结构图中可以看到每个节点中不仅包含数据的key值，还有data值。而每一个页的存储空间是有限的，如果data数据较大时将会导致每个节点（即一个页）能存储的key的数量很小，当存储的数据量很大时同样会导致B-Tree的深度较大，增大查询时的磁盘I/O次数，进而影响查询效率。在B+Tree中，**所有数据记录节点都是按照键值大小顺序存放在同一层的叶子节点上**，而非叶子节点上只存储key值信息，这样可以大大加大每个节点存储的key值数量，降低B+Tree的高度。

B+Tree相对于B-Tree有几点不同：

1. 非叶子节点只存储键值信息；
2. 所有叶子节点之间都有一个链指针；
3. 数据记录都存放在叶子节点中

将上一节中的B-Tree优化，由于B+Tree的非叶子节点只存储键值信息，假设每个磁盘块能存储4个键值及指针信息，则变成B+Tree后其结构如下图所示：

通常在B+Tree上有两个头指针，一个指向根节点，另一个指向关键字最小的叶子节点，而且所有叶子节点（即数据节点）之间是一种链式环结构。因此可以对B+Tree进行两种查找运算：一种是对于主键的范围查找和分页查找，另一种是从根节点开始，进行随机查找。

可能上面例子中只有22条数据记录，看不出B+Tree的优点，下面做一个推算：

InnoDB存储引擎中页的大小为16KB，一般表的主键类型为INT（占用4个字节）或BIGINT（占用8个字节），指针类型也一般为4或8个字节，也就是说一个页（B+Tree中的一个节点）中大概存储16KB/(8B+8B)=1K个键值（因为是估值，为方便计算，这里的K取值为10^3）。也就是说一个深度为3的B+Tree索引可以维护10^3 * 10^3 * 10^3 = 10亿 条记录。

实际情况中每个节点可能不能填充满，因此在数据库中，B+Tree的高度一般都在2-4层。MySQL的InnoDB存储引擎在设计时是将根节点常驻内存的，也就是说查找某一键值的行记录时最多只需要1~3次磁盘I/O操作。

B+Tree性质

1. 通过上面的分析，我们知道IO次数取决于b+数的高度h，假设当前数据表的数据为N，每个磁盘块的数据项的数量是m，则有h=㏒(m+1)N，当数据量N一定的情况下，m越大，h越小；而m = 磁盘块的大小 / 数据项的大小，磁盘块的大小也就是一个数据页的大小，是固定的，如果数据项占的空间越小，数据项的数量越多，树的高度越低。这就是为什么每个数据项，即索引字段要尽量的小，比如int占4字节，要比bigint8字节少一半。这也是为什么b+树要求把真实的数据放到叶子节点而不是内层节点，一旦放到内层节点，磁盘块的数据项会大幅度下降，导致树增高。当数据项等于1时将会退化成线性表。
2. 当b+树的数据项是复合的数据结构，比如(name,age,sex)的时候，b+数是按照从左到右的顺序来建立搜索树的，比如当(张三,20,F)这样的数据来检索的时候，b+树会优先比较name来确定下一步的所搜方向，如果name相同再依次比较age和sex，最后得到检索的数据；但当(20,F)这样的没有name的数据来的时候，b+树就不知道下一步该查哪个节点，因为建立搜索树的时候name就是第一个比较因子，必须要先根据name来搜索才能知道下一步去哪里查询。比如当(张三,F)这样的数据来检索时，b+树可以用name来指定搜索方向，但下一个字段age的缺失，所以只能把名字等于张三的数据都找到，然后再匹配性别是F的数据了， 这个是非常重要的性质，即**索引的最左匹配特性**。

**MyISAM主键索引与辅助索引的结构**

MyISAM引擎的索引文件和数据文件是分离的。**MyISAM引擎索引结构的叶子节点的数据域，存放的并不是实际的数据记录，而是数据记录的地址**。索引文件与数据文件分离，这样的索引称为"**非聚簇索引**"。MyISAM的主索引与辅助索引区别并不大，只是主键索引不能有重复的关键字。

在MyISAM中，索引（含叶子节点）存放在单独的.myi文件中，叶子节点存放的是数据的物理地址偏移量（通过偏移量访问就是随机访问，速度很快）。

主索引是指主键索引，键值不可能重复；辅助索引则是普通索引，键值可能重复。

通过索引查找数据的流程：先从索引文件中查找到索引节点，从中拿到数据的文件指针，再到数据文件中通过文件指针定位了具体的数据。辅助索引类似。

**InnoDB主键索引与辅助索引的结构**

**InnoDB引擎索引结构的叶子节点的数据域，存放的就是实际的数据记录**（对于主索引，此处会存放表中所有的数据记录；对于辅助索引此处会引用主键，检索的时候通过主键到主键索引中找到对应数据行），或者说，**InnoDB的数据文件本身就是主键索引文件**，这样的索引被称为"“聚簇索引”，一个表只能有一个聚簇索引。

* 主键索引：

我们知道InnoDB索引是聚集索引，它的索引和数据是存入同一个.idb文件中的，因此它的索引结构是在同一个树节点中同时存放索引和数据，如下图中最底层的叶子节点有三行数据，对应于数据表中的id、stu_id、name数据项。

在Innodb中，索引分叶子节点和非叶子节点，非叶子节点就像新华字典的目录，单独存放在索引段中，叶子节点则是顺序排列的，在数据段中。Innodb的数据文件可以按照表来切分（只需要开启`innodb_file_per_table)`，切分后存放在`xxx.ibd`中，默认不切分，存放在`xxx.ibdata`中。

* 辅助（非主键）索引：

这次我们以示例中学生表中的name列建立辅助索引，它的索引结构跟主键索引的结构有很大差别，在最底层的叶子结点有两行数据，第一行的字符串是辅助索引，按照ASCII码进行排序，第二行的整数是主键的值。

这就意味着，对name列进行条件搜索，需要两个步骤：

① 在辅助索引上检索name，到达其叶子节点获取对应的主键；

② 使用主键在主索引上再进行对应的检索操作

这也就是所谓的“**回表查询**

**InnoDB 索引结构需要注意的点**

1. 数据文件本身就是索引文件
2. 表数据文件本身就是按 B+Tree 组织的一个索引结构文件
3. 聚集索引中叶节点包含了完整的数据记录
4. InnoDB 表必须要有主键，并且推荐使用整型自增主键

正如我们上面介绍 InnoDB 存储结构，索引与数据是共同存储的，不管是主键索引还是辅助索引，在查找时都是通过先查找到索引节点才能拿到相对应的数据，如果我们在设计表结构时没有显式指定索引列的话，MySQL 会从表中选择数据不重复的列建立索引，如果没有符合的列，则 MySQL 自动为 InnoDB 表生成一个隐含字段作为主键，并且这个字段长度为6个字节，类型为整型。

> 为什么推荐使用整型自增主键而不是选择UUID？

* UUID是字符串，比整型消耗更多的存储空间。
* 在B+树中进行查找时需要跟经过的结点值比较大小，整型数据的比较运算比字符串更快速。
* 自增的整型索引在磁盘中会连续存储，在读取一页数据时也是连续；UUID是随机产生的，读取的上下两行数据存储时分散的，不适合执行区间查询语句。
* 在插入或删除数据时，整型自增主键会在叶子结点的末尾建立新的叶子结点，不会破坏左侧子树结构；UUID主键很容易出现这样的情况，B+树为了维持自身的特性，有可能会进行结构的重构，消耗更多的时间。

> 为什么非主键索引结构叶子结点存储的是主键值？

保证数据一致性和节省存储空间，可以这么理解：商城系统订单表会存储一个用户ID作为关联外键，而不推荐存储完整的用户信息，因为当我们用户表中的信息修改后，不需要再次维护订单表的用户数据，同时也节省了存储空间。

#### 5.2 Hash索引

* 主要就是通过Hash算法(常见的Hash算法有直接定址法、平方取中法、折叠法、除数取余法、随机数法)，将数据库字段转换定长的Hash的值，与这条数据的行指针一并存入Hash表的对应位置；如果发生Hash碰撞(两个不同的关键字的Hash值相同)，则在对应Hash键下以链表形式存储。
* 检索算法：在检索查询是，就再次对待查关键字再执行相同的Hash算法，得到Hash值，到对应Hash表对应位置取出数据即可，如果发生Hash碰撞，则需要在取值进行筛选。目前使用Hash索引的数据并不多，主要有Memory等。

* MySQL目前有Memory引擎和NDB引擎支持Hash索引。

#### 5.3 FULL-TEXT全文索引

* 全文索引也是MyISAM的一种特殊索引类型，主要用于全文索引，InnoDB从MYSQL5.6版本提供对全文索引的支持。
* 它用于替代效率较低的LIKE模糊匹配操作，而且可以通过多字段组合的全文索引一次性全模糊匹配多个字段。
* 同样适用B-tree存放索引数据，但适用的是特定的算法，将字段数据分割后再进行索引(一般每4个字节一次分割)，索引文件存储的是分割前的索引字符串集合，与分割后的索引信息，对应Btree结构的结点存储的是分割后的词信息以及它在分割前的索引字符串集合中的位置。

#### 5.4 R-Tree空间索引

空间索引是MyISAM的一种特殊索引类型，主要用于地理空间数据类型

> 为什么MySQL索引要用B+树而不是B树？

用B+树而不用B树考虑的是IO性能的影响，B树的每个结点都存数据，而B+树只有叶子结点才存储数据，所有查找相同数据量的情况下，B树的高度更高，IO更频繁。数据库索引是存储在磁盘上的，当数据量大时，就不能把整个索引全部加载到内存了，只能逐一加载每一个磁盘页(对应索引树的节点)。其中在MySQL底层对B+树进行进一步优化：在叶子结点中是双向链表，且在链表的头节点和尾节点也是循环指向的。

> 为什么不采用Hash方式？

因为Hash底层是哈希表，哈希表是一种以key-value存储数据的结构，所以多个数据在存储关系上是完全没有任何顺序关系的，所以，对于区间查询是无法直接通过索引查询的，就需要全表扫描。所以，哈希索引只适用于等值查询的场景。而B+Tree是一种多路平衡查询树，所以他的节点是天然有序的(左节点小于父节点，父节点小于右子节点)，所以对范围查询的时候不需要全表扫描。

哈希索引不支持多列联合索引的最左匹配规则，如果有大量重复键值得情况下，哈希索引的效率会很低，因此存在哈希碰撞问题。

### 6. 哪些情况需要创建索引

* 主键自动建立唯一索引
* 频繁作为查询条件的字段
* 查询中与其他表关联的字段，外键关系建立索引
* 单键/组合索引的选择问题，高并发下倾向创建组合索引
* 查询中排序的字段，排序字段通过索引访问大幅度提高排序速度
* 查询中统计或分组字段

### 7. 哪些情况不要创建索引

* 表记录太少
* 经常增删改的表
* 数据重复且分布均匀的字段，只应该为最经常查询和最经常排序的数据列建立索引(如果某个数据类包含然多的重复数据，建立索引没有太大意义)
* 频繁更新的字段不合适创建索引(会加重IO负担)
* where条件用不到的字段不创建索引

### 8. MySQL高效索引

**覆盖索引**(Covering Index), 或者叫索引覆盖，也就是平时所说的不需要回表操作。

* 就是select的数据列只用从索引中就能够取得，不必读取数据行，MySQL可以利用索引返回select列表中的字段，而不必根据索引在此读取数据文件，换句话说**查询列要被所建的索引覆盖。**

* 索引是高效找到行的一个方法，但是一般数据库也能使用索引找到一个列的数据，因此它不必读取整个行。毕竟索引叶子结点存储了他们索引的数据，当能通过读取索引就可以得到想要的数据，那就不需要读取行。一个索引包含(覆盖)满足查询结果的数据就叫做覆盖索引。

* **判断标准**

  使用explain，可以通过输出的extra列来判断，对于一个索引覆盖查询，显示为using index，MySQL查询优化器在执行查询前会决定是否有索引覆盖查询。

## 五、MySQL查询

> count(*) 和 count(1) 和 count(col) 区别

**执行效果上**：

* count(*)包括了所有的列，相当于行数，在统计结果的时候，不会忽略值为NULL
* count(1)包括了所有的列，用1代表代码行，在统计结果的时候，不会忽略为NULL
* count(col)只包括列命那一列，在统计结果的时候，会忽略列值为空(这里的空不是只空字符串或者0，而是表示null)的计数，即某个字段为NULL时，不统计。

**执行效率上**：

* 列名为主键，count(col)会比count(1)快
* 列名不为主键，count(1)会比count(col)快
* 如果表多个列并且没有主键，则count(1)的执行效率优于count(*)
* 如果有主键，则select count(主键)的执行效率是最优的
* 如果表只有一个字段，则select count(*)最优

> MySQL中in和exists的区别

* exists：exists对外表用loop逐条查询，每次查询都会查看exists的条件语句，当exists里的条件语句能够返回记录行时(无论记录行是多少，只要能返回)条件就为真，返回当loop到的这条记录；反之，如果exists里的条件语句不能返回记录行，则当前loop到的这条记录被丢弃，exists的条件就想一个bool条件，当能返回结果集则为true，不能返回结果集为false
* in：in查询相当于多个or条件的叠加

```sql
SELECT * FROM A WHERE A.id IN (SELECT id FROM B);
SELECT * FROM A WHERE EXISTS (SELECT * from B WHERE B.id = A.id);
```

**如果查询的两个表大小相当，那么用in和exists差别不大**

**如果两个表一个较小，一个是大表，则子查询表达的用exists，子查询表小的用in**

> UNION 和 UNION ALL的区别？

UNION 和 UNION ALL都是将两个结果集合并为一个，**两个要联合的SQL语句 字段个数必须一样，而却字段类型要"相容"(一致)**

* UNION在进行表连接后会筛选掉重复的数据记录(效率较低)，而UNION ALL则不会去掉重复的数据记录；
* UNION会按照字段的顺序进行排序，而UNION ALL只是简单的将两个结果合并就返回。

### 1. SQL执行顺序

* 手写

  ```sql
  SELECT DISTINCT <select_list>
  FROM  <left_table> <join_type>
  JOIN  <right_table> ON <join_condition>
  WHERE  <where_condition>
  GROUP BY  <group_by_list>
  HAVING <having_condition>
  ORDER BY <order_by_condition>
  LIMIT <limit_number>
  ```

* 机读

  ```sql
  FROM  <left_table>
  ON <join_condition>
  <join_type> JOIN  <right_table> 
  WHERE  <where_condition>
  GROUP BY  <group_by_list>
  HAVING <having_condition>
  SELECT
  DISTINCT <select_list>
  ORDER BY <order_by_condition>
  LIMIT <limit_number>
  ```

> mysql的内连接、左连接、右连接有什么区别？
>
> 什么是内连接、外连接、交叉连接、笛卡尔积？

## 六、MySQL事务

> 事务的隔离级别有哪些？MySQL的默认隔离级别是什么？
>
> 什么是幻读，脏读，不可重复度？
>
> MySQL事务的四大特性以及实现原理
>
> MVCC熟悉吗，它的底层原理？

MySQL事务主要用于处理操作量大，复杂度搞的数据。比如说，在人员管理系统中，你删除一个人员，你即需要删除人员的基本资料，也要删除和改人员相关的信息，如信箱，文章等等，这样，这些数据库操作就构成一个事务！

**ACID---事务基本要**

事务是有一组SQL语句组成的逻辑处理单元，具有4个属性，通常简称为事务ACID属性。

* **A (Atomicity)原子性**：整个事务中的所有操作，要么全部完成，要么全部不完成，不可能停滞在中间某个环节。事务在执行过程中发生错误，会被回滚(Rollback)到事务开始前的状态，就像这个事务从来没有执行过一样。
* **C (Consistency) 一致性**：在事务开始之前和事务结束以后，数据的完整性约束没有被破坏。
* **I（Isolation）隔离性**：一个事务的执行不能其他事务干扰。即一个事务内部的操作及使用的数据对其他并发事务是隔离的，并发执行的各个事务之间不能互相干扰。
* **D（Durability）持久性**: 在事务完成以后，该事务所对数据库所作的更改便持久的保存在数据库之中，并不会被回滚 
