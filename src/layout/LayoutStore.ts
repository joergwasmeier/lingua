import FabaModel from "@fabalous/core/FabaModel";
import {observable} from "mobx";

export default class LayoutStore {

    @observable
    showPopUp:boolean = false;

    @observable
    landscape:boolean;

    @observable
    mobile:boolean = true;

    showPopUpTimeStamp:number;
}

export var layoutStore:LayoutStore = FabaModel.getStore('layoutStore', LayoutStore);