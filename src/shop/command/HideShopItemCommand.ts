import FabaCommand from "@fabalous/core/FabaCommand";
import Routes from "../../Routes";

export default class HideShopItemCommand extends FabaCommand {
    execute(event: HideShopItemCommand): any {
        window.location.assign("#" + Routes.STORE.route);
    }
}