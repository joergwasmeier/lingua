import * as React from "react";
import {Checkbox} from "material-ui";
import shallowCompare from "react-addons-shallow-compare";

export default class Tab2 extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        return (
            <div className="slide">
                slide n°2
                <br />
                <br />
                <Checkbox label="test event propagation"/>
            </div>
        );
    }
}