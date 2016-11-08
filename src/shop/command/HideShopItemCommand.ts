import FabaCommand from "@fabalous/core/FabaCommand";
import {shopStore} from "../ShopStore";
import {commonStore} from "../../common/CommonStore";
import {Routes} from "../../A_Web";

export default class HideShopItemCommand extends FabaCommand{
    execute(event: HideShopItemCommand): any {
        commonStore.history.push(Routes.STORE.route);
    }
}