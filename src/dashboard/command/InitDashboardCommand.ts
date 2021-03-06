import * as React from "react";
import FabaCommand from "@fabalous/core/FabaCommand";
import Dashboard from "../view/Dashboard";
import InitDashboardEvent from "../event/InitDashboardEvent";
import GetDashboardDataEvent from "../event/GetDashboardDataEvent";
import CheckLoginStatusEvent from "../../account/event/CheckLoginStatusEvent";
import LoginEvent from "../../account/event/LoginEvent";
import PopUpEvent from "../../layout/event/PopUpEvent";
import {PopUpEventType} from "../../layout/event/PopUpEvent";
import {IStore} from "../../common/commonImStore";

export default class InitDashboardCommand extends FabaCommand<IStore> {
    async execute(event: InitDashboardEvent) {

        if (!this.store.data.dashboard) {
            new PopUpEvent(PopUpEventType.SHOW).dispatch();
            var loginStatus: CheckLoginStatusEvent = await new CheckLoginStatusEvent().dispatch() as CheckLoginStatusEvent;

            if (loginStatus.loggedIn === false) {
                var loginStat = await new LoginEvent(
                    window.localStorage.getItem("username"),
                    window.localStorage.getItem("password")
                ).dispatch();
            }
        }

        event.view = React.createElement(Dashboard, {model: this.store.data.dashboard});
        event.callBack();

        new GetDashboardDataEvent().dispatch();
    }
}