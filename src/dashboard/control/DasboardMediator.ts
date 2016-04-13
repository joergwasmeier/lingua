import FabaMediator from "fabalous-core/core/FabaMediator";
import {IFabaMediator} from "fabalous-core/core/IFabaMediator";
import GetDashboardDataEvent from "./event/GetDashboardDataEvent";

export default class DashboardMediator extends FabaMediator implements IFabaMediator{

  constructor() {
    super();
  }

  // @ifdef CLIENT
  registerCommands():void {
    super.registerCommands();
    this.addCommand(GetDashboardDataEvent, require("./command/DashboardCommand").default);
  }
  // @endif


  // @ifdef SERVER
  registerServices():void {
    super.registerServices();
    this.addSerivce(GetDashboardDataEvent, require("./service/DashboardService").default);
  }
  // @endif

}