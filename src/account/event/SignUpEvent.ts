import FabaEvent from "@fabalous/core/FabaEvent";
import LoginEvent from "./LoginEvent";

export default class SignUpEvent extends FabaEvent {

    username: string;
    password: string;

    error:any;

    loginEvent:LoginEvent;

    constructor(username: string, password: string) {
        super("SignUpEvent");

        this.username = username;
        this.password = password;
    }

    checkUserData():boolean{
        if (this.password.length <= 8){
            return false;
        }

        return true;
    }
}