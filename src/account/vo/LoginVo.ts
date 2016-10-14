import {observable} from "mobx/lib/mobx";

export default class LoginVo {

    @observable
    userName: string = "";

    @observable
    password: string = "";

    @observable
    errorCode: number = 0;

    @observable
    progress: boolean = false;

    @observable
    loggedIn: boolean = false;


    public createMockData() {
        if (TEST) {

        }
    }

    public showLoginProgress(){
        this.progress = true;
    }

    public showErrorMsg(errorCode: number) {
        this.errorCode = errorCode;
        this.progress = false;
        this.loggedIn = false;
    }
}