import FabaModel from "@fabalous/core/FabaModel";
import DashboardVo from "./vo/DashboardVo";
import Dashboard from "./view/Dashboard";
import {ReactNode} from "react";
import {ComponentElement} from "react";
/**
 * Created by creativecode on 21.07.16.
 */

export default class DashboardStore {
    data = new DashboardVo();
    view:ComponentElement<{} & { children?: ReactNode; }, Dashboard>;
}

export var dashboardStore:DashboardStore = FabaModel.getStore('dashboardStore', DashboardStore);