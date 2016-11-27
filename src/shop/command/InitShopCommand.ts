import * as React from "react";
import FabaCommand from "@fabalous/core/FabaCommand";
import InitShopEvent from "../event/InitShopEvent";
import GetShopItemsEvent from "../event/GetShopItemsEvent";
import Shop from "../view/Shop";
import ShopFilter from "../view/ShopFilter";
import ShopItem from "../view/ShopItem";
import GetShopItemsDetailsEvent from "../event/GetShopItemsDetailsEvent";
import {store} from "../../common/commonImStore";

export default class InitShopCommand extends FabaCommand {
    async execute(event: InitShopEvent) : Promise<void> {
        if (event.args[1]) {
            switch (event.args[1]) {
                case "filter":
                    event.view = React.createElement(Shop, {
                        childs: React.createElement(ShopFilter, {model: this.store.appStore.shop}),
                        model: this.store.appStore.shop
                    });
                    event.callBack();
                    return;

                default:
                    if (!this.store.appStore.shop.selectedItem || this.store.appStore.shop.selectedItem.id !== event.args[1]) {
                        new GetShopItemsDetailsEvent(event.args[1]).dispatch();
                        return;
                    }

                    event.view = React.createElement(Shop, {
                        childs: React.createElement(ShopItem, {model: this.store.appStore.shop}),
                        model: this.store.appStore.shop
                    });

                    event.callBack();
                    return;
            }
        } else {
            event.view = React.createElement(Shop, {model: this.store.appStore.shop});
        }

        if (!this.store.appStore.shop.init) {
            event.callBack();
            new GetShopItemsEvent().dispatch();
            this.store.set("shop.init", true);
            return;
        }

        event.callBack();
    }
}