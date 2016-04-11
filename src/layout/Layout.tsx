import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import AppBar from 'material-ui/lib/app-bar';


export default class Layout extends React.Component<{},{}> {
  className:string = "App";

  constructor(){
    super();
  }

  render() {
    return (
      <div className={`center ${this.className}`}>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
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

      </div>
    )
  }
}