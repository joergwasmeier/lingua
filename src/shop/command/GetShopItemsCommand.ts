import FabaCommand from "@fabalous/core/FabaCommand";
import {IFabaCommand} from "@fabalous/core/IFabaCommand";
import GetShopItemsEvent from "../event/GetShopItemsEvent";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import {IStore} from "../../common/commonImStore";

export default class GetShopItemsCommand extends FabaCommand<IStore> implements IFabaCommand {
    async execute(event: GetShopItemsEvent) : Promise<void> {
        FabaRuntimeWeb.sendToEndpoint(event, "");
    }

    result(event: GetShopItemsEvent): any {
        this.store.set("shop.items", event.result);
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