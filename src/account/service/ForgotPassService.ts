import FabaSerivce from "@fabalous/core/FabaService";
import ForgotPassEvent from "../event/ForgotPassEvent";
import {userTable} from "../vo/UserTable";
import UserVo from "../vo/UserVo";

export default class ForgotPassService extends FabaSerivce {
    async execute(event: ForgotPassEvent) {
        console.log("ForgotPassService");

        var result:Array<UserVo> = await userTable.findUser(event.username);

        super.sendToClient(event);
    }
}