import * as React from "react";
import * as ReactDOM from "react-dom";
import {mount} from "enzyme";
import {model} from "../../common/AppModel";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Login from "../view/Login";
import AccountMediator from "../AccountMediator";
import FabaCore from "fabalous-core/core/FabaCore";
import InitAccountEvent from "../event/InitAccountEvent";
var TestUtils = require("react-addons-test-utils");

describe("Login View", function() {
  var wrapper;
  var loginIns:Login;

  let injectTapEventPlugin = require("react-tap-event-plugin");
  injectTapEventPlugin();

  FabaCore.addMediator(new AccountMediator());
  new InitAccountEvent().dispatch();

  beforeEach(()=> {

    wrapper = mount(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Login />
      </MuiThemeProvider>
    );

    loginIns = wrapper.find(Login).get(0) as Login;
  });

  it("Login View should be there", function() {
    expect(loginIns).toBeDefined();
  });

  it("Login should Fail // no Password", function(resolve) {
    model.accountStore.login.userName = "Test";
    model.accountStore.login.password = "";
    var dm = ReactDOM.findDOMNode(wrapper.find('.loginButton').node);
    TestUtils.Simulate["touchTap"](dm);

    // SPY
    jasmine.createSpy("loginIns.state.error",function(){
      console.log("spy");
    });

    setTimeout(()=>{
      expect(loginIns.state.error).toBeTruthy();
      resolve();
    }, 100);
  });

  it("Login should Fail // no Username", function() {
    model.accountStore.login.userName = "";
    model.accountStore.login.password = "Test";
    var dm = ReactDOM.findDOMNode(wrapper.find('.loginButton').node);
    TestUtils.Simulate["touchTap"](dm);

    expect(loginIns.state.error).toBeTruthy();
  });

  it("Login should success", function() {
    model.accountStore.login.userName = "Test12345";
    model.accountStore.login.password = "Test$12345";
    var dm = ReactDOM.findDOMNode(wrapper.find('.loginButton').node);
   // TestUtils.Simulate["touchTap"](dm);

   // expect(loginIns.state.progress).toBeTruthy();
  });


});