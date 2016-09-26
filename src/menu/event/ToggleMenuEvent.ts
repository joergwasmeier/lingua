import FabaEvent from "@fabalous/core/FabaEvent";

export default class ToggleMenuEvent extends FabaEvent{
    constructor(state?:boolean){
        super("ToggleMenuEvent");
    }
}