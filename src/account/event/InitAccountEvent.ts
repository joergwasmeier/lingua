import FabaEvent from "fabalous-core/core/FabaEvent";
import AccountStore from "../AccountStore";

export default class InitAccountEvent extends FabaEvent{
  model:AccountStore;
  constructor(){
    super("InitAccountEvent");
  }
}