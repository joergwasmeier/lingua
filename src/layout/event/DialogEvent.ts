/**
 * Created by creativecode on 07.10.16.
 */

export default class DialogEvent{
    state:DialogEventState;
    content:any;

    constructor(state:DialogEventState, content?:any){
        this.state = state;
        this.content = content;
    }
}

export enum DialogEventState{
    SHOW,
    HIDE
}