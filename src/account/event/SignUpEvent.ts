import FabaEvent from "fabalous-core/core/FabaEvent";

export default class SignUpEvent extends FabaEvent{
  identifyer:string = "SignUpEvent";

  constructor(){
    super();
  }
}