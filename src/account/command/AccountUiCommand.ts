import FabaCommand from "@fabalous/core/FabaCommand";
import AccountUiEvent from "../event/AccountUiEvent";
import {AccountUiEventType} from "../event/AccountUiEvent";
import {store} from "../../common/commonImStore";
import Routes from "../../Routes";

export default class AccountUiCommand extends FabaCommand {
    async execute(event: AccountUiEvent) {
        let model : store = this.store;

        switch (event.type) {
            case AccountUiEventType.SHOW_LOGIN_PROGRESS:
                model.set("account.login.progress", true);
                break;

            case AccountUiEventType.HIDE_LOGIN_PROGRESS:
                model.set("account.login.progress", false);
                break;

            case AccountUiEventType.CHANGE_CONTAINER_INDEX:
                model.set("account.viewIndex", event.data);
                switch (event.data) {
                    case 0:
                        window.location.assign("#" + Routes.LOGIN.route);
                        break;
                    case 1:
                        window.location.assign("#" + Routes.FORGOT_PASS.route);
                        break;
                    case 2:
                        window.location.assign("#" + Routes.SIGN_UP.route);
                        break;
                }
        }
    }

    async result(event: AccountUiEvent) {

    }

    timeout(event: AccountUiEvent) {
        console.log("Command timeout");
    }

    error(event: AccountUiEvent) {
        console.log("Command error");
    }

    offline(event: AccountUiEvent) {
        console.log("Command offline");
    }
}