import FabaEvent from "fabalous-core/core/FabaEvent";
import AccountStore from "../AccountStore";

export default class InitAccountEvent extends FabaEvent{
  viewName:string;

  model:AccountStore;
  view:any;

  constructor(name:string){
    super("InitAccountEvent");
    this.viewName = name;
  }
}