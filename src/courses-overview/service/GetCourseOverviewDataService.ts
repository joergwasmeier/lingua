/**
 * Created by creativecode on 28.04.16.
 */
import GetCourseOverviewDataEvent from "../event/GetCourseOverviewDataEvent";
import FabaSerivce from "@fabalous/core/FabaService";

export default class GetCourseOverviewDataService extends FabaSerivce{
  async execute(event:GetCourseOverviewDataEvent) {
    console.log("GetCourseOverviewDataService");

    super.sendToClient(event);
  }

}