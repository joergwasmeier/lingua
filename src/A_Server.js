"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FabaCore_1 = require("fabalous-core/core/FabaCore");
var FabaServer_1 = require("fabalous-core/runtimes/FabaServer");
var DasboardMediator_1 = require("./dashboard/control/DasboardMediator");
var AccountMediator_1 = require("./account/AccountMediator");
/**
 * Created by joerg on 07.04.2016.
 */
var A_Server = (function (_super) {
    __extends(A_Server, _super);
    function A_Server() {
        console.log("Start Server test");
        FabaCore_1.default.addMediator(new DasboardMediator_1.default());
        FabaCore_1.default.addMediator(new AccountMediator_1.default());
        _super.call(this);
    }
    return A_Server;
}(FabaServer_1.default));
new A_Server();
