import * as React from "react";
import AccountMediator from "../AccountMediator";
import FabaCore from "fabalous-core/core/FabaCore";
import InitAccountEvent from "../event/InitAccountEvent";
import CheckLoginStatusEvent from "../event/CheckLoginStatusEvent";
import AccountStore from "../AccountStore";

if(CLIENT){
  describe("CheckLogin Spec", function() {
    FabaCore.addMediator(new AccountMediator());
    new AccountStore();
    new InitAccountEvent().dispatch();
    
    it("CheckLogin should be there", function() {
      expect(new CheckLoginStatusEvent()).toBeDefined();
    });

    it("CheckLogin should be false", function() {
      expect(new CheckLoginStatusEvent().dispatch()).toBeFalsy();
    });
  });
}

if (SERVER){
  describe("CheckLogin Spec", function() {
    FabaCore.addMediator(new AccountMediator());
    new InitAccountEvent().dispatch();

    it("CheckLogin should be there", function() {
      expect(new CheckLoginStatusEvent()).toBeDefined();
    });


    it("CheckLogin should be false", function() {
      expect(new CheckLoginStatusEvent().dispatch()).toBeFalsy();
    });
  });
}
