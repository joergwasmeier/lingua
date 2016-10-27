import GetCourseOverviewDataEvent from "../event/GetCourseOverviewDataEvent";
import FabaCommand from "@fabalous/core/FabaCommand";

export default class GetCourseOverviewDataCommand extends FabaCommand {
  execute(event:GetCourseOverviewDataEvent) {
    console.log("execute");
  }

  result(event:GetCourseOverviewDataEvent) {
    console.log("result");
  }

  timeout(event:GetCourseOverviewDataEvent) {
    console.log("Command timeout");
  }

  error(event:GetCourseOverviewDataEvent) {
    console.log("Command error");
  }

  offline(event:GetCourseOverviewDataEvent) {
    console.log("Command offline");
  }
}

