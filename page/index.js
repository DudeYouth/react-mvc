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