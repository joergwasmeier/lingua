import DashboardMediator from "./DasboardMediator";
import InitDashboardEvent from "./event/InitDashboardEvent";
import AccountMediator from "../account/AccountMediator";
import FabaCore from "@fabalous/core/FabaCore";

FabaCore.addMediator(AccountMediator);

module.exports = {
  mediator: DashboardMediator,
  initEvent: InitDashboardEvent
};