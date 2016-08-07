import FabaCommand from "fabalous-core/core/FabaCommand";
import LoginEvent from "./../event/LoginEvent";
import {accountStore} from "../AccountStore";
import {hashHistory} from "react-router";
import FabaMediator from "fabalous-core/core/FabaMediator";

/**
 * Created by creativecode on 11.04.16.
 */
declare var module:any;

export default class LoginCommand extends FabaCommand {

  execute(event:LoginEvent) {
    if(this.checkUserPassLength()){
      this.sendToEndpoint(event);
      return;
    }
    accountStore.login.progress = false;
    accountStore.login.errorCode = 2;
    event.callBack();
  }

  checkUserPassLength():boolean{
    if (accountStore.login.userName.length <= 2) return false;
    if (accountStore.login.password.length <= 2) return false;

    return true;
  }


  result(event:LoginEvent) {
    console.log("result");
    hashHistory.push('/signUp/');

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