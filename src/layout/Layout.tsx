import * as React from "react";

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


require('./Layout.less');

interface IHistory {
  push;

}

export default class Layout extends React.Component<{},{}> {
  className:string = "App";
  state = {
    open: false,
    loggedIn: false
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

  menuClickHandler(url:string) {
    this.setState({open: false});
    this.props.history.push(url);
  }

  renderMenu() {
    //if (!AppModel.getInstance().busy) return;

    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onTitleTouchTap={this.handleToggle}
        />

        <Drawer open={this.state.open}
                width={200}
                docked={false}
                onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>

      </div>
    )
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className={`center ${this.className}`}>
        {this.renderMenu()}
        {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}