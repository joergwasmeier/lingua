import * as React from "react";
import {FlatButton, TextField} from "material-ui";
import LoginEvent from "../control/event/LoginEvent";
import {AppModel} from "../../common/AppModel";

var classNames = require('classnames');
require('./Login.less');

export default class Login extends React.Component<{},{}> {
    className:string = "Home";
    state = {
        open: false,
        loggedIn: false,
        progress: false
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

    loginBtHandler():void {
        console.log("loginBtHandler");

        this.setState({progress: true});

        setTimeout(()=> {
           // this.props.history.push("/dashboard/");
        }, 2000);

        new LoginEvent().dispatch(()=> {
          this.props.history.push("/dashboard/");
        });
    }

    render() {
        return (
            <div className={`center ${this.className}`}>
                <div className="content">
                  <p className="header">LINGUA</p>

                  <TextField
                      className="textField"
                      floatingLabelText="Username"
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
                      className="sdfsf"
                      backgroundColor="#a4c639"
                      onTouchTap={(e) => this.loginBtHandler()}>
                      <p className="content">LOGIN</p>

                      <div className="spinner"></div>
                  </FlatButton>

                  <p className="signUp">
                      Don´t have an account? Sign UP!
                  </p>
                </div>

            </div>
        )
    }
}

//className={classNames('loginButton', { progress: this.state.progress })}