import CourseVO from "../../course/vo/CourseVO";
/**
 * Created by creativecode on 26.09.16.
 */



export default class DashboardVo{
    id:string;
    userName:string;

    pointsToday:number;

    test:number;

    recentCourses:Array<CourseVO>;

    constructor(){
        this.test = 666;
    }

    getFullName(){
        return "jörg Wasmeier";
    }
}