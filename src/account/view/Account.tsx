import * as React from "react";
import Intro from "./Intro";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";

export interface IAccountProps {
    childs?: React.ReactElement<any>;
    showLogin?: boolean;
    oldPath: string;
}
const ReactCSSTransitionGroup = require("react-addons-css-transition-group"); // ES5 with npm

require("./Account.less");
export default class Account extends FabaWebBaseComponent<IAccountProps> {
    className: string = "Account";

    render() {
        if (this.props.showLogin) {
            this.className = "Account showLogin";
        } else {
            this.className = "Account";
        }
        return (
            <div className={`center ${this.className}`}>
                <Intro />

                <div className="login">
                    <p className="header">LINGUA </p>
                    {this.props.childs}
                </div>
            </div>
        );
    }
}