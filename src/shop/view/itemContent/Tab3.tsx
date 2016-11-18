import * as React from "react";
import {Checkbox} from "material-ui";
import {List, ListItem} from "material-ui/List";
import Subheader from "material-ui/Subheader";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";

export default class Tab3 extends FabaWebBaseComponent<{}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slide">
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
        );
    }
}