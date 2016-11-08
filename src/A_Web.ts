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

declare var module;

interface IRoutes{
    route:string;
    module:string;
    view?:string;
}

export class Routes{
    static INDEX:IRoutes = {route:"/", module:"account"};
    static LOGIN:IRoutes = {route:"/login/", module:"account", view:"login"};
    static FORGOT_PASS:IRoutes = {route:"/forgotpass/", module:"account", view:"forgotpass"};
    static SIGN_UP:IRoutes = {route:"/signup/", module:"account", view:"signup"};
    static DASBOARD:IRoutes = {route:"/dashboard/", module:"dashboard"};

    // Store
    static STORE:IRoutes = {route:"/shop/", module:"shop"};
    static STORE_ITEM: IRoutes = {route: "/shop/:id", module: "shop", view: "shopitem"};
    static STORE_ITEM_TAB:IRoutes = {route:"/shop/:id/:tab", module:"shop", view:"shopitem"};
    static STORE_FILTER: IRoutes = {route: "/shop/filter/", module: "shop", view: "shopfilter"};

    static getRoutes(){
        var routes = [
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
    listener:any;
    layout: any;

    constructor() {
        super();

        if (module.hot) {
            module.hot.accept();

            module.hot.dispose((data) => {
                console.log("hot");
                FabaCore.mediators = [];
                FabaCore.events = [];
                this.listener();
            });
        }

        if (commonStore.appInit == true){
            console.log("hot reload");
        } else {
            let injectTapEventPlugin = require("react-tap-event-plugin");
            injectTapEventPlugin();
        }

        commonStore.appInit = true;
        commonStore.history = this.history;

        let host: string = window.location.host + "/api/";
        if (host == "192.168.0.31:8080/api/") host = "192.168.0.31:3120/";
        if (host == "localhost:8080/api/") host = "localhost:3120/";

        const protocol = window.location.protocol;

        FabaCore.addMediator(MenuMediator);

        FabaCore.addMediator(LayoutMediator);

        FabaRuntimeWeb.addServerEndPoint(new FabaApiConnection(protocol+"//"+host), "api");

        this.render();

        this.listener = this.history.listen((location) => {
            this.handleRoutes(location.pathname);
        });

        const str: string = window.location.hash.replace("#", '');
        this.handleRoutes(str)
    }

    render(child?) {
        if (document.getElementById('container')) {
            if (this.layout) {
                if (child) {
                    this.layout = React.cloneElement(this.layout, {childs: child})
                } else {
                    this.layout = React.cloneElement(this.layout)
                }
            } else {
                this.layout = React.createElement(Layout);
            }

            ReactDOM.render(this.layout, document.getElementById('container'));
        }
    }

    // TODO: Split path and check for id from behind to forward( test/testitem/:id/:tab
    // :tab is no path (:)
    // :id is no path(:)
    // testitem is path (!:)

    handleRoutes(pathname:string){
        console.time("moduleFinish");
        console.time("loadModule");

        // Split path
        var path = pathname.split("/");

        // Check if firstname fits


        // Check if secondname fits

        // Check if secondname is : placeholder
        for (var i = 0; i < Routes.getRoutes().length; i++) {
            var obj = Routes.getRoutes()[i];
            if (pathname === obj.route){

                this.loadModule(obj.module, obj.view);
                return;
            }
        }

        this.loadModule(Routes.INDEX.module, Routes.INDEX.view);
    }

    // Timeing ( cahceing)
    async loadModule(path:string, view?:string){
        var comp = await System.import('./'+path+'/index');
        FabaCore.addMediator(comp.mediator);

        if (commonStore.activeModule === path &&
            commonStore.activeView === view) {
            return;
        }

        commonStore.activeModule = path;
        commonStore.activeView = view;

        var t:any = new comp.initEvent;
        t.viewName = view;
        console.timeEnd("loadModule");
        console.time("dispatch");
        var k = await t.dispatch();
        console.timeEnd("dispatch");
        console.time("renderTime");
        this.render(k.view);
        console.timeEnd("renderTime");
        console.timeEnd("moduleFinish");
    }
}

new A_Web();

