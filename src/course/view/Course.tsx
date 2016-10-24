import * as React from "react";
import {RaisedButton, LinearProgress} from "material-ui";
import LinguaAppBar from "../../menu/view/AppBar";
import CourseStore from "../CourseStore";

require("./Course.less");

interface ICourseProps{
    model:CourseStore;
}

export default class Course extends React.Component<ICourseProps,{}> {
    className: string = "Course";

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.className}>
                {this.renderLoading()}

            </div>
        );
    }

    private renderLoading() {
        if (!this.props.model.loading) return;

        return(
            <div className="loading">
                Loading
                <LinearProgress />
            </div>
        )
    }

    renderContent(){
        return(
            <div>
                <LinguaAppBar title={this.props.model.data.title}/>

                <div className="content">
                    <h1>Lerne dich in einem italienischen Restaurant auszudrücken.</h1>
                    <h3>Erstellt von Elisa</h3>

                    <h4>Dein Fortschritt</h4>

                    20%

                    <br/>

                    <p>20 von 200 Vokabeln gelernt!</p>

                    <br/>

                    <RaisedButton style={{width:"100%", height:"48px"}} label="Kurs starten!" secondary={true}/>
                </div>
            </div>
        );
    }
}