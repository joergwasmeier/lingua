import FabaCommand from "@fabalous/core/FabaCommand";
import ChangeAccountInputEvent from "../event/ChangeAccountInputEvent";
import {ChangeAccountInputEventType} from "../event/ChangeAccountInputEvent";
import {store} from "../../common/commonImStore";

export default class ChangeAccountInputCommand extends FabaCommand {
    async execute(event: ChangeAccountInputEvent) {
        switch (event.type) {
            case ChangeAccountInputEventType.LOGIN_USERNAME:
                this.store.set("account.login.userName", event.value);
                break;
            case ChangeAccountInputEventType.LOGIN_PASSWORD:
                this.store.set("account.login.password", event.value);
                break;
            case ChangeAccountInputEventType.SIGNUP_USERNAME:
                this.store.set("account.signUp.userName", event.value);
                break;
            case ChangeAccountInputEventType.SIGNUP_PASSWORD:
                this.store.set("account.signUp.password", event.value);
                break;
            case ChangeAccountInputEventType.FORGOT_USERNAME:
                this.store.set("account.forgotPass.userName", event.value);
                break;
        }
    }
}