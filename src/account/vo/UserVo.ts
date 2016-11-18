export interface IUserVoIm {
    id: string;
    username: string;
    password: string;
    lastLogin: Date;
    signedUp: Date;
    emailValid: boolean;
}

export const UserIm: IUserVoIm = {
    id: null,
    username: null,
    password: null,
    lastLogin: null,
    signedUp: null,
    emailValid: null
};

export class UserVo {
    static create() {
        return {
            id: null,
            username: null,
            password: null,
            lastLogin: null,
            signedUp: null,
            emailValid: null
        };
    }
}



