/**
 * Created by creativecode on 30.06.16.
 */
import FabaValueObject from "fabalous-core/core/FabaValueObject";

export default class ProfileVo extends FabaValueObject {

  firstName:string;

  lastName:string;

  picture:string;

  learnPoints:number;

  constructor(){
    super();
  }

  fullName(){
    return this.firstName + " " + this.lastName;
  }

  // @ifdef TEST
  public createMockData():ProfileVo{
    this.firstName = "Jörg";
    this.lastName = "Wasmeier";

    this.picture = "img1.jpg";
    this.learnPoints =  100;
    return this;
  }
  // @endif
}