import {observable} from "mobx/lib/mobx";
import FabaValueObject from "@fabalous/core/FabaValueObject";

export interface IForgotPassIm {
    userName: string;
    showSuccessMessage: string;
    showErrorMessage: number;
}

export const ForgotPassIm: IForgotPassIm = {
    userName: "",
    showSuccessMessage: null,
    showErrorMessage: 0
};

export default class ForgotPassVo {
    data: IForgotPassIm;

    constructor(data: IForgotPassIm) {
        this.data = data;
    }

    userNameIsValid(): boolean {
        if (this.data.userName.length >= 8) return true;

        return false;
    }

    public createMockData() {
        if (TEST) {
            this.data.userName = "info@joergwasmeier.de";
        }
    }
}