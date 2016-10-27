import {db, dbConnection} from "../../A_Server";
import BaseTable from "./BaseTable";

class UserCourseProgressTable extends BaseTable{
    async createTableIfNotExist(): Promise<any> {
        var succ = await super.createTableIfNotExist("Course-User-Progress");
        return succ;
    }

    async getTable() {
        this.table = await db.table("Course-User-Progress");
    }


}

export var userCourseProgressTable;

if (SERVER) {
    userCourseProgressTable = new UserCourseProgressTable();
}
