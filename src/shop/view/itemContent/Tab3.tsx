import * as React from "react";
import {Checkbox} from "material-ui";
import {List, ListItem} from "material-ui/List";
import Subheader from "material-ui/Subheader";
import {shallowCompare} from "react-addons-shallow-compare";

export default class Tab3 extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
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