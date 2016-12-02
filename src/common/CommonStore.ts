import FabaModel from "@fabalous/core/FabaModel";
import {store} from "./commonImStore";

export default class CommonStore {
    hot: boolean;
    store: store
}
export var commonStore:CommonStore = FabaModel.getStore('commonStore', CommonStore);