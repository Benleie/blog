## typescript知识补充
+ 装饰器
	+ 类装饰器
	+ 方法装饰器 被调用时传入三个固定参数
+ 接口与类型
	+ 类类型 implements
	+ 泛型
		+ 需要一种方法使返回值的类型与传入参数的类型是相同的
		+ 调用泛型时  类型推断
	+ 高级类型
		+ Union联合类型 |
+ 类与继承
	+ 实例成员默认public 区别于private和protected
	+ extends super
	+ overload 与 override
+ 基础类型
	+ any void never
	+ 类型注解Type annotations：指定变量的类型 
	+ 类型推断 类型断言
	+ ? ! 空与非空

## 代码示例
```typescript
function identity<T>(arg: T): T {
    return arg;
}
```