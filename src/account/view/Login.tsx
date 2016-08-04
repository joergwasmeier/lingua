import * as React from "react";
import {FlatButton, TextField} from "material-ui";
import LoginEvent from "../event/LoginEvent";
import {observer} from "mobx-react/index";
import ChangeLoginInputEvent, {ChangeLoginInputEventTypes} from "../event/ChangeLoginInputEvent";
import AccountStore from "../AccountStore";
import LoginVo from "../vo/LoginVo";
import SyntheticEvent = __React.SyntheticEvent;

var classNames = require('classnames');
require('./Login.less');

interface ILoginProps{
  model:AccountStore;
  history:any;
}

@observer
export default class Login extends React.Component<ILoginProps,{}> {
    className:string = "Home";
    vo:LoginVo;

    constructor(props) {
        super(props);
        this.vo = props.model.login;
        this.loginBtHandler = this.loginBtHandler.bind(this);
        this.userNameChange = this.userNameChange.bind(this);
        this.passWordChange = this.passWordChange.bind(this);
    }

    userNameChange(e):void{
      new ChangeLoginInputEvent(ChangeLoginInputEventTypes.USERNAME, e.currentTarget.value).dispatch();
    }

    passWordChange(e):void{
      new ChangeLoginInputEvent(ChangeLoginInputEventTypes.PASSWORD, e.currentTarget.value).dispatch();
    }

    loginBtHandler():void {
      new LoginEvent().dispatch(() =>{
          //this.props.history.push("/dashboard/");
      });
    }

    renderError(){
      if (!this.vo.errorCode <= 0) return null;

      return (
        <div className="error">
          This is an Error!
        </div>
      )
    }

    render() {
        return (
            <div className={`center ${this.className}`}>
                <div className="content">
                  <p className="header">LINGUA</p>

                  <TextField
                      className="textField"
                      floatingLabelText="Username"
                      floatingLabelStyle={{color:"rgba(255,255,255,0.8)"}}
                      inputStyle={{color:"rgba(255,255,255,0.8)"}}
                      value={this.vo.userName}
                      onChange={this.userNameChange}
                  />
 
                  <TextField
                      className="textField"
                      floatingLabelText="Password"
                      floatingLabelStyle={{color:"rgba(255,255,255,0.7)"}}
                      inputStyle={{color:"rgba(255,255,255,0.8)"}}
                      type="password"
                      value={this.vo.password}
                      onChange={this.passWordChange}
                  />

                  {this.renderError()}

                  <FlatButton
                      className={classNames('loginButton', { progress: this.vo.progress })}
                      backgroundColor="#a4c639"
                      onTouchTap={this.loginBtHandler}>
                      <p className="content">LOGIN</p>

                      <div className="spinner"></div>
                  </FlatButton>

                  <p className="signUp">
                    <a href="#/signup/">Don´t have an account? Sign UP!</a>
                  </p>
                  <p className="forgot">
                    <a href="#/forgotpass/">Forogt your password? Come to the Dark side!</a>
                  </p>
                </div>
            </div>
        )
    }
}