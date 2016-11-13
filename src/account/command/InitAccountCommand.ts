import * as React from "react";
import InitAccountEvent from "../event/InitAccountEvent";
import Login from "../view/Login";
import {accountStore} from "../AccountStore";
import ForgotPass from "../view/ForgotPass";
import SignUp from "../view/SignUp";
import FabaCommand from "@fabalous/core/FabaCommand";
import Account from "../view/Account";
import {accountImStore} from "../AccountImStore";
import {store, appStoreCourser} from "../../common/commonImStore";

export default class InitAccountCommand extends FabaCommand {
    execute(event:InitAccountEvent) {
        event.view = React.createElement(Account);
        console.log("rerender");
        switch (event.viewName){
            case "login":
                event.view = React.createElement(Account, {
                    childs: React.createElement(Login, {model: store.appStore.account.login}),
                    showLogin:true,
                    oldPath:store.appStore.oldPath
                });
                break;

            case "forgotpass":
                event.view = React.createElement(Account, {
                    childs: React.createElement(ForgotPass, {model: accountStore}),
                    showLogin:true,
                    oldPath:store.appStore.oldPath
                });
                break;

            case "signup":
                event.view = React.createElement(Account, {
                    childs: React.createElement(SignUp, {model: accountStore}),
                    showLogin:true,
                    oldPath:store.appStore.oldPath
                });
                break;
            default:
                event.view = React.createElement(Account, {
                    oldPath:store.appStore.oldPath
                });
        }

        event.callBack();
    }
}