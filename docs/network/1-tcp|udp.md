# 运输层

* 实际上在计算机网络中进行通信的真正实体是位于通信两端主机中的进程。
* 运输中主要解决的问题是：如果为运行在不同主机上的应用进程提供直接的通信服务，运输层协议又称为端到端协议。

## 1. 复用和分用

* 使用端口号，来区别不同应用层的不同应用进程。

    * 端口号使用16比特表示，取值范围0~65535；
        * 熟知端口：0~1023，IAMA将这个端口指派给TCP/IP协议体系中最重要的一些应用协议，例如：FTP(21/20), HTTP(80), DNS(53)
        * 登记端口：1024~49151
        * 短暂端口：49152~65535
    * **端口号只具有本地意义,**即端口号只是为了**标识本计算机应用层中的各进程**

* **复用**

    * 在运输层使用UDP协议进行封装，称为**UDP复用**
    * 在运输层使用TCP协议进行封装，称为**TCP复用**
    * 在网络层使用IP协议进行封装，称为**IP复用**
    * IP数据报协议字段=17为UDP，协议字段=6为TCP

    <img src="https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220311115811395.png" style="zoom:50%;" />

    <img src="https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220311115848428.png" style="zoom:50%;" />

## 2. TCP和UDP

* **TCP**
    * 面向连接的
    * 提供可靠传输，使用流量控制和拥塞控制
    * 仅支持单播
    * 面向字节流
    * 首部最小20字节，最大60字节
    * 适用于文件传输等对可靠性要求较高的服务
* **UDP**
    * 面向无连接
    * 尽最大努力交付，也就是不可靠，不使用流量控制和拥塞控制
    * 支持单播、多播、广播
    * 面向应用报文(UDP对应用进程交付下来的报文既不合并也不拆分，而是保留这些报文边界)
    * 首部开销小，仅8个字节
    * 适用于IP电话、视频会议等实时应用

### 2.1 TCP报文段首部格式

<img src="https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220323193821896.png" style="zoom:50%;" />

* **源端口**：占2字节，用来**标识发送该TCP报文段的应用进程**

* **目的端口**：占2字节，用来**标识接受该TCP报文段的应用进程**

* **序号(Squense Number, SN)：** 占4字节，取值范围[0, 2^32-1]，序号增加到最后一个后，下一个序号又回到0。 (在一个TCP连接中传送的字节流中的每一个字节都按顺序编号) **指出本TCP报文段数据载荷的第一个字节的序号**

    > 例如：若一个tcp报文段的**序号(SN)**为200，长度为100，**确认号(ack)**为300。表示该报文中的第一个字节的序号为200，200~299共100个数据都已经正确接收，期望接受序号为300的数据。

* **确认号ack**：占4字节，取值范围[0, 2^32-1]，序号增加到最后一个后，下一个序号又回到0。**指出期望收到对方下一个TCP报文段的数据载荷的第一个字节的序号，同时也是对之前收到的所有数据的确认**

    > 若确认号=n，则表明序号n-1为止的所有数据都已正确接收，期望接收序号为n的数据

* **确认标志位ACK**：取值为1时的确认号字段才有效；取值为0时确认号字段无效

    > TCP规定，在连接建立后所有传送的TCP报文段都必须把ACK置1

* **同步标志位SYN**：在TCP连接建立时用来同步序号

    > SYN=1表示这是一个TCP连接请求报文段
    >
    > SYN=1 ACK=1 表明这是一个TCP连接请求的确认报文段

* **终止标志位FIN**：用来释放TCP连接。

    > 当 FIN=1时，表明此报文段的发送发的数据已发送完毕，并要求释放运输连接

* **复位标志位RST**：用来复位TCP连接

    > 当RST=1时，表明TCP连接出现了异常，必须释放连接，然后再重新建立连接
    >
    > RST置1还用来拒绝一个非法的报文段或拒绝打开一个TCP连接

* **推送标志位PSH：**接收方的TCP收到该标志位为1的报文会**尽快上交应用进程**，而不必等到接受缓存都填满后再向上交付

* **紧急标志位URG和紧急指针**：用来进行紧急操作

    > *当发送方有紧急数据时，可将紧急数据插队到发送缓存的最前面，并立即封装到一个TCP报文段中进行发送。紧急指针会指出本报文段数据载荷部分包含了多长的紧急数据，紧急数据之后是普通数据*

    * 紧急标志位URG：取值为1是紧急指针字段有效；取值为0时紧急指针字段无效
    * 紧急指针字段：占16比特，以字节为单位，用来指明紧急数据的长度

