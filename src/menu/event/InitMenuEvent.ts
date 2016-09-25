import FabaEvent from "@fabalous/core/FabaEvent";

export default class InitMenuEvent extends FabaEvent{
  constructor(){
    super("InitMenuEvent");
  }
}