export interface ISignUpIm {
    readonly userName: string;
    readonly password: string;
    readonly errorCode: number;
}

export const SignUpIm: ISignUpIm = {
    userName: "",
    password: "",
    errorCode: 0
};

export class SignUpVo {
    data: ISignUpIm = SignUpIm;

    constructor(data: ISignUpIm) {
        this.data = data;
    }

    userNameIsValid(): boolean {
        if (this.data.userName.length >= 8) return true;

        return false;
    }

    passWordIsValid(): boolean {
        if (this.data.password.length >= 8) return true;

        return false;
    }

    public createMockData() {
        if (TEST) {
            // this.data.userName = "info@joergwasmeier.de";
            // this.data.password = "test12345";
        }
    }
}