import * as React from "react";
import LinguaAppBar from "../../menu/view/AppBar";
import ShopItemVo from "../vo/ShopItemVo";
import {observer} from "mobx-react";
import {shopStore} from "../ShopStore";

import ArrowBack from "material-ui/svg-icons/navigation/arrow-back";
import {Tabs, Tab, RaisedButton, Checkbox, IconButton} from "material-ui";
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';

import HideShopItemEvent from "../event/HideShopItemEvent";
import ItemList from "../../common/widgets/itemList/ItemList";


import SwipeableViews from 'react-swipeable-views';

require("./ShopItem.less");

interface IShopItemProps {
    item: ShopItemVo;
}

export default class ShopItem extends React.Component<IShopItemProps,any> {
    className: string = "ShopItem";

    init: boolean = false;

    constructor(props) {
        super(props);

        this.state = {index: 0}

    }

    render() {
        return (
            <div className={this.className}>
                {this.renderContent()}
            </div>
        );
    }

    private buy() {
        console.log("buy");
    }

    handleChangeTabs = (value) => {
        this.setState({
            index: value,
        });
    };

    handleChangeIndex = (index) => {
        this.setState({
            index,
        });
    }

    renderContent() {
        return (
            <div>
                <LinguaAppBar
                    title={shopStore.selectedItem.name}
                    leftIcon={<IconButton onClick={()=>{new HideShopItemEvent().dispatch()}}><ArrowBack/></IconButton>}
                    disableEvent="true"
                />
                <div className="tabs">
                    <Tabs value={this.state.index}>
                        <Tab label="tab n°1" value={0} onClick={this.handleChangeTabs.bind(null, 0)}/>
                        <Tab label="tab n°2" value={1} onClick={this.handleChangeTabs.bind(null, 1)}/>
                        <Tab label="tab n°3" value={2} onClick={this.handleChangeTabs.bind(null, 2)}/>
                    </Tabs>

                    <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
                        <div className="slide">
                            slide n°1
                        </div>
                        <div className="slide">
                            slide n°2
                            <br />
                            <br />
                            <Checkbox label="test event propagation"/>
                        </div>
                        <div className="slide">
                            <List>
                                <Subheader>Hangout Notifications</Subheader>
                                <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />} />
                                <ListItem primaryText="Sounds" leftCheckbox={<Checkbox />} />
                                <ListItem primaryText="Video sounds" leftCheckbox={<Checkbox />} />
                                <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />} />
                                <ListItem primaryText="Sounds" leftCheckbox={<Checkbox />} />
                                <ListItem primaryText="Video sounds" leftCheckbox={<Checkbox />} />
                                <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />} />
                                <ListItem primaryText="Sounds" leftCheckbox={<Checkbox />} />
                                <ListItem primaryText="Video sounds" leftCheckbox={<Checkbox />} />
                            </List>

                        </div>
                    </SwipeableViews>
                </div>
            </div>
        )
    }

    private renderDetails() {
        return (
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

    private renderChapters() {
        return (
            <div className="chaptersContainer">
                <ItemList items={shopStore.items}></ItemList>
            </div>
        )
    }

    private renderScores() {
        return null;
    }
}

/*


 */
