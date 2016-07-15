import * as React from "react";
import {mount} from "enzyme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import SignUp from "../view/SignUp";
import TestUtils = require("react-addons-test-utils");

describe("SignUp Component", function() {
  var wrapper;
  var instance:SignUp;

  let injectTapEventPlugin = require("react-tap-event-plugin");
  injectTapEventPlugin();

  beforeEach(()=> {
    wrapper = mount(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <SignUp />
      </MuiThemeProvider>
    );

    instance = wrapper.find(SignUp).get(0) as SignUp;
  });

  it("SignUp should be there", function() {
    expect(instance).toBeDefined();
  });
});


