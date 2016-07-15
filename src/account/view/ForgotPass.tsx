import * as React from "react";
import {AppModel} from "../../common/AppModel";

var classNames = require('classnames');
require('./ForgotPass.less');

export default class ForgotPass extends React.Component<{},{}> {
  className:string = "SignUp";

  state = {
    error: false
  };

  props:any;

  constructor(props) {
    super(props);
  }

  componentWillMount():void {
    AppModel.getInstance().addChangeListener(() => this.forceUpdate());
  }

  componentWillUnmount():void {
    AppModel.getInstance().removeChangeListener(() => this.forceUpdate());
  }

  render() {
    return (
      <div className={`center ${this.className}`}>
        ForgotPass
      </div>
    )
  }
}