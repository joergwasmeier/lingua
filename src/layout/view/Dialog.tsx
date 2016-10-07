import * as React from "react";

import {Dialog as MDialog} from "material-ui";


/**
 * Created by creativecode on 07.10.16.
 */


export default class Dialog extends React.Component<{},{}>{
    render(){
        return (
            <MDialog
                title="Dialog With Actions"
                modal={true}
                open={true}
            >
                Only actions can close this dialog.
            </MDialog>
        );
    }
}