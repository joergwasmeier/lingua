import FabaCommand from "fabalous-core/core/FabaCommand";
import LoginEvent from "./../event/LoginEvent";
import CheckLoginStatusEvent from "../event/CheckLoginStatusEvent";
import {accountStore} from "../AccountStore";

export default class CheckLoginCommand extends FabaCommand {

    execute(event:CheckLoginStatusEvent) {
        if (accountStore && accountStore.login && accountStore.login.loggedIn){
            event.loggedIn = true;
            event.callBack();
        } else {
            event.loggedIn = false;
            event.callBack();
        }
    }

    result(event:LoginEvent) {
        event.callBack();
    }

    timeout(event:LoginEvent) {
        console.log("Command timeout");
    }

    error(event:LoginEvent) {
        console.log("Command error");
    }

    offline(event:LoginEvent) {
        console.log("Command offline");
    }
}