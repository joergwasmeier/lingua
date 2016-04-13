import * as React from 'react';
import * as ReactDOM from 'react-dom';

import MouseEvent = __React.MouseEvent;
import SyntheticEvent = __React.SyntheticEvent;

import {CircularProgress, Toggle, TextField, Paper, FlatButton} from 'material-ui';

//System.import("./Login.less");
require("./Login.less");
interface IRouter {
  replaceWith(path: string);
}

interface IRouterContext {
  router: IRouter;
}

import { browserHistory } from 'react-router'

export default class Login extends React.Component<{},{}> {
  className:string = "Login";

  context: IRouterContext;


  constructor() {
    super();
  }

  showLogin(){
    console.log("SHOW LOGIN");
    //this.context.router.replaceWith("/dashboard/");
    console.log(browserHistory);
    //browserHistory.push('/dashboard/')
    var stateObj = { foo: "bar" };
   // history.pushState(stateObj, "page 2", "/#/dashboard");
    location.assign("/#/dashboard/");

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
          <FlatButton label="LOGIN" onTouchTap={this.showLogin}/>
        </div>
      </div>
    )
  }

}