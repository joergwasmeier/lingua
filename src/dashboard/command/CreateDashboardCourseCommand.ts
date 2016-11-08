import FabaCommand from "@fabalous/core/FabaCommand";
import CreateCourseEvent from "../event/CreateCourseEvent";

export default class CreateDashboardCourseCommand extends FabaCommand {
    async execute(event: CreateCourseEvent) {
        console.log("CreateDashboardCourseEvent 23");
    }

    async result(event: CreateCourseEvent) {

    }

    timeout(event: CreateCourseEvent) {
        console.log("Command timeout");
    }

    error(event: CreateCourseEvent) {
        console.log("Command error");
    }

    offline(event: CreateCourseEvent) {
        console.log("Command offline");
    }
}