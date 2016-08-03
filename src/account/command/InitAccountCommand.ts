import FabaCommand from "fabalous-core/core/FabaCommand";
import LoginEvent from "./../event/LoginEvent";
import {model} from "./../../common/AppModel";
import InitAccountEvent from "../event/InitAccountEvent";
import AccountStore from "../AccountStore";
import * as React from "react";
import Login from "../view/Login";

export default class InitAccountCommand extends FabaCommand {
    execute(event:InitAccountEvent) {
        console.log("bacl");

        if (!model.accountStore) model.accountStore = new AccountStore();

        event.view = React.createElement(Login, {model: model.accountStore});

        console.log("bacl2");

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