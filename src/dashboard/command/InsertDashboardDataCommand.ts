import GetDashboardDataEvent from "../event/GetDashboardDataEvent";
import FabaCommand from "@fabalous/core/FabaCommand";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import {IStore} from "../../common/commonImStore";

/**
 * Created by creativecode on 11.04.16.
 */

export default class InsertDashboardDataCommand extends FabaCommand<IStore> {
  execute(event:InsertDashboardDataCommand) {
    console.log("execute");
    FabaRuntimeWeb.sendToEndpoint(event, "");
  }

  result(event:GetDashboardDataEvent) {
    console.log(event);
  }

  timeout(event:GetDashboardDataEvent) {
    console.log("Command timeout");
  }

  error(event:GetDashboardDataEvent) {
    console.log("Command error");
  }

  offline(event:GetDashboardDataEvent) {
    console.log("Command offline");
  }
}