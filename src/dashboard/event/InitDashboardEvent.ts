import FabaEvent from "@fabalous/core/FabaEvent";

export default class InitDashboardEvent extends FabaEvent {
    view:any;

    c;
    v;
    constructor(view,cb) {
        super("InitDasboardEvent");

        this.v = view;
        this.c = cb;
    }
}