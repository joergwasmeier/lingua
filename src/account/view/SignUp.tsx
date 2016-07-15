import * as React from "react";
import {FlatButton, TextField} from "material-ui";
import {AppModel} from "../../common/AppModel";

var classNames = require('classnames');
require('./SignUp.less');

export default class SignUp extends React.Component<{},{}> {
  className:string = "Home";

  state = {
    error: false
  };

  props:any;

  constructor(props) {
    super(props);
  }

  componentWillMount():void {
    AppModel.getInstance().addChangeListener(() => this.forceUpdate());
  }

  componentWillUnmount():void {
    AppModel.getInstance().removeChangeListener(() => this.forceUpdate());
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
          />

          <TextField
            className="textField"
            floatingLabelText="Password"
            floatingLabelStyle={{color:"rgba(255,255,255,0.7)"}}
            inputStyle={{color:"rgba(255,255,255,0.8)"}}
            type="password"
          />

          <FlatButton
            className="loginBt"
            backgroundColor="#a4c639">
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