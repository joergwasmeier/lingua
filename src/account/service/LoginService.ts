import LoginEvent from "../event/LoginEvent";
import FabaSerivce from "@fabalous/core/FabaService";
import {LoginEventStatus} from "../event/LoginEvent";
import {userTable} from "../../common/tables/UserTable";
import {IUserVoIm} from "../vo/UserVo";

export default class LoginService extends FabaSerivce {
    async delay(seconds: number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, seconds * 1000);
        });
    }

    async execute(event: LoginEvent) {
        console.log("execute");

        if (await this.errorCheck(event) === true) return;

        event.status = LoginEventStatus.LOGGED_IN;
        event.sessionId = "sid" + Math.random();

        return super.sendToClient(event);
    }

    private async errorCheck(event: LoginEvent): Promise<boolean> {
        if (!event.checkUserPassLength()) return this.sendError(event, LoginEventStatus.ERROR);

        let result: Array<IUserVoIm> = await userTable.findUser(event.username, event.password);
        if (result.length === 1) return this.sendError(event, LoginEventStatus.ERROR);
        return false;
    }

    private sendError(event: LoginEvent, error: LoginEventStatus): boolean {
        event.password = event.username = "";
        event.status = error;

        super.sendToClient(event);
        return true;
    }
}