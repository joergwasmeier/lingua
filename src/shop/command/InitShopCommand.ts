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

    async execute(event: InitShopEvent) {
        console.log("execute");

        switch (event.viewName) {
            case "shopfilter":
                event.view = React.createElement(Shop, {
                    childs: React.createElement(ShopFilter, {model: store.appStore.shop}),
                    model: store.appStore.shop
                });
                event.callBack();
                return;

            case "shopitem":
                if (!store.appStore.shop.selectedItem || store.appStore.shop.selectedItem.id !== "8dfsdfdsf3423424") {
                    new GetShopItemsDetailsEvent("8dfsdfdsf3423424").dispatch();

                    return;
                }

                event.view = React.createElement(Shop, {
                    childs: React.createElement(ShopItem, {model: store.appStore.shop}),
                    model: store.appStore.shop
                });

                event.callBack();
                return;
            default:
                event.view = React.createElement(Shop, {model: store.appStore.shop});
        }

        if (!store.appStore.shop) {
            event.view = null;
            event.callBack();
            return;
        }

        if (!store.appStore.shop.init) {
            event.callBack();
            new GetShopItemsEvent().dispatch();
            store.set("shop.init", true);
            return;
        }

        event.callBack();
    }
}