import * as React from "react";
import {FlatButton, TextField} from "material-ui";
import LoginEvent from "../event/LoginEvent";
import {observer} from "mobx-react/index";
import LoginVo from "../vo/LoginVo";
import AccountStore from "../AccountStore";
import {ChangeAccountInputEventType, default as ChangeAccountInputEvent} from "../event/ChangeAccountInputEvent";
import {Routes} from "../../A_Web";
import ButtonSpinner from "../../common/widgets/buttonSpinner/ButtonSpinner";

var classNames = require('classnames');

interface ILoginProps {
    model: AccountStore;
}

@observer
export default class Login extends React.Component<ILoginProps,{}> {
    vo: LoginVo;

    constructor(props) {
        super(props);
        this.vo = props.model.login;
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
        new LoginEvent(this.vo.userName, this.vo.password, "/dashboard/").dispatch();
    }

    private renderError() {
        if (this.vo.errorCode <= 0) return null;

        return (
            <div className="error">
                This is an Error!
            </div>
        )
    }

    render() {
        return (
            <div className="childContent">
                <TextField
                    className="textField"
                    floatingLabelText="Username"
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

                {this.renderError()}

                <ButtonSpinner label="Login" touchTapHandler={this.loginBtHandler}/>

                <p className="linkSign">
                    <a href={'#' + Routes.SIGN_UP.route}>Don´t have an account? Sign UP!</a>
                </p>
                <p className="linkSign">
                    <a href={'#' + Routes.FORGOT_PASS.route}>Forogt your password? Come to the Dark side!</a>
                </p>
            </div>
        )
    }
}