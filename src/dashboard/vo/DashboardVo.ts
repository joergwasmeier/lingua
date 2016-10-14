import {observable} from "mobx";
import CourseVO from "../../course/vo/CourseVO";
/**
 * Created by creativecode on 26.09.16.
 */



export default class DashboardVo{
    id:string;
    userName:string;

    @observable
    loading:boolean;

    @observable
    pointsToday:number;

    @observable
    test:number;

    @observable
    recentCourses:Array<CourseVO>;

    constructor(){
        this.test = 666;
    }

    getFullName(){
        return "jörg Wasmeier";
    }
}