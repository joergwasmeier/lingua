import FabaCommand from "@fabalous/core/FabaCommand";
import ChangeRouteEvent from "../event/ChangeRouteEvent";
import {IStore} from "../../common/commonImStore";

export default class ChangeRouteCommand extends FabaCommand<IStore> {
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