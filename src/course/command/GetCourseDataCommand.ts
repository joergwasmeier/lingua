import FabaCommand from "@fabalous/core/FabaCommand";
import GetCourseDataEvent from "../event/GetCourseDataEvent";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import {courseStore} from "../CourseStore";
import {IStore} from "../../common/commonImStore";

export default class GetCourseDataCommand extends FabaCommand<IStore> {
    async execute(event: GetCourseDataEvent) {
        FabaRuntimeWeb.sendToEndpoint(event, "");
    }

    async result(event: GetCourseDataEvent) {
        console.log("result");
        courseStore.loading = false;
    }

    timeout(event: GetCourseDataEvent) {
        console.log("Command timeout");
    }

    error(event: GetCourseDataEvent) {
        console.log("Command error");
    }

    offline(event: GetCourseDataEvent) {
        console.log("Command offline");
    }
}

