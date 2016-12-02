import FabaCommand from "@fabalous/core/FabaCommand";
import ChangeMediaQueryEvent from "../event/ChangeMediaQueryEvent";
import {IStore} from "../../common/commonImStore";

export default class ChangeMediaQueryCommand extends FabaCommand<IStore> {
    async execute(event: ChangeMediaQueryEvent) {
        this.store.set("layout.landscape", event.landscape);
        this.store.set("layout.mobile", event.mobile);
    }
}