import * as React from "react";
import {FlatButton, TextField} from "material-ui";
import AccountStore from "../AccountStore";
import ForgotPassVo from "../vo/ForgotPassVo";

var classNames = require('classnames');
require('./ForgotPass.less');

interface IForgotPass{
  model:AccountStore;
  history:any;
}

export default class ForgotPass extends React.Component<{},{}> {
  className:string = "SignUp";

  vo:ForgotPassVo;
  props:IForgotPass;

  constructor(props) {
    super(props);
    this.vo = this.props.model.forgotPass;
    this.forgotPassBtHandler = this.forgotPassBtHandler.bind(this);
  }

  forgotPassBtHandler(){

  }

  render() {
    return (
      <div className={`center ${this.className}`}>
        <div className="content">
          <p className="header">LINGUA</p>

          <TextField
            className="textField"
            floatingLabelText="E-Mail"
            floatingLabelStyle={{color:"rgba(255,255,255,0.8)"}}
            inputStyle={{color:"rgba(255,255,255,0.8)"}}
            value={this.vo.userName}
          />

          <FlatButton
            className="signUpButton"
            backgroundColor="#a4c639"
            onTouchTap={this.forgotPassBtHandler}>
            <p className="content">SENDEN</p>

            <div className="spinner"></div>
          </FlatButton>

          <p className="signUp">
            <a href="#/login/">WAIT!! I khnow it go back!</a>
          </p>
        </div>
      </div>
    )
  }
}