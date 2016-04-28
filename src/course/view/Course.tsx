import * as React from "react";
import RaisedButton from "material-ui/lib/raised-button";
import {AppModel} from "../../common/AppModel";

require("./Course.less");

export default class Course extends React.Component<{},{}> {
  className:string = "Course";

  constructor() {
    super();
  }

  componentDidMount():void {
    AppModel.getInstance().appBarTitle = "Kursname";
  }

  render() {
    return (
      <div className={this.className}>
        <h1>Lerne dich in einem italienischen Restaurant auszudrücken.</h1>
        <h3>Erstellt von Elisa</h3>

        <h4>Dein Fortschritt</h4>

        20%

        <br/>

        <p>20 von 200 Vokabeln gelernt!</p>

        <br/>

        <RaisedButton style={{width:"100%", height:"48px"}} label="Kurs starten!" secondary={true}/>
      </div>
    );
  }
}