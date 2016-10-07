import FabaModel from "@fabalous/core/FabaModel";
import ShopItemVo from "./vo/ShopItemVo";
import {observable} from "mobx";

/**
 * Created by creativecode on 21.07.16.
 */

class ShopStore {
    @observable
    items:Array<ShopItemVo>;

    @observable
    selectedItem:ShopItemVo;

    @observable
    shopItemVisible:boolean;



    viewInit:boolean = false;
    view:any;
}

export var shopStore:ShopStore = FabaModel.getStore('shopStore', ShopStore);