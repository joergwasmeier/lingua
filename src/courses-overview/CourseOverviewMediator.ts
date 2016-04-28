/**
 * Created by creativecode on 28.04.16.
 */


import FabaMediator from "fabalous-core/core/FabaMediator";
import {IFabaMediator} from "fabalous-core/core/IFabaMediator";
import GetCourseOverviewDataEvent from "./event/GetCourseOverviewDataEvent";

export default class CourseOverviewMediator extends FabaMediator implements IFabaMediator{

  constructor() {
    super();
  }

  // @ifdef CLIENT
  registerCommands():void {
    super.registerCommands();
    this.addCommand(GetCourseOverviewDataEvent, require("./command/GetCourseOverviewDataCommand.ts").default);
  }
  // @endif


  // @ifdef SERVER
  registerServices():void {
    super.registerServices();
    this.addSerivce(GetCourseOverviewDataEvent, require("./service/GetCourseOverviewDataService.ts").default);
  }
  // @endif

}