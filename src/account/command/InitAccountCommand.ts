import FabaCommand from "fabalous-core/core/FabaCommand";
import LoginEvent from "./../event/LoginEvent";
import {model} from "./../../common/AppModel";
import InitAccountEvent from "../event/InitAccountEvent";


export default class InitAccountCommand extends FabaCommand {
    execute(event:InitAccountEvent) {
        if (model.accountStore.moduleInit) return;

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