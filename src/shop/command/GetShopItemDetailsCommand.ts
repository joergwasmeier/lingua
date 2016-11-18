import FabaCommand from "@fabalous/core/FabaCommand";
import GetShopItemsDetailsEvent from "../event/GetShopItemsDetailsEvent";
import GetShopItemsEvent from "../event/GetShopItemsEvent";
import {store} from "../../common/commonImStore";

export default class GetShopItemDetailsCommand extends FabaCommand {
    async execute(event: GetShopItemsDetailsEvent) {
        // Check if there is an itme in the list
        if (!store.appStore.shop.items) {
            await new GetShopItemsEvent().dispatch();
        }

        store.appStore.shop.items.map((item) => {
            if (item.id === event.itemId) {
                store.set("shop.selectedItem", item);
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