import FabaCommand from "@fabalous/core/FabaCommand";
import {IFabaCommand} from "@fabalous/core/IFabaCommand";
import GetShopItemsEvent from "../event/GetShopItemsEvent";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import BuyShopItemEvent from "../event/BuyShopItemEvent";
import {shopStore} from "../ShopStore";
import {BuyShopItemEventResult} from "../event/BuyShopItemEvent";

export default class BuyShopItemCommand extends FabaCommand implements IFabaCommand{
    constructor(){
        super();
    }

    execute(event: BuyShopItemEvent): any {
        // Show PopUp // Modal

        FabaRuntimeWeb.sendToEndpoint(event, "");
    }

    result(event: BuyShopItemEvent): any {
        switch (event.result){
            case BuyShopItemEventResult.ERROR:


            case BuyShopItemEventResult.ALREADY_BOUGHT:

            case BuyShopItemEventResult.BOUGHT:

        }


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