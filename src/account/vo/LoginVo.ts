import FabaValueObject from "fabalous-core/core/FabaValueObject";
import {observable} from "mobx/lib/mobx";

export default class LoginVo extends FabaValueObject {

  @observable
  userName:string = "";

  @observable
  password:string = "";

  errorCode:number = 0;

  @observable
  loggedIn:boolean = false;

  constructor(){
    super();
  }

  public createMockData(){
    if (TEST){

    }
  }
}