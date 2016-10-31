import * as React from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {AppBar} from "material-ui";
import Menu from "../menu/view/Menu";
import {menuStore} from "../menu/MenuStore";
import {commonStore} from "../common/CommonStore";
import Dialog from "./view/Dialog";
import PopUp from "./view/PopUp";
import {layoutStore} from "./LayoutStore";
import {observer} from "mobx-react";

require('./Layout.less');

interface IHistory {
    push;
}

@observer
export default class Layout extends React.Component<{},{}> {
    className: string = "App";
    props: any;

    constructor(props) {
        super(props);

        commonStore.history = props.history;
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div className={`center ${this.className}`}>

                    <Menu model={menuStore} history={this.props.history}/>
                    <div className="content">
                        {this.props.children}
                    </div>

                    <Dialog open={false} />
                    <PopUp open={layoutStore.showPopUp} />

                </div>
            </MuiThemeProvider>
        )
    }
}