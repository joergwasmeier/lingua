import LoginVo from "../account/vo/LoginVo";
import SignUpVo from "../account/vo/SignUpVo";
import ForgotPassVo from "../account/vo/ForgotPassVo";
/**
 * Created by creativecode on 20.04.16.
 */

var Immutable = require('immutable');


const AccountStoreRecord = Immutable.Record({
  login : new LoginVo({}),
  signUp : new SignUpVo(),
  forgotPass : new ForgotPassVo()
});

export default class AccountStore extends AccountStoreRecord {
  login:LoginVo;
  signUp:SignUpVo;
  forgotPass:ForgotPassVo;

  constructor(props:any) {
    super(props);
  }
}