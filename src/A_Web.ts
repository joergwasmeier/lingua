import * as React from "react";
import * as ReactDOM from "react-dom";

import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import FabaApiConnection from "@fabalous/runtime-web/transport/FabaApiConnection";
import FabaCore from "@fabalous/core/FabaCore";
import MenuMediator from "./menu/MenuMediator";
import LayoutMediator from "./layout/LayoutMediator";
import Layout from "./layout/Layout";
import {commonStore} from "./common/CommonStore";
require("babel-polyfill");

//require('offline-plugin/runtime').install();

require("./index.html");

require("./common/assets/less/reset.less");
require("./common/assets/less/font.less");

import {createHashHistory} from 'history'
import AccountMediator from "./account/AccountMediator";
import BaobaTest from "./BaobaTest";
import {appStoreCourser} from "./common/commonImStore";
import {store} from "./common/commonImStore";

declare var module;

export interface IRoutes {
    route: string;
    module: any;
    view?: string;
}

export class Routes {
    static INDEX: IRoutes = {
        route: "/", module: async() => {
            return System.import("./account/index");
        }
    };
    static LOGIN: IRoutes = {
        route: "/login/", module: async() => {
            return await Routes.INDEX.module();
        }, view: "login"
    };
    static FORGOT_PASS: IRoutes = {
        route: "/forgotpass/", module: async() => {
            return await Routes.INDEX.module();
        }, view: "forgotpass"
    };
    static SIGN_UP: IRoutes = {
        route: "/signup/", module: async() => {
            return await Routes.INDEX.module();
        }, view: "signup"
    };
    static DASBOARD: IRoutes = {
        route: "/dashboard/", module: async() => {
            return System.import("./dashboard/index");
        }
    };

    // Store
    static STORE: IRoutes = {
        route: "/shop/", module: async() => {
            return System.import("./shop/index");
        }
    };
    static STORE_ITEM: IRoutes = {
        route: "/shop/:id", module: async() => {
            return await Routes.STORE.module();
        }, view: "shopitem"
    };
    static STORE_ITEM_TAB: IRoutes = {
        route: "/shop/:id/:tab", module: async() => {
            return await Routes.STORE.module();
        }, view: "shopitem"
    };
    static STORE_FILTER: IRoutes = {
        route: "/shop/filter/", module: async() => {
            return await Routes.STORE.module();
        }, view: "shopfilter"
    };

    static getRoutes() {
        let routes = [
            Routes.INDEX,
            Routes.LOGIN,
            Routes.FORGOT_PASS,
            Routes.SIGN_UP,
            Routes.DASBOARD,
            Routes.STORE,
            Routes.STORE_ITEM,
            Routes.STORE_FILTER,
            Routes.STORE_ITEM_TAB
        ];

        return routes;
    }
}

export default class A_Web extends FabaRuntimeWeb {
    history = createHashHistory();
    listener: any;
    layout: any;

    constructor() {
        super();

        if (module.hot) {
            module.hot.accept();

            module.hot.dispose((data) => {
                FabaCore.mediators = [];
                FabaCore.events = [];
                this.listener();
            });
        }

        if (store.appStore.appInit !== true) {
            let injectTapEventPlugin = require("react-tap-event-plugin");
            injectTapEventPlugin();
        }

        store.set("appInit", true);

        let host: string = window.location.host + "/api/";
        if (host === "192.168.0.31:8080/api/") host = "192.168.0.31:3120/";
        if (host === "localhost:8080/api/") host = "localhost:3120/";

        const protocol = window.location.protocol;

        FabaCore.addMediator(MenuMediator);
        FabaCore.addMediator(LayoutMediator);

        FabaRuntimeWeb.addServerEndPoint(new FabaApiConnection(protocol + "//" + host), "api");

        this.listener = this.history.listen((location) => {
            this.handleRoutes(location.pathname);
        });

        const str: string = window.location.hash.replace("#", "");
        this.handleRoutes(str);

        appStoreCourser.on("update", (e) => {
            store.appStore = e.data.currentData;
//            console.log("update currentData", e.data.currentData);
            //          console.log("update previousData", e.data.previousData);
            this.loadModule(commonStore.activeModule, commonStore.activeView);
        });
    }

    render(child?) {
        console.time("renderTime");

        if (document.getElementById("container")) {
            if (this.layout) {
                if (child) {
                    this.layout = React.createElement(Layout, {childs: child, model: store.appStore});
                } else {
                    this.layout = React.createElement(Layout, {model: store.appStore});
                    return;
                }
            } else {
                this.layout = React.createElement(Layout, {model: store.appStore});
                return;
            }

            ReactDOM.render(this.layout, document.getElementById("container"));
        }

        console.timeEnd("renderTime");
    }

    // TODO: Split path and check for id from behind to forward( test/testitem/:id/:tab
    // :tab is no path (:)
    // :id is no path(:)
    // testitem is path (!:)

    handleRoutes(pathname: string) {

        console.time("moduleFinish");
        console.time("loadModule");

        // Split path
        let path = pathname.split("/");

        // Check if firstname fits

        // Check if secondname fits

        // Check if secondname is : placeholder
        for (let i = 0; i < Routes.getRoutes().length; i++) {
            let obj = Routes.getRoutes()[i];
            if (pathname === obj.route) {
                this.loadModule(obj.module, obj.view);
                return;
            }
        }

        this.loadModule(Routes.INDEX.module, Routes.INDEX.view);
    }

    // Timeing (cacheing)
    async loadModule(loadfun: any, view?: string) {
        commonStore.activeModule = loadfun;
        commonStore.activeView = view;

        if (!loadfun) return;
        let comp = await loadfun();
        FabaCore.addMediator(comp.mediator);

        let t: any = commonStore.activeEvent = new comp.initEvent;
        t.viewName = view;
        let k = await t.dispatch();
        this.render(k.view);
    }
}

new A_Web();