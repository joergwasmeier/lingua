import FabaEvent from "@fabalous/core/FabaEvent";

export default class CreateCourseEvent extends FabaEvent {
    constructor() {
        super("CreateCourseEvent");
    }
}