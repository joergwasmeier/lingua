import {ILoginIm, LoginIm} from "./vo/LoginVo";
import {store} from "../common/commonImStore";
import {UserVo, IUserVoIm} from "./vo/UserVo";

export interface IAccountStore {
    moduleInit: boolean;
    login: ILoginIm;
    signUp: any;
    forgotPass: any;
    view: any;
    user: IUserVoIm;
    loggedIn: boolean;
}

export const accountImStore: IAccountStore = {
    moduleInit: false,
    login: LoginIm,
    signUp: true,
    forgotPass: true,
    view: null,
    loggedIn: false,
    user: UserVo.create()
};

store.set("account", accountImStore);

export var accountStore: IAccountStore = store.appStore.account;

export var viewCache = {
    account: null,
    login: null
};