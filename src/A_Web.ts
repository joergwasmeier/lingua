import * as React from "react";
import * as ReactDOM from "react-dom";

import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import FabaApiConnection from "@fabalous/runtime-web/transport/FabaApiConnection";
import FabaCore from "@fabalous/core/FabaCore";
import MenuMediator from "./menu/MenuMediator";
import LayoutMediator from "./layout/LayoutMediator";
import Layout from "./layout/Layout";
import {createHashHistory} from 'history'
import {appStoreCourser, tree} from "./common/commonImStore";
import {store} from "./common/commonImStore";
import {IRoutes, default as Routes} from "./Routes";
import {commonStore} from "./common/CommonStore";

require("./layout/style/reset");
require("./index.html");

declare var module;

export default class A_Web extends FabaRuntimeWeb {
    history = createHashHistory();
    listener: any;
    layout: any;

    activeModule: any;
    activeArgs: Array<string>;
    activeEvent: any;

    constructor() {
        super();

        if (FabaCore.mediators.length === 0) {
            try {
                let injectTapEventPlugin = require("react-tap-event-plugin");
                injectTapEventPlugin();
            } catch (e) {
                console.log("inject error");
            }

        }

        if (module.hot) {
            module.hot.accept();

            module.hot.dispose(() => {
                this.activeModule = null;
                this.activeArgs = null;
                this.activeEvent = null;
                FabaCore.mediators = [];
                FabaCore.events = [];
                commonStore.hot = true;
                appStoreCourser.on("update", (e) => {
                });
            });
        }

        let host: string = window.location.host + "/api/";
        if (host === "192.168.0.31:8080/api/") host = "192.168.0.31:3120/";
        if (host === "localhost:8080/api/") host = "localhost:3120/";

        const protocol = window.location.protocol;

        FabaCore.addMediator(MenuMediator);
        FabaCore.addMediator(LayoutMediator);

        if (!commonStore.hot) {
            FabaRuntimeWeb.addServerEndPoint(new FabaApiConnection(protocol + "//" + host), "api");

            this.listener = this.history.listen((location) => {
                this.handleRoutes(location.pathname);
            });

            //clear on hot update
            appStoreCourser.on("update", (e) => {
                store.appStore = e.data.currentData;
                this.loadModule(this.activeModule, this.activeArgs);
            });

            this.handleRoutes();
        } else {
            this.handleRoutes();
        }
    }

    render(child?) {
        if (document.getElementById("container") && child) {
            // console.time("renderTime");
            this.layout = React.createElement(Layout, {childs: child, model: store.appStore});
            ReactDOM.render(this.layout, document.getElementById("container"));
            // console.timeEnd("renderTime");
        }
    }

    handleRoutes(pathname?: string) {
        if (!pathname) pathname = window.location.hash.replace("#", "");

        // Split path
        let path: Array<string> = pathname.split("/");
        let matches: Array<IRoutes> = [];

        // Check if firstname fits
        for (let i = 1; i < path.length; i++) {
            let urlPath = path[i];
            if (urlPath.length > 1) {
                for (let m = 0; m < Routes.getRoutes().length; m++) {
                    let route = Routes.getRoutes()[m];

                    if (route.route.indexOf(urlPath) > -1) {
                        matches.push(route);
                    }
                }
            }
        }

        if (matches.length > 0) {
            this.loadModule(matches[0].module, this.normalizeUrlPath(path));
        } else {
            this.loadModule(Routes.INDEX.module, this.normalizeUrlPath(path));
        }
    }

    normalizeUrlPath(path: Array<string>) {
        let normPath: Array<string> = [];

        for (var i = 1; i < path.length; i++) {
            var obj = path[i];
            if (obj.length >= 1) normPath.push(obj);
        }

        return normPath;
    }

    // Timeing (cacheing)
    async loadModule(loadfun: any, args?: Array<string>) {
        if (!loadfun) return;

        if (this.activeModule === loadfun &&
            this.activeArgs === args && this.activeEvent) {
            let k = await this.activeEvent.dispatch();
            this.render(k.view);
            return;
        }

        this.activeModule = loadfun;
        this.activeArgs = args;

        let comp = await loadfun();
        FabaCore.addMediator(comp.mediator);

        let t: any = new comp.initEvent;
        t.args = args;

        this.activeEvent = t;
        let k = await t.dispatch();
        this.render(k.view);
    }
}

new A_Web();