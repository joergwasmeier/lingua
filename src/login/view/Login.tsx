import * as React from 'react';
import * as ReactDOM from 'react-dom';

import MouseEvent = __React.MouseEvent;
import SyntheticEvent = __React.SyntheticEvent;

import {CircularProgress, Toggle, TextField, Paper, FlatButton} from 'material-ui';
require("./Login.less");

export default class Login extends React.Component<{},{}> {
  className:string = "Login";

  props:any = {
    history:History
  };

  constructor() {
    super();
  }

  showLogin(){
    this.props.history.push("/dashboard/");
  }

  render() {
    return (
      <div className={`center ${this.className}`}>
        <div className="demo">
          <div className="pic1">
            Hier ist dann demo Bild 1.1
          </div>
          <div className="pic1">
            Hier ist dann demo Bild 2
          </div>
          <div className="pic1">
            Hier ist dann demo Bild 3
          </div>
        </div>
        <div className="signUp">
          <FlatButton label="SIGN UP"/>
          <FlatButton label="LOGIN" onTouchTap={(e) => this.showLogin()}/>
        </div>
      </div>
    )
  }

}