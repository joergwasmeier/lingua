import * as React from "react";

import ToggleMenuEvent from "../event/ToggleMenuEvent";
import AppBar from "material-ui/AppBar";
import shallowCompare from "react-addons-shallow-compare";

interface IAppBarProps {
    title: string;
    clickEvent?: any;
    leftIcon?: string;
    disableEvent?: boolean;
}

export default class LinguaAppBar extends React.Component<IAppBarProps, {}> {
    private handleToggle(value: boolean) {
        if (this.props.disableEvent) return;

        if (this.props.clickEvent) {
            this.props.clickEvent.dispatch();
            return;
        }

        new ToggleMenuEvent().dispatch();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    private dockerWidth(): number {
        let calcWidth: number = window.innerWidth - 80;
        return (calcWidth > 400) ? 400 : calcWidth;
    }

    render() {
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