import {style, cssRule} from "typestyle";
import {rgba} from "typestyle/lib/csx";

const fontPath = require("./../../common/assets/fonts/roboto_regular_macroman/Roboto-Regular-webfont.woff");
const cssP = "url('" + fontPath + "')";

cssRule('@font-face', {
    fontFamily: 'robotoregular',
    src: cssP,
    fontWeight: "normal",
    fontStyle: "normal"
});

export const resetStyle = style({
    height: "100%",
    "-webkit-tap-highlight-color": rgba(255, 255, 255, 0),

    "body": {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        fontFamily: "robotoregular"
    },

    "input:-webkit-autofill": {
        color: "#fff !important",
        transition: "all 0.2s",
        transitionDelay: "9999999s",
        "-webkit-box-shadow": "0 0 0 1000px rgba(100, 100, 100, 1) inset !important"
    },

    "html, body": {
        border: 0,
        lineHeight: "1.5",
        margin: 0,
        padding: 0
    },

    "div, span, object, iframe, img, table, caption, thead, tbody, tfoot, tr, tr, td, article, aside, canvas, details, figure, hgroup, menu, nav, footer, header, section, summary, mark, audio, video": {
        border: 0,
        margin: 0,
        padding: 0
    },

    "h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, address, cit, code, del, dfn, em, ins, q, samp, small, strong, sub, sup, b, i, hr, dl, dt, dd, ol, ul, li, fieldset, legend, label": {
        border: 0,
        fontSize: "100%",
        verticalAlign: "baseline",
        margin: 0,
        padding: 0
    },

    "article, aside, canvas, figure, figure img, figcaption, hgroup, footer, header, nav, section, audio, video": {
        display: "block"
    },

    "table": {
        borderCollapse: "separate",
        borderSpacing: 0,
        "caption, th, td": {
            textAlign: "left",
            verticalAlign: "middle"
        }
    },
    "a img": {
        border: 0
    },

    ":focus": {
        outline: 0
    }
});