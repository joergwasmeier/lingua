import FabaEvent from "@fabalous/core/FabaEvent";

export default class GetShopItemsDetailsEvent extends FabaEvent {

    itemId: string;

    constructor(itemId: string) {
        super("GetShopItemsDetailsEvent");

        this.itemId = itemId;
    }
}