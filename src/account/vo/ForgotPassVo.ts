import FabaValueObject from "fabalous-core/core/FabaValueObject";

export default class ForgotPassVo extends FabaValueObject {

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