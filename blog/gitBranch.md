

## learnBranch
[教程](https://learngitbranching.js.org/)


### 分支
+ git branch  不带参数：列出本地已经存在的分支，并且在当前分支的前面用"*"标记
+ git branch -r  查看远程版本库分支列表
+ git branch -a  查看所有分支列表，包括本地和远程
+ git branch dev  创建名为dev的分支，创建分支时需要是最新的环境，创建分支但依然停留在当前分支
+ git branch -d dev  删除dev分支，如果在分支中有一些未merge的提交，那么会删除分支失败，此时可以使用 git branch -D dev：强制删除dev分支，
+ git branch -vv  可以查看本地分支对应的远程分支
+ git branch -m oldName newName 给分支重命名

+ git branch [branch]    新建
+ git checkout -b [branch] 新建并切换
+ git checkout [branch]    切换分支
+ git checkout -b master 如果分支存在则只切换分支，若不存在则创建并切换到master分支，repo start是对git checkout -b这个命令的封装，将所有仓库的分支都切换到master，master是分支名

+ git checkout [commit]  分离HEAD,指定提交记录
+ git checkout [branch]^ 
+ git checkout HEAD^
+ `git branch -f master HEAD~3` 强制移动分支


+ git merge [branch]  创建新的提交，并把别的分支合并过来
+ git rebase [branch]  HEAD向前创建新的提交，把branch添加过去
+ git push <远程主机名> <本地分支名>  <远程分支名>
+ git remote add origin <url>
+ git remote remove origin


### 撤销变更
+ git reset
+ git revert HEAD

### 深入了解
+ git cherry-pick [commit]
+ git rebase -i 位置

### 远程分支
push.default
+ git checkout origin/master  分离HEAD
+ 远程库更新后rebase和merge存在区别
+ git pull --rebase


+ git branch --set-upstream-to=origin/learn master

### 解决冲突
+ mergetool
+ 手动解决







## 基础
+ git init
+ git add .
+ git commit
   + -m 表示可以直接输入后面的message，如果不加,会调用vim来让你输入这个message
   + -a 将所有已跟踪文件中的执行修改或删除操作的文件都提交到本地仓库 省略git add
   + --amend 修改最近一次提交记录
+ HEAD 默认指向当前分支上最近一次提交记录
+ git push <远程主机名> <本地分支名> <远程分支名>      
+ Changes not staged for commit:
   + (use "git add/rm <file>..." to update what will be committed)
   + (use "git checkout -- <file>..." to discard changes in working directory)
+ git reflog  命令查看你的历史变更记录
+ git reset --hard HEAD@{n}    （注意：n是你要回退到的引用位置）
+ git reset --hard <COMMIT_ID>
+ git reset --hard HEAD^         回退到上个版本

+ git reset --hard HEAD~3   回退到前3次提交之前，以此类推，回退到n次提交之前
+ 
+ git log --oneline -4
+ git show --name-only [CommitId]

+ detached HEAD [commitId]     Successfully rebased and updated refs/heads/master.

The following untracked working tree files would be overwritten by merge

+ git rebase -i [commitId]
+ git rebase --abort/--continue
+ git stash
+ git stash list
+ git stash pop




### 常见的git工作流程
+ git checkout master
+ git pull
+ git checkout local
+ git rebase -i HEAD~2  //合并提交 --- 2表示合并两个
+ git rebase master---->解决冲突--->git rebase --continue
+ git checkout master
+ git merge local
+ git push



