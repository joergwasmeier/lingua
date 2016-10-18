import FabaCommand from "@fabalous/core/FabaCommand";
import ForgotPassEvent from "../event/ForgotPassEvent";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";

export default class ForgotPassCommand extends FabaCommand {
   async execute(event: ForgotPassEvent){
        //if (event.username){
       console.log(event);
            FabaRuntimeWeb.sendToEndpoint(event, "");
       // }
    }

    async result(event: ForgotPassEvent) {

    }

    timeout(event: ForgotPassEvent) {
        console.log("Command timeout");
    }

    error(event: ForgotPassEvent) {
        console.log("Command error");
    }

    offline(event: ForgotPassEvent) {
        console.log("Command offline");
    }
}