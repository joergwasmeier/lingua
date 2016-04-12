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
    open:false
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

  render() {
    return (
      <div className={`center ${this.className}`}>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onTitleTouchTap={e => console.log("dfsdffs")}
        />

        <Tabs>
          <Tab
            label="RECENTS"
          />
          <Tab
            label="RECENTS"
          />
          <Tab
            label="RECENTS"
          />
          <Tab
            label="RECENTS"
          />
        </Tabs>

        <FlatButton label="Default"
                    onTouchTap={e => console.log("FlatButtonClick")}/>

        <button onClick={e => console.log("buttonClick")}>
          BUTTON CLICK
        </button>

        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </LeftNav>

        {this.props.children}
      </div>
    )
  }
}