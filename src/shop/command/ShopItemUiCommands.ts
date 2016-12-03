import FabaCommand from "@fabalous/core/FabaCommand";
import ShopItemUiEvents from "../event/ShopItemUiEvents";
import {ShopItemUiEventsTypes} from "../event/ShopItemUiEvents";
import {IStore} from "../../common/commonImStore";

export default class ShopItemUiCommands extends FabaCommand<IStore> {
    async execute(event: ShopItemUiEvents) {
        switch (event.type) {
            case ShopItemUiEventsTypes.CHANGE_INDEX:
                this.store.set("shop.shopItemTabIndex", event.index);
                break;
        }
    }

    async result(event: ShopItemUiEvents) {

    }

    timeout(event: ShopItemUiEvents) {
        console.log("Command timeout");
    }

    error(event: ShopItemUiEvents) {
        console.log("Command error");
    }

    offline(event: ShopItemUiEvents) {
        console.log("Command offline");
    }
}