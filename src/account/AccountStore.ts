import SignUpVo from "../account/vo/SignUpVo";
import ForgotPassVo from "../account/vo/ForgotPassVo";
import LoginVo from "./vo/LoginVo";
import FabaModel from "fabalous-core/core/FabaModel";

/**
 * Created by creativecode on 20.04.16.
 */

export default class AccountStore {
  moduleInit:boolean = false;

  login:LoginVo = new LoginVo();

  signUp:SignUpVo = new SignUpVo();

  forgotPass:ForgotPassVo = new ForgotPassVo();

}

export var accountStore:AccountStore = FabaModel.getStore('accountStore', AccountStore);