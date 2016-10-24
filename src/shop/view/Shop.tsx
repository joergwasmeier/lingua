import * as React from "react";
import {observer} from "mobx-react";
import LinguaAppBar from "../../menu/view/AppBar";
import ItemList from "../../common/widgets/itemList/ItemList";
import {shopStore, ShopStore} from "../ShopStore";
import {FloatingActionButton} from "material-ui";
import FilterList from "material-ui/svg-icons/content/filter-list";
import ShopItem from "./ShopItem";
import SelectShopItemEvent from "../event/SelectShopItemEvent";

require("./Shop.less");


interface IShopProps{
    model:ShopStore
}

@observer
export default class Shop extends React.Component<IShopProps,null> {
    className: string;


    render() {
        if (shopStore.shopItemVisible){
            this.className = "Shop fixedheight";
        } else {
            this.className = "Shop";
        }

        return (
            <div className={this.className}>
                <LinguaAppBar title="Shops"/>

                <ItemList className="itemList" items={shopStore.items} clickEvent={new SelectShopItemEvent}/>
                <FloatingActionButton
                    iconClassName={"FilterList"}
                    className="floatingActionButton" />
                <ShopItem/>
            </div>
        );
    }
}