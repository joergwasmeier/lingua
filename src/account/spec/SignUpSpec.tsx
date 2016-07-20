import * as React from "react";
import * as ReactDOM from "react-dom";
import {mount} from "enzyme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import SignUp from "../view/SignUp";
import {AppModel} from "../../common/AppModel";
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

  it("SignUp Button should be there", function() {
    expect(ReactDOM.findDOMNode(wrapper.find('.signUpButton').node)).toBeDefined();
  });

  it("SignUp should Fail // no Email", function() {
    var dm = ReactDOM.findDOMNode(wrapper.find('.signUpButton').node);
    TestUtils.Simulate["touchTap"](dm);
    expect(instance.state.error).toBeTruthy();
  });

  it("SignUp should Fail // no Password", function() {
    var dm = ReactDOM.findDOMNode(wrapper.find('.signUpButton').node);
    TestUtils.Simulate["touchTap"](dm);
    expect(instance.state.error).toBeTruthy();
  });

  it("SignUp should be possible", function() {
    AppModel.getInstance().signUpStore.userName = "test@joergwasmeier.de";
    AppModel.getInstance().signUpStore.password = "Test$12345";

    var dm = ReactDOM.findDOMNode(wrapper.find('.signUpButton').node);
    TestUtils.Simulate["touchTap"](dm);
    expect(instance.state.error).toBeFalsy();
  });

});


