import * as React from "react";
import {observer} from "mobx-react";
import LinguaAppBar from "../../menu/view/AppBar";
import ItemList from "../../common/widgets/itemList/ItemList";
import {shopStore} from "../ShopStore";

require("./Shop.less");

@observer
export default class Shop extends React.Component<null,null> {
    className: string = "Shop";

    render() {
        return (
            <div className={this.className}>
                <LinguaAppBar title="Shop"/>
                <ItemList items={shopStore.items}/>
            </div>
        );
    }
}