import * as React from "react";
import * as ReactDOM from "react-dom";

import {mount} from "enzyme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import AccountMediator from "../AccountMediator";
import {accountStore} from "../AccountStore";
import ForgotPass from "../view/ForgotPass";
import FabaCore from "@fabalous/core/FabaCore";
import createSpy = jasmine.createSpy;
var TestUtils = require("react-addons-test-utils");

describe("ForgotPass View", function () {
    var wrapper;
    var instance: ForgotPass;

    let injectTapEventPlugin = require("react-tap-event-plugin");
    injectTapEventPlugin();

    FabaCore.addMediator(AccountMediator);

    beforeEach(()=> {
        wrapper = mount(
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <ForgotPass model={accountStore}/>
            </MuiThemeProvider>
        );

        instance = wrapper.find(ForgotPass).get(0) as ForgotPass;
    });

    it("ForgotPass should be there", function () {
        expect(instance).not.toBeNull();
    });

    it("Mail input should be there", function () {
        var btn = ReactDOM.findDOMNode(wrapper.find('.email').node);
        expect(instance).not.toBeNull();
    });

    it("Button should be there", function () {
        var btn = ReactDOM.findDOMNode(wrapper.find('.button').node);
        expect(btn).not.toBeNull();
    });

    /*
    it("forgotPassBtHandler should be called", function () {
        instance.forgotPassBtHandler = createSpy("forgotPassBtHandler");

        var btn = ReactDOM.findDOMNode(wrapper.find('.button').node);
        TestUtils.Simulate["touchTap"](btn);

        expect(instance.forgotPassBtHandler).toHaveBeenCalled();
    });
     */

    it("success message should be visible", function () {
        accountStore.forgotPass.showSuccessMessage = true;

        let success = ReactDOM.findDOMNode(wrapper.find('.success').node);
        expect(success).not.toBeNull();
    });

    it("error message should be visible", function () {
        accountStore.forgotPass.showErrorMessage = true;
        let error = ReactDOM.findDOMNode(wrapper.find('.error').node);
        expect(error).not.toBeNull();
    });
});