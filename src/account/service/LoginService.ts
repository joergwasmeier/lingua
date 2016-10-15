import LoginEvent from "../event/LoginEvent";
import FabaSerivce from "@fabalous/core/FabaService";
import {LoginEventStatus} from "../event/LoginEvent";
import UserVo from "../vo/UserVo";
import {userTable} from "../vo/UserTable";

export default class LoginService extends FabaSerivce {
    async delay(seconds: number) {
        return new Promise((resolve,reject)=>{
            setTimeout(()=> {
                resolve();
            }, seconds * 1000);
        });
    }

    async execute(event: LoginEvent) {
        if (await this.errorCheck(event) === true) return;

        event.status = LoginEventStatus.LOGGED_IN;
        event.sessionId = "sid" + Math.random();

        console.log(event);
        return super.sendToClient(event);
    }

    private async errorCheck(event:LoginEvent):Promise<boolean>{
        if (!event.checkUserPassLength()) return this.sendError(event,LoginEventStatus.ERROR);

        var result:Array<UserVo> = await userTable.findUser(event.username, event.password);
        if (result.length === 1) return this.sendError(event,LoginEventStatus.ERROR);
        return false;
    }

    private sendError(event:LoginEvent, error:LoginEventStatus):boolean{
        event.password = event.username = "";
        event.status = error;

        console.log(event);

        super.sendToClient(event);
        return true;
    }
}