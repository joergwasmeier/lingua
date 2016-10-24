import * as React from "react";

import FabaCommand from "@fabalous/core/FabaCommand";
import InitCourseEvent from "../event/InitCourseEvent";
import Course from "../view/Course";
import {courseStore} from "../CourseStore";
import GetCourseDataEvent from "../event/GetCourseDataEvent";

export default class InitCourseCommand extends FabaCommand {
    async execute(event:InitCourseEvent) {
        courseStore.loading = true;
        event.view = React.createElement(Course, {model:courseStore});
        event.callBack();

        await new GetCourseDataEvent().dispatch();
        courseStore.loading = false;
    }
}

