import {db, dbConnection} from "../../A_Server";
import BaseTable from "./BaseTable";

class UserShopTable extends BaseTable{
    async createTableIfNotExist(): Promise<any> {
        var succ = await super.createTableIfNotExist("User-Shop");
        return succ;
    }

    async getTable() {
        this.table = await db.table("User-Shop");
    }


}

export var userShopTable;

if (SERVER) {
    userShopTable = new UserShopTable();
}
