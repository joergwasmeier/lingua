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
    }
});