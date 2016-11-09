import * as React from "react";
import LinguaAppBar from "../../menu/view/AppBar";
import IconButton from "material-ui/IconButton";
import ArrowDownWard from "material-ui/svg-icons/navigation/close";
import ShopFilterEvent from "../event/ShopFilterEvent";
import {ShopFilterEventType} from "../event/ShopFilterEvent";
import {TextField, FlatButton} from "material-ui";

interface IShopFilter{
    visible:boolean
}

require('./ShopFilter.less');
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';

export default class ShopFilter extends React.Component<IShopFilter,null> {
    refs:any;

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="filterModal ShopFilter" ref="elm">
                <LinguaAppBar
                    title="Filter"
                    leftIcon={<IconButton onClick={()=>{new ShopFilterEvent(ShopFilterEventType.HIDE).dispatch()}}>
                                <ArrowDownWard/>
                              </IconButton>}
                    disableEvent="true"
                />
                <div className="container">
                    <TextField
                        className="textField"
                        floatingLabelText="Suchbegriff2"

                    />

                    <FlatButton
                                onClick={()=>{new ShopFilterEvent(ShopFilterEventType.HIDE).dispatch()}}>
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
                        <ListItem primaryText="Events and reminders" rightToggle={<Toggle />} />
                        <ListItem primaryText="Calls" rightToggle={<Toggle />} />
                        <ListItem primaryText="Messages" rightToggle={<Toggle />} />
                    </List>
                    <Divider />
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

            </div>
        )
    }
}