import * as React from "react";
import {FlatButton, TextField} from "material-ui";
import {observer} from "mobx-react/index";
import AccountStore from "../AccountStore";
import SignUpVo from "../vo/SignUpVo";
import SignUpEvent from "../event/SignUpEvent";
require('./SignUp.less');

interface ISignUpProps{
  model:AccountStore;
  history:any;
}

@observer
export default class SignUp extends React.Component<{},{}> {
  className:string = "SignUp";
  props:ISignUpProps;
  vo:SignUpVo;

  constructor(props) {
    super(props);
    this.vo = this.props.model.signUp;

    this.signUpBtHandler = this.signUpBtHandler.bind(this);
    this.userNameChange = this.userNameChange.bind(this);
  }

  userNameChange(e):void{
    this.vo.userName = e.currentTarget.value;
  }

  passWordChange(e):void{
    this.vo.password = e.currentTarget.value;
  }

  signUpBtHandler():void{
    new SignUpEvent(this.vo.userName, this.vo.password).dispatch();
  }

  render() {
    return (
      <div className={`center ${this.className}`}>
        <div className="content">
          <p className="header">LINGUA</p>

          <TextField
            className="textField"
            floatingLabelText="E-Mailsdfsf"
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

          <FlatButton
            className="signUpButton"
            backgroundColor="#a4c639"
            onTouchTap={this.signUpBtHandler}>
            <p className="content">REGISTER</p>

            <div className="spinner"></div>
          </FlatButton>

          <p className="signUp">
           <a href="#/login/">WAIT!! I have a account go back!</a>
          </p>
        </div>
      </div>
    )
  }
}