import FabaCommand from "fabalous-core/core/FabaCommand";
import LoginEvent from "./../event/LoginEvent";
import {AppModel} from "./../../common/AppModel";

/**
 * Created by creativecode on 11.04.16.
 */

export default class LoginCommand extends FabaCommand {
  execute(event:LoginEvent) {
    console.log("execute");
    this.sendToEndpoint(event);

    AppModel.getInstance().busy = true;
  }

  result(event:LoginEvent) {
    console.log("result");
    console.log(event);
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