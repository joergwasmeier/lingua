import {IFabaMediator} from "@fabalous/core/IFabaMediator";
import FabaMediator from "@fabalous/core/FabaMediator";

declare var module:any;

export default class ShopMediator extends FabaMediator implements IFabaMediator {
    registerCommands(): void {
        if (CLIENT) {
            super.registerCommands();

            //this.addCommandContext("InitShopEvent", "InitShopCommand");
            this.addCommand(require("./event/InitShopEvent"), require("./command/InitShopCommand"));
            this.addCommand(require("./event/SelectShopItemEvent"), require("./command/SelectShopItemCommand"));
            this.addCommand(require("./event/GetShopItemsEvent"), require("./command/GetShopItemsCommand"));
            this.addCommand(require("./event/HideShopItemEvent"), require("./command/HideShopItemCommand"));
            this.addCommand(require("./event/ShopFilterEvent"), require("./command/ShopFilterCommand"));
            this.addCommand(require("./event/GetShopItemsDetailsEvent"), require("./command/GetShopItemDetailsCommand"))
        }
    }

    async addCommandContext(eventName: string, commandName: string) {
        if (CLIENT) {
            var event = await System.import('./event/' + eventName);
            var command = await System.import('./command/' + commandName);

            console.log(command.default);
            this.addCommand(event.default, command.default);
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