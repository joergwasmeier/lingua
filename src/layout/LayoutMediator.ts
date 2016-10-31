import {IFabaMediator} from "@fabalous/core/IFabaMediator";
import FabaMediator from "@fabalous/core/FabaMediator";
export default class LayoutMediator extends FabaMediator implements IFabaMediator {
    registerCommands(): void {
        if (CLIENT) {
            super.registerCommands();
            this.addCommand(require("./event/PopUpEvent"), require("./command/PopUpCommand"));
        }
    }
}