import * as React from "react";
import {shallowCompare} from "react-addons-shallow-compare";
import Intro from "./Intro";

export interface IAccountProps {
    childs?: React.ReactElement<any>;
    showLogin?: boolean;
    oldPath: string;
}
const ReactCSSTransitionGroup = require("react-addons-css-transition-group"); // ES5 with npm

require("./Account.less");
export default class Account extends React.Component<IAccountProps, {}> {
    className: string = "Account";

    constructor(props: IAccountProps) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

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
                    <ReactCSSTransitionGroup
                        component="div"
                        className="animated-child"
                        transitionName={{
                            enter: "enter",
                            leave: "leave",
                            appear: "appear"
                        }}
                        transitionEnterTimeout={50000}
                        transitionLeaveTimeout={50000}>
                        {this.props.childs}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
}