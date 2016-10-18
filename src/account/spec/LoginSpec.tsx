import * as React from "react";
import * as ReactDOM from "react-dom";
import {mount} from "enzyme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Login from "../view/Login";
import AccountMediator from "../AccountMediator";
import AccountStore, {accountStore} from "../AccountStore";
import FabaCore from "@fabalous/core/FabaCore";
import FabaModel from "@fabalous/core/FabaModel";

var TestUtils = require("react-addons-test-utils");

xdescribe("Login View", function () {
    var wrapper;
    var loginIns: Login;

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

    it("Login View should be there", function () {
        expect(loginIns).toBeDefined();
    });

    it("Login should Fail // no Password", function () {
        accountStore.login.userName = "Test";
        accountStore.login.password = "";

        var dm = ReactDOM.findDOMNode(wrapper.find('.loginButton').node);
        TestUtils.Simulate["touchTap"](dm);

        expect(accountStore.login.errorCode).toBeGreaterThan(0);
    });

    it("Login should Fail // no Username", function () {
        accountStore.login.userName = "";
        accountStore.login.password = "Test";

        var dm = ReactDOM.findDOMNode(wrapper.find('.loginButton').node);
        TestUtils.Simulate["touchTap"](dm);

        expect(accountStore.login.errorCode).toBeGreaterThan(0);
    });

    it("Login should success", function () {
        accountStore.login.userName = "Test12345";
        accountStore.login.password = "Test$12345";

        var dm = ReactDOM.findDOMNode(wrapper.find('.loginButton').node);
        TestUtils.Simulate["touchTap"](dm);

        expect(accountStore.login.loggedIn).toBe(true);
    });
});