import FabaCommand from "@fabalous/core/FabaCommand";
import ShowShopFilterEvent from "../event/ShopFilterEvent";
import {ShopFilterEventType} from "../event/ShopFilterEvent";
import Routes from "../../Routes";
import {IStore} from "../../common/commonImStore";

export default class ShowShopFilterCommand extends FabaCommand<IStore> {
    async execute(event: ShowShopFilterEvent) {
        switch (event.type) {
            case ShopFilterEventType.SHOW:
                window.location.assign("#" + Routes.STORE_FILTER.route);
                break;

            case ShopFilterEventType.HIDE:
                window.location.assign("#" + Routes.STORE.route);
                break;
        }

    }
}