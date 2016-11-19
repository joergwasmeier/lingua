import FabaEvent from "@fabalous/core/FabaEvent";

export default class ShopItemUiEvents extends FabaEvent {
    type: ShopItemUiEventsTypes;
    index: number;

    constructor(type: ShopItemUiEventsTypes, index: number) {
        super("ShopItemUiEvents");
        this.index = index;
        this.type = type;
    }
}

export enum ShopItemUiEventsTypes {
    CHANGE_INDEX
}