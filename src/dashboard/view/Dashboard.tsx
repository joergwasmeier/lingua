import * as React from "react";
import {ListItem, List, Divider, Subheader} from "material-ui";
import ActionInfo from "material-ui/svg-icons/action/info";
import LinguaAppBar from "../../menu/view/AppBar";
import GetDashboardDataEvent from "../event/GetDashboardDataEvent";
import InsertDashboardDataEvent from "../event/InsertDashboardDataEvent";
import DashboardVo from "../vo/DashboardVo";
import {dashboardStore} from "../DashboardStore";
import {observer} from "mobx-react";
import CourseVO from "../../course/vo/CourseVO";
import ChangeUrlEvent from "../../common/event/ChangeUrlEvent";
import {commonStore} from "../../common/CommonStore";
var Chart = require('chart.js/src/chart.js');

require("./Dashboard.less");

interface IDashboardProps {

}

@observer
export default class Dashboard extends React.Component<{},{}> {
    className: string = "Dashboard";

    data = {
        labels: [
            "",
            ""
        ],
        datasets: [
            {
                data: [300, 50],
                backgroundColor: [
                    "#330033",
                    "#eeeeee"
                ],
                hoverBackgroundColor: [
                    "#330033",
                    "#eeeeee"
                ],
                borderWidth:[0,0]

            }]
    };

    constructor() {
        super();
    }

    componentDidMount(): void {
        // Chart rerender
        window.addEventListener("resize", (e) => {
            super.forceUpdate();
        });

        var ctx = document.getElementById("myChart");
        /*
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
        */
    }

    showCourse(e:CourseVO): void {
        console.log("course");
        console.log(e.id);
        commonStore.history.push("/course/"+e.id);
        new ChangeUrlEvent("/course/"+e.id).dispatch();
    }

    renderCourses(): Array<any> {
        var rows: Array<any> = [];

        if (dashboardStore.data.recentCourses){
            for (var item of dashboardStore.data.recentCourses) {
                rows.push(<Divider key={"div"+item.id}/>);

                rows.push(<ListItem
                    key={item.id}
                    rightIcon={<ActionInfo />}
                    primaryText={item.title}
                    secondaryText={item.createDate}
                    onTouchTap={(e) => this.showCourse(item)}
                />);
            }
        }
        return rows;
    }


    render() {
        return (
            <div className={this.className}>
                <LinguaAppBar />

                {this.renderContent()}

                <button onClick={()=>{
                    var dash:DashboardVo = new DashboardVo();
                    dash.userName = "test";
                    dash.pointsToday = 2000;

                    new InsertDashboardDataEvent(dash).dispatch()
                }}>InsertDashboardData</button>
            </div>
        );
    }

    renderContent(){
        console.log(dashboardStore.data.pointsToday);
        if (dashboardStore.data.pointsToday >= 2000) return this.renderDashboard();
        else return this.renderEmptyDashBoard();
    }

    renderEmptyDashBoard(){
        return(
            <div>
                <h1> WHOOOT?! Noch keine Daten? Na dann wirds aber zeit starte jetzt mit deinem Kurs und lerne eien Sprache.</h1>
            </div>
        );
    }

    renderDashboard(){
        return(
            <div>
                <div className="chartContainer">
                    <canvas id="myChart" width="400" height="400"></canvas>
                </div>

                <List className="list">
                    <Subheader>Deine aktuellen Kurse</Subheader>

                    {this.renderCourses()}
                </List>
            </div>
        );
    }

}