import * as React from "react";
import {AppBar} from "material-ui";
import {AppModel} from "../common/AppModel";
//import LeftNav from "material-ui/left-nav";

require('./Layout.less');

interface IHistory{
  push;

}

export default class Layout extends React.Component<{},{}> {
    className:string = "App";
    state = {
        open: false,
        loggedIn:false,
        appTitle:""
    };

    props:any;

    constructor(props) {
        super(props);
    }

    handleToggle = () => {
        console.log("handle");
        this.setState({open: !this.state.open});
    };

    handleClose = () => this.setState({open: false});

    handleTouchTap() {
        alert('onTouchTap triggered on the title component');
    }

    componentWillMount():void {
      AppModel.getInstance().addChangeListener( () =>{
        this.setState({"appTitle":AppModel.getInstance().appBarTitle});
      } );
    }

    componentWillUnmount():void {
      AppModel.getInstance().removeChangeListener( () => this.forceUpdate());
    }

    menuClickHandler(url:string){
      this.setState({open: false});
      this.props.history.push("/"+url+"/");
    }

    renderMenu(){
        //if (!AppModel.getInstance().busy) return;

        return (
            <div>
                <AppBar
                    title={this.state.appTitle}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={e => this.handleToggle()}
                    className="AppBar"
                />
            </div>
        )
    }

    render() {
        return (
            <div className={`center ${this.className}`}>

                {this.renderMenu()}

                {this.props.children}
            </div>
        )
    }
}