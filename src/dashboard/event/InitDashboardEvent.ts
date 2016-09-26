import FabaEvent from "@fabalous/core/FabaEvent";

export default class InitDashboardEvent extends FabaEvent {
    view:any;

    constructor() {
        super("InitDasboardEvent");
    }
}