import FabaCommand from "fabalous-core/core/FabaCommand";
import ChangeLoginInputEvent, {ChangeLoginInputEventTypes} from "../event/ChangeLoginInputEvent";
import {model} from "../../common/AppModel";

export default class ChangeLoginInputCommand extends FabaCommand {
    execute(event:ChangeLoginInputEvent) {
        switch (event.type){
            case ChangeLoginInputEventTypes.USERNAME:
                model.accountStore.login.userName = event.value;
                break;

            case ChangeLoginInputEventTypes.PASSWORD:
                model.accountStore.login.password = event.value;
                break;
        }
    }

}