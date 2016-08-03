import * as React from "react";
import * as ReactDOM from "react-dom";
import {mount} from "enzyme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Login from "../view/Login";
import AccountMediator from "../AccountMediator";
import FabaCore from "fabalous-core/core/FabaCore";
import AccountStore from "../AccountStore";
var TestUtils = require("react-addons-test-utils");

describe("Login View", function() {
  var wrapper;
  var loginIns:Login;
  var model:AccountStore;

  let injectTapEventPlugin = require("react-tap-event-plugin");
  injectTapEventPlugin();

  FabaCore.addMediator(new AccountMediator());
  beforeEach(()=> {
    model = new AccountStore();

    wrapper = mount(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Login model={model} />
      </MuiThemeProvider>
    );

    loginIns = wrapper.find(Login).get(0) as Login;
  });

  it("Login View should be there", function() {
    expect(loginIns).toBeDefined();
  });

  it("Login should Fail // no Password", function() {
    model.login.userName = "Test";
    model.login.password = "";

    var dm = ReactDOM.findDOMNode(wrapper.find('.loginButton').node);
    TestUtils.Simulate["touchTap"](dm);

    expect(model.login.errorCode).toBe(2);

  });

  it("Login should Fail // no Username", function() {
    model.login.userName = "";
    model.login.password = "Test";
    var dm = ReactDOM.findDOMNode(wrapper.find('.loginButton').node);
    TestUtils.Simulate["touchTap"](dm);

    expect(model.login.errorCode).toBe(2);
  });

  xit("Login should success", function() {
    model.login.userName = "Test12345";
    model.login.password = "Test$12345";
    var dm = ReactDOM.findDOMNode(wrapper.find('.loginButton').node);
    TestUtils.Simulate["touchTap"](dm);

    expect(model.login.errorCode).toBe(0);
  });


});