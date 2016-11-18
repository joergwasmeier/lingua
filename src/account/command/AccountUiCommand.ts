import FabaCommand from "@fabalous/core/FabaCommand";
import AccountUiEvent from "../event/AccountUiEvent";
import {AccountUiEventType} from "../event/AccountUiEvent";
import {store, appStoreCourser} from "../../common/commonImStore";

export default class AccountUiCommand extends FabaCommand {
    async execute(event: AccountUiEvent) {
        switch (event.type) {
            case AccountUiEventType.SHOW_LOGIN_PROGRESS:
                store.set("account.login.progress", true);
                break;
            case AccountUiEventType.HIDE_LOGIN_PROGRESS:
                store.set("account.login.progress", false);
                break;
            default:

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