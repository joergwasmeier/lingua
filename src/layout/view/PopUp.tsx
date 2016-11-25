import * as React from "react";
import {Dialog as MDialog, CircularProgress} from "material-ui";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";

export interface IPopUp {
    open: boolean;
    title: string;
}

export default class PopUp extends FabaWebBaseComponent<IPopUp> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MDialog
                title="Wird geladen"
                modal={true}
                open={this.props.open}
            >
                <div style={this.createStyle()}>
                    <CircularProgress/>
                </div>

            </MDialog>
        );
    }

    createStyle() {
        return {
            textAlign: 'center',
            width: '100%'
        }
    }
}