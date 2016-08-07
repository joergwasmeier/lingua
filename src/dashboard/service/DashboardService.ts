import FabaSerivce from "fabalous-core/core/FabaService";
import GetDashboardDataEvent from "../event/GetDashboardDataEvent";

export default class DashboardService extends FabaSerivce{
    constructor() {
        super();
    }

    execute(event:GetDashboardDataEvent) {
        console.log("dashboard service");

        event.test = "result";
        super.sendToClient(event);
  }
  
}