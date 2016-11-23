import {ILoginIm, LoginIm} from "./vo/LoginVo";
import {ISignUpIm, SignUpIm} from "./vo/SignUpVo";
import {UserVo, IUserVoIm} from "./vo/UserVo";

export interface IAccountStore {
    moduleInit: boolean;
    login: ILoginIm;
    signUp: ISignUpIm;
    forgotPass: any;
    view: any;
    user: IUserVoIm;
    loggedIn: boolean;
    viewIndex: number;
}

export const accountImStore: IAccountStore = {
    moduleInit: false,
    login: LoginIm,
    signUp: SignUpIm,
    forgotPass: true,
    view: null,
    loggedIn: false,
    user: UserVo.create(),
    viewIndex: 0
};

export var viewCache = {
    account: null,
    login: null,
    child: null
};