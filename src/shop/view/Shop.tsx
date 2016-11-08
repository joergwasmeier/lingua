import * as React from "react";
import {ShopStore} from "../ShopStore";
import ShopOverview from "./ShopOverview";

require("./Shop.less");

interface IShopProps{
    model: ShopStore,
    childs: any
}

export default class Shop extends React.Component<IShopProps,null> {
    className: string = "Shop";

    constructor(props){
        super(props);
    }

    render() {
        if (this.props.childs) this.className = "Shop child";
        else this.className = "Shop";

        return (
            <div className={this.className}>
                <ShopOverview items={this.props.model.items}/>

                {this.props.childs}
            </div>
        );
    }
}