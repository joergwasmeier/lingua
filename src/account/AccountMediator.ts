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
import ChangeLoginInputEvent from "./event/ChangeLoginInputEvent";
import ChangeLoginInputCommand from "./command/ChangeLoginInputCommand";
import SignUpEvent from "./event/SignUpEvent";
import SignUpCommand from "./command/SignUpCommand";
import ChangeSignupInputEvent from "./event/ChangeSignupInputEvent";
import ChangeSignUpInputCommand from "./command/ChangeSignUpInputCommand";

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

      this.addCommand(ChangeLoginInputEvent, ChangeLoginInputCommand);
      this.addCommand(ChangeSignupInputEvent, ChangeSignUpInputCommand);

      this.addCommand(SignUpEvent, SignUpCommand);


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