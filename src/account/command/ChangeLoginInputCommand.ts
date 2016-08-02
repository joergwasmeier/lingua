import FabaCommand from "fabalous-core/core/FabaCommand";
import {model} from "./../../common/AppModel";
import ChangeLoginInputEvent from "../event/ChangeLoginInputEvent";
import {renderRoutes} from "../../common/routes";

export default class ChangeLoginInputCommand extends FabaCommand {
    execute(event:ChangeLoginInputEvent) {

        // ImmutableJS
        model.accountStore.login.password = event.passWord;
        model.accountStore.login.userName = event.userName;

        model.accountStore.login.errorCode = 0;

        console.log(model.accountStore.login);

        renderRoutes();
    }
}