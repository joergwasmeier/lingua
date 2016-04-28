import * as React from "react";
import AppBar from "material-ui/lib/app-bar";
import LeftNav from "material-ui/lib/left-nav";
import {FontIcon, List, ListItem} from "material-ui";

require('./Layout.less');

interface IHistory{
  push;

}

export default class Layout extends React.Component<{},{}> {
    className:string = "App";
    state = {
        open: false,
        loggedIn:false
    };

    props:any;

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

    menuClickHandler(url:string){
      this.setState({open: false});
      this.props.history.push(url);
    }

    renderMenu(){
        //if (!AppModel.getInstance().busy) return;

        return (
            <div>
                <AppBar
                    title="Übersicht"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={e => this.handleToggle()}
                    className="AppBar"
                />

                <LeftNav
                  swipeAreaWidth={100}
                  width={270}
                  docked={false}
                  open={this.state.open}
                  onRequestChange={open => this.setState({open})}
                  className="LeftNav"
                >
                  <div className="header">
                    <p>LINGUA v0.01</p>

                  </div>
                  <List>

                    <ListItem primaryText="Übersicht" leftIcon={
                      <FontIcon className="material-icons">dashboard</FontIcon>
                    } onTouchTap={(e) => this.menuClickHandler("/dashboard/")}/>

                    <ListItem
                      primaryText="Kurse"
                      leftIcon={
                        <FontIcon className="material-icons">storage</FontIcon>
                      }
                    />

                    <ListItem primaryText="Shop" leftIcon={
                      <FontIcon className="material-icons">shop</FontIcon>
                    }
                      onTouchTap={(e) => this.menuClickHandler("/shop/")}
                    />


                    <ListItem
                      primaryText="Impressum"
                      leftIcon={
                        <FontIcon className="material-icons">info</FontIcon>
                      }
                    />
                  </List>
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