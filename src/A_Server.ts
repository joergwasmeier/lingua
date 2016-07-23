import FabaCore from "fabalous-core/core/FabaCore";
import FabaServer from "fabalous-core/runtimes/FabaServer";
import DashboardMediator from "./dashboard/DasboardMediator";
import AccountMediator from "./account/AccountMediator";

/**
 * Created by joerg on 07.04.2016.
 */

class A_Server extends FabaServer{
    constructor(){
        console.log("Start Server test");
        FabaCore.addMediator(new DashboardMediator());
        FabaCore.addMediator(new AccountMediator());
        super();
    }
}

new A_Server();