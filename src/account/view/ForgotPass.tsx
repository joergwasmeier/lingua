import * as React from "react";
import {FlatButton, TextField} from "material-ui";
import ForgotPassEvent from "../event/ForgotPassEvent";
import {ChangeAccountInputEventType, default as ChangeAccountInputEvent} from "../event/ChangeAccountInputEvent";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import {IForgotPassIm} from "../vo/ForgotPassVo";
import {loginStyle, linkStyle} from "./AccountStyles";
import ButtonSpinner from "../../common/widgets/buttonSpinner/ButtonSpinner";
import Routes from "../../Routes";

interface IForgotPass {
    model: IForgotPassIm;
}


export default class ForgotPass extends FabaWebBaseComponent<IForgotPass> {
    props: IForgotPass;

    constructor(props) {
        super(props);

        this.forgotPassBtHandler = this.forgotPassBtHandler.bind(this);
        this.userNameChange = this.userNameChange.bind(this);
    }

    private forgotPassBtHandler() {
        new ForgotPassEvent(this.props.model.userName).dispatch();
    }

    private userNameChange(e) {
        new ChangeAccountInputEvent(ChangeAccountInputEventType.FORGOT_USERNAME, e.currentTarget.value).dispatch();
    }

    render() {
        if (this.props.model.showErrorMessage) return this.renderError();
        if (this.props.model.showSuccessMessage) return this.renderSuccess();

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

                <ButtonSpinner label="Senden" touchTapHandler={this.forgotPassBtHandler}/>

                <p className={linkStyle}>
                    <a href={"#" + Routes.LOGIN.route}>WAIT!! I khnow it go back!</a>
                </p>

            </div>
        );
    }

    private renderSuccess() {
        return (
            <div className="success">
                <p>Wir haben dir ein neues Passwort zugesendet, bitte checke emails!</p>
            </div>
        );
    }

    private renderError() {
        return (
            <div className="error">
                <p>Wir konnten dein Passwort nicht zurücksetzen!</p>
            </div>
        )
    }
}