import {style} from "typestyle";

export const loginStyle = style({
    '@media (min-width: 440px)': {
        position: "relative",
        maxWidth: 375,
        left: "50%",
        marginLeft: (375 / 2) * -1
    }
});

export const linkStyle = style({
    'a': {
        color: "white",
        textDecoration: "none"
    },
    marginBottom: 8
});