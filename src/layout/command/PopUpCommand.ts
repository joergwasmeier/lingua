import FabaCommand from "@fabalous/core/FabaCommand";
import PopUpEvent from "../event/PopUpEvent";
import {PopUpEventType} from "../event/PopUpEvent";
import {store} from "../../common/commonImStore";

export default class PopUpCommand extends FabaCommand {
    async execute(event: PopUpEvent) {
        switch (event.type){
            case PopUpEventType.SHOW:
                store.set("layout.showPopUpTimeStamp", Date.now());
                break;

            case PopUpEventType.HIDE:
                let diff = Date.now() - store.appStore.layout.showPopUpTimeStamp;

                if (diff < 1000){
                    setTimeout( ()=>{this.execute(event)}, 200);
                    return;
                }


                break;
        }
    }
}