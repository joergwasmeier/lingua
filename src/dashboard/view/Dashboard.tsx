import * as React from "react";
import {ListItem, List, Divider, Subheader, RaisedButton} from "material-ui";
import ActionInfo from "material-ui/svg-icons/action/info";
import LinguaAppBar from "../../menu/view/AppBar";
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

    private showCourse(e:CourseVO): void {
        commonStore.history.push("/course/"+e.id);
        new ChangeUrlEvent("/course/"+e.id).dispatch();
    }

    private showShop():void{
        commonStore.history.push("/shop/");

        new ChangeUrlEvent("/shop/").dispatch();
    }

    private renderCourses(): Array<any> {
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
                <LinguaAppBar title="Dashboard" />

                {this.renderContent()}
            </div>
        );
    }

    private createCourses(){
        console.log("createCourse");
    }

    private renderContent(){
        if (dashboardStore.data.pointsToday >= 2000) return this.renderDashboard();
        else return this.renderEmptyDashBoard();
    }

    private renderEmptyDashBoard(){
        return(
            <div className="dashboardContainer">
                <h1>WHOOOT?!</h1>
                <h2>Noch keine Daten? Na dann wirds aber zeit starte jetzt mit deinem Kurs und lerne eine Sprache.</h2>

                <RaisedButton className="loadCourse" label="Kurs Herunterladen"
                              secondary={false} onClick={this.showShop}/>
                <RaisedButton className="createCourse" label="Kurs erstellen"
                              secondary={true} onClick={this.createCourses}/>
            </div>
        );
    }

    private renderDashboard(){
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