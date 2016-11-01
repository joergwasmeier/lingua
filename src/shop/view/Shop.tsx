import * as React from "react";
import {observer} from "mobx-react";
import LinguaAppBar from "../../menu/view/AppBar";
import {shopStore, ShopStore} from "../ShopStore";
import {FloatingActionButton} from "material-ui";
import Icon1 from "material-ui/svg-icons/content/filter-list";
import ShopItem from "./ShopItem";
import SelectShopItemEvent from "../event/SelectShopItemEvent";
import ShopFilterEvent, {ShopFilterEventType} from "../event/ShopFilterEvent";
import ShopFilter from "./ShopFilter";
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
                        className="floatingActionButton"
                        onClick={()=>new ShopFilterEvent(ShopFilterEventType.SHOW).dispatch()}
                    >
                        <Icon1 color="#ffffff"/>
                    </FloatingActionButton>
                </div>
                <ShopItem/>
                <ShopFilter/>
            </div>
        );
    }
}

//<ShopFilter visible={shopStore.shopFilterVisible} />
// <ShopItem/>