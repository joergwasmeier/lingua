import * as React from "react";
import {observer} from "mobx-react";
var MediaQuery = require('react-responsive');
var matchMedia = require('matchmedia');

import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import TestComp from "./TestComp";

interface IAccountProps {
    childs:React.ReactElement<any>
}

require("./Account.less");

@observer
export default class Account extends React.Component<IAccountProps,any> {
    className: string = "Account";

    _mql;
    _dql;

    constructor(props:IAccountProps){
        super(props);

        this.state = {
            'landscape':false,
            'mobile':false
        };

        this._mql = matchMedia('only screen and (orientation:landscape)');
        this._mql.addListener(this.updateMatches.bind(this));

        this._dql = matchMedia('only screen and (max-width: 1024px)');
        this._dql.addListener(this.updateMatches.bind(this));
    }

    componentDidMount(){
        this.updateMatches();
    }

    updateMatches(){
        if (this._mql.matches){
            this.setState({landscape:true})
        } else {
            this.setState({landscape:false})
        }

        if (this._dql.matches){
            this.setState({mobile:true})
        } else {
            this.setState({mobile:false})
        }
    }

    render(){
        return(
            <div className={`center ${this.className}`}>
                <div className="content">
                    <p className="header">LINGUA </p>

                    {this.props.childs}
                </div>
            </div>
        )
    }

    renderBoarding(){
        return(

            <AutoRotatingCarousel
                label="Get started"
                open
                mobile={this.state.mobile}
                landscape={this.state.landscape}
            >
                <Slide
                    mediaBackgroundStyle={{ backgroundColor: "#ff00ff" }}
                    contentStyle={{ backgroundColor: "#0000ff" }}
                    >
                    <div>dsfsfd dfsdsfdsf sdfds</div>
                </Slide>
                <Slide
                    media={<img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />}
                    mediaBackgroundStyle={{ backgroundColor: "#ff00ff" }}
                    contentStyle={{ backgroundColor: "#0000ff" }}
                    title="This is a very cool feature"
                    subtitle="Just using this will blow your mind."
                />
                <Slide
                    media={<img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />}
                    mediaBackgroundStyle={{ backgroundColor: "#ff00ff" }}
                    contentStyle={{ backgroundColor: "#0000ff" }}
                    title="Ever wanted to be popular?"
                    subtitle="Well just mix two colors and your are good to go!"
                />
                <Slide
                    media={<img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />}
                    mediaBackgroundStyle={{ backgroundColor: "#ff00ff" }}
                    contentStyle={{ backgroundColor: "#0000ff" }}
                    title="May the force be with you"
                    subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars universe."
                />
            </AutoRotatingCarousel>
        )
    }
}