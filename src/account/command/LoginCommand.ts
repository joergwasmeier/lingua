import LoginEvent from "./../event/LoginEvent";
import FabaCommand from "@fabalous/core/FabaCommand";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import {LoginEventStatus} from "../event/LoginEvent";
import AccountUiEvent from "../event/AccountUiEvent";
import {AccountUiEventType} from "../event/AccountUiEvent";
import {store, IStore} from "../../common/commonImStore";
import Routes from "../../Routes";

/**
 * Created by creativecode on 11.04.16.
 */

export default class LoginCommand extends FabaCommand<IStore> {

    async execute(event: LoginEvent) : Promise<void> {
        new AccountUiEvent(AccountUiEventType.SHOW_LOGIN_PROGRESS).dispatch();

        if (event.checkUserPassLength()) {
            FabaRuntimeWeb.sendToEndpoint(event, "");
            return;
        }

        new AccountUiEvent(AccountUiEventType.SHOW_LOGIN_ERROR).dispatch();
    }

     result(event: LoginEvent) {
        switch (event.status) {
            case LoginEventStatus.ERROR:
                new AccountUiEvent(AccountUiEventType.SHOW_LOGIN_ERROR).dispatch();
                break;
            case LoginEventStatus.LOGGED_IN:
                this.store.set("account.login.loggedIn", true);

                window.localStorage.setItem("username", event.username);
                window.localStorage.setItem("password", event.password);
                window.localStorage.setItem("sessionid", event.sessionId);

                if (event.loginLocation) {
                    window.location.assign("#" + Routes.DASBOARD.route);
                }

                console.log("hide");

                new AccountUiEvent(AccountUiEventType.HIDE_LOGIN_PROGRESS).dispatch();

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