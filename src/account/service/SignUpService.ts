import FabaSerivce from "fabalous-core/core/FabaService";
import SignUpEvent from "../event/SignUpEvent";

export default class SignUpService extends FabaSerivce{

  async execute(event:SignUpEvent) {
    console.log("SignUpService");
    super.sendToClient(event);

  }
}