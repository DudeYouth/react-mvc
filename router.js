import React,{Component} from "react";
import ReactDOM from "react-dom";

import {Router,Route,browserHistory} from "react-router";
import Components from "./Controller/index";
import view from "./index";
let Index=new Components();
let Comp=Index.components;
ReactDOM.render((<Router history={browserHistory}>
            <Route path="/view/" component={Comp.__index.Index}></Route>
</Router>),document.getElementById("container"));