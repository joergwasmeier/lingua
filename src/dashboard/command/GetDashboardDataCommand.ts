import GetDashboardDataEvent from "../event/GetDashboardDataEvent";
import FabaCommand from "@fabalous/core/FabaCommand";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import PopUpEvent from "../../layout/event/PopUpEvent";
import {PopUpEventType} from "../../layout/event/PopUpEvent";
import {IStore} from "../../common/commonImStore";
import {IDashboardStore} from "../DashboardStore";

/**
 * Created by creativecode on 11.04.16.
 */

export default class GetDashboardDataCommand extends FabaCommand<IStore> {
    dashstore: IDashboardStore;

    constructor(store) {
        super(store);
        this.dashstore = this.store.data.dashboard;
    }
    execute(event: GetDashboardDataEvent) {
        FabaRuntimeWeb.sendToEndpoint(event, "");
    }

    result(event: GetDashboardDataEvent) {
        if (event.data){
            this.dashstore.pointsToday = event.data.pointsToday;
            this.dashstore.data.userName = event.data.userName;
            this.dashstore.data.recentCourses = event.data.recentCourses;
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