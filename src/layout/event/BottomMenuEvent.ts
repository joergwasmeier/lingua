import FabaEvent from "@fabalous/core/FabaEvent";

export default class BottomMenuEvent extends FabaEvent {
    type: BottomMenuEventType;

    constructor(type: BottomMenuEventType) {
        super("BottomMenuEvent");

        this.type = type;
    }
}
export enum BottomMenuEventType{
    HOME,
    COURSE,
    SHOP,
    OTHER
}