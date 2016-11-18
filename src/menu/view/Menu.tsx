import * as React from "react";
import {Drawer, MenuItem, Divider, Subheader, ListItem} from "material-ui";
import ActionInfo from "material-ui/svg-icons/action/info";
import ToggleMenuEvent from "../event/ToggleMenuEvent";
import {Routes} from "../../A_Web";
import {store} from "../../common/commonImStore";
import {shallowCompare} from "react-addons-shallow-compare";

interface IMenuProps {
    open: boolean;
    history: any;
}

require("./Menu.less");

export default class Menu extends React.Component<IMenuProps, {drawer: boolean}> {
    className: string = "Menu";
    props: IMenuProps;

    constructor(props) {
        super(props);

        this.state = {drawer: false};
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    private menuClickHandler(url: string) {
        window.location.assign("#" + url);

        new ToggleMenuEvent(false).dispatch();
    }

    private dockerWidth(): number {
        let calcWidth: number = window.innerWidth - 80;
        return (calcWidth > 400) ? 400 : calcWidth;
    }

    private openCourse() {
        console.log("openCourse");
    }

    private renderCourses() {
        var items: Array<any> = [];
        var id = 1;

        /*
        for (var course in this.props.model.courses) {
            items.push(
                <MenuItem key={"course"+id} onClick={()=>this.openCourse()}>
                    course.headLine
                </MenuItem>
            );
            id++;
        }
         */

        return items;
    }

    private renderCreateCourses() {
        let items: Array<any> = [];
        let id = 1;

        /*
         for (let course in this.props.model.createdCourses) {
         items.push(<MenuItem key={"createdCourses"+id}>course.headLine</MenuItem>);
         id++;
         }
         */

        return items;
    }

    render() {
        if (!store.appStore.account || !store.appStore.account.login ||
            store.appStore.account.login.loggedIn === false) return null;

        return (
            <div className={`center ${this.className}`}>
                <Drawer open={this.props.open}
                        docked={false}
                        onRequestChange={(open:boolean) => new ToggleMenuEvent(open).dispatch()}
                >
                    <div className="menuHeader">

                    </div>
                    <MenuItem onClick={() => this.menuClickHandler(Routes.DASBOARD.route)}>Dashboard</MenuItem>
                    <Divider/>
                    <Subheader>Heruntergeladene Kurse</Subheader>
                    <ListItem primaryText="Italienisch für Anfänger"
                              onClick={(e)=>this.menuClickHandler('/course/10001/')}
                              rightIcon={<ActionInfo />}></ListItem>
                    <Divider/>
                    <Subheader>Kurse erstellen</Subheader>
                    {this.renderCreateCourses()}
                    <Divider/>

                    <MenuItem onClick={() => this.menuClickHandler(Routes.STORE.route)}>Kurse Store</MenuItem>
                    <MenuItem>Einstellungen</MenuItem>
                    <MenuItem>Hilfe und Feedback</MenuItem>
                </Drawer>

            </div>
        );
    }
}
/*
 <div className="profil">
 <img className="profilPic" src={this.props.model.profil.picture}/>
 <p>{this.props.model.profil.fullName()}</p>
 <p>{this.props.model.profil.learnPoints}</p>
 </div>
 {this.renderCourses()}

 */