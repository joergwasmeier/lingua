import {style} from "typestyle";

export namespace ShopStyle {
    export const Shop = style({
        display: "flex",
        flexFlow: "column",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "black"
    });

    export const overview = style({
        backgroundColor: "white",
        transition: "opacity 0.2s linear, transform 0.2s",
        willChange: "opacity, transform",
        transform: "translate3d(0px,0px,0px)",
        opacity: 1
    });

    export const container = style({
        height: "calc(100% - 60px)",
        overflow: "scroll",
    });

    export const filterButton = style({
        position: "fixed",
        bottom: 0,
        right: 16
    });

    export const AnimatedChild = style({
        position: "absolute"
    });
}