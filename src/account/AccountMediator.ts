import FabaMediator from "@fabalous/core/FabaMediator";
import {IFabaMediator} from "@fabalous/core/IFabaMediator";
declare var module: any;

export default class AccountMediator extends FabaMediator implements IFabaMediator {
    constructor() {
        super();

        if (module.hot) {
            module.hot.accept([
                "./command/InitAccountCommand",
                "./command/ChangeAccountInputCommand",
                "./command/CheckLoginStatusCommand",
                "./command/SignUpCommand",
                "./command/ForgotPassCommand",
                "./command/LoginCommand"
            ], () => {
                this.cmdList = [];
                this.registerCommands();
            });
        }
    }

    registerCommands(): void {
        console.log("command ");
        if (CLIENT) {
            super.registerCommands();

            this.addCommand(require("./event/InitAccountEvent"), require("./command/InitAccountCommand"));
            this.addCommand(require("./event/CheckLoginStatusEvent"), require("./command/CheckLoginStatusCommand"));

            this.addCommand(require("./event/ChangeAccountInputEvent"), require("./command/ChangeAccountInputCommand"));

            this.addCommand(require("./event/SignUpEvent"), require("./command/SignUpCommand"));
            this.addCommand(require("./event/LoginEvent"), require("./command/LoginCommand"));

            this.addCommand(require("./event/ForgotPassEvent"), require("./command/ForgotPassCommand"));
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