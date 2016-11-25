import GetDashboardDataEvent from "../event/GetDashboardDataEvent";
import FabaSerivce from "@fabalous/core/FabaService";
import {RTable} from "rethinkdb";
import {table} from "rethinkdb";
import {db, dbConnection} from "../../A_Server";
import DashboardVo from "../vo/DashboardVo";
import InsertDashboardDataEvent from "../event/InsertDashboardDataEvent";

export default class InsertDashboardDataService extends FabaSerivce{

    table:RTable<any>;

    constructor() {
        super();
    }

    async getTable() : Promise<void>{
        this.table = await db.table("Dashboard");
    }
    
    async execute(event:InsertDashboardDataEvent) {
        await this.getTable();

        console.log(event.data);

        try {
            await this.table.insert(event.data).run(dbConnection);
        } catch(e){
            console.log(e);
        }

  }
  
}