import {IFabaMediator} from "@fabalous/core/IFabaMediator";
import FabaMediator from "@fabalous/core/FabaMediator";
export default class ShopMediator extends FabaMediator implements IFabaMediator {

    constructor() {
        super();
    }

    registerCommands(): void {
        if (CLIENT) {
            super.registerCommands();
            this.addCommand(require("./event/InitShopEvent"), require("./command/InitShopCommand"));
        }
    }

    registerServices(): void {
        if (SERVER) {
            super.registerServices();
            //this.addSerivce(require("./event/InsertDashboardDataEvent"), require("./service/InsertDashboardDataService"));
        }
    }

}