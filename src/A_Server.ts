import FabaCore from "fabalous-core/core/FabaCore";
import FabaServer from "fabalous-core/runtimes/FabaServer";
import AccountMediator from "./account/AccountMediator";

require("babel-polyfill");

/**
 * Created by joerg on 07.04.2016.
 */

class A_Server extends FabaServer{
    constructor(){
        console.log("A_Server");
        //FabaCore.addMediator(DashboardMediator);
        FabaCore.addMediator(AccountMediator);
        super();
    }
}

new A_Server();