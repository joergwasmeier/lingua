import * as React from "react";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";

export default class Tab1 extends FabaWebBaseComponent<{}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slide">
                slide n°1
            </div>
        );
    }
}