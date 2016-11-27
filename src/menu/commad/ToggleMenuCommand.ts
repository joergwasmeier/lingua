import GetMenuDataEvent from "../event/GetMenuDataEvent";
import FabaCommand from "@fabalous/core/FabaCommand";
import {store} from "../../common/commonImStore";

/**
 * Created by creativecode on 11.04.16.
 */

export default class ToggleMenuCommand extends FabaCommand {
    execute(event: GetMenuDataEvent) {
        this.store.set("menuOpen", !this.store.appStore.menuOpen);
    }
}