import React,{Component} from "react";
import {Link} from "react-router";

import Row from "../component/title";

export default class New extends Component{
    render(){
        return <div>
        <Link to="/view/news">新页面</Link>
            <Row {...this.props.text} />
            <h1>{this.props.title||"123"}</h1>
            <h2>{this.props.text.text}</h2>
        </div>
    }
}