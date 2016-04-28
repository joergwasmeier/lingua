/**
 * Created by creativecode on 28.04.16.
 */
import FabaSerivce from "fabalous-core/core/FabaService";
import GetCourseOverviewDataEvent from "../event/GetCourseOverviewDataEvent";

export default class GetCourseOverviewDataService extends FabaSerivce{
  async execute(event:GetCourseOverviewDataEvent) {
    console.log("GetCourseOverviewDataService");

    super.sendToClient(event);
  }

}