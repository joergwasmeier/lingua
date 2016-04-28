import FabaCommand from "fabalous-core/core/FabaCommand";
import GetCourseOverviewDataEvent from "../event/GetCourseOverviewDataEvent";

export default class GetCourseOverviewDataCommand extends FabaCommand {
  execute(event:GetCourseOverviewDataEvent) {
    console.log("execute");
    this.sendToEndpoint(event);
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

