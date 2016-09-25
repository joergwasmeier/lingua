
import FabaEvent from "@fabalous/core/FabaEvent";
export default class CheckLoginStatusEvent extends FabaEvent{
    loggedIn:boolean;
    
    constructor(){
        super("CheckLoginStatusEvent");
    }
}