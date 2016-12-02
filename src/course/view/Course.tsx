import * as React from "react";
import {RaisedButton, LinearProgress} from "material-ui";
import LinguaAppBar from "../../menu/view/AppBar";
import CourseStore from "../CourseStore";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import {style} from "typestyle";

interface ICourseProps{
    model:CourseStore;
}

export default class Course extends FabaWebBaseComponent<ICourseProps> {
    courseStyle = style({
        "content": {
            paddingTop: 88,

        },
        ">h1": {
            textAlign: "center"
        }
    });

    render() {
        return (
            <div className={this.courseStyle}>
                {this.renderLoading()}

                {this.renderContent()}
            </div>
        );
    }

    private renderLoading() {
        if (!this.props.model.loading) return;

        return(
            <div>
                Loading
                <LinearProgress />
            </div>
        )
    }

    renderContent(){
        return(
            <div>
                <LinguaAppBar title={this.props.model.data.title}/>

                <div>
                    <img />
                    <h1>{this.props.model.data.title}</h1>
                    <h3>{this.props.model.data.createBy}</h3>

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