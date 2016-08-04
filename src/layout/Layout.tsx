import * as React from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Menu from "./../menu/view/Menu";
import FabaModel from "fabalous-core/core/FabaModel";

require('./Layout.less');

interface IHistory {
  push;

}

export default class Layout extends React.Component<{},{}> {
  className:string = "App";
  props:any;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>


        <div className={`center ${this.className}`}>
          <Menu model={FabaModel.getStore("menuStore")} history={this.props.history} />
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}