* **数据偏移**：占4比特，并以4字节为单位。**用来指出TCP报文段的数据载荷部分的起始处距离TCP报文段的起始处有多远**

    > 该字段实际上是指出了TCP报文段的首部长度
    >
    > 首部固定长度为20字节，因此数据偏移字段的最小值为(0101)
    >
    > 首部最大长度为60字节，因此数据偏移字段的最大值为(1111)

* **保留字段**：占6比特，置为 0，保留为今后使用

* **窗口**：占2字节，以字节为单位。**指出发送本报文段的一方的接收窗口**

    > 窗口值作为接收方让发送方设置其发送窗口的依据
    >
    > 这是以接收方的接收能力来控制发送方的发送能力，称为流量控制

* **校验和**：占16比特，检查范围包括TCP报文段的首部和数据载荷两部分

    > 用来检查是否出现误码
    >
    > 在计算校验和时，要在TCP报文段的前面加上12字节的伪首部

* **选项字段**

    * 最大报文长度MSS选项：TCP报文段数据载荷部分的最大长度
    * 窗口扩大选项：为了扩大窗口(提高吞吐率)
    * 时间戳选项：
        * 用来计算往返时间RTT
        * 用于处理序号超范围的情况，又称为防止序号绕回PAWS
    * 选择确认选项

* **填充字段**：由于选项的长度可变，因此使用填充来**确保报文段首部能被4整除**(数据偏移字段，也就是首部长度字段，是以4字节为单位的)

### 2.2 流量控制

> 发送太快，而接收方的接收能力有限，这就会造成数据的丢失
>
> 所谓流量控制就是**让发送方的发送速率不要太快，要让接收方来的及接收**

<img src="https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220311124452275.png" style="zoom:50%;" />

<img src="https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220311124624091.png" style="zoom:50%;" />

<img src="https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220311124957595.png" style="zoom:50%;" />

### 2.3 拥塞控制

> 对网络中某一资源的需求超过了改资源所能提供的可用部分，网络性能就要变坏。这种情况就叫做拥塞。
>
> 若出现拥塞而不进行控制，整个网络的吞吐量将随输入负荷的增大而下降。

<img src="https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220311125921652.png" style="zoom:50%;" />

* **拥塞窗口cwnd**，其值取决于网络的拥塞程度，并且动态变换
    * **cwnd维护原则**：只要网络没有出现拥塞，拥塞窗口就再增大一些；但只要网络出现拥塞，拥塞窗口就减少一些。
    * 判断出现**网络拥塞的依据**：没有按时收到应到达的确认报文(**发生超时重传**)
* 发送方将拥塞窗口作为**发送窗口swnd**, 即swnd = cwnd
* 维护一个慢开始门限的**ssthresh**状态变量
    * 当cwnd < ssthresh时，使用慢开始算法；
    * 当cwnd > ssthresh时，停止使用慢开始算法而改用拥塞避免算法；
    * 当cwnd = ssthresh时，既可以使用慢开始算法也可以使用拥塞避免算法。

**慢开始**

* cwnd = 1  swnd = cwnd ssthresh = 16

* cwnd每次指数增加(*2)

* 当cwnd达到慢开始门限时，改用拥塞避免算法

    <img src="https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220311132440787.png" style="zoom:50%;" />

**拥塞避免**

* cwnd每次递增1

* 报文丢失，发送发使用超时重传

* 将ssthresh值更新为发生拥塞时cwnd值的一半

* 将cwnd值减少到1，并重新开始执行慢开始算法

<img src="https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220311132719368.png" style="zoom:50%;" />

<img src="https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220311132955192.png" style="zoom:50%;" />

<img src="https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220311133155549.png" style="zoom:50%;" />

**快重传**

> 所谓快重传，就是使发送方**尽快进行重传，而不是等待超时重传计时器超时**再重传。

<img src="https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220311133633414.png" style="zoom:50%;" />

<img src="https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220311134013212.png" style="zoom:50%;" />



* 要求接收方不要等待自己发送数据时才进行捎带确认，而是要**立即发送确认**

* 即使收到了失序的报文段也要立即发出对已收到的报文段的**重复确认**

* 发送方一旦**收到3个连续的重复确认**,就将响应的报文段**立即重传**，而不是等待改报文段的超时重传计时器超时后再重传

