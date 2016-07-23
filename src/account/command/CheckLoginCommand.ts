import FabaCommand from "fabalous-core/core/FabaCommand";
import LoginEvent from "./../event/LoginEvent";
import {model} from "./../../common/AppModel";
import CheckLoginStatusEvent from "../event/CheckLoginStatusEvent";

export default class CheckLoginCommand extends FabaCommand {

    execute(event:CheckLoginStatusEvent) {
        event.cbs();
    }

    result(event:LoginEvent) {
        event.cbs();
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