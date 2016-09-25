import {IFabaMediator} from "@fabalous/core/IFabaMediator";
import FabaMediator from "@fabalous/core/FabaMediator";
export default class DashboardMediator extends FabaMediator implements IFabaMediator {

    constructor() {
        super();
    }

    registerCommands(): void {
        if (CLIENT) {
            super.registerCommands();
            this.addCommand(require("./event/InitDashboardEvent"), require("./command/InitDashboardCommand"));
            this.addCommand(require("./event/GetDashboardDataEvent"), require("./command/DashboardCommand"));
        }
    }

    registerServices(): void {
        if (SERVER) {
            super.registerServices();
            this.addSerivce(require("./event/GetDashboardDataEvent"), require("./service/DashboardService"));
        }
    }

}