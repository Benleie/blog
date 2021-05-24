
108.61.157.138 

vim /etc/ssh/sshd_config 
service sshd restart

# 常用命令
+ sestatus
## 查看操作系统版本
+ cat /etc/redhat-release   查看centos发行版
+ cat /proc/version   查看linux内核版本

### 防火墙操作
+ firewall-cmd --state 查看防火墙状态
+ firewall-cmd --zone=public --list-ports  查看开放端口
+ firewall-cmd --add-port=35082/tcp --add-port=35082/udp --permanent
+ firewall-cmd --reload

## centos
+ free -h 查看内存使用情况
+ top 
+ systemctl status firewalld 查看防火墙状态
+ uname -r 查看内核版本
+ cat /etc/redhat-release 查看centos发行版

### 修改系统时间
+ tzselect 调整系统时间，选择时区
+ cp /usr/share/zoneinfo/Asia/Shanghai   /etc/localtime
+ hwclock -w  将当前时间和日期写入BIOS，避免重启后失效

### 安装zsh
+ cat /etc/shells   查看shell
+ yum install -y zsh
+ chsh -s /bin/zsh  设置默认shell
+ echo $SHELL
+ sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
+ `cat  ~/.oh-my-zsh/templates/zshrc.zsh-template`

欢迎来自xxx的用户


