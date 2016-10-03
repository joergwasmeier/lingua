import FabaModel from "@fabalous/core/FabaModel";
import ShopItemVo from "./vo/ShopItemVo";
import {observable} from "mobx";

/**
 * Created by creativecode on 21.07.16.
 */

export default class ShopStore {
    @observable
    items:Array<ShopItemVo>;

    viewInit:boolean = false;
    view:any;
}

export var shopStore:ShopStore = FabaModel.getStore('shopStore', ShopStore);