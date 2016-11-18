import * as React from "react";
import LinguaAppBar from "../../menu/view/AppBar";
import DashboardStore from "../DashboardStore";
import EmptyDashboard from "./EmptyDashboard";
import DashboardContent from "./DashboardContent";
require("./Dashboard.less");
import shallowCompare from "react-addons-shallow-compare";

interface IDashboardProps {
    model: DashboardStore;
}

export default class Dashboard extends React.Component<IDashboardProps,{}> {
    className: string = "Dashboard";
    vo: DashboardStore;

    constructor(props: IDashboardProps) {
        super(props);
        this.vo = this.props.model;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
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