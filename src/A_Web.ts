import * as React from "react";
import * as ReactDOM from "react-dom";

import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import FabaApiConnection from "@fabalous/runtime-web/transport/FabaApiConnection";
import FabaCore from "@fabalous/core/FabaCore";
import MenuMediator from "./menu/MenuMediator";
import LayoutMediator from "./layout/LayoutMediator";
import Layout from "./layout/Layout";
import FabaEvent from "@fabalous/core/FabaEvent";
import {commonStore} from "./common/CommonStore";
require("babel-polyfill");

//require('offline-plugin/runtime').install();

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

require("./index.html");

require("./common/assets/less/reset.less");
require("./common/assets/less/font.less");

declare var module;

export default class A_Web extends FabaRuntimeWeb {
    constructor() {
        super();

        var host:string = window.location.host+"/api/";
        if (host == "192.168.0.31:8080/api/") host = "192.168.0.31:3120/";
        if (host == "localhost:8080/api/") host = "localhost:3120/";

        var protocol = window.location.protocol;

        FabaCore.addMediator(MenuMediator);
        //FabaCore.addMediator(AccountMediator);
        FabaCore.addMediator(LayoutMediator);

        FabaRuntimeWeb.addServerEndPoint(new FabaApiConnection(protocol+"//"+host), "api");

        if (document.getElementById('container')) {
            var routes = React.createElement(Layout);
            ReactDOM.render(routes, document.getElementById('container'));
        }

        if (module.hot) {
            module.hot.dispose((data) => {
                console.log("dispose");
            });
        }

        this.handleRoutes();
        
        window.addEventListener('popstate',(event)=>{
            this.handleRoutes();
        });
    }

    handleRoutes(){
        switch(window.location.hash){
            case "#/login/":
                this.loadModule("account", "login");
                break;

            case "#/forgotpass/":
                this.loadModule("account", "forgotpass");
                break;

            case "#/signup/":
                this.loadModule("account", "signup");
                break;

            case "#/dashboard/":
                this.loadModule("dashboard");
                break;

            default:
                this.loadModule("account");
                break;
        }
    }

    async loadModule(path:string, view?:string){
        var comp = await System.import('./'+path+'/index');
        FabaCore.addMediator(comp.mediator);
        var t:any = new comp.initEvent;
        t.viewName = view;
        var k = await t.dispatch();
        commonStore.child = k.view;
    }
}

new A_Web();

interface IRoutes{
    route:string;
    module:string;
    view?:string;
}

export class Routes{
    static INDEX:IRoutes = {route:"#/", module:"account"};
    static LOGIN:IRoutes = {route:"#/login/", module:"account", view:"login"};
    static FORGOT_PASS:IRoutes = {route:"#/forgotpass/", module:"account", view:"forgotpass"};
    static SIGN_UP:IRoutes = {route:"#/signup/", module:"account", view:"signup"};
    static DASBOARD:IRoutes = {route:"#/dashboard/", module:"dashboard"};

    // Store
    static STORE:IRoutes = {route:"#/shop/", module:"dashboard"};
    static STORE_ITEM:IRoutes = {route:"#/shop/:id", module:"dashboard"};
    static STORE_ITEM:IRoutes = {route:"#/shop/:id/:tab", module:"dashboard"};
    static STORE_FILTER:IRoutes = {route:"#/shop/filter", module:"dashboard"};
}