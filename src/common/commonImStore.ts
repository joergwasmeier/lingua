import {IAccountImStore} from "../account/AccountImStore";
const baoba = require('baobab');

export interface IcommonStore {
    readonly child: any;
    readonly appInit: boolean;
    readonly oldPath: string;
    readonly activeModule: string;
    readonly activeView: string;

    readonly account: IAccountImStore;
    readonly dashboard: IAccountImStore;
    readonly shop: IAccountImStore;
}

const commonImStore: IcommonStore = {
    child: null,
    appInit: false,
    oldPath: "test",
    activeModule: "",
    activeView: "",
    account: null,
    dashboard: null,
    shop: null
};

export const appStoreCourser = new baoba(commonImStore).select();


export class store {
    static appStore: IcommonStore = appStoreCourser.get();

    static set(path: any, value: any, update: boolean = true) {
        appStoreCourser.set(path, value);
        if (update) store.appStore = appStoreCourser.get();
        return appStoreCourser.get(path);
    }
}