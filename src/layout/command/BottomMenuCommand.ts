import FabaCommand from "@fabalous/core/FabaCommand";
import BottomMenuEvent from "../event/BottomMenuEvent";
import {IStore} from "../../common/commonImStore";
import {BottomMenuEventType} from "../event/BottomMenuEvent";
import Routes from "../../Routes";

export default class BottomMenuCommand extends FabaCommand<IStore> {
    async execute(event: BottomMenuEvent) {
        switch (event.type) {
            case BottomMenuEventType.HOME:
                this.store.set("layout.bottomBarSelectedIndex", 0);
                window.location.assign("#" + Routes.DASBOARD.route);
                break;
            case BottomMenuEventType.COURSE:
                this.store.set("layout.bottomBarSelectedIndex", 1);
                window.location.assign("#" + Routes.DASBOARD.route);
                break;
            case BottomMenuEventType.SHOP:
                this.store.set("layout.bottomBarSelectedIndex", 2);
                window.location.assign("#" + Routes.STORE.route);
                break;
            case BottomMenuEventType.OTHER:
                this.store.set("layout.bottomBarSelectedIndex", 3);
                window.location.assign("#" + Routes.DASBOARD.route);
                break;

        }
    }

    async result(event: BottomMenuEvent) {

    }

    timeout(event: BottomMenuEvent) {
        console.log("Command timeout");
    }

    error(event: BottomMenuEvent) {
        console.log("Command error");
    }

    offline(event: BottomMenuEvent) {
        console.log("Command offline");
    }
}