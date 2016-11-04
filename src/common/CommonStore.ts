import FabaModel from "@fabalous/core/FabaModel";
import {observable} from "mobx";
/**
 * Created by creativecode on 21.07.16.
 */

export default class CommonStore {
    history: any;

    @observable
    child:any;

}
export var commonStore:CommonStore = FabaModel.getStore('commonStore', CommonStore);