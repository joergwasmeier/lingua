import * as React from "react";
import {FlatButton, TextField} from "material-ui";
import {model} from "../../common/AppModel";
import {observer} from "mobx-react/index";
require('./SignUp.less');

@observer
export default class SignUp extends React.Component<{},{}> {
  className:string = "Home";

  constructor(props) {
    super(props);

    this.signUpBtHandler = this.signUpBtHandler.bind(this);
    this.userNameChange = this.userNameChange.bind(this);
  }

  userNameChange(e):void{
    model.accountStore.signUp.userName = e.currentTarget.value;
  }

  passWordChange(e):void{
    model.accountStore.signUp.password = e.currentTarget.value;
  }

  signUpBtHandler():void{
    if (!model.accountStore.signUp.userNameIsValid() ||
        !model.accountStore.signUp.passWordIsValid()){
      this.setState({error:true});
      return;
    }
  }

  render() {
    return (
      <div className={`center ${this.className}`}>
        <div className="content">
          <p className="header">LINGUA</p>

          <TextField
            className="textField"
            floatingLabelText="E-Mailsdfsf"
            floatingLabelStyle={{color:"rgba(255,255,255,0.8)"}}
            inputStyle={{color:"rgba(255,255,255,0.8)"}}
            value={model.accountStore.signUp.userName}
            onChange={this.userNameChange}
          />

          <TextField
            className="textField"
            floatingLabelText="Password"
            floatingLabelStyle={{color:"rgba(255,255,255,0.7)"}}
            inputStyle={{color:"rgba(255,255,255,0.8)"}}
            type="password"
            value={model.accountStore.signUp.password}
            onChange={this.passWordChange}

          />

          <FlatButton
            className="signUpButton"
            backgroundColor="#a4c639"
            onTouchTap={this.signUpBtHandler}>
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