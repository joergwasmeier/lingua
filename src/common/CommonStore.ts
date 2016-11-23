import FabaModel from "@fabalous/core/FabaModel";

export default class CommonStore {
    hot: boolean;
}
export var commonStore:CommonStore = FabaModel.getStore('commonStore', CommonStore);