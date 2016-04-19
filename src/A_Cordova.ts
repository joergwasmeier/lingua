/**
 * Created by creativecode on 17.04.16.
 */
import FabaApiConnection from "fabalous-core/transport/FabaApiConnection";
import FabaWebApplication from "fabalous-core/runtimes/FabaWebApplication";
import {renderRoutes} from "./routes";

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

require("./index.html");

require("./assets/less/reset.less");
require("./assets/less/font.less");

export default class A_Cordova extends FabaWebApplication {
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

new A_Cordova();