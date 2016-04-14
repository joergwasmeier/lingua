import FabaCommand from "fabalous-core/core/FabaCommand";
import GetDashboardDataEvent from "../event/GetDashboardDataEvent";

/**
 * Created by creativecode on 11.04.16.
 */

export default class DashboardCommand extends FabaCommand {
  execute(event:GetDashboardDataEvent) {
    console.log("execute");
    this.sendToEndpoint(event);
  }

  result(event:GetDashboardDataEvent) {
    console.log("result");
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