import ChangeLoginInputEvent, {ChangeLoginInputEventTypes} from "../event/ChangeLoginInputEvent";
import {accountStore} from "../AccountStore";
import FabaCommand from "@fabalous/core/FabaCommand";

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