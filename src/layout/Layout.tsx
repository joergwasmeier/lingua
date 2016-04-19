import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FlatButton from 'material-ui/lib/flat-button';


export default class Layout extends React.Component<{},{}> {
    className:string = "App";
    state = {
        open: false,
        loggedIn:false
    };

    constructor(props) {
        super(props);
    }

    handleToggle = () => {
        console.log("handle");
        this.setState({open: !this.state.open});
    };

    handleClose = () => this.setState({open: false});

    handleTouchTap() {
        alert('onTouchTap triggered on the title component');
    }

    renderMenu(){
        //if (!this.state.loggedIn) return;


        return (
            <div>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={e => this.handleToggle()}
                />

                <LeftNav
                  swipeAreaWidth={100}
                  width={300}
                  docked={false}
                  open={this.state.open}
                  onRequestChange={open => this.setState({open})}
                >
                <p className="title">Lingua version 0.10</p>
                <hr className="line" />
                    <MenuItem onTouchTap={this.handleClose}>Overview</MenuItem>
                    <hr className="line" />
                    <p>Lektionen</p>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </LeftNav>
            </div>
        )
    }

    render() {
        return (
            <div className={`center ${this.className}`}>

                {this.renderMenu()}

                {this.props.children}
            </div>
        )
    }
}