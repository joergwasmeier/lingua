import FabaCommand from "fabalous-core/core/FabaCommand";
import LoginEvent from "./../event/LoginEvent";
import {model} from "./../../common/AppModel";

/**
 * Created by creativecode on 11.04.16.
 */

export default class LoginCommand extends FabaCommand {

  execute(event:LoginEvent) {
    model.accountStore.login.errorCode = 0;
    if(this.checkUserPassLength()){
      this.sendToEndpoint(event);
      return;
    }

    model.accountStore.login.errorCode = 2;
    event.cbs();
  }

  checkUserPassLength():boolean{
    if (model.accountStore.login.userName.length <= 2) return false;
    if (model.accountStore.login.password.length <= 2) return false;

    return true;
  }


  result(event:LoginEvent) {
    event.cbs();
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