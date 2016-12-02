import * as React from "react";
import ShopOverview from "./ShopOverview";
import {IShopStore} from "../ShopStore";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import {style} from "typestyle";
const ReactCSSTransitionGroup = require("react-addons-css-transition-group"); // ES5 with npm

interface IShopProps {
    childs?: any;
    model: IShopStore;
}

export default class Shop extends FabaWebBaseComponent<IShopProps> {
    shopStyle = style({
        display: "flex",
        flexFlow: "column",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "black"
    });

    renderOverview() {
        if (this.props && this.props.model && this.props.model.items) {
            return <ShopOverview items={this.props.model.items}/>;
        }

        return null;
    }

    render() {
        //if (this.props.childs) this.className = "Shop child";
        //else this.className = "Shop";

        return (
            <div className={this.shopStyle}>
                {this.renderOverview()}
                <ReactCSSTransitionGroup
                    component="div"
                    className="animated-child"
                    transitionName={{
                        enter: "enter",
                        leave: "leave",
                        appear: "appear"
                    }}
                    transitionEnterTimeout={100}
                    transitionLeaveTimeout={100}>
                    {this.props.childs}
                </ReactCSSTransitionGroup>

            </div>
        );
    }
}