import {db, dbConnection} from "../../A_Server";
import BaseTable from "./BaseTable";

class CourseTable extends BaseTable{
    async createTableIfNotExist(): Promise<any> {
        var succ = await super.createTableIfNotExist("Course");
        return succ;
    }

    async getTable() {
        this.table = await db.table("Course");
    }
}

export var courseTable;

if (SERVER) {
    courseTable = new CourseTable();
}
