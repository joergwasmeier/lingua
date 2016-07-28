import * as React from "react";
import * as ReactDOM from "react-dom";
import {mount} from "enzyme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import SignUp from "../view/SignUp";
import FabaCore from "fabalous-core/core/FabaCore";
import AccountMediator from "../AccountMediator";
import {model} from "../../common/AppModel";
import AccountStore from "../AccountStore";
var TestUtils = require("react-addons-test-utils");

describe("SignUp View", function() {
  var wrapper;
  var instance:SignUp;

  let injectTapEventPlugin = require("react-tap-event-plugin");
  injectTapEventPlugin();

  FabaCore.addMediator(new AccountMediator());


  beforeEach(()=> {
    model.accountStore = new AccountStore();

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
    model.accountStore.signUp.userName = "test@joergwasmeier.de";
    model.accountStore.signUp.password = "Test$12345";

    var dm = ReactDOM.findDOMNode(wrapper.find('.signUpButton').node);
    TestUtils.Simulate["touchTap"](dm);
    expect(instance.state.error).toBeFalsy();
  });
});