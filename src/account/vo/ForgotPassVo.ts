import FabaValueObject from "fabalous-core/core/FabaValueObject";
import {observable} from "mobx/lib/mobx";

export default class ForgotPassVo extends FabaValueObject {

  @observable
  userName:string = "";

  constructor(){
    super();
  }

  userNameIsValid():boolean{
    if (this.userName.length >= 8) return true;

    return false;
  }

  // @ifdef TEST
  public createMockData(){
    this.userName = "info@joergwasmeier.de";
  }
  // @endif

}