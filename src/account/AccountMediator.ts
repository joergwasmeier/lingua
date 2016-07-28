import FabaMediator from "fabalous-core/core/FabaMediator";
import {IFabaMediator} from "fabalous-core/core/IFabaMediator";
import LoginEvent from "./event/LoginEvent";
import LoginCommand from "./command/LoginCommand";
import LoginService from "./service/LoginService";
import CheckLoginStatusEvent from "./event/CheckLoginStatusEvent";
import CheckLoginCommand from "./command/CheckLoginCommand";
import InitAccountEvent from "./event/InitAccountEvent";
import InitAccountCommand from "./command/InitAccountCommand";
import CheckLoginService from "./service/CheckLoginService";

export default class AccountMediator extends FabaMediator implements IFabaMediator{

  constructor() {
    super();
  }

  registerCommands():void {
    if(CLIENT){
      super.registerCommands();
      this.addCommand(InitAccountEvent, InitAccountCommand);
      this.addCommand(LoginEvent, LoginCommand);
      this.addCommand(CheckLoginStatusEvent, CheckLoginCommand);
    }
  }
  registerServices():void {
    if(SERVER) {
      super.registerServices();
      this.addSerivce(LoginEvent, LoginService);
      this.addSerivce(CheckLoginStatusEvent, CheckLoginService);

    }
  }
}