import FabaCommand from "@fabalous/core/FabaCommand";
import CreateCourseEvent from "../event/CreateCourseEvent";
import {IStore} from "../../common/commonImStore";

export default class CreateDashboardCourseCommand extends FabaCommand<IStore> {
    async execute(event: CreateCourseEvent) {
        console.log("CreateDashboardCourseEvent 2");
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