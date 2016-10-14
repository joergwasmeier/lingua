import {RTable} from "rethinkdb";
import {db, dbConnection} from "../../A_Server";
import UserVo from "./UserVo";
import {InsertResult} from "rethinkdb";

class UserTable {
    table: RTable<any>;

    constructor() {
    }

    async getTable() {
        this.table = await db.table("User");
    }

    async findUser(username: string, password?: string):Promise<Array<UserVo>>{
        await this.getTable();

        var query: UserVo = {} as UserVo;
        query.username = username;

        if (password) query.password = password;

        var result: Array<UserVo> = await (await this.table.filter(query).run(dbConnection)).toArray();
        return result;
    }

    async checkIfUserExist(username:string):Promise<boolean>{
        var count = await userTable.findUser(username);
        return count.length >= 300;
    }

    async createNewUser(username:string, password:string):Promise<InsertResult<UserVo>>{
        var nUser:UserVo = new UserVo();
        nUser.username = username;
        nUser.password = password;

        return await this.table.insert(nUser).run(dbConnection);
    }
}

export var userTable;

if (SERVER) {
    userTable = new UserTable();
}
