import LoginEvent from "./../event/LoginEvent";
import CheckLoginStatusEvent from "../event/CheckLoginStatusEvent";
import FabaCommand from "@fabalous/core/FabaCommand";
import {store} from "../../common/commonImStore";

export default class CheckLoginStatusCommand extends FabaCommand {

    async execute(event: CheckLoginStatusEvent) {
        if (store.appStore.account.login && store.appStore.account.login.loggedIn) {
            event.loggedIn = true;
            event.callBack();
        } else {
            event.loggedIn = false;
            event.callBack();
        }
    }

    result(event: LoginEvent) {
        event.callBack();
    }

    timeout(event: LoginEvent) {
        console.log("Command timeout");
    }

    error(event: LoginEvent) {
        console.log("Command error");
    }

    offline(event: LoginEvent) {
        console.log("Command offline");
    }
}