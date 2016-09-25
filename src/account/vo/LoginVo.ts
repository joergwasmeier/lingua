import {observable} from "mobx/lib/mobx";

export default class LoginVo{

  @observable
  userName:string = "";

  @observable
  password:string = "";

  @observable
  errorCode:number = 0;

  @observable
  progress:boolean = false;

  @observable
  loggedIn:boolean = false;


  public createMockData(){
    if (TEST){

    }
  }
}