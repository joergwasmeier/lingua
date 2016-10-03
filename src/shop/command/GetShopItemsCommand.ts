import FabaCommand from "@fabalous/core/FabaCommand";
import {IFabaCommand} from "@fabalous/core/IFabaCommand";
import GetShopItemsEvent from "../event/GetShopItemsEvent";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import {shopStore} from "../ShopStore";

export default class GetShopItemsCommand extends FabaCommand implements IFabaCommand{
    constructor(){
        super();
    }

    execute(event: GetShopItemsEvent): any {
        FabaRuntimeWeb.sendToEndpoint(event, "");
    }

    result(event: GetShopItemsEvent): any {
        shopStore.items = event.result;

        event.callBack();
    }

    timeout(event: GetShopItemsEvent): any {
        return null;
    }

    error(event: GetShopItemsEvent): any {
        return null;
    }

    offline(event: GetShopItemsEvent): any {
        return null;
    }
}