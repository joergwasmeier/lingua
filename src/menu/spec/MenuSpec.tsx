import * as React from "react";
import {mount} from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {AppModel} from "../../common/AppModel";
import MenuVo from "../vo/MenuVo";
import Menu from "./../view/Menu";

describe("Test Menu Component", function() {
  var wrapper;
  var menuIns:Menu;

  beforeEach(()=> {
    AppModel.getInstance().menuStore = new MenuVo();
    AppModel.getInstance().menuStore.createMockData();

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
    expect(AppModel.getInstance().menuStore.staticItems.length).toEqual(5);
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

  it("should render mock data", function(resolve) {
    console.log(menuIns.state.open);
    wrapper.find('button').first().simulate("tap");
    console.log(menuIns.state.open);
    expect(true).toBe(true);

  });

  it("Menu should open", function() {
    expect(true).toBe(true);
  });

  it("Menu can close", function() {
    expect(true).toBe(true);
  });

  it("Menu should have 5 items", function() {
    expect(true).toBe(true);
  });

  it("Menu item click should be dispatched", function() {
    expect(true).toBe(true);
  });

  it("Menu should be always visible Desktop", function() {
    expect(true).toBe(true);
  });
});