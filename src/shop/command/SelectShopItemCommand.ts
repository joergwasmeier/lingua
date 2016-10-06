import FabaCommand from "@fabalous/core/FabaCommand";
import {IFabaCommand} from "@fabalous/core/IFabaCommand";
import GetShopItemsEvent from "../event/GetShopItemsEvent";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import {shopStore} from "../ShopStore";
import SelectShopItemEvent from "../event/SelectShopItemEvent";

export default class SelectShopItemCommand extends FabaCommand{
    constructor(){
        super();
    }

    execute(event: SelectShopItemEvent): any {
        shopStore.selectedItem = event.item;
        shopStore.shopItemVisible = true;
    }
}