import FabaValueObject from "fabalous-core/core/FabaValueObject";
import {observable} from "mobx/lib/mobx";

export default class LoginVo extends FabaValueObject {

  @observable
  userName:string = "";

  @observable
  password:string = "";

  constructor(){
    super();
  }

  // @ifdef TEST
  public createMockData(){

  }
  // @endif

}