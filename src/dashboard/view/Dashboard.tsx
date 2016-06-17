/*
 * 
 *
 *
 */

require("./Dashboard.less");

import * as React from "react";
import {ListItem, List, Divider, Subheader} from "material-ui";
import ActionInfo from "material-ui/svg-icons/action/info";
import {AppModel} from "../../common/AppModel";

var Chart = require('chart.js/src/chart.js');

export default class Dashboard extends React.Component<{},{}> {
  className:string = "Dashboard";

  data = {
    labels: [
      "",
      "",
      ""
    ],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }]
  };

  constructor() {
    super();
  }

  componentDidMount():void {
    AppModel.getInstance().appBarTitle = "Übersicht - Dash";

    window.addEventListener("resize", (e) => {
      console.log("resize");
      super.forceUpdate();
    });


    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: this.data,
      showInLegend: false,
      options: {
        gridLines: {
          display: false
        }
      }
    });
  }

  showCourse(e):void {
    console.log("course");
  }

  renderCourses():Array<any> {
    var rows:Array<any> = [];

    for (var i = 0; i < 10; i++) {
      rows.push(<Divider key={"div"+i}/>);

      rows.push(<ListItem
        key={i}
        rightIcon={<ActionInfo />}
        primaryText="Italienisch für Anfänger"
        secondaryText="Jan 20, 2016"
        onTouchTap={(e) => this.showCourse(e)}
      />);
    }

    return rows;
  }

  render() {
    return (
      <div className={this.className}>
        <canvas id="myChart" width="400" height="400"></canvas>

        <br/>

        <List>
          <Subheader>Recent chats</Subheader>

          {this.renderCourses()}
        </List>
      </div>
    );
  }
}