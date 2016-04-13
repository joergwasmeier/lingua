import FabaApiConnection from "fabalous-core/transport/FabaApiConnection";
import FabaWebApplication from "fabalous-core/runtimes/FabaWebApplication";
import {renderRoutes} from "./routes";


let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

require("./reset.less");

export default class A_Web extends FabaWebApplication {
    constructor() {
        super();

        var host = window.location.hostname;
        var protocol = window.location.protocol;

        FabaWebApplication.addServerEndPoint(new FabaApiConnection(protocol+"//"+host+":3120/"), "api");

        renderRoutes();
    }
}

new A_Web();