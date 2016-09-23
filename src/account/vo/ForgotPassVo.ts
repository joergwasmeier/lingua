import {observable} from "mobx/lib/mobx";
import FabaValueObject from "@fabalous/core/FabaValueObject";

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

  public createMockData(){
    if (TEST){
      this.userName = "info@joergwasmeier.de";
    }
  }
}