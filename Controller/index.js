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