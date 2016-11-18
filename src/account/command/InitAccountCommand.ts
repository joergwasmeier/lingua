import * as React from "react";
import InitAccountEvent from "../event/InitAccountEvent";
import Login from "../view/Login";
import ForgotPass from "../view/ForgotPass";
import SignUp from "../view/SignUp";
import FabaCommand from "@fabalous/core/FabaCommand";
import Account from "../view/Account";
import {store, appStoreCourser} from "../../common/commonImStore";
import {viewCache} from "../AccountImStore";

export default class InitAccountCommand extends FabaCommand {
    execute(event: InitAccountEvent) {
        switch (event.viewName) {
            case "login":
                if (!store.appStore.account) {
                    event.callBack();
                    return;
                }

                event.view = React.createElement(Account, {
                    childs: React.createElement(Login, {model: store.appStore.account.login}),
                    showLogin: true,
                    oldPath: store.appStore.oldPath
                });
                break;

            case "forgotpass":
                event.view = React.createElement(Account, {
                    childs: React.createElement(ForgotPass, {model: store.appStore.account}),
                    showLogin: true,
                    oldPath: store.appStore.oldPath
                });
                break;

            case "signup":
                event.view = React.createElement(Account, {
                    childs: React.createElement(SignUp, {model: store.appStore.account}),
                    showLogin: true,
                    oldPath: store.appStore.oldPath
                });
                break;
            default:
                event.view = React.createElement(Account, {
                    oldPath: store.appStore.oldPath
                });
        }

        event.callBack();
    }
}