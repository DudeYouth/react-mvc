# react-mvc


## 前言

 + 引入了module模块的概念，每一个完整的功能视图可以看做一个模块

 + 使用了mvc思想实现
 
 + 



## 模块

 + 初始化数据都是由祖先组件通过props流下来

 + 每个模块的state都是独立的，模块里的数据尽量不要共享

 + 



## mvc实现

 + model：主要是存放数据

 + controller：触发视图改变与写业务逻辑

 ```javascript
    import Module, { Interface } from "../index";
    import IndexView from "../page/index";
    import TitleView from "../component/title";
    import TestView from "../component/test";
    import { getAll } from "../model/index";

    export default class Index extends Module {
        constructor(props) {
            super(props);
        }
        @Interface
        setindex(model) {
            this.render('__index', [IndexView, TestView], model || { "title": "holle word!", text: { text: "test" } });
        }
        @Interface
        setTitle(model) {
            this.render('__title', TitleView, model);
        }
    }
 ```

 + view：视图
```jsx
    import React,{Component} from "react";
    import {Link} from "react-router";

    export default class Index extends Component{
        render(){
            var Title=this.props.components.__title;
            let Test=this.props.components.__index;
            return <div>
                <Title.Row  {...this.props.text}/>
                <h1>{this.props.title||"123"}</h1>
                <h2>{this.props.text.text}</h2>
                <Test.Test />
            </div>
        }
    }
```


### 使用方式

