import FabaCore from "@fabalous/core/FabaCore";
import * as React from "react";
import AccountMediator from "../AccountMediator";
import LoginCommand from "../command/LoginCommand";
import LoginEvent from "../event/LoginEvent";
import {accountStore} from "../AccountStore";

var TestUtils = require("react-addons-test-utils");

describe("LoginCommand Spec", function () {
    var command: LoginCommand;
    var event: LoginEvent;

    FabaCore.addMediator(AccountMediator);

    beforeEach(()=> {
        command = new LoginCommand();
        event = new LoginEvent("test","test");
    });

    it("Should set Errorcode", function () {

    });

});