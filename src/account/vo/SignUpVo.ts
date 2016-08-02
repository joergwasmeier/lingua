import FabaValueObject from "fabalous-core/core/FabaValueObject";

export default class SignUpVo extends FabaValueObject {

  userName:string = "";
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

  public createMockData(){
    if(TEST){
      this.userName = "info@joergwasmeier.de";
      this.password = "test12345";
    }
  }
}