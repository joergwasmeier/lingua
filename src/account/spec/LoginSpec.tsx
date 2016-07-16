import * as React from "react";
import * as ReactDOM from "react-dom";
import {mount} from "enzyme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import {AppModel} from "../../common/AppModel";
import Login from "../view/Login";
import TestUtils = require("react-addons-test-utils");

describe("Test Login Component", function() {
  var wrapper;
  var loginIns:Login;

  let injectTapEventPlugin = require("react-tap-event-plugin");
  injectTapEventPlugin();

  beforeEach(()=> {
    wrapper = mount(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Login />
      </MuiThemeProvider>
    );

    loginIns = wrapper.find(Login).get(0) as Login;
  });

  it("Login should be there", function() {
    expect(loginIns).toBeDefined();
  });

  it("Login should Fail // no Password", function() {
    AppModel.getInstance().loginStore.userName = "Test";
    AppModel.getInstance().loginStore.password = "";
    var dm = ReactDOM.findDOMNode(wrapper.find('.loginButton').node);
    TestUtils.Simulate["touchTap"](dm);

    expect(loginIns.state.error).toBeTruthy();
  });

  it("Login should Fail // no Username", function() {
    AppModel.getInstance().loginStore.userName = "";
    AppModel.getInstance().loginStore.password = "Test";
    var dm = ReactDOM.findDOMNode(wrapper.find('.loginButton').node);
    TestUtils.Simulate["touchTap"](dm);

    expect(loginIns.state.error).toBeTruthy();
  });

/*
  it("Login should success", function() {
    AppModel.getInstance().loginStore.userName = "Test12345";
    AppModel.getInstance().loginStore.password = "Test$12345";
    var dm = ReactDOM.findDOMNode(wrapper.find('.loginButton').node);
    TestUtils.Simulate["touchTap"](dm);

    expect(loginIns.state.progress).toBeTruthy();
  });
*/

});


