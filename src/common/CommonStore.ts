import FabaModel from "@fabalous/core/FabaModel";
import {History} from "~react-router~history";
/**
 * Created by creativecode on 21.07.16.
 */

export default class CommonStore {
    history: History;
}
export var commonStore:CommonStore = FabaModel.getStore('commonStore', CommonStore);