import FabaWebApplication from "fabalous-core/runtimes/FabaWebApplication";
import {rend} from "./routes";

System.import("./reset.less");

export default class A_Web extends FabaWebApplication {
    constructor() {
        super();

        rend();
    }
}

new A_Web();