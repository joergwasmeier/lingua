import FabaMediator from "fabalous-core/core/FabaMediator";
import {IFabaMediator} from "fabalous-core/core/IFabaMediator";

export default class DashboardMediator extends FabaMediator implements IFabaMediator{

  constructor() {
    super();
  }

  registerCommands():void {
    if(CLIENT){
      super.registerCommands();
      this.addCommand(require("./event/GetDashboardDataEvent"), require("./command/DashboardCommand"));
    }
  }

  registerServices():void {
    if(SERVER) {
      super.registerServices();
      this.addSerivce(require("./event/GetDashboardDataEvent"), require("./service/DashboardService"));
    }
  }

}