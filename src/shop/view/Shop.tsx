import * as React from "react";
import {observer} from "mobx-react";
import LinguaAppBar from "../../menu/view/AppBar";
import ItemList from "../../common/widgets/itemList/ItemList";
import {shopStore, ShopStore} from "../ShopStore";
import {FloatingActionButton} from "material-ui";
import FilterList from "material-ui/svg-icons/content/filter-list";
import ShopItem from "./ShopItem";
import SelectShopItemEvent from "../event/SelectShopItemEvent";
import ShowShopFilterEvent from "../event/ShopFilterEvent";
import ShopFilter from "./ShopFilter";
import ShopFilterEvent from "../event/ShopFilterEvent";
import {ShopFilterEventType} from "../event/ShopFilterEvent";
import CardList from "../../common/widgets/cardList/CardList";

require("./Shop.less");


interface IShopProps{
    model:ShopStore
}

@observer
export default class Shop extends React.Component<IShopProps,null> {
    className: string;

    constructor(props){
        super(props);
    }

    render() {

        if (shopStore.shopItemVisible){
            this.className = "Shop fixedheight";
        } else if(shopStore.shopFilterVisible) {
            this.className = "Shop modal";
        } else {
            this.className = "Shop";
        }

        return (
            <div className={this.className}>
                <div className="overview">
                    <LinguaAppBar title="Shops"/>

                    <CardList className="itemList" items={shopStore.items} clickEvent={new SelectShopItemEvent}></CardList>
                    <FloatingActionButton
                        iconClassName={"FilterList"}
                        className="floatingActionButton"
                        onClick={()=>new ShopFilterEvent(ShopFilterEventType.SHOW).dispatch()}
                    />
                </div>
                <ShopItem/>
                <ShopFilter/>
            </div>
        );
    }
}

//<ShopFilter visible={shopStore.shopFilterVisible} />
// <ShopItem/>