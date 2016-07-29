import FabaEvent from "fabalous-core/core/FabaEvent";

export default class InitMenuEvent extends FabaEvent{
  constructor(){
    super("InitMenuEvent");
  }
}