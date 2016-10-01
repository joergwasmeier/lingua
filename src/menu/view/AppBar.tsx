import * as React from "react";
import {Component} from "react";

import ToggleMenuEvent from "../event/ToggleMenuEvent";
import AppBar from "material-ui/AppBar";
/**
 * Created by creativecode on 26.09.16.
 */

interface IAppBarProps{
    title;
}

export default class LinguaAppBar extends Component<IAppBarProps, {}>{

    constructor(){
        super();
    }

    private handleToggle(value:boolean){
        new ToggleMenuEvent().dispatch();
    }

    private dockerWidth(): number {
        var calcWidth: number = window.innerWidth - 80;
        return (calcWidth > 400) ? 400 : calcWidth;
    }

    render(){
        return (
            <AppBar
                title={this.props.title}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onTitleTouchTap={() => this.handleToggle(true)}
                style={{position:"fixed"}}
                className="appBar"
                onLeftIconButtonTouchTap={() => this.handleToggle(true)}
            />
        );
    }
}