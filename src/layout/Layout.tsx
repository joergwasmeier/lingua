import * as React from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Dialog from "./view/Dialog";
import PopUp from "./view/PopUp";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import ChangeMediaQueryEvent from "./event/ChangeMediaQueryEvent";
import BottomMenu from "./view/BottomMenu";
import {IcommonStore} from "../common/commonImStore";
import {style} from "typestyle";

const ReactCSSTransitionGroup = require("react-addons-css-transition-group"); // ES5 with npm
declare var __webpack_hash__:any;

interface ILayoutProps {
    model: IcommonStore;
    childs: any;
}

export default class Layout extends FabaWebBaseComponent<ILayoutProps>{
    className: string = "App";
    props: any;

    _mql: any;
    _dql: any;

    theme: any;

    versionClass = style({
        position: "fixed",
        top:0,
        right:10,
        color:"white",
        zIndex:8000,
        fontSize:8,
        opacity:0.7
    });


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
        new ChangeMediaQueryEvent(this._mql.matches, this._dql.matches).dispatch();
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={this.theme}>
                <div className={`center ${this.className}`}>
                    {this.props.childs}
                    <BottomMenu />


                    <Dialog open={false}/>
                    <PopUp open={this.props.model.layout.showPopUp}/>
                    <div className={this.versionClass}>{__webpack_hash__}</div>

                </div>

            </MuiThemeProvider>
        )
    }
}
//<Menu open={this.props.model.menuOpen}/>