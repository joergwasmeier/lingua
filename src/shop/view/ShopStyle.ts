import {style} from "typestyle";

export namespace ShopStyle {
    export const Shop = style({
        display: "flex",
        flexFlow: "column",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "black"
    });

    export const overview = (active:boolean = false) =>{
        if (active){
            return style({
                backgroundColor: "white",
                transition: "opacity 0.2s linear, transform 0.2s",
                willChange: "opacity, transform",
                //transform: "translate3d(0px,0px,0px)",
                transform:"perspective(500px) translate3d(0px, 0px, -50px);",
                opacity: 0.7
            });
        } else {
            return style({
                backgroundColor: "white",
                transition: "opacity 0.2s linear, transform 0.2s",
                willChange: "opacity, transform",
                transform: "translate3d(0px,0px,0px)",
                opacity: 1
            });
        }

    };

    export const container = style({
        height: "calc(100% - 60px)",
        width:"100vw"
    });

    export const filterButton = style({
        position: "fixed",
        bottom: 70,
        right: 16
    });

    export const AnimatedChild = style({
        position: "absolute"
    });
}