import FabaWebApplication from "fabalous-core/runtimes/FabaWebApplication";
import {rend} from "./routes";

class A_Web extends FabaWebApplication {
    constructor() {
        super();

        console.log("start");
        
        rend();
    }
}

new A_Web();