import * as React from "react";
import {FlatButton, TextField} from "material-ui";
import AccountStore from "../AccountStore";
import ForgotPassVo from "../vo/ForgotPassVo";
import {observer} from "mobx-react";
import ForgotPassEvent from "../event/ForgotPassEvent";

var classNames = require('classnames');
require('./ForgotPass.less');

interface IForgotPass {
    model: AccountStore;
}

@observer
export default class ForgotPass extends React.Component<{},{}> {
    className: string = "SignUp";

    vo: ForgotPassVo;
    props: IForgotPass;

    constructor(props) {
        super(props);
        this.vo = this.props.model.forgotPass;
        this.forgotPassBtHandler = this.forgotPassBtHandler.bind(this);
    }

    forgotPassBtHandler() {
        console.log("forgotPassBtHandler");
        new ForgotPassEvent("dsfdf").dispatch();
    }

    render() {
        if (this.vo.showErrorMessage) return this.renderError();
        if (this.vo.showSuccessMessage) return this.renderSuccess();

        return (
            <div className={`center ${this.className}`}>
                <div className="content">
                    <p className="header">LINGUA</p>

                    <TextField
                        className="email"
                        floatingLabelText="E-Mail"
                        floatingLabelStyle={{color:"rgba(255,255,255,0.8)"}}
                        inputStyle={{color:"rgba(255,255,255,0.8)"}}
                        value={this.vo.userName}
                    />

                    <FlatButton
                        className="button"
                        backgroundColor="#a4c639"
                        onTouchTap={this.forgotPassBtHandler}>
                        <p className="content">SENDEN 2</p>

                        <div className="spinner"></div>
                    </FlatButton>

                    <p className="signUp">
                        <a href="#/login/">WAIT!! I khnow it go back!</a>
                    </p>
                </div>
            </div>
        )
    }

    renderSuccess() {
        return(
            <div className="success">
                <p>Wir haben dir ein neues Passwort zugesendet, bitte checke emails!</p>
            </div>
        );
    }

    renderError() {
        return(
            <div className="error">
                <p>Wir konnten dein Passwort nicht zurücksetzen!</p>
            </div>
        )
    }
}