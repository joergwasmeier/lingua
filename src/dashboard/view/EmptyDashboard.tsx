import * as React from "react";
import {Component} from "react";
import {Paper, RaisedButton} from "material-ui";
import SwipeableViews from 'react-swipeable-views';
import CreateCourseEvent from "../event/CreateCourseEvent";

export default class EmptyDashboard extends Component<{},{}> {
    constructor(props) {
        super(props);
    }

    private createCourses() {
        new CreateCourseEvent().dispatch();
    }

    render() {
        return (
            <div className="dashboardContainer">
                <h1>WHOOOT?!</h1>
                <h2>Noch keine Daten? Na dann wirds aber zeit starte jetzt mit deinem Kurs und lerne eine Sprache.</h2>

                <Paper zDepth={1} className="card">
                    <h1>Beliebte Kurse</h1>
                    <SwipeableViews className="swipeView">
                        <div className="courseCard"/>
                        <div className="courseCard"/>
                        <div className="courseCard"/>
                        <div className="courseCard"/>
                        <div className="courseCard"/>
                        <div className="courseCard"/>
                        <div className="courseCard"/>
                    </SwipeableViews>
                </Paper>

                <h2 className="sub">Nichts dabei? KeinProblem erstell deinen eigenen Kurs!</h2>

                <RaisedButton className="createCourse"
                              label="Kurs erstellen"
                              secondary={true}
                              onClick={this.createCourses}
                />

            </div>
        );
    }

}