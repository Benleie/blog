
+ ss和ssr的区别在于ssr支持协议转换、协议混淆、多重代理

+ https://www.elifulkerson.com/projects/tcping.php

### 查看操作系统版本
+ cat /etc/redhat-release   查看centos发行版
+ cat /proc/version   查看linux内核版本

+ firewall-cmd --state 查看防火墙状态
+ firewall-cmd --zone=public --list-ports  查看开放端口

+ firewall-cmd --add-port=35082/tcp --add-port=35082/udp --permanent
+ 

## v2ray
+ [233boy的v2ray脚本](https://github.com/233boy/v2ray/tree/master)  

## ss
+ `wget --no-check-certificate -O shadowsocks-libev.sh https://raw.githubusercontent.com/uxh/shadowsocks_bash/master/shadowsocks-libev.sh && bash shadowsocks-libev.sh`
+ `wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh && chmod +x bbr.sh && ./bbr.sh`
+ `wget -N --no-check-certificate https://raw.githubusercontent.com/91yun/serverspeeder/master/serverspeeder-all.sh && bash serverspeeder-all.sh`

+ /etc/init.d/shadowsocks status
+ /etc/init.d/shadowsocks restart

## 常见解决方式
+ /etc/init.d/shadowsocks restart    突然链接不到外网了



欢迎来自xxx的用户