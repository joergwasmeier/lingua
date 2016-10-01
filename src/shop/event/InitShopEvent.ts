import FabaEvent from "@fabalous/core/FabaEvent";

export default class InitShopEvent extends FabaEvent {
    view:any;
    constructor(view,cb) {
        super("InitShopEvent");
    }
}