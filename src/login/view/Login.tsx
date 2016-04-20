import * as React from "react";
import {FlatButton, TextField} from "material-ui";
import LoginEvent from "../control/event/LoginEvent";
import {AppModel_in} from "../../AppModel";

require('./Login.less');

export default class Login extends React.Component<{},{}> {
  className:string = "Home";
  state = {
    open: false,
    loggedIn:false
  };

  props:any;

  constructor(props) {
    super(props);
  }

  componentWillMount():void {
    AppModel_in.getInstance().addChangeListener( () => this.forceUpdate());
  }

  componentWillUnmount():void {
    AppModel_in.getInstance().removeChangeListener( () => this.forceUpdate());
  }

  loginBtHandler():void{
    console.log("loginBtHandler");
    this.props.history.push("/dashboard/");

    new LoginEvent().dispatch(()=>{

    });
  }

  render() {
    return (
      <div className={`center ${this.className}`}>

        <p className="header">LINGUA</p>

        <TextField
          className="textField"
          floatingLabelText="Username"
          floatingLabelStyle={{color:"rgba(255,255,255,0.8)"}}
          inputStyle={{color:"rgba(255,255,255,0.8)"}}
        />

        <TextField
          className="textField"
          floatingLabelText="Password"
          floatingLabelStyle={{color:"rgba(255,255,255,0.7)"}}
          inputStyle={{color:"rgba(255,255,255,0.8)"}}
          type="password"
        />

        <FlatButton className="loginButton" onTouchTap={(e) => this.loginBtHandler()}>
          LOGIN
        </FlatButton>

        <p className="signUp">
          Don´t have an account? Sign UP!
        </p>

      </div>
    )
  }
}