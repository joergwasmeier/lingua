import * as React from "react";
import {observer} from "mobx-react";
import {shopStore} from "../ShopStore";

interface IShopFilter{
    visible:boolean
}

export default class ShopFilter extends React.Component<IShopFilter,null> {
    render(){
        var className = "filterModal";
        if (this.props.visible === true) className += " active";

        return (
            <div className={className}>

            </div>
        )
    }
}