import FabaEvent from "@fabalous/core/FabaEvent";

export default class SignUpEvent extends FabaEvent{

  username:string;
  password:string;

  constructor(username:string, password:string){
    super("SignUpEvent");

    this.username = username;
    this.password = password;
  }
}