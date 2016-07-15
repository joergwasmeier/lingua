"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FabaMediator_1 = require("fabalous-core/core/FabaMediator");
var GetDashboardDataEvent_1 = require("./event/GetDashboardDataEvent");
var DashboardMediator = (function (_super) {
    __extends(DashboardMediator, _super);
    function DashboardMediator() {
        _super.call(this);
    }
    // @ifdef CLIENT
    DashboardMediator.prototype.registerCommands = function () {
        _super.prototype.registerCommands.call(this);
        this.addCommand(GetDashboardDataEvent_1["default"], require("./command/DashboardCommand").default);
    };
    // @endif
    // @ifdef SERVER
    DashboardMediator.prototype.registerServices = function () {
        _super.prototype.registerServices.call(this);
        this.addSerivce(GetDashboardDataEvent_1["default"], require("./service/DashboardService").default);
    };
    return DashboardMediator;
}(FabaMediator_1["default"]));
exports.__esModule = true;
exports["default"] = DashboardMediator;
