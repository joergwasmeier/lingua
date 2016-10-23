import FabaCommand from "@fabalous/core/FabaCommand";
import {IFabaCommand} from "@fabalous/core/IFabaCommand";
import GetShopItemsEvent from "../event/GetShopItemsEvent";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import {shopStore} from "../ShopStore";

declare var module;
export default class GetShopItemsCommand extends FabaCommand implements IFabaCommand{
    constructor(){
        super();
    }

    async execute(event: GetShopItemsEvent) {
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