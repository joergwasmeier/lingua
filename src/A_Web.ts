import FabaApiConnection from "fabalous-core/transport/FabaApiConnection";
import FabaWebApplication from "fabalous-core/runtimes/FabaWebApplication";
import {renderRoutes} from "./routes";


let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

require("./reset.less");

export default class A_Web extends FabaWebApplication {
    constructor() {
        super();

        FabaWebApplication.addServerEndPoint(new FabaApiConnection("http://localhost:3120/api/"), "api");

        renderRoutes();
    }
}

new A_Web();