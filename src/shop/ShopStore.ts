import ShopItemVo from "./vo/ShopItemVo";
import {store} from "../common/commonImStore";

export interface IShopStore {
    items: Array<ShopItemVo>;
    selectedItem: ShopItemVo;
    shopItemVisible: boolean;
    shopFilterVisible: boolean;
    viewInit: boolean;
    view: any;
    item: any;
    filter: any;
    init: boolean;
}

export const shopImStore: IShopStore = {
    items: [],
    selectedItem: null,
    shopItemVisible: false,
    shopFilterVisible: false,
    viewInit: false,
    view: null,
    item: null,
    filter: null,
    init: false
};

export var shopStore: IShopStore = store.appStore.shop;