import FabaMediator from "@fabalous/core/FabaMediator";
import {IFabaMediator} from "@fabalous/core/IFabaMediator";
declare const module: any;

export default class AccountMediator extends FabaMediator implements IFabaMediator {
    registerCommands(): void {
        if (CLIENT) {
            super.registerCommands();

            this.addCommand(require("./event/InitAccountEvent"), require("./command/InitAccountCommand.tsx"));
            this.addCommand(require("./event/CheckLoginStatusEvent"), require("./command/CheckLoginStatusCommand"));

            this.addCommand(require("./event/ChangeAccountInputEvent"), require("./command/ChangeAccountInputCommand"));

            this.addCommand(require("./event/SignUpEvent"), require("./command/SignUpCommand"));
            this.addCommand(require("./event/LoginEvent"), require("./command/LoginCommand"));

            this.addCommand(require("./event/ForgotPassEvent"), require("./command/ForgotPassCommand"));
            this.addCommand(require("./event/AccountUiEvent"), require("./command/AccountUiCommand"));
        }
    }



    registerServices(): void {
        if (SERVER) {
            super.registerServices();

            this.addSerivce(require("./../common/event/PrepareTablesEvent"), require("./service/PrepareTableService"));

            this.addSerivce(require("./event/LoginEvent"), require("./service/LoginService"));
            this.addSerivce(require("./event/SignUpEvent"), require("./service/SignUpService"));

            this.addSerivce(require("./event/CheckLoginStatusEvent"), require("./service/CheckLoginService"));
            this.addSerivce(require("./event/ForgotPassEvent"), require("./service/ForgotPassService"));
        }
    }
}