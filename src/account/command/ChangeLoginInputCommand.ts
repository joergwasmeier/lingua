import FabaCommand from "fabalous-core/core/FabaCommand";
import {model} from "./../../common/AppModel";
import ChangeLoginInputEvent from "../event/ChangeLoginInputEvent";
import {renderRoutes} from "../../common/routes";
import AccountStore from "../AccountStore";
import LoginVo from "../vo/LoginVo";

export default class ChangeLoginInputCommand extends FabaCommand {
    execute(event:ChangeLoginInputEvent) {

        // ImmutableJS
        var immu:LoginVo = model.accountStore.login
          .set("errorCode", 0)
          .set("userName", event.userName)
          .set("password", event.passWord) as LoginVo;

        var mod:AccountStore = model.accountStore.set("login", immu) as AccountStore;

        model.accountStore = mod;

        renderRoutes();
    }
}