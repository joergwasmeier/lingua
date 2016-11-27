import ShopMediator from "./ShopMediator";
import InitShopEvent from "./event/InitShopEvent";
import {shopImStore} from "./ShopStore";
import {store} from "../common/commonImStore";

module.exports = {
    mediator: ShopMediator,
    initEvent: InitShopEvent
};