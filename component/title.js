import React,{Component} from "react";

export default class Row extends Component{

    render(){
        return <div>
            <p onClick={()=>{this.props.setindex({title:789})}}>{this.props.text}</p>
        </div>
    }
}