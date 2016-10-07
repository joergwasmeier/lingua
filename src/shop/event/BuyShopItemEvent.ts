import FabaEvent from "@fabalous/core/FabaEvent";
import ShopItemVo from "../vo/ShopItemVo";
/**
 * Created by creativecode on 03.10.16.
 */

export default class BuyShopItemEvent extends FabaEvent{

    item:ShopItemVo;

    result:BuyShopItemEventResult;

    constructor(){
        super("BuyShopItemsEvent");
    }
}

export enum BuyShopItemEventResult{
    BOUGHT,
    ALREADY_BOUGHT,
    ERROR
}