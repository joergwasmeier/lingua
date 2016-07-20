import * as React from "react";
import * as ReactDOM from "react-dom";
import {mount} from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {AppModel} from "../../common/AppModel";
import MenuVo from "../vo/MenuVo";
import Menu from "./../view/Menu";
import {MenuItem} from "material-ui";
import TestUtils = require("react-addons-test-utils");

describe("Test Menu Component", function() {
  var wrapper;
  var menuIns:Menu;

  let injectTapEventPlugin = require("react-tap-event-plugin");
  injectTapEventPlugin();

  beforeEach(()=> {
    AppModel.getInstance().menuStore = new MenuVo();
    AppModel.getInstance().menuStore.createMockData();
    AppModel.getInstance().userLoggedIn = true;

    wrapper = mount(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Menu />
      </MuiThemeProvider>
    );

    menuIns = wrapper.find(Menu).get(0) as Menu;
  });

  it("Menu mockdata should be there", function() {
    expect(AppModel.getInstance().menuStore).toBeDefined();

    expect(AppModel.getInstance().menuStore.courses.length).toEqual(5);
    expect(AppModel.getInstance().menuStore.createdCourses.length).toEqual(5);
  });

  it("Menu handleToggle should be defined", function() {
    expect(menuIns.handleToggle).toBeDefined();
  });


  it("Menu openstate should be diffrent", function() {
    var stateBefore = menuIns.state.open;
    menuIns.handleToggle();
    var stateAfter = menuIns.state.open;

    expect(stateBefore).not.toEqual(stateAfter);
  });

  it("Menu should open", function() {
    var dm = ReactDOM.findDOMNode(wrapper.find('button').node);
    TestUtils.Simulate["touchTap"](dm);

    expect(menuIns.state.open).toBe(true);
  });

  it("Menu should close", function() {
    var dm = ReactDOM.findDOMNode(wrapper.find('button').node);
    TestUtils.Simulate["touchTap"](dm);
    TestUtils.Simulate["touchTap"](dm);

    expect(menuIns.state.open).toBe(false);
  });

  it("Menu should have 14 items", function() {
    expect(wrapper.find(MenuItem).length).toBe(14);
  });

  it("Menu item click should be dispatched", function() {
    expect(true).toBe(true);
  });

  it("Menu should be always visible Desktop", function() {
    expect(true).toBe(true);
  });
});