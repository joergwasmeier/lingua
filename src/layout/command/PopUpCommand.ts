import FabaCommand from "@fabalous/core/FabaCommand";
import PopUpEvent from "../event/PopUpEvent";
import {PopUpEventType} from "../event/PopUpEvent";
import {layoutStore} from "../LayoutStore";

export default class PopUpCommand extends FabaCommand {
    async execute(event: PopUpEvent) {
        switch (event.type){
            case PopUpEventType.SHOW:
                layoutStore.showPopUpTimeStamp = Date.now();

                break;

            case PopUpEventType.HIDE:
                var diff = Date.now() - layoutStore.showPopUpTimeStamp ;

                if (diff < 1000){
                    setTimeout( ()=>{this.execute(event)}, 200);
                    return;
                }


                break;
        }
    }
}