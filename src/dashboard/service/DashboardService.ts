import GetDashboardDataEvent from "../event/GetDashboardDataEvent";
import FabaSerivce from "@fabalous/core/FabaService";

export default class DashboardService extends FabaSerivce{
    constructor() {
        super();
    }

    execute(event:GetDashboardDataEvent) {
        event.test = "result";
        super.sendToClient(event);
  }
  
}