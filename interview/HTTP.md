# 常考问题
## http1.1的特点 1997.01
+ 持久连接（persistent connection），即TCP连接默认不关闭
+ 客户端在最后一个请求时，发送Connection: close，明确要求服务器关闭TCP连接
+ chrome对同一个host最多只能同时建立6个tcp连接，每个tcp上的http请求不能并行，只能按顺序依次发送
+ 管道机制（pipelining）浏览器默认关闭
+ 分块传输编码 Content-Length 字段 Transfer-Encoding: chunked
+ 缺点： "队头堵塞"（Head-of-line blocking）

## HTTP/2 2015
+ 二进制 请求头也可以是二进制
+ 多工 Multiplexing
+ 数据流 带编号用来标识；RST_STREAM帧用来取消某次请求
+ 服务器推送（server push）

### GET与POST区别
+ get的参数长度有限制 浏览器限制多为2kb
+ 都是应用层协议HTTP的请求方式，基于同一个应用层协议TCP

## 状态码
+ 100 Continue 有的浏览器，会将POST的header和body分成两个TCP数据包来发送 服务端返回100再发送body
+ 101 Switching Protocols 服务器更换为更高级的协议  如upgrade: websocket
+ 202 Accepted 已经接受请求，但未处理完成
+ 204 No Content  
  + 服务器成功处理，但未返回内容。 
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


## HTTP缓存
+ expires HTTP 1.0
+ 缓存机制 304与强缓存

## 跨域解决方式
cors

## 登录过程与方式


## 前端安全
### 什么是 CSRF 攻击，怎么预防；
### 跨站脚本攻击 XSS(Cross Site Scripting)
+ 在输入中混入脚本
+ 危害：盗取cookie
+ 对抗思路
  + 首先是过滤。对诸如`<script>、<img>、<a>`等标签进行过滤。
  + 其次是编码。像一些常见的符号，如<>在输入的时候要对其进行转换编码，这样做浏览器是不会对该标签进行解释执行的，同时也不影响显示效果。
  + 最后是限制。通过以上的案例我们不难发现xss攻击要能达成往往需要较长的字符串，因此对于一些可以预期的输入可以通过限制长度强制截断来进行防御。

