## todolist
+ 自定义dialog，在list中点击引入
- pipe news.service.ts
+ 关闭husky
+ @viewChild 属性指令
+ tInputText 指令
+ ElementRef


## rxjs
+ angular的httpClient中的每个请求方法都会构建一个Observable,被订阅时，执行请求
	+ 类似于rxjs中的from
+ Observable
	+ Creating, Subscribing, Executing, Disposing
	+ subscribe()
	+ pipe()   批量处理Operators
+ Observer
	+ 三个partial callback -- next error complete
	+ 可以只传next `observable.subscribe(x => console.log('Observer got a next value: ' + x));` 
+ operators
	+ Pipeable Operators `observableInstance.pipe(operator())`

```js
modelChanged: Subject<string> = new Subject<string>();
// rxjs < 6
this.modelChanged
    .debounceTime(300) // wait 300ms after the last event before emitting last event
    .distinctUntilChanged() // only emit if value is different from previous value
    .subscribe(model => this.model = model);
// rxjs >=6
this.modelChanged
	.pipe(
     	debounceTime(300), 
     	distinctUntilChanged()
    ).subscribe(model => this.model = model);
```

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
		+ hidden属性替代ng-model指令
	+ 指令
		+ 结构性指令
			+ let 模板输入变量
			
+ 依赖注入 providers选项
	+ constructor注入 class解耦
+ ng generate
	+ component
	+ directive
	+ module
	+ service
+ 组件
	+ 组件样式——类似于Web Components的Shadow DOM技术
		+ `:host ::ng-deep` view-encapsulation 
		+ 视图封装模式
	+ 内容投影 
		+ `ng-content`元素 类似于vue的插槽 slot
	+ 组件生命周期
		+ `ngAfterContentInit()` 当Angular把外部内容投影进组件视图或指令所在的视图之后调用
		+ `ngAfterViewInit()` 初识化视图之后调用

## 使用体验
+ `*ngIf`要大写 @angular/common中的CommonModule




## ngx-admin
+ 项目运行成功 依然报的两个错
	+ tsconfig.json  Argument for '--module' option must be: 'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'esnext'.
	+ app-routing.module.ts  Dynamic imports are only supported when the '--module' flag is set to 'esnext', 'commonjs',  'amd', 'system', or 'umd'.
+ 用npm7 install了一次，各种warnings


