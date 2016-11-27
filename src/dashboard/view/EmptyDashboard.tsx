import * as React from "react";
import {Paper, RaisedButton} from "material-ui";
import SwipeableViews from "react-swipeable-views";
import CreateCourseEvent from "../event/CreateCourseEvent";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import {DashboardStyle} from "./DashboardStyle";

export default class EmptyDashboard extends FabaWebBaseComponent<{}> {

    private createCourses() {
        new CreateCourseEvent().dispatch();
    }

    render() {
        return (
            <div className={DashboardStyle.container}>
                <h1 className={DashboardStyle.h1}>WHOOOT?!</h1>
                <h2 className={DashboardStyle.h2}>
                    Noch keine Daten? Na dann wirds aber zeit starte jetzt mit deinem Kurs und lerne eine Sprache.</h2>

                <Paper zDepth={1} className={DashboardStyle.card}>
                    <h1>Beliebte Kurse</h1>
                    <SwipeableViews className="swipeView">
                        <div className={DashboardStyle.courseCard}/>
                        <div className={DashboardStyle.courseCard}/>
                        <div className={DashboardStyle.courseCard}/>
                    </SwipeableViews>
                </Paper>

                <h2 className={DashboardStyle.h2Sub}>Nichts dabei? KeinProblem erstell deinen eigenen Kurs!</h2>

                <RaisedButton className={DashboardStyle.createButton}
                              label="Kurs erstellen"
                              secondary={true}
                              onClick={this.createCourses}

                />
            </div>
        );
    }

}