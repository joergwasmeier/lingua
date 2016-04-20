import FabaEvent from "fabalous-core/core/FabaEvent";

export default class LoginEvent extends FabaEvent{
  identifyer:string = "LoginEvent";

  constructor(){
    super();
    console.log("LoginEvent");
  }
}