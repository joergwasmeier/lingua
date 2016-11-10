export interface ILoginImVo {
    userName: string;
    password: string;
    errorCode: number;
    progress: boolean;
    loggedIn: boolean;
}

export const LoginImVo: ILoginImVo = {
    userName: "",
    password: "",
    errorCode: 0,
    progress: false,
    loggedIn: false
};

export class LoginDteVo {
    data: ILoginImVo = LoginImVo;

    constructor(data: ILoginImVo) {
        this.data = data;
    }
}