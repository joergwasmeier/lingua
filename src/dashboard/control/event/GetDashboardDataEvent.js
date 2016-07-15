"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FabaEvent_1 = require("fabalous-core/core/FabaEvent");
var GetDashboardDataEvent = (function (_super) {
    __extends(GetDashboardDataEvent, _super);
    function GetDashboardDataEvent() {
        _super.call(this);
        this.identifyer = "GetDashboardDataEventsdfdfsd";
        console.log("event");
        this.test = "super";
    }
    return GetDashboardDataEvent;
}(FabaEvent_1["default"]));
exports.__esModule = true;
exports["default"] = GetDashboardDataEvent;
