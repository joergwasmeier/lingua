import FabaEvent from "@fabalous/core/FabaEvent";

export default class ForgotPassEvent extends FabaEvent {
    username:string;

    constructor(username:string) {
        super("ForgotPassEvent");

        this.username = username;
    }
}