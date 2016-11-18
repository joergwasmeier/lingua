import * as React from "react";

import {Dialog as MDialog} from "material-ui";
import {IPopUp} from "./PopUp";
import {shallowCompare} from "react-addons-shallow-compare";


/**
 * Created by creativecode on 07.10.16.
 */

interface IDialog extends IPopUp {

}
export default class Dialog extends React.Component<IDialog, {}> {
    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
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