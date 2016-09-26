import FabaSerivce from "@fabalous/core/FabaService";
import {db, dbConnection} from "../../A_Server";

export default class PrepareTablesService extends FabaSerivce{
    constructor() {
        super();
    }

    async execute(event:PrepareTablesService) {
        console.log("PrepareTablesService service");

        try {
            var tableList = await db.tableList().run(dbConnection);

            let found = false;

            for (var item of tableList) {
                if (item == "Dashboard") found = true;
            }

            if (!found){
                await db.tableCreate("Dashboard").run(dbConnection)
            }
        } catch (e){
            console.error(e);
        }
    }
}