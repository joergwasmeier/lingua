var Immutable = require('immutable');

const LoginVoRecord = Immutable.Record({
  userName : "",
  password : "",
  errorCode : 0,
  loggedIn : false,
  progress : false
});

export default class LoginVo extends LoginVoRecord {
  userName:string;
  password:string;

  errorCode:number;
  loggedIn:boolean;

  progress:boolean;

  constructor(props){
    super(props);
  }

  public createMockData(){
    if (TEST){

    }
  }
}