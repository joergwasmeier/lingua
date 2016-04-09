import * as React from 'react';
import * as ReactDOM from 'react-dom';

import MouseEvent = __React.MouseEvent;
import SyntheticEvent = __React.SyntheticEvent;

import {CircularProgress, Toggle, TextField, Paper, FlatButton} from 'material-ui';

System.import("./Login.less");

export default class Login extends React.Component<{},{}> {
  className:string = "Login";

  constructor(){
    super();
  }

  render() {
    return (
      <div className={`center ${this.className}`}>
        <Paper className="loginCard">
          <Paper className="title" zDepth={0}>
            <p> </p>
          </Paper>

          <div className="content">

            <TextField className="textField"
                       floatingLabelText="Username"
                       />

            <TextField className="textField"
                       floatingLabelText="Password"
                       type="password"

                       />

            <Toggle className="autoLogin"

                    label="Auto login?!" />

            <FlatButton label={this.className}/>
          </div>

        </Paper>
      </div>
    )
  }
  
}