import * as React from "react";

import {Dialog as MDialog, CircularProgress} from "material-ui";
import {observer} from "mobx-react";


/**
 * Created by creativecode on 07.10.16.
 */

export interface IPopUp{
    open:boolean;
    title:string;
}


@observer
export default class PopUp extends React.Component<IPopUp,{}> {
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

    createStyle(){
        return {
            textAlign:'center',
            width:'100%'
        }
    }
}