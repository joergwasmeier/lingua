import FabaMediator from "fabalous-core/core/FabaMediator";
import {IFabaMediator} from "fabalous-core/core/IFabaMediator";
import LoginEvent from "./event/LoginEvent";
import LoginCommand from "./command/LoginCommand";
import LoginService from "./service/LoginService";

export default class AccountMediator extends FabaMediator implements IFabaMediator{

  constructor() {
    super();
  }

  registerCommands():void {
    if(CLIENT){
      super.registerCommands();
      this.addCommand(LoginEvent, new LoginCommand());
    }
  }
  registerServices():void {
    if(SERVER) {
      super.registerServices();
      this.addSerivce(LoginEvent, new LoginService());
    }
  }
}