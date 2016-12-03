import {IAccountStore, accountImStore} from "../account/AccountImStore";
import {IShopStore, shopImStore} from "../shop/ShopStore";
import {ILayoutSore, LayoutStore} from "../layout/LayoutStore";
import FabaStore from "@fabalous/core/FabaStore";

export interface IcommonStore {
    readonly child: any;
    readonly appInit: boolean;
    readonly oldPath: string;
    readonly activeModule: string;
    readonly activeView: string;

    readonly account: IAccountStore;
    readonly dashboard: IAccountStore;
    readonly shop: IShopStore;
    readonly layout: ILayoutSore;

    readonly menuOpen: boolean;
}

export const commonImStore: IcommonStore = {
    child: null,
    appInit: false,
    oldPath: "test",
    activeModule: "",
    activeView: "",
    account: accountImStore,
    dashboard: null,
    shop: shopImStore,
    menuOpen: false,
    layout: LayoutStore
};

export interface IStore extends FabaStore<IcommonStore>{}
