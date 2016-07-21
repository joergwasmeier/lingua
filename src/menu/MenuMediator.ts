import FabaMediator from "fabalous-core/core/FabaMediator";
import {IFabaMediator} from "fabalous-core/core/IFabaMediator";
import GetMenuDataEvent from "./event/GetMenuDataEvent";

export default class MenuMediator extends FabaMediator implements IFabaMediator{
  constructor() {
    super();
  }

  registerCommands():void {
    if (CLIENT){
      super.registerCommands();
      this.addCommand(GetMenuDataEvent, require("./commad/GetMenuDataCommand.ts").default);
    }
  }

  registerServices():void {
    super.registerServices();
  }
}