* 对于个别丢失的报文段，发送方不会出现超时重传，也就不会误认为出现了拥塞。使用快重传可以使整个网络的吞吐量提高约20%

**快恢复**

* 发送方一旦**收到3个重复确认**，就知道现在只是丢失了个别的报文段。于是不启动慢开始算法，而**执行快恢复算法**

    * **发送方将慢开始门限ssthresh值和拥塞窗口cwnd值调整为当前窗口的一半；开始执行拥塞避免算法**
    * 也有的快恢复实现是把快恢复开始时的拥塞窗口cwnd值再增大一些，即等于新的ssthresh + 3
        * 既然发送方收到3个重复的确认，就表明有3个数据报文段已经离开了网络
        * 这3个报文段不再消耗网络资源而是停留在接受方的接收缓存中
        * 可见现在网络中不是堆积了报文段而是减少了3个报文段。因此可以适当把拥塞窗口扩大些

    <img src="https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220311165859395.png" style="zoom:50%;" />

### 2.4 超时重传时间的选择

* **不能直接使用某次测量得到的RTT样本计算超时重传时间RTO**
* 利用每次测量得到的RTT样本，计算加权平均往返RTTs(又称为平滑的往返时间)

<img src="https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220311171521543.png" style="zoom:50%;" />

<img src="https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220311171644782.png" style="zoom:50%;" />

### 2.5 TCP可靠传输的实现

* TCP基于**以字节为单位的滑动窗口**来实现可靠传输

### 2.6 TCP的连接管理

* TCP是面向连接的协议，它基于运输连接来传送TCP报文段
* TCP运输连接的建立和释放是每一次面向连接的通信中必不可少的过程
* TCP运输连接有以下三个阶段：
    * **建立连接**
    * **数据传送**
    * **释放TCP连接**

<img src="https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220323182137797.png" style="zoom:50%;" />

* TCP的连接管理就是使运输连接的建立和释放都能正常地运行
* TCP的连接建立要解决以下三个问题：
    * 使TCP双方能够确知对方的存在
    * 使TCP双方能够协商一些参数 (如最大窗口值、是否使用窗口扩大选项和时间戳选项以及服务质量等)
    * 使TCP双方能够对运输实体资源(如缓存大小、连接表中的项目等)进行分配

## 3. 三报文握手建立连接

> 确认通信双方的接收能力和发送能力是否正常并指定自己的初始化序列号(ISN)为后面的可靠传输做准备

* TCP客户端/服务器
    * TCP客户端：**主动**发起TCP连接的进程
    * TCP服务器：**被动等待**TCP连接建立的应用进程
* TCP服务器进程首先会创建传输控制块(存储信息: TCP连接表、指向发送和接受缓存的指针、指向重传队列的指针、当前的发送和接受序号)

<img src="../../../myblog/images/image-20220323191709842.png" alt="image-20220323191709842" style="zoom:50%;" />

**基本概念**

* SYN：在TCP连接建立时用来同步序号
* seq：发送的第一个字节的序号
* ACK：确认报文段
* ack：确认号，希望收到下一个数据的第一个字节的序号
* 刚开始客户端处于close状态，服务端处于listen状态

**第一次握手**

客户端向TCP服务进程发送TCP连接请求报文段，并进入**同步已发送状态**，TCP连接请求报文段首部中的同部位SYN被设置为1，表明这是一个TCP连接请求报文段，序号字段seq被设置了一个初始值x，作为TCP客户进程所选择的初始序号。

*TCP规定SYN被设置为1的报文段不能携带数据，但要消耗一个序号*

**第二次握手**

TCP服务进程收到TCP连接请求报文段后，如果同意建立连接，则向TCP客户进程发送TCP连接请求报文段，并进入**同步已接收状态**，改报文段首部中的同部位SYN合确认位ACK都设置为1，表明这是一个TCP连接请求确认报文段，序号字段seq被设置了一个初始值y，作为TCP服务器进程所选择的初始序号，确认号字段ack的值被设置成了x+1，这是对TCP客户进程所选择的初始序号的确认。

**第三次握手**

TCP客户进程收到TCP连接请求确认报文段后，还要向TCP服务器进程发送一个普通的TCP确认报文段，并进入**连接已建立状态**，改报文段首部中的确认位ACK被设置为1，表明这是一个普通的TCP确认报文段，序号字段seq被设置为x+1，因为TCP客户进程发送的第一个TCP报文段的序号为x，并且不携带数据，因此第二个报文段的序号为x+1，确认号ack被设置为y+1，这是对TCP服务器进程所选择的初始序号的确认，TCP服务器进程收到该确认报文段后也进入**连接已建立状态**。

