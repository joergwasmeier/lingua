import * as React from "react";

import FabaCommand from "@fabalous/core/FabaCommand";
import InitCourseEvent from "../event/InitCourseEvent";
import GetCourseDataEvent from "../event/GetCourseDataEvent";
import Course from "../view/Course";

export default class InitCourseCommand extends FabaCommand {
    execute(event:InitCourseEvent) {
        event.view = React.createElement(Course, {});
        event.callBack();

    }
}

