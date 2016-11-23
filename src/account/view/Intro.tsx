import * as React from "react";
import {AutoRotatingCarousel, Slide} from "material-auto-rotating-carousel";
import Icon1 from "material-ui/svg-icons/social/whatshot";
import Icon2 from "material-ui/svg-icons/file/cloud-download";
import Icon3 from "material-ui/svg-icons/social/share";
import FabaWebBaseComponent from "@fabalous/runtime-web/FabaWebBaseComponent";
import Routes from "../../Routes";
import {style} from "typestyle";

export interface IIntroProps {
    mobile: boolean;
    landscape: boolean;
}

export default class Intro extends FabaWebBaseComponent<IIntroProps> {
    iconStyle = style({
        width: "256px !important",
        height: "256px !important"
    });

    start() {
        window.location.assign("#" + Routes.LOGIN.route);
    }

    render() {
        return (
            <AutoRotatingCarousel
                label="Einloggen und lernen"
                open
                interval={5000}
                mobile={this.props.mobile}
                landscape={this.props.landscape}
                onStart={()=>{this.start()}}
            >
                <Slide
                    media={<Icon1 className={this.iconStyle} color="#ffffff"/>}
                    mediaBackgroundStyle={{ backgroundColor: "#1abc9c" }}
                    contentStyle={{ backgroundColor: "#16a085" }}
                    title="Lingua"
                    subtitle="Vokabel lernen leicht gemacht "
                />
                <Slide
                    media={<Icon2 className={this.iconStyle} color="#ffffff"/>}
                    mediaBackgroundStyle={{ backgroundColor: "#3498db" }}
                    contentStyle={{ backgroundColor: "#2980b9" }}
                    title="On oder Offline!"
                    subtitle="Einfach Kurs auswählen, Herunterladen und immer und überall Lernen"
                />
                <Slide
                    media={<Icon3 className={this.iconStyle} color="#ffffff"/>}
                    mediaBackgroundStyle={{ backgroundColor: "#e74c3c" }}
                    contentStyle={{ backgroundColor: "#c0392b" }}
                    title="Kurse erstellen"
                    subtitle="Du willst deinen eigenen Sprachkurs erstellen kein Problem!"
                />
            </AutoRotatingCarousel>
        );
    }

}