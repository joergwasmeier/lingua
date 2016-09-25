import FabaEvent from "fabalous-core/core/FabaEvent";

export default class ForgotPassEvent extends FabaEvent{
  constructor(){
    super("ForgotPassEvent");
  }
}