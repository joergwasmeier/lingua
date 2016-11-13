import AccountMediator from "./AccountMediator";
import InitAccountEvent from "./event/InitAccountEvent";
import {store} from "../common/commonImStore";
import {accountImStore} from "./AccountImStore";

store.set('account', accountImStore);

module.exports = {
    mediator: AccountMediator,
    initEvent: InitAccountEvent,
};