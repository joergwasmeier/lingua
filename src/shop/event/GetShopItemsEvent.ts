import FabaEvent from "@fabalous/core/FabaEvent";
import ShopItemVo from "../vo/ShopItemVo";
/**
 * Created by creativecode on 03.10.16.
 */

export default class GetShopItemsEvent extends FabaEvent{

    result:Array<ShopItemVo>;

    constructor(){
        super("GetShopItemsEvent");
    }
}