import FabaEvent from "fabalous-core/core/FabaEvent";

export default class ForgotPassEvent extends FabaEvent{
  identifyer:string = "ForgotPassEvent";

  constructor(){
    super();
  }
}