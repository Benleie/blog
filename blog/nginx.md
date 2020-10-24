

+ [安装说明](https://www.nginx.cn/install)
  + cd /usr/local/src
  - wget http://nginx.org/download/nginx-1.18.0.tar.gz
  - tar -zxvf nginx-1.18.0.tar.gz
+ 启动 /usr/local/nginx/nginx
+ 在nginx.conf中修改配置，然后重启nginx
  + 查看进程 ps -ef | grep nginx
    + `cat /usr/local/nginx/nginx.pid`
  + `kill -QUIT <pid>`

+ firewall开放端口
  + systemctl status firewalld.service
  + firewall-cmd --list-port
  + firewall-cmd --zone=public --add-port=80/tcp --permanent
  + firewall-cmd --reload

+ nginx -t
+ nginx -s stop
+ nginx -c /usr/local/nginx/nginx.conf
+ nginx -s reload
