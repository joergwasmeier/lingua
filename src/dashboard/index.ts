import DashboardMediator from "./DasboardMediator";
import InitDashboardEvent from "./event/InitDashboardEvent";
import AccountMediator from "../account/AccountMediator";
import FabaCore from "@fabalous/core/FabaCore";

declare var module;

FabaCore.addMediator(AccountMediator);

module.exports = {
  mediator: DashboardMediator,
  initEvent: InitDashboardEvent
};

/*
 if (module.hot) {
 module.hot.accept();

 module.hot.dispose((data) => {
 FabaCore.mediators = [];
 FabaCore.addMediator(require("./DasboardMediator").default);
 });
 }
 */