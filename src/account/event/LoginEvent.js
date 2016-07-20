"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FabaEvent_1 = require("fabalous-core/core/FabaEvent");
var LoginEvent = (function (_super) {
    __extends(LoginEvent, _super);
    function LoginEvent() {
        _super.call(this);
        this.identifyer = "LoginEvent";
    }
    return LoginEvent;
}(FabaEvent_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginEvent;
