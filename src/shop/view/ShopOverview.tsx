import * as React from "react";
import LinguaAppBar from "../../menu/view/AppBar";
import CardList from "../../common/widgets/cardList/CardList";
import {ShopFilterEventType, default as ShopFilterEvent} from "../event/ShopFilterEvent";
import {FloatingActionButton} from "material-ui";
import FilterIcon from "material-ui/svg-icons/content/filter-list";
import ShopItemVo from "../vo/ShopItemVo";
import SelectShopItemEvent from "../event/SelectShopItemEvent";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import {ShopStyle} from "./ShopStyle";
import BottomMenu from "../../layout/view/BottomMenu";
import {style} from "typestyle";

interface IShopOverview {
    items: Array<ShopItemVo>;
    child:boolean;
}

export default class ShopOverview extends FabaWebBaseComponent<IShopOverview> {
    style = style({
        position: "fixed",
    });

    clickHandler() {
        new ShopFilterEvent(ShopFilterEventType.SHOW).dispatch();
    }

    render() {
        return (
            <div className={ShopStyle.overview(this.props.child)}>
                <LinguaAppBar title="Shops" className={this.style}/>
                <div className={ShopStyle.container}>

                    <CardList className="itemList" items={this.props.items} clickEvent={new SelectShopItemEvent}/>

                    <FloatingActionButton
                        className={ShopStyle.filterButton}
                        onClick={this.clickHandler}
                    >
                        <FilterIcon color="#ffffff"/>
                    </FloatingActionButton>
                </div>
                <BottomMenu selectedIndex={2}/>
            </div>
        );
    }
}