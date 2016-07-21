import FabaMediator from "fabalous-core/core/FabaMediator";
import {IFabaMediator} from "fabalous-core/core/IFabaMediator";
import LoginEvent from "./event/LoginEvent";

export default class AccountMediator extends FabaMediator implements IFabaMediator{

  constructor() {
    super();
  }

  registerCommands():void {
    if(CLIENT){
      super.registerCommands();
      this.addCommand(LoginEvent, require("./command/LoginCommand.ts").default);
    }
  }
  registerServices():void {
    if(SERVER) {
      super.registerServices();
      this.addSerivce(LoginEvent, require("./service/LoginService.ts").default);
    }
  }
}