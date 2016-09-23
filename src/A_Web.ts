import {renderRoutes} from "./common/routes";
import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import FabaApiConnection from "@fabalous/runtime-web/transport/FabaApiConnection";

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
        if (host == "localhost:8080/api/") host = "localhost:3120/";

        var protocol = window.location.protocol;

        console.log("add");

        console.log();
        FabaRuntimeWeb.addServerEndPoint(new FabaApiConnection(protocol+"//"+host), "api");

        renderRoutes();
    }
}

new A_Web();