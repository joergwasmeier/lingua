import AccountMediator from "./account/AccountMediator";
import DashboardMediator from "./dashboard/DasboardMediator";
import FabaServer from "@fabalous/core/FabaServer";
import FabaCore from "@fabalous/core/FabaCore";

require("babel-polyfill");

/**
 * Created by joerg on 07.04.2016.
 */

class A_Server extends FabaServer{
    constructor(){
        console.log("Server start at: " + new Date(Date.now()).toLocaleString());
        FabaCore.addMediator(DashboardMediator);
        FabaCore.addMediator(AccountMediator);
        super();
    }
}

new A_Server();