import * as React from "react";
import {AppBar, Drawer, MenuItem, Divider, Subheader, ListItem} from "material-ui";
import ActionInfo from "material-ui/svg-icons/action/info";
import {AppModel} from "../../common/AppModel";

var classNames = require('classnames');

export default class Menu extends React.Component<{},{}> {
  className:string = "Menu";

  state = {
    open: false,
    loggedIn: false
  };

  props:any

  constructor(props) {
    super(props);
  }

  componentWillMount():void {
    
  }

  componentWillUnmount():void {

  }

  handleToggle = () => {
    console.log("handleToggle");
    this.setState({open: !this.state.open});
  };

  handleClose = () => this.setState({open: false});

  menuClickHandler(url:string) {
    this.setState({open: false});
    this.props.history.push(url);
  }

  dockerWidth():number{
    var calcWidth:number = window.innerWidth - 80;
    return (calcWidth > 400) ? 400 : calcWidth;
  }

  renderCourses(){
    var items:Array<any> = [];
    
    for (var course in AppModel.getInstance().menuStore.courses) {
      items.push(<MenuItem>course.headLine</MenuItem>)
    }
  }

  render() {
    return (
        <div className={`center ${this.className}`}>

          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onTitleTouchTap={this.handleToggle}
            style={{position:"fixed"}}
            className="appBar"
            onLeftIconButtonTouchTap={this.handleToggle}
          />

          <Drawer open={this.state.open}
                  width={this.dockerWidth()}
                  docked={true}
                  onRequestChange={(open) => this.setState({open})}
                  className="drawer"
          >
            <div className="menuHeader">
              <div className="profil">
                <img className="profilPic" src={AppModel.getInstance().menuStore.profil.picture} />
                <p>{AppModel.getInstance().menuStore.profil.fullName()}</p>
                <p>{AppModel.getInstance().menuStore.profil.learnPoints}</p>
              </div>
            </div>


            <MenuItem>Dashboard</MenuItem>
            <Divider/>
            <Subheader>Heruntergeladene Kurse</Subheader>
            <ListItem primaryText="Italienisch für Anfänger" rightIcon={<ActionInfo />}></ListItem>
            {this.renderCourses()}
            <MenuItem>Kurse Store</MenuItem>
            <MenuItem>Kurse Store</MenuItem>
            <MenuItem>Kurse Store</MenuItem>
            <Divider/>
            <Subheader>Kurse erstellen</Subheader>
            <MenuItem>Kurse Store</MenuItem>
            <Divider/>
            <MenuItem>Kurse Store</MenuItem>
            <MenuItem>Einstellungen</MenuItem>
            <MenuItem>Hilfe & Feedback</MenuItem>
          </Drawer>

        </div>
      )
  }
}