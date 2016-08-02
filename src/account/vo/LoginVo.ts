import FabaValueObject from "fabalous-core/core/FabaValueObject";

export default class LoginVo extends FabaValueObject {


  userName:string = "";
  password:string = "";

  errorCode:number = 0;
  loggedIn:boolean = false;

  progress:boolean = false;

  constructor(){
    super();
  }

  public createMockData(){
    if (TEST){

    }
  }
}