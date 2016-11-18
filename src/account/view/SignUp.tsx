import * as React from "react";
import {FlatButton, TextField} from "material-ui";
import SignUpEvent from "../event/SignUpEvent";
import ChangeAccountInputEvent from "../event/ChangeAccountInputEvent";
import {ChangeAccountInputEventType} from "../event/ChangeAccountInputEvent";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";

interface ISignUpProps {
    model: any;
}

export default class SignUp extends FabaWebBaseComponent<ISignUpProps>{
    className: string = "Home";
    props: ISignUpProps;
    vo: any;


    constructor(props) {
        super(props);
        this.vo = this.props.model.signUp;

        this.signUpBtHandler = this.signUpBtHandler.bind(this);
        this.userNameChange = this.userNameChange.bind(this);
        this.passWordChange = this.passWordChange.bind(this);
    }

    private userNameChange(e): void {
        new ChangeAccountInputEvent(ChangeAccountInputEventType.SIGNUP_USERNAME, e.currentTarget.value).dispatch();
    }

    private passWordChange(e): void {
        new ChangeAccountInputEvent(ChangeAccountInputEventType.SIGNUP_PASSWORD, e.currentTarget.value).dispatch();
    }

    private signUpBtHandler(): void {
        new SignUpEvent(this.vo.userName, this.vo.password).dispatch();
    }

    render() {
        return (
            <div className="childContent2">
                <TextField
                    className="textField"
                    floatingLabelText="E-Mail"
                    floatingLabelStyle={{color:"rgba(255,255,255,0.8)"}}
                    inputStyle={{color:"rgba(255,255,255,0.8)"}}
                    value={this.vo.userName}
                    onChange={this.userNameChange}
                />

                <TextField
                    className="textField"
                    floatingLabelText="Password"
                    floatingLabelStyle={{color:"rgba(255,255,255,0.7)"}}
                    inputStyle={{color:"rgba(255,255,255,0.8)"}}
                    type="password"
                    value={this.vo.password}
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
        )
    }
}