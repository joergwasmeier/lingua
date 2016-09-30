import FabaEvent from "@fabalous/core/FabaEvent";

export default class InitDashboardEvent extends FabaEvent {
    view:any;
    constructor(view,cb) {
        super("InitDasboardEvent");
    }
}