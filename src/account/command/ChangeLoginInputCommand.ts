import FabaCommand from "fabalous-core/core/FabaCommand";
import ChangeLoginInputEvent, {ChangeLoginInputEventTypes} from "../event/ChangeLoginInputEvent";
import {accountStore} from "../AccountStore";

export default class ChangeLoginInputCommand extends FabaCommand {
    execute(event:ChangeLoginInputEvent) {
        switch (event.type) {
            case ChangeLoginInputEventTypes.USERNAME:
                accountStore.login.userName = event.value;
                break;

            case ChangeLoginInputEventTypes.PASSWORD:
                accountStore.login.password = event.value;
                break;
        }
    }
}