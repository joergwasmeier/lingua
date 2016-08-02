import FabaEvent from "fabalous-core/core/FabaEvent";

export default class ChangeLoginInputEvent extends FabaEvent{
  userName:string;
  passWord:string;

  constructor(userName:string, passWord:string){
    super("ChangeLoginInputEvent");

    this.userName = userName;
    this.passWord = passWord;
  }
}