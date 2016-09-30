import GetDashboardDataEvent from "../event/GetDashboardDataEvent";
import FabaSerivce from "@fabalous/core/FabaService";
import {RTable} from "rethinkdb";
import {table} from "rethinkdb";
import {db, dbConnection} from "../../A_Server";
import DashboardVo from "../vo/DashboardVo";
import CourseVO from "../../course/vo/CourseVO";

export default class GetDashboardDataService extends FabaSerivce{

    table:RTable<any>;

    constructor() {
        super();
    }

    async getTable(){
        this.table = await db.table("Dashboard");
    }
    
    async execute(event:GetDashboardDataEvent) {
        console.log("execute");

        super.sendToClient(event);
        return;

        await this.getTable();
        // Check if table exist
        var query:DashboardVo = new DashboardVo();
        query.userName = "test";

        var result:Array<any>;
        
        try{
            result = await (await this.table.filter(query).run(dbConnection)).toArray();
        } catch (e){
            console.log(e);
        }


        if (result.length == 0){
            console.log("sendtoclient");
            super.sendToClient(event);
            return;
        }
        // check if user has any data




        event.data = result[0];

        event.data.recentCourses = new Array<CourseVO>();
        event.data.recentCourses.push(new CourseVO().createMocKData());
        event.data.recentCourses.push(new CourseVO().createMocKData());
        event.data.recentCourses.push(new CourseVO().createMocKData());
        event.data.recentCourses.push(new CourseVO().createMocKData());


        event.test = "result";
        super.sendToClient(event);
  }
  
}