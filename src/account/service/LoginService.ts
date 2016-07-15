import FabaSerivce from "fabalous-core/core/FabaService";
import LoginEvent from "../event/LoginEvent";

export default class LoginService extends FabaSerivce{
  
  execute(event:LoginEvent) {
    console.log("Login service");
    super.sendToClient(event);
  }

}