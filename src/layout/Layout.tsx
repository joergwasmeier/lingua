import * as React from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Menu from "./../menu/view/Menu";

require('./Layout.less');

interface IHistory {
  push;

}

export default class Layout extends React.Component<{},{}> {
  className:string = "App";

  state = {
  };

  props:any;

  constructor(props) {
    super(props);


    // Perf check
    setInterval(() => {
     // this.render();
    }, 10000);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className={`center ${this.className}`}>
          <Menu />
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}