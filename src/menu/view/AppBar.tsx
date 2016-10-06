import * as React from "react";
import {Component} from "react";

import ToggleMenuEvent from "../event/ToggleMenuEvent";
import AppBar from "material-ui/AppBar";


interface IAppBarProps{
    title:string;
    clickEvent?:any;
    leftIcon?:string;
}

export default class LinguaAppBar extends Component<IAppBarProps, {}>{

    private handleToggle(value:boolean){
        console.log("handleToggle");
        if (this.props.clickEvent){
            this.props.clickEvent.dispatch();
            return;
        }

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
                iconElementLeft={this.props.leftIcon}
                onTitleTouchTap={() => this.handleToggle(true)}
                style={{position:"fixed"}}
                className="appBar"
                onLeftIconButtonTouchTap={() => this.handleToggle(true)}
            />
        );
    }
}