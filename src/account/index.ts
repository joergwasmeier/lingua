import AccountMediator from "./AccountMediator";
import AccountStore from "./AccountStore";
import Login from "./view/Login";
import SignUp from "./view/SignUp";
import ForgotPass from "./view/ForgotPass";
import InitAccountEvent from "./event/InitAccountEvent";

module.exports = {
  mediator: AccountMediator,
  store: AccountStore,
  storeName: "accountStore",
  view: Login,
  signUp: SignUp,
  forgotPass: ForgotPass,
  initEvent: InitAccountEvent
};

