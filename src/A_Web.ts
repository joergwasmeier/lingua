import FabaWebApplication from "fabalous-core/runtimes/FabaWebApplication";
import {rend} from "./routes";

export default class A_Web extends FabaWebApplication {
    constructor() {
        super();

        rend();
    }
}

new A_Web();