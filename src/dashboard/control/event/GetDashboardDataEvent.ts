import FabaEvent from "fabalous-core/core/FabaEvent";

export default class GetDashboardDataEvent extends FabaEvent{

  test:string;
  identifyer:string = "GetDashboardDataEventsdfdfsd";

  constructor(){
    super();
    console.log("event");
    this.test = "super";
  }


}