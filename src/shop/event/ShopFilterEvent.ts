import FabaEvent from "@fabalous/core/FabaEvent";
import ShopItemVo from "../vo/ShopItemVo";
/**
 * Created by creativecode on 03.10.16.
 */

export default class ShopFilterEvent extends FabaEvent{

    type:ShopFilterEventType;

    constructor(type:ShopFilterEventType){
        super("ShopFilterEvent");

        this.type = type;
    }
}

export enum ShopFilterEventType{
    SHOW,
    HIDE
}