import * as React from "react";
import {FlatButton} from "material-ui";
import {style} from "typestyle";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";

export interface IButtonSpinnerProps {
    touchTapHandler: any;
    progress: number;
    label: string;
}

export default class ButtonSpinner extends FabaWebBaseComponent<IButtonSpinnerProps> {
    constructor(props) {
        super(props);
    }

    buttonSpinnerStyle = (progress:number) => {
        return style({
            marginLeft: "16px !important",
            marginRight: "16px !important",
            marginBottom: "32px !important",
            marginTop: "32px !important",
            backgroundColor: "white !important",
            transition: "all 5.2s"
        });
    };

    render() {
        return (
            <FlatButton
                className={this.buttonSpinnerStyle(this.props.progress)}
                backgroundColor="#a4c639"
                onTouchTap={this.props.touchTapHandler}>
                <p className="content">{this.props.label}</p>

                <div className="spinner"></div>
            </FlatButton>
        )
    }
}

