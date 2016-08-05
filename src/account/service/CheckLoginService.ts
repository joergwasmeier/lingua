import FabaSerivce from "fabalous-core/core/FabaService";
import CheckLoginStatusEvent from "../event/CheckLoginStatusEvent";

export default class CheckLoginService extends FabaSerivce{
  
  async execute(event:CheckLoginStatusEvent) {
    super.sendToClient(event);


  }
}