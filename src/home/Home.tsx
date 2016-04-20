import * as React from "react";
import {FlatButton, TextField} from "material-ui";

require('./Home.less');

export default class Layout extends React.Component<{},{}> {
  className:string = "Home";
  state = {
    open: false,
    loggedIn:false
  };

  props:any;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`center ${this.className}`}>
        <div className="headerIcon">

          <p className="header">LINGUA</p>

          <TextField
            className="textField"
            floatingLabelText="Username"
          />

          <TextField
            className="textField"
            floatingLabelText="Password"
          />
        </div>



        <FlatButton className="loginButton">
          LOGIN
        </FlatButton>

        <p className="signUp">
          Don´t have an account? Sign UP!
        </p>

      </div>
    )
  }
}