import FabaCommand from "@fabalous/core/FabaCommand";
import ShowShopFilterEvent from "../event/ShopFilterEvent";
import {shopStore} from "../ShopStore";
import {ShopFilterEventType} from "../event/ShopFilterEvent";
import {commonStore} from "../../common/CommonStore";
import {Routes} from "../../A_Web";

export default class ShowShopFilterCommand extends FabaCommand {
    async execute(event: ShowShopFilterEvent) {
        switch (event.type){
            case ShopFilterEventType.SHOW:
                commonStore.history.push(Routes.STORE_FILTER.route);
                break;
            case ShopFilterEventType.HIDE:
                commonStore.history.push(Routes.STORE.route);
                break;
        }

    }
}