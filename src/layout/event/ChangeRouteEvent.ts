import FabaEvent from "@fabalous/core/FabaEvent";
import {IRoutes} from "../../Routes";

export default class ChangeRouteEvent extends FabaEvent {
    route: IRoutes;

    constructor(route: IRoutes) {
        super("ChangeRouteEvent");

        this.route = route;
    }
}