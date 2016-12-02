import * as React from "react";
import * as ReactDOM from "react-dom";

import FabaCommand from "@fabalous/core/FabaCommand";
import {IStore} from "../../common/commonImStore";
import RenderToDOMEvent from "../event/RenderToDOMEvent";

export default class RenderToDOMCommand extends FabaCommand<IStore> {
    async execute(event: RenderToDOMEvent) {
        if (!event.child) return;

        let layout = React.createElement(event.element, {childs: event.child, model: this.store.appStore});
        ReactDOM.render(layout, document.getElementById(event.domId));
    }
}