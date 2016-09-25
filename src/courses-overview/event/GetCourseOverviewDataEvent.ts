/**
 * Created by creativecode on 28.04.16.
 */
import FabaEvent from "fabalous-core/core/FabaEvent";

export default class GetCourseOverviewDataEvent extends FabaEvent{

  constructor(){
    super("GetCourseOverviewDataEvent");
  }
}