*TCP规定普通的TCP确认报文段可以携带数据，不携带数据则不消耗序号*

**为什么要使用三报文握手？**

> 三次握手最主要的目的就是通信双方确认自己与对方的发送和接受是正常的

<img src="https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220604104016149.png" style="zoom:50%;" />

举例：

客户端进程发出一个TCP连接请求报文段(上图红线所示)但该报文段在某些网络节点长时间滞留了。于是该报文段会超时重传，然后被服务器进程正常接收，然后服务器进程发送一个TCP连接请求确认报文段给客户端进程，此时若采用两报文握手则通信双方进入连接已建立状态，然后通过四报文挥手关闭连接。一段时间后滞留在网络中的报文段到达了服务器进程，此时服务器进程会发送一个TCP连接请求确认报文段给客户进程，以建立连接状态。而此时的客户端进程是处于关闭状态，这就白白浪费服务器资源。

## 4. 四报文挥手建立连接

<img src="https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220604105718023.png" style="zoom:50%;" />

**基本概念**

* FIN：连接终止位
* seq：发送的第一个字节的序号
* ACK：确认报文段
* ack：确认号，希望收到下一个数据的第一个字节的序号

**第一次挥手**

TCP客户进程发送TCP连接释放报文段，并进入**终止等待1状态**，该报文段首部中的终止位FIN和确认位ACK的值都被设置为1，表明这是一个TCP连接释放报文段，同时也对之前收到的报文段进行确认，序号seq字段的值设置为u(等于客户进程之前已传送过的数据最后一个字节序号+1)，确认号ack的字段值设置为v(等于客户进程之前已传送过的数据最后一个字节序号+1)。

*TCP规定终止位FIN等于1的报文段即使不携带数据，也要消耗一个序号*

**第二次挥手**

TCP服务器进程收到TCP连接释放报文段后会发送一个普通的TCP确认报文段并进入关闭等待状态，并进入**关闭等待状态**，改报文段首部中的确认位ACK的值被设置为1，表明这是一个普通的TCP确认报文段，序号seq字段的值设置为v(等于TCP服务器进程之前已传送过的数据的最后一个字节的序号+1 = ack)，确认号ack的字段值设置为u+1(这是对TCP连接释放报文段的确认)，此时从TCP客户进程到TCP服务进程这个方向的连接就释放了，这是的TCP连接属于**半关闭状态**。客户进程收到TCP确认报文段后就进入**终止等待2状态**(等待TCP服务进程发出的TCP连接释放报文段)。

**第三次挥手**

服务器进程发送TCP连接释放报文段并进入**最后确认状态**，该报文段首部中的终止位FIN和确认位ACK的值都被设置为1，表明这是一个TCP连接释放报文段，序列号seq字段被设置为w，确认号ack的字段的值为u+1(对之前收到的TCP连接释放报文段的重复确认)。

**第四次挥手**

客户进程收到TCP连接释放报文段后，必须针对该报文段发送普通的TCP确认报文段，之后进入**时间等待状态**，该报文段首部中的确认位ACK的值被设置为1，表明这是一个普通的TCP确认报文段，序号seq字段的值设置为u+1，确认号ack字段的值设置为w+1(对所收到的TCP连接释放报文段的确认)，TCP服务器进程收到该报文段后就进入**关闭状态状态**，而TCP客户进程还要进过2MSL(2*2=4min)后才能进入关闭状态。

**为什么要四次挥手**

> 两次握手就可以释放一端到另一端的 TCP 连接，完全释放连接一共需要四次握手

<img src="https://mynotes-1252832980.cos.ap-shanghai.myqcloud.com/image-20220604114420332.png" style="zoom:50%;" />

举例：

TCP服务器进程发送TCP连接释放报文段后进入**最后确认状态**，TCP客户端进程收到该报文段后，发送普通的TCP确认报文段，并进入**关闭状态**而不是**时间等待状态**，然后，该TCP确认报文段丢失了，这必然造成TCP服务器进程对之前所发送的TCP连接释放报文段的超时重传，仍处于**最后确认状态**，由于客户端进程处于关闭状态并不会理睬该报文段。会造成服务器端进程反复重传TCP连接释放报文段，并一直处于**最后确认状态**而无法处于**关闭状态**。