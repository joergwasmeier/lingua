import * as React from 'react';
import * as ReactDOM from 'react-dom';
import FabaEventManager from "fabalous-core/core/FabaEventManager";
import DashboardCommand from "../control/command/DashboardCommand";
import GetDashboardDataEvent from "../control/event/GetDashboardDataEvent";


export default class Dashboard extends React.Component<{},{}> {
  className:string = "Login";

  constructor() {
    super();
  }

  componentDidMount():void {
    new GetDashboardDataEvent().dispatch((result) => {
      console.log(result);
    });
  }

  render() {
    return (
      <div>
        Test
      </div>
    );
  }
}