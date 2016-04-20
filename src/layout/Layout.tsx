import * as React from "react";
import AppBar from "material-ui/lib/app-bar";
import LeftNav from "material-ui/lib/left-nav";
import MenuItem from "material-ui/lib/menus/menu-item";
import {FontIcon} from "material-ui";
import {Link} from "react-router";

require('./Layout.less');

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
                  className="LeftNav"
                >
                  <div className="header">
                    <p>LINGUA v0.01</p>

                  </div>

                  <MenuItem
                    linkButton
                    containerElement={<Link to="/dashboard/" />}
                    primaryText="Übersicht"
                    leftIcon={
                      <FontIcon className="material-icons">dashboard</FontIcon>
                    } />

                  <MenuItem
                    linkButton
                    containerElement={<Link to="/shop/" />}
                    primaryText="Kurse"
                    leftIcon={
                      <FontIcon className="material-icons">storage</FontIcon>
                    } />

                  <MenuItem
                    linkButton
                    containerElement={<Link to="/shop/" />}
                    primaryText="Shop"
                    leftIcon={
                      <FontIcon className="material-icons">shop</FontIcon>
                    } />
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