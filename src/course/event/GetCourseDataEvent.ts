import FabaEvent from "fabalous-core/core/FabaEvent";

export default class GetCourseDataEvent extends FabaEvent{

  identifyer:string = "GetCourseDataEvent";

  constructor(){
    super();
  }
}