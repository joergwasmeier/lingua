import LoginEvent from "../event/LoginEvent";
import FabaSerivce from "@fabalous/core/FabaService";

export default class LoginService extends FabaSerivce{
  
  async execute(event:LoginEvent) {
    console.log("Login service 2");
    super.sendToClient(event);

  }
}