import FabaModel from "@fabalous/core/FabaModel";
import DashboardVo from "./vo/DashboardVo";
/**
 * Created by creativecode on 21.07.16.
 */

export default class DashboardStore {
    data = new DashboardVo();
}

export var dashboardStore:DashboardStore = FabaModel.getStore('dashboardStore', DashboardStore);