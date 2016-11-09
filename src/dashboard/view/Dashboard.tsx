import * as React from "react";
import LinguaAppBar from "../../menu/view/AppBar";
import {observer} from "mobx-react";
import DashboardStore from "../DashboardStore";
import EmptyDashboard from "./EmptyDashboard";
import DashboardContent from "./DashboardContent";
require("./Dashboard.less");

interface IDashboardProps {
    model: DashboardStore;
}

@observer
export default class Dashboard extends React.Component<IDashboardProps,{}> {
    className: string = "Dashboard";
    vo: DashboardStore;

    constructor(props: IDashboardProps) {
        super(props);
        this.vo = this.props.model;
    }

    render() {
        return (
            <div className={this.className}>
                <LinguaAppBar title="Dashboard" />
                {this.renderContent()}
            </div>
        );
    }

    private renderContent(){
        if (this.vo.data.pointsToday >= 2000) return <DashboardContent/>;
        else return <EmptyDashboard />;
    }
}