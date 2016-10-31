import FabaCommand from "@fabalous/core/FabaCommand";
import ShowShopFilterEvent from "../event/ShopFilterEvent";
import {shopStore} from "../ShopStore";
import {ShopFilterEventType} from "../event/ShopFilterEvent";

export default class ShowShopFilterCommand extends FabaCommand {
    async execute(event: ShowShopFilterEvent) {
        switch (event.type){
            case ShopFilterEventType.SHOW:
                shopStore.shopFilterVisible = true;
                break;
            case ShopFilterEventType.HIDE:
                shopStore.shopFilterVisible = false;
                break;
        }

    }
}