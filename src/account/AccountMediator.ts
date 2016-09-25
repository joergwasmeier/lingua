
import FabaMediator from "@fabalous/core/FabaMediator";
import {IFabaMediator} from "@fabalous/core/IFabaMediator";
declare var module:any;

export default class AccountMediator extends FabaMediator implements IFabaMediator{
  constructor() {
    super();

    if (module.hot) {
      module.hot.accept([
        "./command/InitAccountCommand",
        "./command/CheckLoginCommand",
        "./command/ChangeLoginInputCommand",
        "./command/ChangeSignUpInputCommand",
        "./command/SignUpCommand",
        "./command/LoginCommand"
      ], () => {
          this.cmdList = [];
          this.registerCommands();
      });
    }
  }

  registerCommands():void {
    if(CLIENT) {
      super.registerCommands();

      this.addCommand(require("./event/InitAccountEvent"), require("./command/InitAccountCommand"));
      this.addCommand(require("./event/CheckLoginStatusEvent"), require("./command/CheckLoginCommand"));
      this.addCommand(require("./event/ChangeLoginInputEvent"), require("./command/ChangeLoginInputCommand"));
      this.addCommand(require("./event/ChangeSignupInputEvent"), require("./command/ChangeSignUpInputCommand"));
      this.addCommand(require("./event/SignUpEvent"), require("./command/SignUpCommand"));
      this.addCommand(require("./event/LoginEvent"), require("./command/LoginCommand"));
    }
  }

  registerServices():void {
    if(SERVER) {
      super.registerServices();

      this.addSerivce(require("./event/LoginEvent"), require("./service/LoginService"));
      this.addSerivce(require("./event/CheckLoginStatusEvent"), require("./service/CheckLoginService"));

    }
  }
}