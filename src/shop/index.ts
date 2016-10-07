import ShopMediator from "./ShopMediator";
import InitShopEvent from "./event/InitShopEvent";
import FabaCore from "@fabalous/core/FabaCore";
declare var module;


module.hot.dispose(function(){
    var cls = require('./ShopMediator').default;
    FabaCore.mediators = [];
    FabaCore.mediators.push({
        cls:cls,
        mediator:new cls
    });
});


module.exports = {
    mediator: ShopMediator,
    initEvent: InitShopEvent
};