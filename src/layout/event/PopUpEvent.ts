import FabaEvent from "@fabalous/core/FabaEvent";

export default class PopUpEvent extends FabaEvent {
    type:PopUpEventType;

    constructor(type:PopUpEventType) {
        super("PopUpEvent");

        this.type = type;
    }
}

export enum PopUpEventType{
    SHOW,
    HIDE
}