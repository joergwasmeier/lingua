import FabaValueObject from "fabalous-core/core/FabaValueObject";
import {observable} from "mobx/lib/mobx";

export default class SignUpVo extends FabaValueObject {

  @observable
  userName:string = "";

  @observable
  password:string = "";

  @observable
  error:boolean = false;


  constructor(){
    super();
  }

  userNameIsValid():boolean{
    if (this.userName.length >= 8) return true;

    return false;
  }

  passWordIsValid():boolean{
    if (this.password.length >= 8) return true;

    return false;
  }

  public createMockData(){
    if(TEST){
      this.userName = "info@joergwasmeier.de";
      this.password = "test12345";
    }
  }
}