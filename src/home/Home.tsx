import * as React from "react";
import {FlatButton} from "material-ui";

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