import * as React from "react";
import InitAccountEvent from "../event/InitAccountEvent";
import FabaCommand from "@fabalous/core/FabaCommand";
import Account from "../view/Account";

export default class InitAccountCommand extends FabaCommand {
    execute(event: InitAccountEvent) {
        switch (event.args[0]) {
            case "login":
                event.view = this.createAccount(true, 0);
                break;

            case "forgotpass":
                event.view = this.createAccount(true, 1);
                break;

            case "signup":
                event.view = this.createAccount(true, 2);
                break;

            default:
                event.view = this.createAccount(false, 0);
        }

        event.callBack();
    }

    private createAccount(login: boolean, viewIndex: number) {
        return (
            <Account
                oldPath={this.store.appStore.oldPath}
                mobile={this.store.appStore.layout.mobile}
                landscape={this.store.appStore.layout.landscape}
                showLogin={login}
                viewIndex={viewIndex}
                model={this.store.appStore.account}
            />
        );
    }
}