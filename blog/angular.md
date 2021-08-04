## todolist
+ 自定义dialog，在list中点击引入
- pipe news.service.ts
+ 关闭husky
+ @viewChild 属性指令


## rxjs
+ angular的httpClient中的每个请求方法都会构建一个Observable,被订阅时，执行请求
	+ 类似于rxjs中的from
+ Observablest
	+ Creating, Subscribing, Executing, Disposing
	+ subscribe()
	+ pipe()
+ Observer
	+ 三个partial callback -- next error complete
	+ 可以只传next `observable.subscribe(x => console.log('Observer got a next value: ' + x));` 
+ operators
	+ Pipeable Operators `observableInstance.pipe(operator())`

## 可以利用的学习资源
+ [中文开发 Material 2](https://github.com/stbui/angular-material-app)
+ [angualr-admin 22k](https://github.com/akveo/ngx-admin)
+ [akveo团队的table commponent](https://github.com/akveo/ng2-smart-table/)

## 基础
+ Angular概念
	+ 架构概览
		+ @NgModule 为组件提供编译的上下文
		+ 组件定义视图 @Component
		+ 组件使用服务 @Injectable
		+ 装饰器为模块、组件和服务提供元数据
+ 路由与导航
+ 模板
	+ 插值与属性绑定
	+ 指令
		+ 结构性指令
			+ let 模板输入变量
			
+ 依赖注入 providers选项
+ ng generate
	+ component
	+ directive
	+ module
	+ service
+ 组件
	+ 组件样式——类似于Web Components的Shadow DOM技术
		+ `::ng-deep` view-encapsulation 
		+ 视图封装模式
	+ 组件生命周期

## 使用体验
+ `*ngIf`要大写 @angular/common中的CommonModule




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
	+ overload 与 override
+ 基础类型
	+ any void never