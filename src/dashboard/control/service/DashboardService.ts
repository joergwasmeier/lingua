import FabaSerivce from "fabalous-core/core/FabaService";
import GetDashboardDataEvent from "../event/GetDashboardDataEvent";

export default class DashboardService extends FabaSerivce{
  async execute(event:GetDashboardDataEvent) {
    console.log("dashboard service");

    var nodeFS = require("fs");
    console.log(nodeFS);
    event.test = "result";
    super.sendToClient(event);
  }
  
}