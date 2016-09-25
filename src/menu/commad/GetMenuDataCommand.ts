import GetMenuDataEvent from "../event/GetMenuDataEvent";
import FabaCommand from "@fabalous/core/FabaCommand";

/**
 * Created by creativecode on 11.04.16.
 */

export default class GetMenuDataCommand extends FabaCommand {
  execute(event:GetMenuDataEvent) {
    console.log("GetMenuDataCommand");

    event.callBack();
  }

  result(event:GetMenuDataEvent) {

  }

  timeout(event:GetMenuDataEvent) {
    console.log("Command timeout");
  }

  error(event:GetMenuDataEvent) {
    console.log("Command error");
  }

  offline(event:GetMenuDataEvent) {
    console.log("Command offline");
  }
}