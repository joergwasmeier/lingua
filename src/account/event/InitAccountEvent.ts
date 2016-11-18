import FabaEvent from "@fabalous/core/FabaEvent";

export default class InitAccountEvent extends FabaEvent {
    viewName: string;
    view: any;

    constructor(name: string = "default") {
        super("InitAccountEvent");
        this.viewName = name;
    }
}