"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FabaMediator_1 = require("fabalous-core/core/FabaMediator");
var LoginEvent_1 = require("./event/LoginEvent");
var LoginMediator = (function (_super) {
    __extends(LoginMediator, _super);
    function LoginMediator() {
        _super.call(this);
    }
    // @ifdef CLIENT
    LoginMediator.prototype.registerCommands = function () {
        _super.prototype.registerCommands.call(this);
        this.addCommand(LoginEvent_1["default"], require("./command/LoginCommand.ts").default);
    };
    // @endif
    // @ifdef SERVER
    LoginMediator.prototype.registerServices = function () {
        _super.prototype.registerServices.call(this);
        this.addSerivce(LoginEvent_1["default"], require("./service/LoginService.ts").default);
    };
    return LoginMediator;
}(FabaMediator_1["default"]));
exports.__esModule = true;
exports["default"] = LoginMediator;
