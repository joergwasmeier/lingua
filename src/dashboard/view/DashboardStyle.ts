import {style, classes} from "typestyle";

export namespace DashboardStyle {
    export const container = style({
        display: "flex",
        flexFlow: "column",
        height: "calc(100vh - 60px)",
        overflow: "scroll"
    });

    export const h1 = style({
        order: 1,
        fontSize: 64,
        textAlign: "center",
        marginTop: 32,
        marginBottom: 16
    });

    export const h2 = style({
        order: 2,
        fontSize: 16,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 32,
        textAlign: "center"
    });

    export const h2Sub = classes(DashboardStyle.h2, style({order:3}));

    export const card = style({
        paddingBottom: 16,
        marginLeft: 16,
        marginRight: 16,
        order: 3
    });

    export const courseCard = style({
        backgroundColor: "#00B7FF",
        minHeight: 200,
        margin: 16
    });

    export const createButton = style({
        order: 4,
        maxWidth:256,
        marginLeft: "auto",
        marginRight: "auto"
    });
}