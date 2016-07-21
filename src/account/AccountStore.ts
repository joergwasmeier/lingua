import LoginVo from "../account/vo/LoginVo";
import SignUpVo from "../account/vo/SignUpVo";
import ForgotPassVo from "../account/vo/ForgotPassVo";
import {model} from "../common/AppModel";
/**
 * Created by creativecode on 20.04.16.
 */

export default class AccountStore {
  login:LoginVo = new LoginVo();

  signUp:SignUpVo = new SignUpVo();

  forgotPass:ForgotPassVo = new ForgotPassVo();

  constructor() {

    if (!model.accountStore) model.accountStore = this;
  }
}