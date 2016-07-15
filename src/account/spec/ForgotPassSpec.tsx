import * as React from "react";
import {mount} from "enzyme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import ForgotPass from "../view/ForgotPass";
import TestUtils = require("react-addons-test-utils");

describe("ForgotPass Component", function() {
  var wrapper;
  var instance:ForgotPass;

  let injectTapEventPlugin = require("react-tap-event-plugin");
  injectTapEventPlugin();

  beforeEach(()=> {
    wrapper = mount(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ForgotPass />
      </MuiThemeProvider>
    );

    instance = wrapper.find(ForgotPass).get(0) as ForgotPass;
  });

  it("ForgotPass should be there", function() {
    expect(instance).toBeDefined();
  });
});


