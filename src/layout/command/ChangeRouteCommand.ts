import FabaCommand from "@fabalous/core/FabaCommand";
import ChangeRouteEvent from "../event/ChangeRouteEvent";
import {store} from "../../common/commonImStore";
import FabaCore from "@fabalous/core/FabaCore";

export default class ChangeRouteCommand extends FabaCommand {
    async execute(event: ChangeRouteEvent) {
        console.log("update");
    }

    async result(event: ChangeRouteEvent) {

    }

    timeout(event: ChangeRouteEvent) {
        console.log("Command timeout");
    }

    error(event: ChangeRouteEvent) {
        console.log("Command error");
    }

    offline(event: ChangeRouteEvent) {
        console.log("Command offline");
    }
}