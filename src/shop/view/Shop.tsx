import * as React from "react";
import ShopOverview from "./ShopOverview";
import {IShopStore} from "../ShopStore";
const ReactCSSTransitionGroup = require("react-addons-css-transition-group"); // ES5 with npm
import shallowCompare from "react-addons-shallow-compare";

require("./Shop.less");

interface IShopProps {
    childs: any;
    model: IShopStore;
}

export default class Shop extends React.Component<IShopProps, null> {
    className: string = "Shop";

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    renderOverview() {
        if (this.props && this.props.model && this.props.model.items) {
            return <ShopOverview items={this.props.model.items}/>;
        }

        return null;
    }

    render() {
        if (this.props.childs) this.className = "Shop child";
        else this.className = "Shop";

        return (
            <div className={this.className}>
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