import FabaValueObject from "fabalous-core/core/FabaValueObject";
import {observable} from "mobx/lib/mobx";

export default class SignUpVo extends FabaValueObject {

  @observable
  userName:string = "";

  @observable
  password:string = "";

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

  // @ifdef TEST
  public createMockData(){
    this.userName = "info@joergwasmeier.de";
    this.password = "test12345";
  }
  // @endif
}