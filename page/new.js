import React,{Component} from "react";
import {Link} from "react-router";

export default class Index extends Component{
    render(){
        return <div>
        <h1>{this.props.title}</h1>
        </div>
    }
}