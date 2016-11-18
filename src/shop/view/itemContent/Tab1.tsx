import * as React from "react";
import {shallowCompare} from "react-addons-shallow-compare";

export default class Tab1 extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        return (
            <div className="slide">
                slide n°1
            </div>
        );
    }
}