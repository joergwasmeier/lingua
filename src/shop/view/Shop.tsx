import * as React from "react";
import ShopOverview from "./ShopOverview";
import {IShopStore} from "../ShopStore";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import {ShopStyle} from "./ShopStyle";
const ReactCSSTransitionGroup = require("react-addons-css-transition-group"); // ES5 with npm

interface IShopProps {
    childs?: any;
    model: IShopStore;
}

export default class Shop extends FabaWebBaseComponent<IShopProps> {
    renderOverview() {
        console.log(!!this.props.childs);
        if (this.props && this.props.model && this.props.model.items) {
            
            return <ShopOverview items={this.props.model.items} child={!!this.props.childs}/>;
        }

        return null;
    }

    render() {
        return (
            <div className={ShopStyle.Shop}>
                {this.renderOverview()}
                <ReactCSSTransitionGroup
                    component="div"
                    className={ShopStyle.AnimatedChild}
                    transitionName={{
                        enter: "enter",
                        leave: "leave",
                        appear: "appear"
                    }}
                    transitionEnterTimeout={1}
                    transitionLeaveTimeout={300}>
                    {this.props.childs}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}