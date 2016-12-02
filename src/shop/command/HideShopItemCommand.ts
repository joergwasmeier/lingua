import FabaCommand from "@fabalous/core/FabaCommand";
import Routes from "../../Routes";
import {IStore} from "../../common/commonImStore";

export default class HideShopItemCommand extends FabaCommand<IStore> {
    execute(event: HideShopItemCommand): any {
        window.location.assign("#" + Routes.STORE.route);
    }
}