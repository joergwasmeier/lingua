import {db, dbConnection} from "../../A_Server";
import {RTable} from "rethinkdb";
/**
 * Created by creativecode on 27.10.16.
 */

export default class BaseTable {
    table: RTable<any>;

    constructor() {

    }

    async createTableIfNotExist(tableName: string) {
        try {
            var tableList = await db.tableList().run(dbConnection);

            let found = false;

            for (var item of tableList) {
                if (item === tableName) found = true;
            }

            if (!found) {
                await db.tableCreate(tableName).run(dbConnection)
            }
        } catch (e) {
            console.error(e);
        }
    }
}