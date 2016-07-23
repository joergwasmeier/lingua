import AccountMediator from "./AccountMediator";
import AccountStore from "./AccountStore";
import Login from "./view/Login";
import SignUp from "./view/SignUp";
import ForgotPass from "./view/ForgotPass";
import CheckLoginStatusEvent from "./event/CheckLoginStatusEvent";

/**
 * Created by creativecode on 20.04.16.
 */

module.exports = {
  mediator: AccountMediator,
  store: AccountStore,
  view: Login,
  signUp: SignUp,
  forgotPass: ForgotPass,
  initEvent: CheckLoginStatusEvent
};

