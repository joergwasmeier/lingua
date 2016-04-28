import FabaSerivce from "fabalous-core/core/FabaService";
import GetCourseDataEvent from "../event/GetCourseDataEvent";

export default class GetCourseDataService extends FabaSerivce{
  async execute(event:GetCourseDataEvent) {
    console.log("GetCourseDataService");

    super.sendToClient(event);
  }

}