import * as React from "react";
import {Tabs, Tab, RaisedButton, Checkbox, IconButton} from "material-ui";
import {List, ListItem} from "material-ui/List";
import Subheader from "material-ui/Subheader";
import ArrowBack from "material-ui/svg-icons/navigation/arrow-back";

import LinguaAppBar from "../../menu/view/AppBar";
import ShopItemVo from "../vo/ShopItemVo";
import HideShopItemEvent from "../event/HideShopItemEvent";
import ItemList from "../../common/widgets/itemList/ItemList";

import SwipeableViews from "react-swipeable-views";
import {IShopStore} from "../ShopStore";

require("./ShopItem.less");

import shallowCompare from "react-addons-shallow-compare";
import Tab1 from "./itemContent/Tab1";
import Tab2 from "./itemContent/Tab2";
import Tab3 from "./itemContent/Tab3";

interface IShopItemProps {
    item: ShopItemVo;
    model: IShopStore;
    index: number;
}

export default class ShopItem extends React.Component<IShopItemProps, any> {
    className: string = "ShopItem";

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        return (
            <div className={this.className}>
                {this.renderContent()}
            </div>
        );
    }

    handleChangeTabs = (value) => {
        this.setState({
            index: value,
        });
    };

    handleChangeIndex = (index) => {
        this.setState({
            index
        });
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
                    <Tabs value={this.state.index}>
                        <Tab label="tab n°1" value={0} onClick={this.handleChangeTabs.bind(null, 0)}/>
                        <Tab label="tab n°2" value={1} onClick={this.handleChangeTabs.bind(null, 1)}/>
                        <Tab label="tab n°3" value={2} onClick={this.handleChangeTabs.bind(null, 2)}/>
                    </Tabs>

                    <SwipeableViews index={this.props.index} onChangeIndex={this.handleChangeIndex}>
                        <Tab1 />
                        <Tab2 />
                        <Tab3 />
                    </SwipeableViews>
                </div>
            </div>
        );
    }

    private renderDetails() {
        return (
            <div className="content">
                <h1>{this.props.model.selectedItem.name}</h1>

                <img src={this.props.model.selectedItem.imgSrc}/>

                <p>{this.props.model.selectedItem.description}</p>

                <div>
                    <p>Veröffentlicht am: {this.props.model.selectedItem.publishedData}</p>
                    <p>Veröffentlicht durch: {this.props.model.selectedItem.publisherName}</p>
                </div>

                <RaisedButton className="loadCourse" label="Kurs Herunterladen"
                              secondary={false}
                              fullWidth={true}/>

            </div>
        );
    }

    private renderChapters() {
        return (
            <div className="chaptersContainer">
                <ItemList items={this.props.model.items}></ItemList>
            </div>
        );
    }

    private renderScores() {
        return null;
    }
}