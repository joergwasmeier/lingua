import * as React from "react";
import FabaCommand from "@fabalous/core/FabaCommand";
import InitShopEvent from "../event/InitShopEvent";
import GetShopItemsEvent from "../event/GetShopItemsEvent";
import {shopStore} from "../ShopStore";
import Shop from "../view/Shop";

export default class InitShopCommand extends FabaCommand {
    async execute(event: InitShopEvent) {
        event.view = React.createElement(Shop, {model:shopStore});
        event.callBack();

        await new GetShopItemsEvent().dispatch();
    }
}