import * as React from "react";

require("./CourseOverview.less");

export default class CourseOverview extends React.Component<{},{}> {
  className:string = "CourseOverview";

  constructor() {
    super();
  }

  componentDidMount():void {
    //AppModel.getInstance().appBarTitle = "Heruntergeladene Kurse";
  }

  render(){
    return(
        <div></div>
    );
  }
/*
  render() {
    return (
      <div className={this.className}>
        <List>
          <ListItem
            leftAvatar={<Avatar src="images/ok-128.jpg" />}
            primaryText="Brendan Lim"
            secondaryText={
            <p>
              <span style={{color: Colors.darkBlack}}>Brunch this weekend?</span><br/>
              I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
            </p>
          }
            secondaryTextLines={2}
          />
          <Divider />
          <ListItem
            leftAvatar={<Avatar src="images/kolage-128.jpg" />}
            primaryText="me, Scott, Jennifer"
            secondaryText={
            <p>
              <span style={{color: Colors.darkBlack}}>Summer BBQ</span><br/>
              Wish I could come, but I&apos;m out of town this weekend.
            </p>
          }
            secondaryTextLines={2}
          />
          <Divider/>
          <ListItem
            leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
            primaryText="Grace Ng"
            secondaryText={
            <p>
              <span style={{color: Colors.darkBlack}}>Oui oui</span><br/>
              Do you have any Paris recs? Have you ever been?
            </p>
          }
            secondaryTextLines={2}
          />
          <Divider/>
          <ListItem
            leftAvatar={<Avatar src="images/kerem-128.jpg" />}
            primaryText="Kerem Suer"
            secondaryText={
            <p>
              <span style={{color: Colors.darkBlack}}>Birthday gift</span><br/>
              Do you have any ideas what we can get Heidi for her birthday? How about a pony?
            </p>
          }
            secondaryTextLines={2}
          />
          <Divider />
          <ListItem
            leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
            primaryText="Raquel Parrado"
            secondaryText={
            <p>
              <span style={{color: Colors.darkBlack}}>Recipe to try</span><br/>
              We should eat this: grated squash. Corn and tomatillo tacos.
            </p>
          }
            secondaryTextLines={2}
          />
        </List>


      </div>
    );
  }
  */
}