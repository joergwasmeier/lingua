import * as React from "react";
import {FlatButton, TextField} from "material-ui";
import SignUpEvent from "../event/SignUpEvent";
import ChangeAccountInputEvent from "../event/ChangeAccountInputEvent";
import {ChangeAccountInputEventType} from "../event/ChangeAccountInputEvent";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import {ISignUpIm} from "../vo/SignUpVo";
import {loginStyle, linkStyle} from "./AccountStyles";
import ButtonSpinner from "../../common/widgets/buttonSpinner/ButtonSpinner";
import Routes from "../../Routes";

interface ISignUpProps {
    model: ISignUpIm;
}

export default class SignUp extends FabaWebBaseComponent<ISignUpProps>{
    className: string = "Home";
    props: ISignUpProps;

    constructor(props) {
        super(props);

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
        new SignUpEvent(this.props.model.userName, this.props.model.password).dispatch();
    }

    render() {
        return (
            <div className={loginStyle}>
                <TextField
                    className="textField"
                    floatingLabelText="E-Mail"
                    floatingLabelStyle={{color:"rgba(255,255,255,0.8)"}}
                    inputStyle={{color:"rgba(255,255,255,0.8)"}}
                    value={this.props.model.userName}
                    onChange={this.userNameChange}
                />

                <TextField
                    className="textField"
                    floatingLabelText="Password"
                    floatingLabelStyle={{color:"rgba(255,255,255,0.7)"}}
                    inputStyle={{color:"rgba(255,255,255,0.8)"}}
                    type="password"
                    value={this.props.model.password}
                    onChange={this.passWordChange}
                />

                <ButtonSpinner label="Register" touchTapHandler={this.signUpBtHandler}/>

                <p className={linkStyle}>
                    <a href={"#" + Routes.LOGIN.route}>WAIT!! I have a account go back!</a>
                </p>
            </div>
        )
    }
}