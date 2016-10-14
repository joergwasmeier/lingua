import {IFabaMediator} from "@fabalous/core/IFabaMediator";
import FabaMediator from "@fabalous/core/FabaMediator";

declare var module:any;

export default class ShopMediator extends FabaMediator implements IFabaMediator {
    constructor() {
        super();

        if (CLIENT) {
            if (module.hot) {
                module.hot.accept([
                    "./command/InitShopCommand",
                    "./command/SelectShopItemCommand",
                    "./command/GetShopItemsCommand",
                    "./command/HideShopItemCommand"
                ], () => {
                    this.cmdList = [];
                    this.registerCommands();
                });
            }
        }
    }

    registerCommands(): void {
        if (CLIENT) {
            console.log("test2d2s");
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