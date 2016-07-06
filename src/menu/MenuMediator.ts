import FabaMediator from "fabalous-core/core/FabaMediator";
import {IFabaMediator} from "fabalous-core/core/IFabaMediator";
import GetMenuDataEvent from "./event/GetMenuDataEvent";

export default class MenuMediator extends FabaMediator implements IFabaMediator{

  constructor() {
    super();
  }

  // @ifdef CLIENT
  registerCommands():void {
    super.registerCommands();
    this.addCommand(GetMenuDataEvent, require("./commad/GetMenuDataCommand.ts").default);
  }
  // @endif


  // @ifdef SERVER
  registerServices():void {
    super.registerServices();
  }
  // @endif

}