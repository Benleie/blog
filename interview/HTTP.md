## 常考问题

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
