import FabaEvent from "@fabalous/core/FabaEvent";
export default class InitCourseEvent extends FabaEvent {
    view:any;

    constructor() {
        super("InitCourseEvent");
    }
}