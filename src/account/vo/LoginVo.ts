import FabaValueObject from "fabalous-core/core/FabaValueObject";

export default class LoginVo extends FabaValueObject {

  userName:string = "";
  password:string = "";

  constructor(){
    super();
    
  }

  // @ifdef TEST
  public createMockData(){

  }
  // @endif

}