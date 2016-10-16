require("babel-polyfill");

import * as React from "react";
import AccountMediator from "../AccountMediator";
import InitAccountEvent from "../event/InitAccountEvent";
import CheckLoginStatusEvent from "../event/CheckLoginStatusEvent";
import FabaCore from "@fabalous/core/FabaCore";

if (CLIENT) {
    describe("CheckLogin Spec", function () {
        FabaCore.addMediator(AccountMediator);
        new InitAccountEvent().dispatch();

        it("CheckLogin should be there", function () {
            expect(new CheckLoginStatusEvent()).toBeDefined();
        });

        it("CheckLogin should be false", function (resolve) {
            var log = new CheckLoginStatusEvent().dispatch();
            log.then((event:CheckLoginStatusEvent)=>{
                expect(event.loggedIn).toBeFalsy();
                resolve();
            });
        });
    });
}

if (SERVER) {
    describe("CheckLogin Spec", function () {
        FabaCore.addMediator(AccountMediator);
        new InitAccountEvent().dispatch();

        it("CheckLogin should be there", function () {
            expect(new CheckLoginStatusEvent()).toBeDefined();
        });


        it("CheckLogin should be false", function () {
            expect(new CheckLoginStatusEvent().dispatch()).toBeFalsy();
        });
    });
}
