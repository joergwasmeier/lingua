import FabaSerivce from "fabalous-core/core/FabaService";
import GetDashboardDataEvent from "../event/GetDashboardDataEvent";

export default class DashboardService extends FabaSerivce{
    constructor() {
        super();
    }

    execute(event:GetDashboardDataEvent) {
        console.log("dashboard service er");

        //var nodeFS = require("fs");
        //console.log(nodeFS);
        event.test = "result";
        super.sendToClient(event);
  }
  
}