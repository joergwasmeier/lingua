import GetDashboardDataEvent from "../event/GetDashboardDataEvent";
import FabaCommand from "@fabalous/core/FabaCommand";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import {dashboardStore} from "../DashboardStore";
import PopUpEvent from "../../layout/event/PopUpEvent";
import {PopUpEventType} from "../../layout/event/PopUpEvent";

/**
 * Created by creativecode on 11.04.16.
 */

export default class GetDashboardDataCommand extends FabaCommand {
    execute(event: GetDashboardDataEvent) {
        FabaRuntimeWeb.sendToEndpoint(event, "");
    }

    result(event: GetDashboardDataEvent) {
        if (event.data){
            dashboardStore.data.pointsToday = event.data.pointsToday;
            dashboardStore.data.userName = event.data.userName;
            dashboardStore.data.recentCourses = event.data.recentCourses;
        }

        new PopUpEvent(PopUpEventType.HIDE).dispatch();

        event.callBack();
    }

    timeout(event: GetDashboardDataEvent) {
        console.log("Command timeout");
    }

    error(event: GetDashboardDataEvent) {
        console.log("Command error");
    }

    offline(event: GetDashboardDataEvent) {
        console.log("Command offline");
    }
}