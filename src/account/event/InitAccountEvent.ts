import AccountStore from "../AccountStore";
import FabaEvent from "@fabalous/core/FabaEvent";

export default class InitAccountEvent extends FabaEvent {
    viewName: string;

    model: AccountStore;
    view: any;

    constructor(name: string = "default") {
        console.log("InitAccountEvent");
        super("InitAccountEvent");
        this.viewName = name;
    }
}