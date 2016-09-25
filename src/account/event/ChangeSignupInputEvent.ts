import FabaEvent from "@fabalous/core/FabaEvent";

export default class ChangeSignupInputEvent extends FabaEvent{
    type:ChangeSignupInputEventTypes;
    value:string;

    constructor(type:ChangeSignupInputEventTypes, value:string){
        super("ChangeSignupInputEvent");
        this.type = type;
        this.value = value;
    }
}

export enum ChangeSignupInputEventTypes{
    USERNAME,
    PASSWORD
}