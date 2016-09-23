import CheckLoginStatusEvent from "../event/CheckLoginStatusEvent";
import FabaSerivce from "@fabalous/core/FabaService";

export default class CheckLoginService extends FabaSerivce{
  
  async execute(event:CheckLoginStatusEvent) {
    super.sendToClient(event);


  }
}