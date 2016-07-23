import FabaMediator from "fabalous-core/core/FabaMediator";
import {IFabaMediator} from "fabalous-core/core/IFabaMediator";
import GetDashboardDataEvent from "./event/GetDashboardDataEvent";

import DashboardCommand from "./command/DashboardCommand";
import DashboardService from "./service/DashboardService";

export default class DashboardMediator extends FabaMediator implements IFabaMediator{

  constructor() {
    super();
  }

  registerCommands():void {
    super.registerCommands();
    this.addCommand(GetDashboardDataEvent, DashboardCommand);
  }


  registerServices():void {
    super.registerServices();
    this.addSerivce(GetDashboardDataEvent, DashboardService);
  }

}