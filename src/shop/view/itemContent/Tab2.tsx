import * as React from "react";
import {Checkbox} from "material-ui";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";

export default class Tab2 extends FabaWebBaseComponent<{}> {
    constructor(props) {
        super(props);
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