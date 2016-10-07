import * as React from "react";
import FabaCommand from "@fabalous/core/FabaCommand";
import {IFabaCommand} from "@fabalous/core/IFabaCommand";
import InitDashboardEvent from "../event/InitDashboardEvent";
import Dashboard from "../view/Dashboard";
import GetDashboardDataEvent from "../event/GetDashboardDataEvent";
import {dashboardStore} from "../DashboardStore";

export default class InitDashboardCommand extends FabaCommand implements IFabaCommand{
    constructor(){
        super();
    }

   async execute(event: InitDashboardEvent) {
       // TODO BUGGY refs
       dashboardStore.initEvent = event;

       var t = await new GetDashboardDataEvent().dispatch();

       event.view = React.createElement(Dashboard, {});
       event.callBack();

       setTimeout(function(){
           new GetDashboardDataEvent().dispatch()
       },2000);
    }

    showDashBoard(event:InitDashboardEvent){
        event.view = React.createElement(Dashboard, {});
        event.callBack();
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