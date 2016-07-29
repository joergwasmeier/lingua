import FabaEvent from "fabalous-core/core/FabaEvent";

export default class GetDashboardDataEvent extends FabaEvent{
  test:string;

  constructor(){
    super("GetDashboardDataEvent");
  }


}