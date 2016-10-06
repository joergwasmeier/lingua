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
            this.addCommand(require("./event/SelectShopItemEvent"), require("./command/SelectShopItemCommand"));
            this.addCommand(require("./event/GetShopItemsEvent"), require("./command/GetShopItemsCommand"));

            this.addCommand(require("./event/HideShopItemEvent"), require("./command/HideShopItemCommand"));

        }
    }

    registerServices(): void {
        if (SERVER) {
            super.registerServices();
            this.addSerivce(require("./event/GetShopItemsEvent"), require("./service/GetShopItemsService"));
            this.addSerivce(require("./../common/event/PrepareTablesEvent"), require("./service/PrepareTablesService"));
        }
    }

}