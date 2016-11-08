import * as React from "react";
import FabaCommand from "@fabalous/core/FabaCommand";
import InitShopEvent from "../event/InitShopEvent";
import GetShopItemsEvent from "../event/GetShopItemsEvent";
import {shopStore} from "../ShopStore";
import Shop from "../view/Shop";
import {PopUpEventType, default as PopUpEvent} from "../../layout/event/PopUpEvent";
import ShopFilter from "../view/ShopFilter";
import ShopItem from "../view/ShopItem";
import GetShopItemsDetailsEvent from "../event/GetShopItemsDetailsEvent";

export default class InitShopCommand extends FabaCommand {
    async execute(event: InitShopEvent) {
        console.time("InitShopCommand");

        if (!shopStore.view) {
            shopStore.view = React.createElement(Shop, {model: shopStore});
        }

        console.timeEnd("InitShopCommand");
        switch (event.viewName) {
            case "shopfilter":
                event.view = React.cloneElement(shopStore.view, {
                    childs: React.createElement(ShopFilter, {model: shopStore}),
                    model: shopStore
                });
                event.callBack();
                return;

            case "shopitem":
                console.time("shopItem");
                await new GetShopItemsDetailsEvent("8dfsdfdsf3423424").dispatch();

                event.view = React.cloneElement(shopStore.view, {
                    childs: React.createElement(ShopItem, {model: shopStore}),
                    model: shopStore
                });

                event.callBack();
                console.timeEnd("shopItem");
                return;
        }

        shopStore.view = React.cloneElement(shopStore.view, {
            childs: null,
            model: shopStore
        });

        new PopUpEvent(PopUpEventType.SHOW).dispatch();
        event.view = shopStore.view;
        event.callBack();
        await new GetShopItemsEvent().dispatch();
        new PopUpEvent(PopUpEventType.HIDE).dispatch();
    }
}