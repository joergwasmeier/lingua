import FabaEvent from "@fabalous/core/FabaEvent";
import ShopItemVo from "../vo/ShopItemVo";
/**
 * Created by creativecode on 03.10.16.
 */

export default class HideShopItemEvent extends FabaEvent{

    constructor(){
        super("HideShopItemEvent");
    }
}