import * as React from "react";

import {Dialog as MDialog} from "material-ui";
import {IPopUp} from "./PopUp";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";


/**
 * Created by creativecode on 07.10.16.
 */

interface IDialog extends IPopUp {

}

export default class Dialog extends FabaWebBaseComponent<IDialog> {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <MDialog
                title="Dialog With Actions"
                modal={true}
                open={this.props.open}
            >
                Only actions can close this dialog.
            </MDialog>
        );
    }
}