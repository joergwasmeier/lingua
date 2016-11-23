import * as React from "react";
import {TextField} from "material-ui";
import LoginEvent from "../event/LoginEvent";
import {ChangeAccountInputEventType, default as ChangeAccountInputEvent} from "../event/ChangeAccountInputEvent";
import ButtonSpinner from "../../common/widgets/buttonSpinner/ButtonSpinner";
import {ILoginIm} from "../vo/LoginVo";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import Routes from "../../Routes";

interface ILoginProps {
    model: ILoginIm;
}

export default class Login extends FabaWebBaseComponent<ILoginProps> {
    constructor(props) {
        super(props);
        this.loginBtHandler = this.loginBtHandler.bind(this);
        this.userNameChange = this.userNameChange.bind(this);
        this.passWordChange = this.passWordChange.bind(this);
    }

    private userNameChange(e): void {
        new ChangeAccountInputEvent(ChangeAccountInputEventType.LOGIN_USERNAME, e.currentTarget.value).dispatch();
    }

    private passWordChange(e): void {
        new ChangeAccountInputEvent(ChangeAccountInputEventType.LOGIN_PASSWORD, e.currentTarget.value).dispatch();
    }

    private loginBtHandler(): void {
        new LoginEvent(this.props.model.userName, this.props.model.password, "/dashboard/").dispatch();
    }

    private renderError() {
        if (this.props.model.errorCode <= 0) return null;

        return (
            <div className="error">
                This is an Error!
            </div>
        );
    }

    render() {
        return (
            <div className="childContent">
                <TextField
                    className="textField"
                    floatingLabelText="Username"
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

                {this.renderError()}

                <ButtonSpinner label="Login" touchTapHandler={this.loginBtHandler}
                               progress={this.props.model.progress}/>

                <p className="linkSign">
                    {this.props.model.progress}
                    <a href={"#" + Routes.SIGN_UP.route}>Don´t have an account? Sign UP!</a>
                </p>

                <p className="linkSign">
                    <a href={"#" + Routes.FORGOT_PASS.route}>Forogt your password? Come to the Dark side!</a>
                </p>
            </div>
        );
    }
}