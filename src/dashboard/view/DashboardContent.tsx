import * as React from "react";
import {Component} from "react";

import {Subheader, List} from "material-ui";

export default class DashboardContent extends Component<{},{}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="chartContainer">
                    <canvas id="myChart" width="400" height="400"></canvas>
                </div>

                <List className="list">
                    <Subheader>Deine aktuellen Kurse</Subheader>
                </List>
            </div>
        );
    }
}