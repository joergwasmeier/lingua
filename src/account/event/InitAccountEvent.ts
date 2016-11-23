import FabaEvent from "@fabalous/core/FabaEvent";

export default class InitAccountEvent extends FabaEvent {
    viewName: string;
    view: any;
    args: Array<string>;


    constructor() {
        super("InitAccountEvent");
    }
}