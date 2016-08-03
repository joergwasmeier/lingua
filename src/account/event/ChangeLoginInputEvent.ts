import FabaEvent from "fabalous-core/core/FabaEvent";

export default class ChangeLoginInputEvent extends FabaEvent{
    type:ChangeLoginInputEventTypes;
    value:string;

    constructor(type:ChangeLoginInputEventTypes, value:string){
        super("ChangeLoginInputEvent");
        this.type = type;
        this.value = value;
    }
}

export enum ChangeLoginInputEventTypes{
    USERNAME,
    PASSWORD
}