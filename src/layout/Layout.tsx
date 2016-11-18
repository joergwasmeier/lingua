import * as React from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Menu from "../menu/view/Menu";
import {menuStore} from "../menu/MenuStore";
import Dialog from "./view/Dialog";
import PopUp from "./view/PopUp";
import {layoutStore} from "./LayoutStore";
import {IcommonStore} from "../common/commonImStore";
import {shallowCompare} from "react-addons-shallow-compare";

const ReactCSSTransitionGroup = require("react-addons-css-transition-group"); // ES5 with npm

require("./Layout.less");
require("./../common/style/Common.less");

interface ILayoutProps {
    model: IcommonStore;
    childs: any;
}

export default class Layout extends React.Component<ILayoutProps,{}> {
    className: string = "App";
    props: any;

    _mql;
    _dql;

    theme;

    constructor(props) {
        super(props);

        this.state = {
            "landscape": false,
            "mobile": false
        };

        this._mql = matchMedia("only screen and (orientation:landscape)");
        this._mql.addListener(this.updateMatches.bind(this));

        this._dql = matchMedia("only screen and (max-width: 1024px)");
        this._dql.addListener(this.updateMatches.bind(this));

        this.theme = getMuiTheme();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
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

                    <ReactCSSTransitionGroup
                        component="div"
                        className="animated-child"
                        transitionName={{
                        enter: "enter",
                        leave: "leave",
                        appear: "appear"
                    }}
                        transitionEnterTimeout={10000}
                        transitionLeaveTimeout={10000}>
                        {this.props.childs}
                    </ReactCSSTransitionGroup>


                    <Dialog open={false}/>
                    <PopUp open={layoutStore.showPopUp}/>
                </div>
            </MuiThemeProvider>
        )
    }
}