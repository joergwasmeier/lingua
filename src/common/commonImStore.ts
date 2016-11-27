import {IAccountStore, accountImStore} from "../account/AccountImStore";
import {IShopStore, shopImStore} from "../shop/ShopStore";
import {ILayoutSore, LayoutStore} from "../layout/LayoutStore";
const baoba = require("baobab");

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

const commonImStore: IcommonStore = {
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

export let tree = new baoba(commonImStore);
export let appStoreCourser = tree.select();

export class store {
    appStore: IcommonStore = appStoreCourser.get();

    relase() {
        tree.release();
        appStoreCourser = tree.select();
    }

    set(path: string, value: any, update: boolean = true) {
        let arrPath = path.split(".");
        appStoreCourser.set(arrPath, value);
    }
}