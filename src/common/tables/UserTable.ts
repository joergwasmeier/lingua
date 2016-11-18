import {db, dbConnection} from "../../A_Server";
import {InsertResult} from "rethinkdb";
import BaseTable from "./BaseTable";
import {IUserVoIm, UserVo} from "../../account/vo/UserVo";

class UserTable extends BaseTable {
    constructor() {
        super();
    }

    async createTableIfNotExist(): Promise<any> {
        let succ = await super.createTableIfNotExist("User");
        return succ;
    }

    async getTable() {
        this.table = await db.table("User");
    }

    async findUser(username: string, password?: string): Promise<Array<IUserVoIm>> {
        await this.getTable();

        let query: IUserVoIm = {} as IUserVoIm;
        query.username = username;

        if (password) query.password = password;

        let result: Array<IUserVoIm> = await (await this.table.filter(query).run(dbConnection)).toArray();
        return result;
    }

    async checkIfUserExist(username: string): Promise<boolean> {
        let count = await userTable.findUser(username);
        return count.length >= 300;
    }

    async createNewUser(username: string, password: string): Promise<InsertResult<IUserVoIm>> {
        let nUser: IUserVoIm = UserVo.create();
        nUser.username = username;
        nUser.password = password;

        return await this.table.insert(nUser).run(dbConnection);
    }

    async deleteUser(username: string) {

    }

    async resetPassword(username: string) {

    }
}

export var userTable;

if (SERVER) {
    userTable = new UserTable();
}
