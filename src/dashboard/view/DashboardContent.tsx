import * as React from "react";
import {Component} from "react";

import {Subheader, List} from "material-ui";
import shallowCompare from "react-addons-shallow-compare";

export default class DashboardContent extends Component<{}, null> {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
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