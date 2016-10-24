import * as React from "react";
import LinguaAppBar from "../../menu/view/AppBar";
import ShopItemVo from "../vo/ShopItemVo";
import {observer} from "mobx-react";
import {shopStore} from "../ShopStore";
import {Tabs, Tab, RaisedButton} from "material-ui";

import ArrowBack from "material-ui/svg-icons/navigation/arrow-back";
import IconButton from "material-ui/IconButton";
import HideShopItemEvent from "../event/HideShopItemEvent";
import ItemList from "../../common/widgets/itemList/ItemList";

import SwipeableViews from 'react-swipeable-views';

require("./ShopItem.less");

interface IShopItemProps {
    item: ShopItemVo;
}

@observer
export default class ShopItem extends React.Component<IShopItemProps,null> {
    className: string = "ShopItem";

    init: boolean = false;

    render() {
        if (shopStore.shopItemVisible){
            this.className = "ShopItem active";
        } else {
            this.className = "ShopItem";
        }

        return (
            <div className={this.className}>
                {this.renderContent()}
            </div>
        );
    }

    private buy(){
        console.log("buy");
    }

    renderContent() {
        if (!shopStore.selectedItem) return null;

        return (
            <div>
                <LinguaAppBar
                    title={shopStore.selectedItem.name}
                    leftIcon={<IconButton onClick={()=>{new HideShopItemEvent().dispatch()}}><ArrowBack/></IconButton>}
                    disableEvent="true"
                />

                <Tabs className="tabs">
                    <Tab label="Info" >
                        {this.renderDetails()}
                    </Tab>
                    <Tab label="Lektionen" >
                        {this.renderChapters()}
                    </Tab>
                </Tabs>
            </div>
        )
    }

    private renderDetails(){
        return(
            <div className="content">
                <h1>{shopStore.selectedItem.name}</h1>

                <img src={shopStore.selectedItem.imgSrc}/>

                <p>{shopStore.selectedItem.description}</p>

                <div>
                    <p>Veröffentlicht am: {shopStore.selectedItem.publishedData}</p>
                    <p>Veröffentlicht durch: {shopStore.selectedItem.publisherName}</p>
                </div>

                <RaisedButton className="loadCourse" label="Kurs Herunterladen"
                              secondary={false} onClick={this.buy} fullWidth={true}/>

            </div>
        );
    }

    private renderChapters(){
        return (
            <div className="chaptersContainer">
                <ItemList items={shopStore.items} ></ItemList>
            </div>
        )
    }

    private renderScores(){
        return null;
    }
}