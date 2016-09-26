import {observable} from "mobx";
/**
 * Created by creativecode on 26.09.16.
 */



export default class DashboardVo{
    id:string;
    userName:string;

    @observable
    pointsToday:number;

    @observable
    test:number;

    constructor(){
        this.test = 666;
    }

    getFullName(){
        return "jörg Wasmeier";
    }
}