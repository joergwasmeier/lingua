import * as React from "react";
import {Component} from "react";

import ToggleMenuEvent from "../event/ToggleMenuEvent";
import AppBar from "material-ui/AppBar";
/**
 * Created by creativecode on 26.09.16.
 */

interface IAppBar{

}

export default class LinguaAppBar extends Component<IAppBar, {}>{

    constructor(){
        super();
    }

    handleToggle(value:boolean){
        new ToggleMenuEvent().dispatch();
    }

    dockerWidth(): number {
        var calcWidth: number = window.innerWidth - 80;
        return (calcWidth > 400) ? 400 : calcWidth;
    }

    render(){
        return (
            <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onTitleTouchTap={() => this.handleToggle(true)}
                style={{position:"fixed"}}
                className="appBar"
                onLeftIconButtonTouchTap={() => this.handleToggle(true)}
            />
        );
    }
}