import GetCourseDataEvent from "../event/GetCourseDataEvent";
import FabaSerivce from "@fabalous/core/FabaService";

export default class GetCourseDataService extends FabaSerivce{
  async execute(event:GetCourseDataEvent) {
    console.log("GetCourseDataService");

    //super.sendToClient(event);
  }

}