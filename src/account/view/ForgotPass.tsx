import * as React from "react";
import {FlatButton, TextField} from "material-ui";
import {model} from "../../common/AppModel";

var classNames = require('classnames');
require('./ForgotPass.less');

export default class ForgotPass extends React.Component<{},{}> {
  className:string = "SignUp";

  state = {
    error: false
  };

  props:any;

  constructor(props) {
    super(props);
    this.forgotPassBtHandler = this.forgotPassBtHandler.bind(this);
  }

  componentWillMount():void {
    //model.addChangeListener(() => this.forceUpdate());
  }

  componentWillUnmount():void {
    //model.removeChangeListener(() => this.forceUpdate());
  }

  forgotPassBtHandler(){
    this.state.error = true;
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
            value={model.accountStore.signUp.userName}
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