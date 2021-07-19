## todolist
+ [ ] ngx-admin/layout/list 后面添加一个相同的组件
+ [ ] 自定义dialog，在list中点击引入

## 可以利用的学习资源
+ [中文开发 Material 2](https://github.com/stbui/angular-material-app)
+ [angualr-admin 22k](https://github.com/akveo/ngx-admin)
+ []()

## 基础
+ 路由与导航
+ 模板
	+ 插值与属性绑定
	+ 指令
+ 依赖注入 providers选项
+ ng generate
	+ component
	+ directive


## ngx-admin
+ 项目运行成功 依然报的两个错
	+ tsconfig.json  Argument for '--module' option must be: 'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'esnext'.
	+ app-routing.module.ts  Dynamic imports are only supported when the '--module' flag is set to 'esnext', 'commonjs',  'amd', 'system', or 'umd'.
+ 用npm7 install了一次，各种warnings


## typescript知识补充
+ 装饰器
	+ 类装饰器
	+ 方法装饰器 被调用时传入三个固定参数
+ 接口与类型
	+ 类类型 implements
	+ 泛型
		+ 需要一种方法使返回值的类型与传入参数的类型是相同的
		```typescript
		function identity<T>(arg: T): T {
		    return arg;
		}
		```
		+ 调用泛型时  类型推断
	+ 高级类型
		+ Union联合类型 |
+ 类与继承
	+ 实例成员默认public 区别于private和protected
	+ extends super
	+