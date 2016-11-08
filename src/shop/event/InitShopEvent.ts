import FabaEvent from "@fabalous/core/FabaEvent";

export default class InitShopEvent extends FabaEvent {
    viewName: any;
    view:any;
    constructor(view,cb) {
        super("InitShopEvent");
    }
}