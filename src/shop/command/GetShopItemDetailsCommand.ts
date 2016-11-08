import FabaCommand from "@fabalous/core/FabaCommand";
import GetShopItemsDetailsEvent from "../event/GetShopItemsDetailsEvent";
import {shopStore} from "../ShopStore";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import GetShopItemsEvent from "../event/GetShopItemsEvent";

export default class GetShopItemDetailsCommand extends FabaCommand {
    async execute(event: GetShopItemsDetailsEvent) {
        // Check if there is an itme in the list
        if (!shopStore.items) {
            await new GetShopItemsEvent().dispatch();
        }

        shopStore.items.map((item) => {
            if (item.id === event.itemId) {
                shopStore.selectedItem = item;
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