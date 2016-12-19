import React,{Component} from "react";
import ReactDOM from "react-dom";

import {Router,Route,browserHistory} from "react-router";
import Index from "./Controller/index";
import view from "./index";
let page=new Index(); 
let IndexPage=view.router(page.index); 
let NewsPage=view.router(page.news);
ReactDOM.render((<Router history={browserHistory}>
            <Route path="/view/" component={IndexPage}></Route>
            <Route path="/view/news" component={NewsPage}></Route>
</Router>),document.getElementById("container"));