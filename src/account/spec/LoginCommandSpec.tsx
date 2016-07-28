import * as React from "react";
import {model} from "../../common/AppModel";
import AccountStore from "../AccountStore";
import AccountMediator from "../AccountMediator";
import FabaCore from "fabalous-core/core/FabaCore";
import LoginCommand from "../command/LoginCommand";
import LoginEvent from "../event/LoginEvent";
var TestUtils = require("react-addons-test-utils");

describe("LoginCommand Spec", function() {
  var command:LoginCommand;
  var event:LoginEvent;

  FabaCore.addMediator(new AccountMediator());

  beforeEach(()=> {
    model.accountStore = new AccountStore();
    command = new LoginCommand();
    event = new LoginEvent();
  });

  it("Should set Errorcode", function(resolve) {
    event.cbs = () =>{
      expect(model.accountStore.login.errorCode == 2).toBeTruthy();
      resolve();
    };

    command.execute(event);
  });

});