import * as React from "react";
import {ListItem, List, Divider, Subheader, RaisedButton, LinearProgress, Paper} from "material-ui";
import ActionInfo from "material-ui/svg-icons/action/info";
import LinguaAppBar from "../../menu/view/AppBar";
import {observer} from "mobx-react";
import CourseVO from "../../course/vo/CourseVO";
import ChangeUrlEvent from "../../common/event/ChangeUrlEvent";
import DashboardStore from "../DashboardStore";
import SwipeableViews from 'react-swipeable-views';

//var Chart = require('chart.js/src/chart.js');
require("./Dashboard.less");

interface IDashboardProps {
    model:DashboardStore
}

@observer
export default class Dashboard extends React.Component<IDashboardProps,{}> {
    className: string = "Dashboard";

    vo:DashboardStore;

    constructor(props:IDashboardProps) {
        super(props);
        this.vo = this.props.model;
    }

    private componentDidMount(): void {
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
        new ChangeUrlEvent("/course/"+e.id).dispatch();
    }

    private showShop():void{
        new ChangeUrlEvent("/shop/").dispatch();
    }

    private renderCourses(): Array<any> {
        var rows: Array<any> = [];

        if (this.vo.data.recentCourses){
            for (var item of this.vo.data.recentCourses) {
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
                {this.renderLoading()}

                <LinguaAppBar title="Dashboard" />

                {this.renderContent()}
            </div>
        );
    }

    private createCourses(){
        console.log("createCourse");
    }

    private renderContent(){
        if (this.vo.data.pointsToday >= 2000) return this.renderDashboard();
        else return this.renderEmptyDashBoard();
    }

    private renderLoading() {
        if (!this.vo.data.loading) return;

        return(
            <div className="loading">
                Loading
                <LinearProgress />
            </div>
        )
    }

    private renderEmptyDashBoard(){
        return(
            <div className="dashboardContainer">
                <h1>WHOOOT?!</h1>
                <h2>Noch keine Daten? Na dann wirds aber zeit starte jetzt mit deinem Kurs und lerne eine Sprache.</h2>

                <Paper zDepth={1} className="card">
                    <h1>Beliebte Kurse</h1>
                    <SwipeableViews className="swipeView">
                        <div className="courseCard" />
                        <div className="courseCard" />
                        <div className="courseCard" />
                        <div className="courseCard" />
                        <div className="courseCard" />
                        <div className="courseCard" />
                        <div className="courseCard" />
                    </SwipeableViews>
                </Paper>

                <h2 className="sub">Nichts dabei? KeinProblem erstell deinen eigenen Kurs!</h2>

                <RaisedButton className="createCourse" label="Kurs erstellen"
                              secondary={true} onClick={this.createCourses} fullWidth={true}/>

            </div>
        );
    }

    /*

     <RaisedButton className="loadCourse" label="Kurs Herunterladen"
     secondary={false} onClick={this.showShop} fullWidth={true}/>
     <RaisedButton className="createCourse" label="Kurs erstellen"
     secondary={true} onClick={this.createCourses} fullWidth={true}/>

     */

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