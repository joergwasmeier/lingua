import FabaCommand from "@fabalous/core/FabaCommand";
import ChangeMediaQueryEvent from "../event/ChangeMediaQueryEvent";

export default class ChangeMediaQueryCommand extends FabaCommand {
    async execute(event: ChangeMediaQueryEvent) {
        this.store.set("layout.landscape", event.landscape);
        this.store.set("layout.mobile", event.mobile);
    }
}