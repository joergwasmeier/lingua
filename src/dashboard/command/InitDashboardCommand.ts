import * as React from "react";
import FabaCommand from "@fabalous/core/FabaCommand";
import {IFabaCommand} from "@fabalous/core/IFabaCommand";
import InitDashboardEvent from "../event/InitDashboardEvent";
import Dashboard from "../view/Dashboard";
import GetDashboardDataEvent from "../event/GetDashboardDataEvent";

export default class InitDashboardCommand extends FabaCommand implements IFabaCommand{
    constructor(){
        super();
    }

   execute(event: InitDashboardEvent): any {
       new GetDashboardDataEvent().dispatch(()=>{
           event.view = React.createElement(Dashboard, {});
           event.callBack();
       });
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