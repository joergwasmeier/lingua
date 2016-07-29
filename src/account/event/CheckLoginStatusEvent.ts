import FabaEvent from "fabalous-core/core/FabaEvent";

export default class CheckLoginStatusEvent extends FabaEvent{
    loggedIn:boolean;
    
    constructor(){
        super("CheckLoginStatusEvent");
    }
}