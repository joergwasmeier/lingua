import FabaCommand from "@fabalous/core/FabaCommand";
import PopUpEvent from "../event/PopUpEvent";
import {PopUpEventType} from "../event/PopUpEvent";
import {IStore} from "../../common/commonImStore";

export default class PopUpCommand extends FabaCommand<IStore> {
    async execute(event: PopUpEvent) : Promise<void> {
        switch (event.type){
            case PopUpEventType.SHOW:
                this.store.set("layout.showPopUpTimeStamp", Date.now());
                break;

            case PopUpEventType.HIDE:
                const diff = Date.now() - this.store.data.layout.showPopUpTimeStamp;

                if (diff < 1000){
                    setTimeout( ()=>{this.execute(event)}, 200);
                    return;
                }
                break;
        }
    }
}