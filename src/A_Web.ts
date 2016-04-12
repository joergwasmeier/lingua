let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

import FabaWebApplication from "fabalous-core/runtimes/FabaWebApplication";
import {rend} from "./routes";

require("./reset.less");

export default class A_Web extends FabaWebApplication {
    constructor() {
        super();





        rend();
    }
}

new A_Web();