import FabaCommand from "@fabalous/core/FabaCommand";
import GetShopItemsDetailsEvent from "../event/GetShopItemsDetailsEvent";
import GetShopItemsEvent from "../event/GetShopItemsEvent";
import {store, IStore} from "../../common/commonImStore";

export default class GetShopItemDetailsCommand extends FabaCommand<IStore> {
    async execute(event: GetShopItemsDetailsEvent) {
        // Check if there is an itme in the list
        if (this.store.appStore.shop.items.length === 0) {
            await new GetShopItemsEvent().dispatch();
        }

        this.store.appStore.shop.items.map((item) => {
            if (item.id === event.itemId) {
                this.store.set("shop.selectedItem", item);
                event.callBack();
                return;
            }
        });
    }

    async result(event: GetShopItemsDetailsEvent) {

    }

    timeout(event: GetShopItemsDetailsEvent) {
        console.log("Command timeout");
    }

    error(event: GetShopItemsDetailsEvent) {
        console.log("Command error");
    }

    offline(event: GetShopItemsDetailsEvent) {
        console.log("Command offline");
    }
}