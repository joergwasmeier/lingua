import {Component} from "react";
import * as React from "react";

import LinguaAppBar from "../../menu/view/AppBar";
import CardList from "../../common/widgets/cardList/CardList";
import {ShopFilterEventType, default as ShopFilterEvent} from "../event/ShopFilterEvent";
import {FloatingActionButton} from "material-ui";
import Icon1 from "material-ui/svg-icons/content/filter-list";
import ShopItemVo from "../vo/ShopItemVo";
import SelectShopItemEvent from "../event/SelectShopItemEvent";

interface IShopOverview {
    items: Array<ShopItemVo>
}

export default class ShopOverview extends Component<IShopOverview,{}> {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(old: IShopOverview) {
        if (this.props && this.props.items && old.items.length === this.props.items.length) {
            return false;
        }

        return true;
    }

    render() {
        return (
            <div className="overview">
                <LinguaAppBar title="Shops"/>
                <CardList className="itemList" items={this.props.items} clickEvent={new SelectShopItemEvent}/>
                <FloatingActionButton
                    className="floatingActionButton"
                    onClick={()=>new ShopFilterEvent(ShopFilterEventType.SHOW).dispatch()}
                >
                    <Icon1 color="#ffffff"/>
                </FloatingActionButton>
            </div>
        );
    }
}