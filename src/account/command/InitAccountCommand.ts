import FabaCommand from "fabalous-core/core/FabaCommand";
import LoginEvent from "./../event/LoginEvent";
import {model} from "./../../common/AppModel";
import InitAccountEvent from "../event/InitAccountEvent";
import AccountStore from "../AccountStore";


export default class InitAccountCommand extends FabaCommand {
    execute(event:InitAccountEvent) {
        if (!model.accountStore) model.accountStore = new AccountStore();
        if (model.accountStore.moduleInit) return;

        model.accountStore = new AccountStore();
        model.accountStore.moduleInit = true;
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