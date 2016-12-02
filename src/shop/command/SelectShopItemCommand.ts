import FabaCommand from "@fabalous/core/FabaCommand";
import SelectShopItemEvent from "../event/SelectShopItemEvent";
import {store, IStore} from "../../common/commonImStore";
import {ShopItemUiEventsTypes, default as ShopItemUiEvents} from "../event/ShopItemUiEvents";
import Routes from "../../Routes";

export default class SelectShopItemCommand extends FabaCommand<IStore> {
    async execute(event: SelectShopItemEvent) {
        new ShopItemUiEvents(ShopItemUiEventsTypes.CHANGE_INDEX, 0).dispatch();

        this.store.set("shop.selectedItem", event.item);
        window.location.assign("#" + Routes.STORE.route + "/" + event.item.id);
    }
}