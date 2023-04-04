## TDD 测试驱动开发

## 命令式编程 Imperative Programming

## 函数式编程

- 声明式 Declarative
- 纯函数 Pure Function
- 数据不可变性 Immutability

### RxJS 安装

- NPM npm install rxjs (v5 版本)
- NPM npm install rx (v4 版本)

### 引入 RxJS

- 无法 Tree-Shaking
- 深链 (Deep Link) 按需导入

#### Observable 和 Observer

顾名思义，Observable 就是“可以被观察的对象”即“可被观察者”，⽽ Observer 就是“观察者”，
连接两者的桥梁就是 Observable 对象的函数 subscribe。

RxJS 中的数据流就是 Observable 对象，Observable 实现了下⾯两种设计
模式：

- 观察者模式（Observer Pattern）
- 迭代器模式（Iterator Pattern）
