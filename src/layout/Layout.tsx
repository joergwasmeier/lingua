import * as React from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Menu from "../menu/view/Menu";
import Dialog from "./view/Dialog";
import PopUp from "./view/PopUp";
import {layoutStore} from "./LayoutStore";
import {IcommonStore} from "../common/commonImStore";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";

const ReactCSSTransitionGroup = require("react-addons-css-transition-group"); // ES5 with npm

require("./Layout.less");
require("./../common/style/Common.less");

interface ILayoutProps {
    model: IcommonStore;
    childs: any;
}
export default class Layout extends FabaWebBaseComponent<ILayoutProps>{
    className: string = "App";
    props: any;

    _mql;
    _dql;

    theme;

    constructor(props) {
        super(props);

        this._mql = matchMedia("only screen and (orientation:landscape)");
        this._mql.addListener(this.updateMatches.bind(this));

        this._dql = matchMedia("only screen and (max-width: 1024px)");
        this._dql.addListener(this.updateMatches.bind(this));

        this.theme = getMuiTheme();
    }

    componentDidMount() {
        this.updateMatches();
    }

    updateMatches() {
        layoutStore.landscape = this._mql.matches;
        layoutStore.mobile = this._dql.matches;
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={this.theme}>
                <div className={`center ${this.className}`}>
                    <Menu open={this.props.model.menuOpen}/>

                    {this.props.childs}

                    <Dialog open={false}/>
                    <PopUp open={layoutStore.showPopUp}/>
                </div>
            </MuiThemeProvider>
        )
    }
}