import * as React from "react";
import {FlatButton, TextField} from "material-ui";
import {AppModel} from "../../common/AppModel";
import LoginEvent from "../event/LoginEvent";
import SyntheticEvent = __React.SyntheticEvent;
var classNames = require('classnames');
require('./Login.less');

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

    componentWillMount():void {
        AppModel.getInstance().addChangeListener(() => this.forceUpdate());
    }

    componentWillUnmount():void {
        AppModel.getInstance().removeChangeListener(() => this.forceUpdate());
    }

    checkUserPassLength():boolean{
      if (AppModel.getInstance().loginStore.userName.length <= 8) return false;
      if (AppModel.getInstance().loginStore.password.length <= 6) return false;

      return true;
    }

    userNameChange(e):void{
      AppModel.getInstance().loginStore.userName = e.currentTarget.value;
      e.preventDefault();
      this.forceUpdate();
    }

    passWordChange(e):void{
      AppModel.getInstance().loginStore.password = e.currentTarget.value;
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

        setTimeout(()=> {
           // this.props.history.push("/dashboard/");
        }, 2000);

        new LoginEvent().dispatch(()=> {
          //this.props.history.push("/dashboard/");
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
                      value={AppModel.getInstance().loginStore.userName}
                      onChange={this.userNameChange}
                  />
 
                  <TextField
                      className="textField"
                      floatingLabelText="Password"
                      floatingLabelStyle={{color:"rgba(255,255,255,0.7)"}}
                      floatingLabelFixed={true}
                      inputStyle={{color:"rgba(255,255,255,0.8)"}}
                      type="password"
                      value={AppModel.getInstance().loginStore.password}
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