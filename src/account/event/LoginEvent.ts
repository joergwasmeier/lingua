
import FabaEvent from "@fabalous/core/FabaEvent";
export default class LoginEvent extends FabaEvent{

  username:string;
  password:string;

  loginLocation:string;

  status:LoginEventStatus;
  sessionId:string;

  constructor(username:string, password:string, loginLocation?:string){
    super("LoginEvent");

    this.username = username;
    this.password = password;

    this.loginLocation = loginLocation;
  }

  checkUserPassLength():boolean{
    if (this.username.length <= 2) return false;
    if (this.password.length <= 2) return false;

    return true;
  }
}

function dontSend(){
  console.log("dontSend");
}

export enum LoginEventStatus{
  LOGGED_IN,
  ERROR
}