import FabaEvent from "@fabalous/core/FabaEvent";

export default class InitShopEvent extends FabaEvent {
    viewName: any;
    view:any;
    args: Array<string>;

    constructor() {
        super("InitShopEvent");
    }
}