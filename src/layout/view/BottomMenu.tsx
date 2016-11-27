import * as React from "react";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import ActionInfo from "material-ui/svg-icons/action/info";
import {BottomNavigation, BottomNavigationItem} from "material-ui/BottomNavigation";
import Routes from "../../Routes";
import FontIcon from 'material-ui/FontIcon';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

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
                    icon={recentsIcon}
                    onTouchTap={this.showHome}
                />
                <BottomNavigationItem
                    label="My Courses"
                    icon={favoritesIcon}
                    onTouchTap={this.showCourses}
                />
                <BottomNavigationItem
                    label="Shop"
                    icon={recentsIcon}
                    onTouchTap={this.showShop}
                />
                <BottomNavigationItem
                    label="Other"
                    icon={recentsIcon}
                    onTouchTap={this.showOther}
                />
            </BottomNavigation>
        );
    }
}