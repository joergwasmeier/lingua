import GetMenuDataEvent from "../event/GetMenuDataEvent";
import FabaCommand from "@fabalous/core/FabaCommand";
import {menuStore} from "../MenuStore";

/**
 * Created by creativecode on 11.04.16.
 */

export default class ToggleMenuCommand extends FabaCommand {
    execute(event: GetMenuDataEvent) {
        menuStore.menuOpen = !menuStore.menuOpen;
    }
}