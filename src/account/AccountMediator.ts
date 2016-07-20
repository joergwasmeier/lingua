import FabaMediator from "fabalous-core/core/FabaMediator";
import {IFabaMediator} from "fabalous-core/core/IFabaMediator";
import LoginEvent from "./event/LoginEvent";

export default class AccountMediator extends FabaMediator implements IFabaMediator{

  constructor() {
    super();
  }

  // @ifdef CLIENT
  registerCommands():void {
    super.registerCommands();
    this.addCommand(LoginEvent, require("./command/LoginCommand.ts").default);
  }
  // @endif


  // @ifdef SERVER
  registerServices():void {
    super.registerServices();
    this.addSerivce(LoginEvent, require("./service/LoginService.ts").default);
  }
  // @endif
}