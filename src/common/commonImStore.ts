import {IAccountStore} from "../account/AccountImStore";
import {IShopStore} from "../shop/ShopStore";
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

    readonly menuOpen: boolean;
}

const commonImStore: IcommonStore = {
    child: null,
    appInit: false,
    oldPath: "test",
    activeModule: "",
    activeView: "",
    account: null,
    dashboard: null,
    shop: null,
    menuOpen: false
};

let tree = new baoba(commonImStore);
export const appStoreCourser = tree.select();

export class store {
    static appStore: IcommonStore = appStoreCourser.get();

    static set(path: string, value: any, update: boolean = true) {
        let arrPath = path.split(".");
        appStoreCourser.set(arrPath, value);
    }
}