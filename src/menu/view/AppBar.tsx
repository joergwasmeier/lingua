import * as React from "react";
import ToggleMenuEvent from "../event/ToggleMenuEvent";
import AppBar from "material-ui/AppBar";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";

interface IAppBarProps {
    title: string;
    clickEvent?: any;
    leftIcon?: any;
    disableEvent?: boolean;
}

export default class LinguaAppBar extends FabaWebBaseComponent<IAppBarProps> {
    constructor(props) {
        super(props);

    }

    private handleToggle(value: boolean) {
        if (this.props.disableEvent) return;

        if (this.props.clickEvent) {
            this.props.clickEvent.dispatch();
            return;
        }

        new ToggleMenuEvent().dispatch();
    }

    private dockerWidth(): number {
        let calcWidth: number = window.innerWidth - 80;
        return (calcWidth > 400) ? 400 : calcWidth;
    }

    render() {
        return (
            <AppBar
                title={this.props.title}
                onTitleTouchTap={() => this.handleToggle(true)}
                onLeftIconButtonTouchTap={() => this.handleToggle(true)}
                showMenuIconButton={!!(this.props.leftIcon)}
                iconElementLeft={this.props.leftIcon}
            />
        );
    }
}