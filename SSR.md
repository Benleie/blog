
+ ss和ssr的区别在于ssr支持协议转换、协议混淆、多重代理

+ https://www.elifulkerson.com/projects/tcping.php



## v2ray
+ [233boy的v2ray脚本](https://github.com/233boy/v2ray/tree/master)  

## ss
+ `wget --no-check-certificate -O shadowsocks-libev.sh https://raw.githubusercontent.com/uxh/shadowsocks_bash/master/shadowsocks-libev.sh && bash shadowsocks-libev.sh`
+ `wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh && chmod +x bbr.sh && ./bbr.sh`
+ `wget -N --no-check-certificate https://raw.githubusercontent.com/91yun/serverspeeder/master/serverspeeder-all.sh && bash serverspeeder-all.sh`

+ (Centos8使用BBR无需升级内核) 


启动：/etc/init.d/shadowsocks start
停止：/etc/init.d/shadowsocks stop
重启：/etc/init.d/shadowsocks restart
状态：/etc/init.d/shadowsocks status
配置文件路径：/etc/shadowsocks.json
日志文件路径：/var/log/shadowsocks.log
安装路径：/usr/local/shadowsocks/shadowsoks
+ cat /root/shadowsocks.txt
+ /etc/init.d/shadowsocks status
+ /etc/init.d/shadowsocks restart

## 常见解决方式
+ /etc/init.d/shadowsocks restart    突然链接不到外网了
+ timeout

## 问题日志
+ 全会期间无法连接；之后tcping无法获取端口，但是`/etc/init.d/shadowsocks status`显示running

## 其他
+ 原版 ss，不用酸酸乳，不混淆。防火墙只指定自家 IP 访问，阻断 ICMP 请求。
+ yum -y install gcc gcc-c++ autoconf pcre pcre-devel make automake
+  `tcping -d -h -u -n 10 -i 0.1 -w 0.1 <ip> <port>`
	使用http模式（-h），并且在返回数据中显示目标源url地址（-u），向主机ip为192.168.1.30的6001端口发送10次数据包（-n 10），在返回数据行中显示发送数据包的日期（-d），指定每次发送数据包的时间间隔为0.1秒（-i 0.1），等待数据包相应的时间间隔为0.1秒（-w 0.1）
+ There were 236 failed login attempts since the last successful login.
+ nothing provides /usr/sbin/new-kernel-pkg needed by kernel-3.10.0-327.el7.x86_64
+ 使用elRepo更换内核(Centos8使用BBR无需升级内核)

## 加速
+ BBR https://teddysun.com/489.html
wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh && chmod +x bbr.sh && ./bbr.sh
+ bbr https://www.codercto.com/a/25431.html

### serverspeeder
+ https://github.com/hombo125 
+ [安装教程](https://www.baishitou.cn/1524.html)
+ bbr https://www.codercto.com/a/25431.html


https://github.com/shadowsocks/shadowsocks


## 参考文章
+ https://lccurious.github.io/2018/03/03/vlutr-ssr/
