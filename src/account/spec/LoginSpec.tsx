import * as React from "react";
import * as ReactDOM from "react-dom";
import {mount} from "enzyme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Login from "../view/Login";
import AccountMediator from "../AccountMediator";
import FabaCore from "fabalous-core/core/FabaCore";
import AccountStore, {accountStore} from "../AccountStore";
import FabaModel from "fabalous-core/core/FabaModel";

var TestUtils = require("react-addons-test-utils");

describe("Login View", function() {
  var wrapper;
  var loginIns:Login;

  let injectTapEventPlugin = require("react-tap-event-plugin");
  injectTapEventPlugin();

  FabaCore.addMediator(AccountMediator);

  beforeEach(()=> {
    FabaModel.setStore('accountStore', AccountStore);

    wrapper = mount(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Login model={accountStore}/>
      </MuiThemeProvider>
    );

    loginIns = wrapper.find(Login).get(0) as Login;
  });

  it("Login View should be there", function() {
    expect(loginIns).toBeDefined();
  });

  xit("Login should Fail // no Password", function(resolve) {
    accountStore.login.userName = "Test";
    accountStore.login.password = "";
    var dm = ReactDOM.findDOMNode(wrapper.find('.loginButton').node);
    TestUtils.Simulate["touchTap"](dm);

    // SPY
    jasmine.createSpy("loginIns.state.error",function(){
      console.log("spy");
    });

    setTimeout(()=>{
      //expect(loginIns.state.error).toBeTruthy();
      resolve();
    }, 100);
  });

  it("Login should Fail // no Username", function() {
    accountStore.login.userName = "";
    accountStore.login.password = "Test";

    var dm = ReactDOM.findDOMNode(wrapper.find('.loginButton').node);
    TestUtils.Simulate["touchTap"](dm);

    expect(accountStore.login.errorCode).toBeGreaterThan(0);
  });

  xit("Login should success", function() {
    accountStore.login.userName = "Test12345";
    accountStore.login.password = "Test$12345";
    var dm = ReactDOM.findDOMNode(wrapper.find('.loginButton').node);
    TestUtils.Simulate["touchTap"](dm);

    expect(accountStore.login.errorCode).toEqual(0);
  });
});