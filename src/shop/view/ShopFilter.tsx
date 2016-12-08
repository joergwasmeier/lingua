import * as React from "react";
import LinguaAppBar from "../../menu/view/AppBar";
import IconButton from "material-ui/IconButton";
import ArrowDownWard from "material-ui/svg-icons/navigation/close";
import ShopFilterEvent from "../event/ShopFilterEvent";
import {ShopFilterEventType} from "../event/ShopFilterEvent";
import {TextField, FlatButton} from "material-ui";
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import {style, cssRule, classes} from "typestyle";
import {ShopStyle} from "./ShopStyle";

interface IShopFilter {
    visible: boolean;
}

export default class ShopFilter extends FabaWebBaseComponent<IShopFilter> {
    refs: any;

    private style = style({
        backgroundColor: "#ffffff",
        overflow: "scroll",
        height: "100vh",
        transition: "transform 0.3s",
        transform: "translate3D(0, 0, 0)",
        "&.leave": {
            transform: "translate3D(0, 100vh, 0)"
        },
        "&.enter": {
            transform: "translate3D(0, 100vh, 0)"
        }
    });

    constructor(props) {
        super(props);
    }

    clickHandler() {
        console.log("clickhandler");
        new ShopFilterEvent(ShopFilterEventType.HIDE).dispatch();
    }

    render() {
        return (
            <div className={this.style}>
                <LinguaAppBar
                    title="Filter"
                    leftIcon={<IconButton onClick={this.clickHandler}>
                                <ArrowDownWard/>
                              </IconButton>}
                    disableEvent="true"
                />
                <div className={ShopStyle.container}>
                    <TextField floatingLabelText="Suchbegriff"/>

                    <FlatButton
                        onClick={this.clickHandler}>
                        Anzeigen
                    </FlatButton>


                    <List>
                        <ListItem
                            primaryText="When calls and notifications arrive"
                            secondaryText="Always interrupt"
                        />
                    </List>
                    <Divider />
                    <List>
                        <Subheader>Priority Interruptions</Subheader>
                        <ListItem primaryText="Events and reminders" rightToggle={<Toggle />}/>
                        <ListItem primaryText="Calls" rightToggle={<Toggle />}/>
                        <ListItem primaryText="Messages" rightToggle={<Toggle />}/>
                    </List>
                    <Divider />
                    <List>
                        <Subheader>Hangout Notifications</Subheader>
                        <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />}/>
                        <ListItem primaryText="Sounds" leftCheckbox={<Checkbox />}/>
                        <ListItem primaryText="Video sounds" leftCheckbox={<Checkbox />}/>
                        <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />}/>
                        <ListItem primaryText="Sounds" leftCheckbox={<Checkbox />}/>
                        <ListItem primaryText="Video sounds" leftCheckbox={<Checkbox />}/>
                        <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />}/>
                        <ListItem primaryText="Sounds" leftCheckbox={<Checkbox />}/>
                        <ListItem primaryText="Video sounds" leftCheckbox={<Checkbox />}/>
                    </List>
                </div>

            </div>
        )
    }
}