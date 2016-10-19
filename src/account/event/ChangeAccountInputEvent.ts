import FabaEvent from "@fabalous/core/FabaEvent";

export default class ChangeAccountInputEvent extends FabaEvent {

    type:ChangeAccountInputEventType;
    value:string;

    constructor(type:ChangeAccountInputEventType, value:string) {
        super("ChangeAccountInputEvent");

        this.type = type;
        this.value = value;
    }
}

export enum ChangeAccountInputEventType{
    LOGIN_USERNAME,
    LOGIN_PASSWORD,
    SIGNUP_USERNAME,
    SIGNUP_PASSWORD,
    FORGOT_USERNAME
}