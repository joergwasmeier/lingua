import FabaModel from "@fabalous/core/FabaModel";
import {observable} from "mobx";
import {History} from "history";
/**
 * Created by creativecode on 21.07.16.
 */

export default class CommonStore {
    history: History;

    @observable
    child:any;

    appInit:boolean = false;
    oldPath: string = "old";

    activeModule: string;
    activeView: string;

}
export var commonStore:CommonStore = FabaModel.getStore('commonStore', CommonStore);