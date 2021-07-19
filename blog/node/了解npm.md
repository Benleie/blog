


## npm
+ nrm 管理npm registry的库
+ 版本符号含义
    + ~ 锁定minor，比如~1.2.3会匹配所有1.2.x版本，但是不包括1.3.0
    + ^ 锁定major，比如^1.2.3会匹配所有1.x.x的包，包括1.3.0，但是不包括2.0.0
    + 无 锁定patch

### 常用config
```bash
npm config set prefix "D:\nodejs\node_global"
npm config set cache "D:\nodejs\node_cache"
npm config set registry https://registry.npm.taobao.org
```


### node对npm的调用
```bash
npm prefix -g
C:\Users\我\AppData\Roaming\npm
```

```bash
$ cnpm prefix -g
D:\dev\nodejs
```


### yarn
+ `npm install -g yarn`
+ `yarn --version`
+ Yarn 淘宝源 `yarn config set registry https://registry.npm.taobao.org -g`  ``
+ 显示配置项 `yarn config list`
+ ``