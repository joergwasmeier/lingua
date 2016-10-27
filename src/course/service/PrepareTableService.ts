import FabaSerivce from "@fabalous/core/FabaService";
import {db, dbConnection} from "../../A_Server";

export default class PrepareTablesService extends FabaSerivce{
    constructor() {
        super();
    }

    async execute(event:PrepareTablesService) {
        console.log("Course PrepareTablesService");

        this.createTableIfNotExist("Course");
        this.createTableIfNotExist("UserCourseProgress");
    }

    async createTableIfNotExist(tableName:string) {
        var tableList = await db.tableList().run(dbConnection);

        let found = false;

        for (var item of tableList) {
            if (item === tableName) found = true;
        }

        if (!found){
            await db.tableCreate(tableName).run(dbConnection)
        }

    }
}