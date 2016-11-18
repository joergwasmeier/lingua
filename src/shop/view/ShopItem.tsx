import * as React from "react";
import {Tabs, Tab, RaisedButton, Checkbox, IconButton} from "material-ui";

import ArrowBack from "material-ui/svg-icons/navigation/arrow-back";
import LinguaAppBar from "../../menu/view/AppBar";
import ShopItemVo from "../vo/ShopItemVo";
import HideShopItemEvent from "../event/HideShopItemEvent";
import SwipeableViews from "react-swipeable-views";

import {IShopStore} from "../ShopStore";

require("./ShopItem.less");

import Tab1 from "./itemContent/Tab1";
import Tab2 from "./itemContent/Tab2";
import Tab3 from "./itemContent/Tab3";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";

interface IShopItemProps {
    item: ShopItemVo;
    model: IShopStore;
    index: number;
}

export default class ShopItem extends FabaWebBaseComponent<IShopItemProps> {
    className: string = "ShopItem";

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.className}>
                {this.renderContent()}
            </div>
        );
    }

    handleChangeTabs = (value) => {

    };

    handleChangeIndex = (index) => {

    };

    hideHandler() {
        new HideShopItemEvent().dispatch();
    }

    renderContent() {
        return (
            <div>
                <LinguaAppBar
                    title={this.props.model.selectedItem.name}
                    leftIcon={<IconButton onClick={this.hideHandler}><ArrowBack/></IconButton>}
                    disableEvent="true"
                />
                <div className="tabs">
                    <Tabs value={0}>
                        <Tab label="tab n°1" value={0} onClick={this.handleChangeTabs.bind(null, 0)}/>
                        <Tab label="tab n°2" value={1} onClick={this.handleChangeTabs.bind(null, 1)}/>
                        <Tab label="tab n°3" value={2} onClick={this.handleChangeTabs.bind(null, 2)}/>
                    </Tabs>

                    <SwipeableViews index={0} onChangeIndex={this.handleChangeIndex}>
                        <Tab1 />
                        <Tab2 />
                        <Tab3 />
                    </SwipeableViews>
                </div>
            </div>
        );
    }
}