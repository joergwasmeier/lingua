import FabaSerivce from "@fabalous/core/FabaService";
import ForgotPassEvent from "../event/ForgotPassEvent";
import {userTable} from "../../common/tables/UserTable";
import {IUserVoIm} from "../vo/UserVo";

export default class ForgotPassService extends FabaSerivce {
    async execute(event: ForgotPassEvent) {
        let result: Array<IUserVoIm> = await userTable.findUser(event.username);
        super.sendToClient(event);
    }
}