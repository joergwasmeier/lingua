import FabaCommand from "@fabalous/core/FabaCommand";
import ChangeMediaQueryEvent from "../event/ChangeMediaQueryEvent";
import {store} from "../../common/commonImStore";

export default class ChangeMediaQueryCommand extends FabaCommand {
    async execute(event: ChangeMediaQueryEvent) {
        store.set("layout.landscape", event.landscape);
        store.set("layout.mobile", event.mobile);
    }
}