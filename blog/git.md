## 命令集
```
git log --pretty=oneline -7 
git reflog  # git reflog会记录所有HEAD的历史，也就是说reset，checkout等操作，都会记录在reflog中
git reset --hard <commit> 
```
+ .git/hooks中有很多钩子，如prepush 可以通过删除package.json中的prepush等来关闭husky

- `credential.helper=store`
```bash
# 解决gitk中文乱码
git config --global gui.encoding utf-8
```

#

## submodule
test branch
15:54
2.0.1
2.0.2

### git clone指定分支
git clone -b refactor https://github.com/maroslaw/rainyday.js.git stop
+ git clone --depth=1
  + 修改set-url之后，push失败   `shallow update not allowed`
  + git fetch --unshallow akveo

### git stash
+ git stash list
+ git stash save <name>
+ git stash show -p
+ git stash pop
+ git stash apply

### 创建一个新库，很简单。
在官网new repo,然后github在你没有readme的时候会有提示页面，照做就行。
git init一下，在github网上 new repo，然后
```
echo "# awecg.github.io" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/awecg/awecg.github.io.git
git push -u origin master
```
另:git pull --rebase origin master(如果创建库时生成了README.md，即README.md不在本地文件目录)

```
git remote add origin https://github.com/Benleie/simpleLogin.git
git branch -M master
git push -u origin master
```
- 将HTTP方式改为SSH`git remote set-url origin <url>`
+ `分支推送顺序的写法是<来源地>:<目的地>，所以git pull是<远程分支>:<本地分支>，而git push是<本地分支>:<远程分支>`


## workspace
### checkout
```bash
git checkout  ## 后面不加任何参数。表示核查工作区相对于版本库修改过的文件
git checkout -- <file>
git restore .  
```
	

## 使用多个git账号
+ ls -al ~/.ssh  检查本地现有SSH密钥
+ 创建公钥和密钥`ssh-keygen -t rsa -f test -C "test key"`创建公钥和密钥
+ $ ssh-agent bash
	$  ssh-add ~/.ssh/test
	Identity added: /c/Users/我/.ssh/test (/c/Users/我/.ssh/test)
+ 配置ssh的config文件
```
$ ssh -T git@github.com
Hi Benleie! You've successfully authenticated, but GitHub does not provide shell access.
```
+ git remote set-url origin
+ git push -u origin master

查看git config   git config --list
查看远程仓库信息  git remote show origin
查看远程仓库 git remote -v



## AUTOCRLF
+ git config core.autocrlf false
+ warning: LF will be replaced by CRLF in XXXXX.
The file will have its original line endings in your working directory.

+ 关于autocrlf  windows系统下，如果git add提交到stage的文件时unix格式，就有上面的提示。
意思是core.autocrlf默认为true，提交到index后会自动转为lf endings，方便项目跨平台使用。
+ 权宜之计：为了git bash不被这种提示刷屏，可以将true改为false，反正只是在windows下自己玩。


## 分支
git checkout 
git checkout -b 新建并转到
git merge
git branch -l 查看本地分支
git branch -r 查看远程分支
git branch -a 查看all分支
git branch -d iss53  删除分支 	

 git branch -v  查看每个分支最后一次提交
 git branch --merged  查看哪些分支合并到master分支
+ fatal: The current branch hotfix has no upstream branch.
To push the current branch and set the remote as upstream, use`git push --set-upstream origin hotfix`


## 常用操作
```bash
# 将gitignore中设置staged文件
git rm -r -f --cached .\app\public\templates\*
git rm -r -f --cached **/node_modules/
# gitk、gui中文乱码
git config --global gui.encoding utf-8
## 查看单个文件的提交历史 ---> gitlens中的file history
git log --pretty=oneline filename

```


commit阅读利器gitk
