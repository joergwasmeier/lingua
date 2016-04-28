import FabaMediator from "fabalous-core/core/FabaMediator";
import {IFabaMediator} from "fabalous-core/core/IFabaMediator";
import GetCourseDataEvent from "./event/GetCourseDataEvent";

export default class CourseMediator extends FabaMediator implements IFabaMediator{

  constructor() {
    super();
  }

  // @ifdef CLIENT
  registerCommands():void {
    super.registerCommands();
    this.addCommand(GetCourseDataEvent, require("./command/GetCourseDataCommand.ts").default);
  }
  // @endif


  // @ifdef SERVER
  registerServices():void {
    super.registerServices();
    this.addSerivce(GetCourseDataEvent, require("./service/GetCourseDataService.ts").default);
  }
  // @endif

}