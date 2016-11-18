import * as React from "react";

import LinguaAppBar from "../../menu/view/AppBar";
import CardList from "../../common/widgets/cardList/CardList";
import {ShopFilterEventType, default as ShopFilterEvent} from "../event/ShopFilterEvent";
import {FloatingActionButton} from "material-ui";
import Icon1 from "material-ui/svg-icons/content/filter-list";
import ShopItemVo from "../vo/ShopItemVo";
import SelectShopItemEvent from "../event/SelectShopItemEvent";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";


interface IShopOverview {
    items: Array<ShopItemVo>;
}

export default class ShopOverview extends FabaWebBaseComponent<IShopOverview> {
    constructor(props) {
        super(props);
    }

    clickHandler() {
        new ShopFilterEvent(ShopFilterEventType.SHOW).dispatch();
    }

    render() {
        return (
            <div className="overview">
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