import SignUpEvent from "../event/SignUpEvent";
import FabaCommand from "@fabalous/core/FabaCommand";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import {IStore} from "../../common/commonImStore";

export default class SignUpCommand extends FabaCommand<IStore> {
    async execute(event: SignUpEvent) : Promise<void> {
        if (!event.checkUserData()) {
            this.store.set("account.signUp.errorCode", 0);
            return;
        }

        FabaRuntimeWeb.sendToEndpoint(event, "");
    }

    async result(event: SignUpEvent) : Promise<void> {
      //  var loginEvent = Object.assign(new LoginEvent("",""), event.loginEvent);
      //  loginEvent.dispatch(null,FabaEventResultType.RESULT);

        return null;
    }
}