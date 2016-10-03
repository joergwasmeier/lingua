import * as React from "react";
import FabaCommand from "@fabalous/core/FabaCommand";
import Store from "../view/Shop";
import InitShopEvent from "../event/InitShopEvent";
import GetShopItemsEvent from "../event/GetShopItemsEvent";
import {shopStore} from "../ShopStore";

export default class InitShopCommand extends FabaCommand {
    constructor() {
        super();
    }

    async execute(event: InitShopEvent) {
        if (!shopStore.viewInit){
            await new GetShopItemsEvent().dispatch();
            shopStore.view = event.view = React.createElement(Store, {});
        } else {
            event.view = shopStore.view;
        }

        event.callBack();

        shopStore.viewInit = true;
    }
}