import * as React from "react";
import {mount} from "enzyme";
import {model} from "../../common/AppModel";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import ForgotPass from "../view/ForgotPass";
import AccountMediator from "../AccountMediator";
import AccountStore from "../AccountStore";
import FabaCore from "fabalous-core/core/FabaCore";
var TestUtils = require("react-addons-test-utils");

describe("ForgotPass View", function() {
  var wrapper;
  var instance:ForgotPass;

  let injectTapEventPlugin = require("react-tap-event-plugin");
  injectTapEventPlugin();

  FabaCore.addMediator(new AccountMediator());

  beforeEach(()=> {
    model.accountStore = new AccountStore();

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


