import LoginEvent from "./../event/LoginEvent";
import {accountStore} from "../AccountStore";
import {hashHistory} from "react-router";
import FabaCommand from "@fabalous/core/FabaCommand";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import GetMenuDataEvent from "../../menu/event/GetMenuDataEvent";
import {LoginEventStatus} from "../event/LoginEvent";

/**
 * Created by creativecode on 11.04.16.
 */

export default class LoginCommand extends FabaCommand {

    async execute(event: LoginEvent) {
        accountStore.login.showLoginProgress();

        if (event.checkUserPassLength()) {
            FabaRuntimeWeb.sendToEndpoint(event, "");
            return;
        }

        accountStore.login.showErrorMsg(2);
    }

     result(event: LoginEvent) {
        switch (event.status) {
            case LoginEventStatus.ERROR:
                accountStore.login.showErrorMsg(2);
                break;
            case LoginEventStatus.LOGGED_IN:

                accountStore.login.loggedIn = true;
                window.localStorage.setItem("username", event.username);
                window.localStorage.setItem("password", event.password);
                window.localStorage.setItem("sessionid", event.sessionId);

                if (event.loginLocation){
                    hashHistory.push(event.loginLocation);
                }

                break;
        }

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