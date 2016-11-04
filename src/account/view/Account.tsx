import * as React from "react";

import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'

import {layoutStore} from "../../layout/LayoutStore";
import Icon1 from 'material-ui/svg-icons/social/whatshot';
import Icon2 from 'material-ui/svg-icons/file/cloud-download';
import Icon3 from 'material-ui/svg-icons/social/share';

import {Routes} from "../../A_Web";

export interface IAccountProps {
    childs:React.ReactElement<any>,
    showLogin:boolean
}

require("./Account.less");

export default class Account extends React.Component<IAccountProps, {}> {
    className: string = "Account";

    constructor(props:IAccountProps){
        super(props);
    }

    render(){
        if (this.props.showLogin){
            this.className = "Account showLogin";
        } else {
            this.className = "Account";
        }
        
        return(
            <div className={`center ${this.className}`}>
                <div className="intro">
                    {this.renderCarousel()}
                </div>

                <div className="login">
                    <p className="header">LINGUA </p>
                    {this.props.childs}
                </div>
            </div>
        )
    }

    start(){
        window.location.assign(Routes.LOGIN.route);
    }

    renderCarousel(){
        return(
            <AutoRotatingCarousel
                label="Einloggen und lernen"

                open
                interval={5000}
                mobile={layoutStore.mobile}
                landscape={layoutStore.landscape}
                onStart={()=>{this.start()}}
            >
                <Slide
                    media={<Icon1 className="homeIcons" color="#ffffff"/>}
                    mediaBackgroundStyle={{ backgroundColor: "#1abc9c" }}
                    contentStyle={{ backgroundColor: "#16a085" }}
                    title="Lingua"
                    subtitle="Vokabel lernen leicht gemacht"
                />
                <Slide
                    media={<Icon2 className="homeIcons" color="#ffffff"/>}
                    mediaBackgroundStyle={{ backgroundColor: "#3498db" }}
                    contentStyle={{ backgroundColor: "#2980b9" }}
                    title="On oder Offline!"
                    subtitle="Einfach Kurs auswählen, Herunterladen und immer und überall Lernen"
                />
                <Slide
                    media={<Icon3 className="homeIcons" color="#ffffff"/>}
                    mediaBackgroundStyle={{ backgroundColor: "#e74c3c" }}
                    contentStyle={{ backgroundColor: "#c0392b" }}
                    title="Kurse erstellen"
                    subtitle="Du willst deinen eigenen Sprachkurs erstellen kein Problem!"
                />
            </AutoRotatingCarousel>
        )
    }
}