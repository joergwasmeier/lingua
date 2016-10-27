import SignUpEvent from "../event/SignUpEvent";
import FabaSerivce from "@fabalous/core/FabaService";
import LoginEvent from "../event/LoginEvent";
import {userTable} from "../../common/tables/UserTable";

export default class SignUpService extends FabaSerivce {

    async execute(event: SignUpEvent) {
        if (!event.checkUserData()) {
            return this.sendErrorEvent(event, "error");
        }

        let userExist: boolean = await userTable.checkIfUserExist(event.username);
        if (userExist) return this.sendErrorEvent(event,"User exist");

        let insertData = await userTable.createNewUser(event.username, event.password);
        if (insertData.inserted !== 1){
            return this.sendErrorEvent(event,insertData.warnings);
        }

        // Login?
        let login = await new LoginEvent(event.username, event.password).dispatch();
        event.loginEvent = login;

        super.sendToClient(event);

        // Send Welcome Email



    }

    sendErrorEvent(event:SignUpEvent, error):void{
        event.error = error;
        super.sendToClient(event);
    }
}