import {accountStore} from "../AccountStore";
import SignUpEvent from "../event/SignUpEvent";
import FabaCommand from "@fabalous/core/FabaCommand";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import LoginEvent from "../event/LoginEvent";
import {FabaEventResultType} from "@fabalous/core/FabaEvent";

export default class SignUpCommand extends FabaCommand {
    
    async execute(event: SignUpEvent) {
        if (!event.checkUserData()){
            accountStore.signUp.error = true;
            return;
        }

        FabaRuntimeWeb.sendToEndpoint(event, "");
    }

    async result(event: SignUpEvent) {
        var loginEvent = Object.assign(new LoginEvent("",""), event.loginEvent);
        loginEvent.dispatch(null,FabaEventResultType.RESULT);

        return null;
    }
    
}