/**
 * Created by creativecode on 29.06.16.
 */


import FabaEvent from "fabalous-core/core/FabaEvent";

export default class GetMenuDataEvent extends FabaEvent{

  identifyer:string = "GetMenuDataEvent";

  constructor(){
    super();
  }
}