import React, { Component } from "react";

let render = (View, model) => {
    return class Item extends Component {
        render() {
            let props = Object.assign(model, this.props);
            return <View {...props }
            />
        }
    }
}
let router = (component) => {
    return class Item extends Component {
        render() {
            let Index = component();
            return <Index / > ;
        }
    }
}
export default {
    render: render,
    router: router,
}