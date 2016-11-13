import DashboardMediator from "./DasboardMediator";
import InitDashboardEvent from "./event/InitDashboardEvent";
declare var module;

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