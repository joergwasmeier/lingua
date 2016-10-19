import FabaSerivce from "@fabalous/core/FabaService";
import ForgotPassEvent from "../event/ForgotPassEvent";
import {userTable} from "../vo/UserTable";
import UserVo from "../vo/UserVo";

export default class ForgotPassService extends FabaSerivce {
    async execute(event: ForgotPassEvent) {
        var result:Array<UserVo> = await userTable.findUser(event.username);
        console.log(result);
        super.sendToClient(event);
    }
}