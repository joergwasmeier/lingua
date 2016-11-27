import {style} from "typestyle";

export namespace DashboardStyle {
    export const container = style({
        display: "flex",
        flexFlow: "column",
        height: "100vh",
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
}