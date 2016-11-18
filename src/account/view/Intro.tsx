import * as React from "react";
import {shallowCompare} from "react-addons-shallow-compare";
import {AutoRotatingCarousel, Slide} from "material-auto-rotating-carousel";
import Icon1 from "material-ui/svg-icons/social/whatshot";
import Icon2 from "material-ui/svg-icons/file/cloud-download";
import Icon3 from "material-ui/svg-icons/social/share";
import {Routes} from "../../A_Web";

export interface IIntroProps {
}

export default class Intro extends React.Component<IIntroProps, {}> {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    start() {
        window.location.assign("#" + Routes.LOGIN.route);
    }

    render() {
        return (
            <AutoRotatingCarousel
                label="Einloggen und lernen"
                open
                interval={5000}
                mobile={true}
                landscape={false}
                onStart={()=>{this.start()}}
            >
                <Slide
                    media={<Icon1 className="homeIcons" color="#ffffff"/>}
                    mediaBackgroundStyle={{ backgroundColor: "#1abc9c" }}
                    contentStyle={{ backgroundColor: "#16a085" }}
                    title="Lingua"
                    subtitle="Vokabel lernen leicht gemacht "
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
        );
    }

}