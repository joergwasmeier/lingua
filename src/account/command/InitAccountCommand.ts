import * as React from "react";
import InitAccountEvent from "../event/InitAccountEvent";
import Login from "../view/Login";
import {accountStore} from "../AccountStore";
import ForgotPass from "../view/ForgotPass";
import SignUp from "../view/SignUp";
import FabaCommand from "@fabalous/core/FabaCommand";

export default class InitAccountCommand extends FabaCommand {
    execute(event:InitAccountEvent) {
        switch (event.viewName){
            case "forgotPass":
                event.view = React.createElement(ForgotPass, {model: accountStore});
                break;
            case "signUp":
                event.view = React.createElement(SignUp, {model: accountStore});
                break;
            default:
                event.view = React.createElement(Login, {model: accountStore});
        }

        event.callBack();
    }
}