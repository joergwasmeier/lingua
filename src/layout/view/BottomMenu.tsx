import * as React from "react";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import ActionInfo from "material-ui/svg-icons/action/info";
import {BottomNavigation, BottomNavigationItem} from "material-ui/BottomNavigation";
import Routes from "../../Routes";

export interface IBottomMenuProps {
    selectedIndex: number;
}

export default class BottomMenu extends FabaWebBaseComponent<{}> {

    showHome = () => {
        window.location.assign("#" + Routes.DASBOARD.route);
    };

    showCourses = () => {
        window.location.assign("#" + Routes.STORE.route);
    };

    showShop = () => {
        window.location.assign("#" + Routes.STORE.route);
    };

    showOther = () => {
        window.location.assign("#" + Routes.STORE.route);
    };

    render() {
        return (
            <BottomNavigation selectedIndex={0} style={{"position":"fixed", "bottom":"0px"}}>
                <BottomNavigationItem
                    label="Home"
                    icon={<ActionInfo />}
                    onTouchTap={this.showHome}
                />
                <BottomNavigationItem
                    label="My Courses"
                    icon={<ActionInfo />}
                    onTouchTap={this.showCourses}
                />
                <BottomNavigationItem
                    label="Shop"
                    icon={<ActionInfo />}
                    onTouchTap={this.showShop}
                />
                <BottomNavigationItem
                    label="Other"
                    icon={<ActionInfo />}
                    onTouchTap={this.showOther}
                />
            </BottomNavigation>
        );
    }
}