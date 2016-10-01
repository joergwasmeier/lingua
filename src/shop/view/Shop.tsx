import * as React from "react";
import {observer} from "mobx-react";
import LinguaAppBar from "../../menu/view/AppBar";
require("./Shop.less");

@observer
export default class Shop extends React.Component<{},{}> {
    className: string = "Shop";

    constructor() {
        super();
    }

    render() {
        return (
            <div className={this.className}>
                <LinguaAppBar title="Shop"/>


            </div>
        );
    }
}