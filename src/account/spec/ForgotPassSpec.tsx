import * as React from "react";
import {mount} from "enzyme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import FabaCore from "fabalous-core/core/FabaCore";
import AccountMediator from "../AccountMediator";
import {accountStore} from "../AccountStore";
import ForgotPass from "../view/ForgotPass";
var TestUtils = require("react-addons-test-utils");

describe("ForgotPass View", function() {
  var wrapper;
  var instance:ForgotPass;

  let injectTapEventPlugin = require("react-tap-event-plugin");
  injectTapEventPlugin();

  FabaCore.addMediator(AccountMediator);

  beforeEach(()=> {
    wrapper = mount(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ForgotPass model={accountStore} />
      </MuiThemeProvider>
    );

    instance = wrapper.find(ForgotPass).get(0) as ForgotPass;
  });

  it("ForgotPass should be there", function() {
    expect(instance).toBeDefined();
  });
});