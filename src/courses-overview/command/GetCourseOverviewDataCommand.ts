import GetCourseOverviewDataEvent from "../event/GetCourseOverviewDataEvent";
import FabaCommand from "@fabalous/core/FabaCommand";
import {IStore} from "../../common/commonImStore";

export default class GetCourseOverviewDataCommand extends FabaCommand<IStore> {
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

