import FabaCommand from "@fabalous/core/FabaCommand";
import SelectShopItemEvent from "../event/SelectShopItemEvent";
import {Routes} from "../../A_Web";

import {shopStore} from "../ShopStore";
import {commonStore} from "../../common/CommonStore";

export default class SelectShopItemCommand extends FabaCommand{
    constructor(){
        super();
    }

    execute(event: SelectShopItemEvent): any {
        shopStore.selectedItem = event.item;
        commonStore.history.push(Routes.STORE_ITEM.route);
    }
}