import GetDashboardDataEvent from "../event/GetDashboardDataEvent";
import FabaCommand from "@fabalous/core/FabaCommand";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import {IStore} from "../../common/commonImStore";

/**
 * Created by creativecode on 11.04.16.
 */

export default class DashboardCommand extends FabaCommand<IStore> {
  execute(event:GetDashboardDataEvent) {
    FabaRuntimeWeb.sendToEndpoint(event, "");
  }

  result(event:GetDashboardDataEvent) {
    console.log(event.test);
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