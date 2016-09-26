import * as React from "react";
import {AppBar, Drawer, MenuItem, Divider, Subheader, ListItem} from "material-ui";
import ActionInfo from "material-ui/svg-icons/action/info";
import MenuStore from "../MenuStore";
import {observer} from "mobx-react";
import ToggleMenuEvent from "../event/ToggleMenuEvent";

var classNames = require('classnames');

interface IMenuProps {
    model: MenuStore;
    history: any;
}

@observer
export default class Menu extends React.Component<IMenuProps,{}> {
    className: string = "Menu";
    props: IMenuProps;

    constructor(props) {
        super(props);
    }

    menuClickHandler(url: string) {
        this.props.history.push(url);
    }

    dockerWidth(): number {
        var calcWidth: number = window.innerWidth - 80;
        return (calcWidth > 400) ? 400 : calcWidth;
    }

    renderCourses() {
        var items: Array<any> = [];
        var id = 1;

        for (var course in this.props.model.courses) {
            items.push(<MenuItem key={"course"+id}>course.headLine</MenuItem>);
            id++;
        }

        return items;
    }

    renderCreateCourses() {
        var items: Array<any> = [];
        var id = 1;

        for (var course in this.props.model.createdCourses) {
            items.push(<MenuItem key={"createdCourses"+id}>course.headLine</MenuItem>);
            id++;
        }

        return items;
    }

    render() {
        //if (!model.userLoggedIn) return null;

        return (
            <div className={`center ${this.className}`}>
                <Drawer open={this.props.model.menuOpen}
                        width={this.dockerWidth()}
                        docked={false}
                        onRequestChange={(open:boolean) => new ToggleMenuEvent(open).dispatch()}
                        className="drawer"
                >
                    <div className="menuHeader">
                        <div className="profil">
                            <img className="profilPic" src={this.props.model.profil.picture}/>
                            <p>{this.props.model.profil.fullName()}</p>
                            <p>{this.props.model.profil.learnPoints}</p>
                        </div>
                    </div>


                    <MenuItem>Dashboard</MenuItem>
                    <Divider/>
                    <Subheader>Heruntergeladene Kurse</Subheader>
                    <ListItem primaryText="Italienisch für Anfänger" rightIcon={<ActionInfo />}></ListItem>
                    {this.renderCourses()}
                    <Divider/>
                    <Subheader>Kurse erstellen</Subheader>
                    {this.renderCreateCourses()}
                    <Divider/>
                    <MenuItem>Kurse Store</MenuItem>
                    <MenuItem>Einstellungen</MenuItem>
                    <MenuItem>Hilfe und Feedback</MenuItem>
                </Drawer>

            </div>
        )
    }
}

/*

 */