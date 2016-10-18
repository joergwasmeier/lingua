import {renderRoutes} from "./common/routes";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import FabaApiConnection from "@fabalous/runtime-web/transport/FabaApiConnection";
import FabaCore from "@fabalous/core/FabaCore";
import MenuMediator from "./menu/MenuMediator";
import AccountMediator from "./account/AccountMediator";
require("babel-polyfill");

//require('offline-plugin/runtime').install();

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

//require("./common/manifest.json");
require("./index.html");

require("./assets/less/reset.less");
require("./assets/less/font.less");

declare var module;

export default class A_Web extends FabaRuntimeWeb {
    constructor() {
        super();

        var host:string = window.location.host+"/api/";
        if (host == "192.168.0.31:8080/api/") host = "192.168.0.31:3120/";
        if (host == "localhost:8080/api/") host = "localhost:3120/";


        var protocol = window.location.protocol;

        FabaCore.addMediator(MenuMediator);
        FabaCore.addMediator(AccountMediator);


        FabaRuntimeWeb.addServerEndPoint(new FabaApiConnection(protocol+"//"+host), "api");

        renderRoutes();

        if (module.hot) {
            module.hot.accept('./A_Web.ts', () => {
                console.log("test");
                renderRoutes();
            });
        }

    }
}

new A_Web();