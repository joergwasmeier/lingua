import FabaApiConnection from "fabalous-core/transport/FabaApiConnection";
import FabaWebApplication from "fabalous-core/runtimes/FabaWebApplication";
import {renderRoutes} from "./common/routes";
import FabaCore from "fabalous-core/core/FabaCore";
import {IFabaMediatorList} from "fabalous-core/core/FabaCore";

//require('offline-plugin/runtime').install();

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

require("./common/manifest.json");
require("./index.html");

require("./assets/less/reset.less");
require("./assets/less/font.less");

declare var module;

export default class A_Web extends FabaWebApplication {
    constructor() {
        super();

        var host:string = window.location.host+"/api/";
        if (host == "localhost:8080/api/") host = "localhost:3120/";

        console.log(host);

        var protocol = window.location.protocol;

        FabaWebApplication.addServerEndPoint(new FabaApiConnection(protocol+"//"+host), "api");

        renderRoutes();
    }
}

new A_Web();