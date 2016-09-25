import FabaCommand from "fabalous-core/core/FabaCommand";
import GetCourseDataEvent from "../event/GetCourseDataEvent";

export default class GetCourseDataCommand extends FabaCommand {
  execute(event:GetCourseDataEvent) {
    console.log("execute");
    this.sendToEndpoint(event);
  }

  result(event:GetCourseDataEvent) {
    console.log("result");
  }

  timeout(event:GetCourseDataEvent) {
    console.log("Command timeout");
  }

  error(event:GetCourseDataEvent) {
    console.log("Command error");
  }

  offline(event:GetCourseDataEvent) {
    console.log("Command offline");
  }
}

