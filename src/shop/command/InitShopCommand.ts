import * as React from "react";
import FabaCommand from "@fabalous/core/FabaCommand";
import Store from "../view/Shop";
import InitShopEvent from "../event/InitShopEvent";

export default class InitShopCommand extends FabaCommand{
    constructor(){
        super();
    }

    async execute(event: InitShopEvent) {
       event.view = React.createElement(Store, {});
       event.callBack();
    }
}