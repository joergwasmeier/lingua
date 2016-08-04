import * as React from "react";
import FabaCommand from "fabalous-core/core/FabaCommand";
import LoginEvent from "./../event/LoginEvent";
import InitAccountEvent from "../event/InitAccountEvent";
import Login from "../view/Login";
import {accountStore} from "../AccountStore";

export default class InitAccountCommand extends FabaCommand {
    execute(event:InitAccountEvent) {

        event.view = React.createElement(Login, {model: accountStore});
        event.callBack();
    }

    result(event:LoginEvent) {
        event.callBack();
    }

    timeout(event:LoginEvent) {
        console.log("Command timeout");
    }

    error(event:LoginEvent) {
        console.log("Command error");
    }

    offline(event:LoginEvent) {
        console.log("Command offline");
    }
}