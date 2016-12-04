import * as React from "react";
import * as ReactDOM from "react-dom";
import {mount} from "enzyme";
import AccountMediator from "../AccountMediator";
import CheckLoginStatusEvent from "../event/CheckLoginStatusEvent";
import FabaCore from "@fabalous/core/FabaCore";
import FabaStore from "@fabalous/core/FabaStore";
import {commonImStore, IcommonStore} from "../../common/commonImStore";
import Login from "../view/Login";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";


const store = new FabaStore<IcommonStore>(commonImStore);
FabaCore.store = store;
FabaCore.addMediator(AccountMediator);

describe("Login View", ()=>{
    let wrapper;
    let loginIns: any;

    let injectTapEventPlugin = require("react-tap-event-plugin");
    injectTapEventPlugin();

    beforeEach(()=> {
        wrapper = mount(
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Login model={store.data.account.login}/>
            </MuiThemeProvider>
        );

        loginIns = wrapper.find(Login).get(0);
    });

    it("CheckLogin should be there", function () {
        expect(new CheckLoginStatusEvent()).toBeDefined();
    });

    it("CheckLogin should be false", function (resolve) {
        let log = new CheckLoginStatusEvent().dispatch();
        log.then((event:CheckLoginStatusEvent)=>{
            expect(event.loggedIn).toBeFalsy();
            resolve();
        });
        log.catch(()=>{
            expect(true).toBeFalsy();
        });
    });
});


