import FabaCommand from "fabalous-core/core/FabaCommand";
import LoginEvent from "./../event/LoginEvent";
import {accountStore} from "../AccountStore";

/**
 * Created by creativecode on 11.04.16.
 */

export default class LoginCommand extends FabaCommand {

  execute(event:LoginEvent) {
    accountStore.login.errorCode = 0;

    if(this.checkUserPassLength()){
      this.sendToEndpoint(event);
      return;
    }

    accountStore.login.errorCode = 2;
    event.callBack();
  }

  checkUserPassLength():boolean{
    if (accountStore.login.userName.length <= 2) return false;
    if (accountStore.login.password.length <= 2) return false;

    return true;
  }


  result(event:LoginEvent) {
    event.callBack();
  }

  timeout(event:LoginEvent) {
    console.log("Command timeout");
  }

  error(event:LoginEvent) {
    console.log("Command error");
  }

  offline(event:LoginEvent) {
    console.log("Command offline");
  }
}