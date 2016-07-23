/**
 * Created by joerg on 13.04.2016.
 */


import GetDashboardDataEvent from "./event/GetDashboardDataEvent";
import Dashboard from "./view/Dashboard";
import DashboardMediator from "./DasboardMediator";

module.exports = {
  mediator: DashboardMediator,
  view: Dashboard,
  initEvent: GetDashboardDataEvent
};