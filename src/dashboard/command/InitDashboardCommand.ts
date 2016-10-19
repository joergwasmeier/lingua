import * as React from "react";
import FabaCommand from "@fabalous/core/FabaCommand";
import {IFabaCommand} from "@fabalous/core/IFabaCommand";
import InitDashboardEvent from "../event/InitDashboardEvent";
import Dashboard from "../view/Dashboard";
import GetDashboardDataEvent from "../event/GetDashboardDataEvent";
import {dashboardStore} from "../DashboardStore";
import CheckLoginStatusEvent from "../../account/event/CheckLoginStatusEvent";
import LoginEvent from "../../account/event/LoginEvent";

export default class InitDashboardCommand extends FabaCommand implements IFabaCommand {
    constructor() {
        super();
    }

    async execute(event: InitDashboardEvent) {
        event.view = React.createElement(Dashboard, {model:dashboardStore});
        event.callBack();

        var loginStatus:CheckLoginStatusEvent = await new CheckLoginStatusEvent().dispatch();
        if (loginStatus.loggedIn === false){
            await new LoginEvent(
                window.localStorage.getItem("username"),
                window.localStorage.getItem("password")
            ).dispatch();

            return;
        }
        
        dashboardStore.initEvent = event;

        await new GetDashboardDataEvent().dispatch();
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