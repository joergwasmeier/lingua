import * as React from "react";
import FabaCommand from "@fabalous/core/FabaCommand";
import {IFabaCommand} from "@fabalous/core/IFabaCommand";
import InitDashboardEvent from "../event/InitDashboardEvent";
import Dashboard from "../view/Dashboard";
import GetDashboardDataEvent from "../event/GetDashboardDataEvent";
import {dashboardStore} from "../DashboardStore";
import CheckLoginStatusEvent from "../../account/event/CheckLoginStatusEvent";
import LoginEvent from "../../account/event/LoginEvent";
import {accountStore} from "../../account/AccountStore";

export default class InitDashboardCommand extends FabaCommand implements IFabaCommand {
    constructor() {
        super();
    }

    async execute(event: InitDashboardEvent) {
        dashboardStore.data.loading = true;

        await new LoginEvent(
            window.localStorage.getItem("username"),
            window.localStorage.getItem("password")
        ).dispatch();

        console.log("event");

        var loginStatus:CheckLoginStatusEvent = await new CheckLoginStatusEvent().dispatch() as CheckLoginStatusEvent;
        console.log("CheckLoginStatusEvent");
        if (loginStatus.loggedIn === false){
            console.log("loginStatus");

            var lg = await new LoginEvent(
                window.localStorage.getItem("username"),
                window.localStorage.getItem("password")
            ).dispatch();
            console.log(lg);
            console.log("login");
        }

        event.view = React.createElement(Dashboard, {model:dashboardStore});
        event.callBack();

        dashboardStore.initEvent = event;

        new GetDashboardDataEvent().dispatch().then(()=>{
           console.log("resolve");
        });

        await new GetDashboardDataEvent().dispatch();
        console.log("even");
    }

    result(event: InitDashboardEvent): any {
        return null;
    }

    timeout(event: InitDashboardEvent): any {
        return null;
    }

    error(event: InitDashboardEvent): any {
        return null;
    }

    offline(event: InitDashboardEvent): any {
        return null;
    }
}