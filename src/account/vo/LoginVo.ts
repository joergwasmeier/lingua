export interface ILoginIm {
    userName: string;
    password: string;
    errorCode: number;
    progress: boolean;
    loggedIn: boolean;
}

export const LoginIm: ILoginIm = {
    userName: "",
    password: "",
    errorCode: 0,
    progress: false,
    loggedIn: false
};

export class LoginVo {
    data: ILoginIm = LoginIm;

    constructor(data: ILoginIm) {
        this.data = data;
    }
}