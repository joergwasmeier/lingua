import FabaEvent from "fabalous-core/core/FabaEvent";

export default class LoginEvent extends FabaEvent{
  constructor(){
    super("LoginEvent");
  }
}