import FabaMediator from "@fabalous/core/FabaMediator";
import {IFabaMediator} from "@fabalous/core/IFabaMediator";

export default class MenuMediator extends FabaMediator implements IFabaMediator{
  constructor() {
    super();
  }

  registerCommands():void {
    if (CLIENT){
      super.registerCommands();
      this.addCommand(require("./event/GetMenuDataEvent"), require("./commad/GetMenuDataCommand"));
      this.addCommand(require("./event/ToggleMenuEvent"), require("./commad/ToggleMenuCommand"));

    }
  }

  registerServices():void {
    super.registerServices();
  }
}