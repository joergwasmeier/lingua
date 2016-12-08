import * as React from "react";
import LinguaAppBar from "../../menu/view/AppBar";
import EmptyDashboard from "./EmptyDashboard";
import DashboardContent from "./DashboardContent";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import {DashboardStyle} from "./DashboardStyle";
import {IDashboardStore} from "../DashboardStore";
import BottomMenu from "../../layout/view/BottomMenu";

interface IDashboardProps {
    model: IDashboardStore;
}

export default class Dashboard extends FabaWebBaseComponent<IDashboardProps> {
    constructor(props: IDashboardProps) {
        super(props);
    }

    render() {
        return (
            <div className={DashboardStyle.container}>
                <LinguaAppBar title="Dashboard" />
                {this.renderContent()}
                <BottomMenu selectedIndex={0}/>
            </div>
        );
    }

    private renderContent(){
        if (this.props.model.pointsToday >= 2000) return <DashboardContent model={this.props.model}/>;
        else return <EmptyDashboard model={this.props.model}/>;
    }
}