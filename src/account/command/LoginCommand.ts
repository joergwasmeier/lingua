import LoginEvent from "./../event/LoginEvent";
import {accountStore} from "../AccountStore";
import {hashHistory} from "react-router";
import FabaCommand from "@fabalous/core/FabaCommand";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import GetMenuDataEvent from "../../menu/event/GetMenuDataEvent";

/**
 * Created by creativecode on 11.04.16.
 */

export default class LoginCommand extends FabaCommand {

  execute(event:LoginEvent) {
    if(this.checkUserPassLength()){
      //this.sendToEndpoint(event);
      FabaRuntimeWeb.sendToEndpoint(event, "");

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
    new GetMenuDataEvent().dispatch();
    hashHistory.push('/dashboard/');

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