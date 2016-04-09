import FabaWebApplication from "fabalous-core/runtimes/FabaWebApplication";

class A_Web extends FabaWebApplication {
    constructor() {
        super();

        console.log("start");
    }
}

new A_Web();