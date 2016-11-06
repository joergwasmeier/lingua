import * as React from "react";
import FabaCommand from "@fabalous/core/FabaCommand";
import Dashboard from "../view/Dashboard";
import InitDashboardEvent from "../event/InitDashboardEvent";
import GetDashboardDataEvent from "../event/GetDashboardDataEvent";
import {dashboardStore} from "../DashboardStore";
import CheckLoginStatusEvent from "../../account/event/CheckLoginStatusEvent";
import LoginEvent from "../../account/event/LoginEvent";
import PopUpEvent from "../../layout/event/PopUpEvent";
import {PopUpEventType} from "../../layout/event/PopUpEvent";

export default class InitDashboardCommand extends FabaCommand  {
    async execute(event: InitDashboardEvent) {
        new PopUpEvent(PopUpEventType.SHOW).dispatch();
        console.log("1");

        var loginStatus:CheckLoginStatusEvent = await new CheckLoginStatusEvent().dispatch() as CheckLoginStatusEvent;

        console.log("2");
        if (loginStatus.loggedIn === false){
            console.log("3");
           var loginStat = await new LoginEvent(
                window.localStorage.getItem("username"),
                window.localStorage.getItem("password")
            ).dispatch();

            console.log("4");
            // TODO: Error Handling if wrong pass
        }


        event.view = React.createElement(Dashboard, {model:dashboardStore});
        event.callBack();

        new GetDashboardDataEvent().dispatch();
    }
}