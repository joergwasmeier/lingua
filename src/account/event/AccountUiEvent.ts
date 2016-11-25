import FabaEvent from "@fabalous/core/FabaEvent";

export default class AccountUiEvent extends FabaEvent {
    type: AccountUiEventType;

    data: any;
    constructor(type: AccountUiEventType) {
        super("AccountUiEventType");

        this.type = type;
    }
}

export enum AccountUiEventType {
    SHOW_LOGIN_ERROR,
    HIDE_LOGIN_ERROR,
    SHOW_LOGIN_PROGRESS,
    HIDE_LOGIN_PROGRESS,
    CHANGE_CONTAINER_INDEX,
}