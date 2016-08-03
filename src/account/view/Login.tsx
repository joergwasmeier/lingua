import * as React from "react";
import {FlatButton, TextField} from "material-ui";
import LoginEvent from "../event/LoginEvent";
import ChangeLoginInputEvent from "../event/ChangeLoginInputEvent";
import AccountStore from "../AccountStore";
import SyntheticEvent = __React.SyntheticEvent;

var classNames = require('classnames');
var shallowCompare = require('react-addons-shallow-compare');

require('./Login.less');

interface ILoginProps{
  model:AccountStore;
  history:any;
}

export default class Login extends React.Component<{},{}> {
    className:string = "Home";

    props:ILoginProps;

    constructor(props) {
        super(props);

        this.loginBtHandler = this.loginBtHandler.bind(this);
        this.userNameChange = this.userNameChange.bind(this);
        this.passWordChange = this.passWordChange.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log(nextProps.model);
      console.log(this.props.model);
      return shallowCompare(this, nextProps, nextState)
    }

    userNameChange(e):void{
      new ChangeLoginInputEvent(e.currentTarget.value, "").dispatch();
    }

    passWordChange(e):void{
      new ChangeLoginInputEvent("", e.currentTarget.value).dispatch();
    }

    loginBtHandler():void {
      new LoginEvent().dispatch((event:LoginEvent) =>{
        if (this.props.model.login.errorCode == 0){
          this.props.history.push("/dashboard/");
        }
      });
    }

    renderError(){
      if (this.props.model.login.errorCode == 0) return null;

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
                      floatingLabelText="sdfsddsf"
                      floatingLabelStyle={{color:"rgba(255,255,255,0.8)"}}
                      inputStyle={{color:"rgba(255,255,255,0.8)"}}
                      value={this.props.model.login.userName}
                      onChange={this.userNameChange}
                  />
 
                  <TextField
                      className="textField"
                      floatingLabelText="sdfsdfsdf"
                      floatingLabelStyle={{color:"rgba(255,255,255,0.7)"}}
                      inputStyle={{color:"rgba(255,255,255,0.8)"}}
                      value={this.props.model.login.password}
                      onChange={this.passWordChange}
                  />

                  {this.renderError()}

                  <FlatButton
                      className={classNames('loginButton', { progress: this.props.model.login.progress })}
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