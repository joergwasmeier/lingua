import FabaEvent from "fabalous-core/core/FabaEvent";

export default class InitAccountEvent extends FabaEvent{
  constructor(){
    super("InitAccountEvent");
  }
}