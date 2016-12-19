import view from "../index";
import IndexView from "../page/index";
import NewView from "../page/new";
import { getAll } from "../model/index";

export default class Index {
    index() {
        return view.render(IndexView, { "title": "holle word!", text: { text: "test" } });
    }
    news() {
        return view.render(NewView, { "title": "new word!" });
    }
}