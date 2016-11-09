import * as React from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Menu from "../menu/view/Menu";
import {menuStore} from "../menu/MenuStore";
import {commonStore} from "../common/CommonStore";
import Dialog from "./view/Dialog";
import PopUp from "./view/PopUp";
import {layoutStore} from "./LayoutStore";
import {observer} from "mobx-react";

require('./Layout.less');
require('./../common/style/Common.less');

@observer
export default class Layout extends React.Component<{},{}> {
    className: string = "App";
    props: any;

    _mql;
    _dql;

    theme;

    constructor(props) {
        super(props);

        this.state = {
            'landscape':false,
            'mobile':false
        };

        this._mql = matchMedia('only screen and (orientation:landscape)');
        this._mql.addListener(this.updateMatches.bind(this));

        this._dql = matchMedia('only screen and (max-width: 1024px)');
        this._dql.addListener(this.updateMatches.bind(this));

        this.theme = getMuiTheme()
    }

    componentDidMount(){
        this.updateMatches();
    }

    updateMatches(){
        layoutStore.landscape = this._mql.matches;
        layoutStore.mobile = this._dql.matches;
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={this.theme}>
                <div className={`center ${this.className}`}>
                    <Menu model={menuStore}/>
                    {this.props.childs}
                    <Dialog open={false} />
                    <PopUp open={layoutStore.showPopUp} />
                </div>
            </MuiThemeProvider>
        )
    }
}