import * as React from "react";
import InitAccountEvent from "../event/InitAccountEvent";
import Login from "../view/Login";
import {accountStore} from "../AccountStore";
import ForgotPass from "../view/ForgotPass";
import SignUp from "../view/SignUp";
import FabaCommand from "@fabalous/core/FabaCommand";
import Account from "../view/Account";

export default class InitAccountCommand extends FabaCommand {
    execute(event:InitAccountEvent) {
        if (!accountStore.view){
            accountStore.view = React.createElement(Account);
        }

        event.view = accountStore.view;
        var showLogin:boolean = false;

        switch (event.viewName){
            case "login":
                event.view = accountStore.view = React.cloneElement(accountStore.view, {
                    childs: React.createElement(Login, {model: accountStore}),
                    showLogin:true
                });
                break;

            case "forgotpass":
                event.view = accountStore.view = React.cloneElement(accountStore.view, {
                    childs: React.createElement(ForgotPass, {model: accountStore}),
                    showLogin:true
                });
                break;

            case "signup":
                event.view = accountStore.view = React.cloneElement(accountStore.view, {
                    childs: React.createElement(SignUp, {model: accountStore}),
                    showLogin:true
                });
                break;

            default:
                event.view = accountStore.view = React.cloneElement(accountStore.view, {
                    showLogin:false
                });
                break;
        }

        event.callBack();
    }
}