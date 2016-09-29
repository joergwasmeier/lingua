import FabaEvent from "@fabalous/core/FabaEvent";

export default class ChangeUrlEvent extends FabaEvent{

  constructor(url:string){
    super("ChangeUrlEvent");
  }
}