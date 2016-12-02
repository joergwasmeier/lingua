import * as React from "react";

import LinguaAppBar from "../../menu/view/AppBar";
import CardList from "../../common/widgets/cardList/CardList";
import {ShopFilterEventType, default as ShopFilterEvent} from "../event/ShopFilterEvent";
import {FloatingActionButton} from "material-ui";
import Icon1 from "material-ui/svg-icons/content/filter-list";
import ShopItemVo from "../vo/ShopItemVo";
import SelectShopItemEvent from "../event/SelectShopItemEvent";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import {style} from "typestyle";


interface IShopOverview {
    items: Array<ShopItemVo>;
}

export default class ShopOverview extends FabaWebBaseComponent<IShopOverview> {

    shopOverviewStyle = style({
        backgroundCcolor: "white",
        transition: "opacity 0.2s linear, transform 0.2s",
        willChange: "opacity, transform",
        transform: "translate3d(0,0,0)",
        opacity: 1
    });

    clickHandler() {
        new ShopFilterEvent(ShopFilterEventType.SHOW).dispatch();
    }

    render() {
        return (
            <div className={this.shopOverviewStyle}>
                <LinguaAppBar title="Shops"/>
                <CardList className="itemList" items={this.props.items} clickEvent={new SelectShopItemEvent}/>
                <FloatingActionButton
                    className="floatingActionButton"
                    onClick={this.clickHandler}
                >
                    <Icon1 color="#ffffff"/>
                </FloatingActionButton>
            </div>
        );
    }
}