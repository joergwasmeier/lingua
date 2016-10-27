import FabaCommand from "@fabalous/core/FabaCommand";
import ShowShopFilterEvent from "../event/ShowShopFilterEvent";
import {shopStore} from "../ShopStore";

export default class ShowShopFilterCommand extends FabaCommand {
    async execute(event: ShowShopFilterEvent) {
        console.log("Show");
        shopStore.shopFilterVisible = true;
    }
}