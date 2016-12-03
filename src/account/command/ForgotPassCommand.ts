import FabaCommand from "@fabalous/core/FabaCommand";
import ForgotPassEvent from "../event/ForgotPassEvent";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import {IStore} from "../../common/commonImStore";

export default class ForgotPassCommand extends FabaCommand<IStore> {
    async execute(event: ForgotPassEvent) {
        if (event.username) {
            this.store.data.account.forgotPass.showSuccessMessage = true;
           FabaRuntimeWeb.sendToEndpoint(event, "");
       }
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