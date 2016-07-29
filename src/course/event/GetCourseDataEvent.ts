import FabaEvent from "fabalous-core/core/FabaEvent";

export default class GetCourseDataEvent extends FabaEvent{

  constructor(){
    super("GetCourseDataEvent");
  }
}