import * as React from "react";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import {BottomNavigation, BottomNavigationItem} from "material-ui/BottomNavigation";
import ActionHome from 'material-ui/svg-icons/action/home';
import BottomMenuEvent from "../event/BottomMenuEvent";
import {BottomMenuEventType} from "../event/BottomMenuEvent";
import {style} from "typestyle";

const favoritesIcon = <ActionHome>restore</ActionHome>;

export interface IBottomMenuProps {
    selectedIndex: number;
    hide: boolean;
}

export default class BottomMenu extends FabaWebBaseComponent<IBottomMenuProps> {
    bottomStyle = (hide: boolean = false) => {
        return style({
            position: "fixed !important",
            bottom: 0
        })
    };

    showHome = () => {
        new BottomMenuEvent(BottomMenuEventType.HOME).dispatch();
    };

    showCourses = () => {
        new BottomMenuEvent(BottomMenuEventType.COURSE).dispatch();
    };

    showShop = () => {
        new BottomMenuEvent(BottomMenuEventType.SHOP).dispatch();
    };

    showOther = () => {
        new BottomMenuEvent(BottomMenuEventType.OTHER).dispatch();
    };

    render() {
        return (
            <BottomNavigation className={this.bottomStyle(this.props.hide)} selectedIndex={this.props.selectedIndex}>
                <BottomNavigationItem
                    label="Dashboard"
                    icon={favoritesIcon}
                    onTouchTap={this.showHome}
                />
                <BottomNavigationItem
                    label="Courses"
                    icon={favoritesIcon}
                    onTouchTap={this.showCourses}
                />
                <BottomNavigationItem
                    label="Shop"
                    icon={favoritesIcon}
                    onTouchTap={this.showShop}
                />
                <BottomNavigationItem
                    label="Other"
                    icon={favoritesIcon}
                    onTouchTap={this.showOther}
                />
            </BottomNavigation>
        );
    }
}