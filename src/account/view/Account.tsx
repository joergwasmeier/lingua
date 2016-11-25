import * as React from "react";
import Intro from "./Intro";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import {style} from "typestyle";
import Login from "./Login";
import ForgotPass from "./ForgotPass";
import SignUp from "./SignUp";
import SwipeableViews from "react-swipeable-views";
import {IAccountStore} from "../AccountImStore";
import AccountUiEvent from "../event/AccountUiEvent";
import {AccountUiEventType} from "../event/AccountUiEvent";

export interface IAccountProps {
    childs?: React.ReactElement<any>;
    showLogin?: boolean;
    oldPath: string;
    mobile: boolean;
    landscape: boolean;
    viewIndex: number;
    model: IAccountStore;
}

export default class Account extends FabaWebBaseComponent<IAccountProps> {
    accountClass = style({
        height: "100vh",
        minHeight: "500px",
        textAlign: "center",
        backgroundSize: "cover",
        backgroundClip: "content-box",
        backgroundPosition: "center, center"
    });

    loginClass(show: boolean) {
        const hwt = (show) ? "0vh" : "100vh";

        return style({
            position: "fixed",
            zIndex: 2000,
            backgroundColor: "#2c3e50",
            height: "100vh",
            transform: "translate3D(0px, " + hwt + ", 0px)",
            transition: "transform 0.5s",
            width: "100vw"
        });
    }

    handleChangeIndex(num: number) {
        let ev = new AccountUiEvent(AccountUiEventType.CHANGE_CONTAINER_INDEX);
        ev.data = num;
        ev.dispatch();
    }

    render() {
        return (
            <div className={this.accountClass}>
                <Intro mobile={this.props.mobile} landscape={this.props.landscape}/>

                <div className={this.loginClass(this.props.showLogin)}>
                    <p className="header">LINGUA </p>
                    <SwipeableViews index={this.props.viewIndex} onChangeIndex={this.handleChangeIndex}>
                        <Login model={this.props.model.login}/>
                        <ForgotPass model={this.props.model.forgotPass}/>
                        <SignUp model={this.props.model.signUp}/>
                    </SwipeableViews>

                </div>
            </div>
        );
    }
}