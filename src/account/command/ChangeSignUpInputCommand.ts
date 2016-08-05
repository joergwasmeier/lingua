import FabaCommand from "fabalous-core/core/FabaCommand";
import {accountStore} from "../AccountStore";
import ChangeSignupInputEvent, {ChangeSignupInputEventTypes} from "../event/ChangeSignupInputEvent";

export default class ChangeSignUpInputCommand extends FabaCommand {
    execute(event:ChangeSignupInputEvent) {
        switch (event.type) {
            case ChangeSignupInputEventTypes.USERNAME:
                accountStore.signUp.userName = event.value;
                break;

            case ChangeSignupInputEventTypes.PASSWORD:
                accountStore.signUp.password = event.value;
                break;
        }
    }
}