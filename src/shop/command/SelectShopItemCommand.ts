import FabaCommand from "@fabalous/core/FabaCommand";
import SelectShopItemEvent from "../event/SelectShopItemEvent";
import {Routes} from "../../A_Web";
import {store} from "../../common/commonImStore";

export default class SelectShopItemCommand extends FabaCommand{
    constructor() {
        super();
    }

    execute(event: SelectShopItemEvent): any {
        store.set("shop.selectedItem", event.item);
        window.location.assign("#" + Routes.STORE_ITEM.route);
    }
}