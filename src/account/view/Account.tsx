import * as React from "react";
import Intro from "./Intro";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import {style} from "typestyle";
import Login from "./Login";
import ForgotPass from "./ForgotPass";
import SignUp from "./SignUp";
import SwipeableViews from "react-swipeable-views";
import {store} from "../../common/commonImStore";

export interface IAccountProps {
    childs?: React.ReactElement<any>;
    showLogin?: boolean;
    oldPath: string;
    mobile: boolean;
    landscape: boolean;
    viewIndex: number;
}

export default class Account extends FabaWebBaseComponent<IAccountProps> {
    accountClass = style({
        height: "100vh",
        minHeight: "500px",
        textAlign: "center",
        backgroundSize: "cover",
        backgroundClip: "content-box",
        backgroundPosition: "center, center",
        '&.showLogin': {
            ".login": {
                transform: "translate3D(0, 0vh, 0)"
            }
        },
    });

    loginClass = style({
        position: "fixed",
        zIndex: 2000,
        backgroundColor: "#2c3e50",
        height: "100vh",
        transform: "translate3D(0px, 100vh, 0px)",
        transition: "transform 0.5s",
        width: "100vw",

        "&.active": {
            transform: "translate3D(0px, 0vh, 0px)"
        }
    });

    handleChangeIndex() {
        console.log("handleIndex");
    }

    render() {
        var loginClass = "";
        if (this.props.showLogin) {
            loginClass = "showLogin";
        }

        return (
            <div className={`center ${this.accountClass} ${loginClass}`}>
                <Intro mobile={this.props.mobile} landscape={this.props.landscape}/>

                <div className={`login ${this.loginClass}`}>
                    <p className="header">LINGUA</p>
                    <SwipeableViews index={this.props.viewIndex} onChangeIndex={this.handleChangeIndex}>
                        <Login model={store.appStore.account.login}/>
                        <ForgotPass model={store.appStore.account.forgotPass}/>
                        <SignUp model={store.appStore.account.signUp}/>
                    </SwipeableViews>

                </div>
            </div>
        );
    }
}