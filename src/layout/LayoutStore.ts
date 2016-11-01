import FabaModel from "@fabalous/core/FabaModel";
import {observable} from "mobx";

export default class LayoutStore {

    @observable
    showPopUp:boolean = false;

    landscape:boolean;
    mobile:boolean = true;

    showPopUpTimeStamp:number;
}

export var layoutStore:LayoutStore = FabaModel.getStore('layoutStore', LayoutStore);