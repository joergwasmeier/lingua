import {ILoginImVo, LoginImVo} from "./vo/LoginImVo";

/**
 * Created by creativecode on 20.04.16.
 */

export interface IAccountImStore {
    moduleInit: boolean;
    login: ILoginImVo;
    signUp: any;
    forgotPass: any;
    view: any;
    test: any;
}

export const accountImStore: IAccountImStore = {
    moduleInit: false,
    login: LoginImVo,
    signUp: true,
    forgotPass: true,
    view: true,
    test: function () {
        console.log(this.login);
    }
};
