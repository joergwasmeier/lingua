import FabaCommand from "@fabalous/core/FabaCommand";
import ChangeAccountInputEvent from "../event/ChangeAccountInputEvent";
import {ChangeAccountInputEventType} from "../event/ChangeAccountInputEvent";
import {accountStore} from "../AccountStore";

export default class ChangeAccountInputCommand extends FabaCommand {
    async execute(event: ChangeAccountInputEvent) {
        switch(event.type){
            case ChangeAccountInputEventType.LOGIN_USERNAME:
                accountStore.login.userName = event.value;
                break;
            case ChangeAccountInputEventType.LOGIN_PASSWORD:
                accountStore.login.password = event.value;
                break;
            case ChangeAccountInputEventType.SIGNUP_USERNAME:
                accountStore.signUp.userName = event.value;
                break;
            case ChangeAccountInputEventType.SIGNUP_PASSWORD:
                accountStore.signUp.password = event.value;
                break;
            case ChangeAccountInputEventType.FORGOT_USERNAME:
                accountStore.forgotPass.userName = event.value;
                break;
        }
    }
}