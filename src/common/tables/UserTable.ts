import {db, dbConnection} from "../../A_Server";
import {InsertResult} from "rethinkdb";
import UserVo from "../../account/vo/UserVo";
import BaseTable from "./BaseTable";

class UserTable extends BaseTable{
   async createTableIfNotExist(): Promise<any> {
       var succ = await super.createTableIfNotExist("User");
       return succ;
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

    async deleteUser(username:string){

    }

    async resetPassword(username:string){

    }
}

export var userTable;

if (SERVER) {
    userTable = new UserTable();
}
