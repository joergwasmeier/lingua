import {ILoginImVo, LoginImVo} from "./vo/LoginImVo";

/**
 * Created by creativecode on 20.04.16.
 */

export interface IAccountImStore {
    readonly moduleInit: boolean;
    readonly login: ILoginImVo;
    readonly signUp: any;
    readonly forgotPass: any;
    readonly view: any;
}

export const accountImStore: IAccountImStore = {
    moduleInit: false,
    login: LoginImVo,
    signUp: true,
    forgotPass: true,
    view: null
};
