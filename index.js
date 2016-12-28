import React, { Component } from "react";
export let Interface = (target, name, descriptor) => {
    descriptor.enumerable = true;
    return descriptor;

}
export default class Item {
    constructor() {
        this.components = {};
        this.states = {};
        let keys = Object.keys(this.__proto__);
        keys.forEach((name) => {
            if (name != "constructor" && this[name] && typeof this[name] == 'function') {
                this[name]();
            }
        })
    }
    render(name, View, model) {
        var _this = this;
        let _components = [];
        if (this.states[name]) {
            this.states[name].forEach((comp) => {
                comp.setState(model);
            })
        } else {
            this.states[name] = [];
            if (View instanceof Array) {
                _components = View;
            } else {
                _components = [View];
            }
            _components.forEach((Comp) => {
                class Child extends Component {
                    constructor(props) {
                        super(props);
                        _this.states[name].push(this);
                        this.state = Object.assign({}, props, model);
                    }
                    render() {
                        let props = Object.assign({}, this.state, _this, _this.__proto__, { 'render': (...args) => { _this.render.apply(_this, args) } });
                        return <Comp {...props }
                        />
                    }
                }
                this.components[name] = this.components[name] || {};
                this.components[name][Comp.prototype.constructor.name] = Child;
            })
        }

    }
}