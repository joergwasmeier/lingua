import AccountMediator from "./AccountMediator";
import InitAccountEvent from "./event/InitAccountEvent";

module.exports = {
    mediator: AccountMediator,
    initEvent: InitAccountEvent,
};