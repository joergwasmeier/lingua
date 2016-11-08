import {IFabaMediator} from "@fabalous/core/IFabaMediator";
import FabaMediator from "@fabalous/core/FabaMediator";

declare const module: any;

export default class ShopMediator extends FabaMediator implements IFabaMediator {
    registerCommands(): void {
        if (CLIENT) {
            super.registerCommands();

            this.addCommandContext("InitShopEvent", "InitShopCommand");
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
            let event = await System.import('./event/' + eventName);
            let command = await System.import('./command/' + commandName);
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