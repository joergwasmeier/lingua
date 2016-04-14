import FabaCore from "fabalous-core/core/FabaCore";
require("babel-polyfill");

import FabaServer from "fabalous-core/runtimes/FabaServer";
import DashboardMediator from "./dashboard/control/DasboardMediator";
/**
 * Created by joerg on 07.04.2016.
 */

class A_Server extends FabaServer{
    constructor(){
        console.log("Start Server test");
        FabaCore.addMediator(new DashboardMediator());
        super();
    }
}

new A_Server();