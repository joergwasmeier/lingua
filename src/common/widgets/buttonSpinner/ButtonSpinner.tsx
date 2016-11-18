import * as React from "react";
import {FlatButton} from "material-ui";

var classNames = require('classnames');

export interface IButtonSpinnerProps {
    touchTapHandler: any;
    progress: number;
    label: string;
}

export default class ButtonSpinner extends React.Component<IButtonSpinnerProps,null> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatButton
                className={classNames('loginButton', { progress: this.props.progress })}
                backgroundColor="#a4c639"
                onTouchTap={this.props.touchTapHandler}>
                <p className="content">{this.props.label}</p>

                <div className="spinner"></div>
            </FlatButton>
        )
    }
}

