import * as React from "react";
import {FlatButton, TextField} from "material-ui";
import {model} from "../../common/AppModel";
import LoginEvent from "../event/LoginEvent";
import {observer} from "mobx-react/index";
import SyntheticEvent = __React.SyntheticEvent;
var classNames = require('classnames');
require('./Login.less');

@observer
export default class Login extends React.Component<{},{}> {
    className:string = "Home";
    state = {
        open: false,
        loggedIn: false,
        progress: false,
        error: false
    };

    props:any;

    constructor(props) {
        super(props);
        this.loginBtHandler = this.loginBtHandler.bind(this);
        this.userNameChange = this.userNameChange.bind(this);
        this.passWordChange = this.passWordChange.bind(this);
    }

    checkUserPassLength():boolean{
      if (model.accountStore.login.userName.length <= 8) return false;
      if (model.accountStore.login.password.length <= 6) return false;

      return true;
    }

    userNameChange(e):void{
      model.accountStore.login.userName = e.currentTarget.value;
      e.preventDefault();
      this.forceUpdate();
    }

    passWordChange(e):void{
      model.accountStore.login.password = e.currentTarget.value;
      e.preventDefault();
      this.forceUpdate();
    }

    loginBtHandler():void {
        this.setState({error: false});

        if (!this.checkUserPassLength()){
          this.setState({error: true});
          return;
        }

        this.setState({progress: true});

        new LoginEvent().dispatch(()=> {
          this.props.history.push("/dashboard/");
        });
    }

    renderError(){
      if (!this.state.error) return null;

      return (
        <div className="error">
          This is an Error!
        </div>
      )
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
                      floatingLabelFixed={true}
                      inputStyle={{color:"rgba(255,255,255,0.8)"}}
                      value={model.accountStore.login.userName}
                      onChange={this.userNameChange}
                  />
 
                  <TextField
                      className="textField"
                      floatingLabelText="Password"
                      floatingLabelStyle={{color:"rgba(255,255,255,0.7)"}}
                      floatingLabelFixed={true}
                      inputStyle={{color:"rgba(255,255,255,0.8)"}}
                      type="password"
                      value={model.accountStore.login.password}
                      onChange={this.passWordChange}
                  />

                  {this.renderError()}

                  <FlatButton
                      className={classNames('loginButton', { progress: this.state.progress })}
                      backgroundColor="#a4c639"
                      onTouchTap={this.loginBtHandler}>
                      <p className="content">LOGIN</p>

                      <div className="spinner"></div>
                  </FlatButton>

                  <p className="signUp">
                    <a href="#/signup/">Don´t have an account? Sign UP!</a>
                  </p>
                  <p className="forgot">
                    <a href="#/forgotpass/">Forogt your password? Come to the Dark side!</a>
                  </p>
                </div>
            </div>
        )
    }
}

//