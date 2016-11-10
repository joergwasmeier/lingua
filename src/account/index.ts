import AccountMediator from "./AccountMediator";
import InitAccountEvent from "./event/InitAccountEvent";
import {accountImStore, IAccountImStore} from "./AccountImStore";

module.exports = {
    mediator: AccountMediator,
    initEvent: InitAccountEvent
};


let baoba = require("baobab");
let tree = new baoba(accountImStore);

tree.on("update", (e) => {
    let h = e.data.currentData as IAccountImStore;
    let t = JSON.stringify(h);
});

tree.set(["login", "password"], "monde");