# http简介
## http1.1的特点 1997.01
+ 持久连接（persistent connection），即TCP连接默认不关闭
+ 客户端在最后一个请求时，发送Connection: close，明确要求服务器关闭TCP连接
+ chrome对同一个host最多只能同时建立6个tcp连接，每个tcp上的http请求不能并行，只能按顺序依次发送
+ 管道机制（pipelining）浏览器默认关闭
+ 分块传输编码 Content-Length 字段 Transfer-Encoding: chunked
+ 缺点： "队头堵塞"（Head-of-line blocking）

## HTTP/2 2015提出，2018开始流行
+ 基于https协议
+ 二进制 请求头也可以是二进制
+ 请求头部压缩  Header Compression
+ 多路复用 Multiplexing
  + 数据流 带编号用来标识；RST_STREAM帧用来取消某次请求
  + 同一个域名只是用一个TCP连接
+ 服务器推送（server push）
+ 缺陷
  + 存在TCP队头堵塞 head-of-line blocking
  + TCP和TLS 握手时延，TCL三次握手和TLS四次握手，共有3-RTT的时延；round-trip-time

## HTTP/3 2018
+ Quic QuickUDP Internet Connections


# 常考问题

### GET与POST区别
+ 请求参数
  + GET的请求参数拼接在url后面(ASCII编码)，长度浏览器限制多为2kb;
  + POST将参数放在请求体里面（常见的Content-Type编码方式有三种：x-www-form-urlencoded，form-data，json）
+ 语义
  + GET从服务器获取某个URL资源，其行为可以看作是一个读操作，对同一个URL进行多次GET并不会对服务器产生什么影响。
  + POST方法通常是对某个URL进行添加、修改，例如一个表单提交，通常会往服务器插入一条记录。多次POST请求可能导致服务器的数据库中添加了多条记录。
+ 处理方式 POST先发请求头，100？？

## 方法与状态码
+ HEAD 不返回响应体
+ OPTIONS 检测服务器支持哪些HTTP方法,常用在CORS里面
+ 100 Continue 有的浏览器，会将POST的header和body分成两个TCP数据包来发送 服务端返回100再发送body
+ 101 Switching Protocols 服务器更换为更高级的协议  如upgrade: websocket
+ 202 Accepted 已经接受请求，但未处理完成
+ 204 No Content  
  + 服务器成功处理，但未返回内容。 
  + 经常出现在预检请求OPTIONS的响应中
  + content-length=0
+ 301 Moved Permanently
+ 302 临时重定向 
  + 响应头location等提供redirectUrl
  + 浏览器自行跳转，前端拦截器捕获不到
+ 304 Not Modified  当页面刷新时，判断资源是否在资源池。若存在，则附上该资源在本地的一些信息（如修改时间等），发送HTTP请求给服务器，服务器根据信息作出判断，若资源没更新则网络状态为304，利用现有资源；否则执行资源加载过程。
+ 400 Bad Request 客户端请求的语法错误，服务器无法理解
+ 403 Forbidden	服务器理解请求客户端的请求，但是拒绝执行此请求
+ 404 
+ 408 Request Time-out
+ 500 服务器异常

## HTTP缓存
+ 缓存机制 304与强缓存
+ 没过期=命中强缓存=走200 expires ==> cache-control: max-age等 
+ if-Modified-Since/Last-Modified
+ if-None-Match/Etag
+ 对HTML文件缓存策略的设置

## cors
+ 简单请求 Origin Access-Control-Allow-Origin
+ 非简单请求会发送 prelight 预检请求 options
+ sec-fetch-mode: cors

## 登录过程与方式

## 实时通信
### eventsource SSE(server-sent-event)
+ `Accept: text/event-stream`
+ 适用于服务器单方面推送，比如社交媒体的信息
+ 与http2的服务器推送有何区别？

### WebSocket
+ 协议标识符是ws（如果加密，则为wss）
+ 101 Switching Protocols `Connection: Upgrade`
+ websocketd 代理服务器，不限语言

## 前端安全
### 什么是 CSRF 攻击，怎么预防；
### 跨站脚本攻击 XSS(Cross Site Scripting)
+ 在输入中混入脚本
+ 危害：盗取cookie
+ 对抗思路
  + 首先是过滤。对诸如`<script>、<img>、<a>`等标签进行过滤。
  + 其次是编码。像一些常见的符号，如<>在输入的时候要对其进行转换编码，这样做浏览器是不会对该标签进行解释执行的，同时也不影响显示效果。
  + 最后是限制。通过以上的案例我们不难发现xss攻击要能达成往往需要较长的字符串，因此对于一些可以预期的输入可以通过限制长度强制截断来进行防御。

