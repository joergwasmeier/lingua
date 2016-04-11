import A_Web from "../src/A_Web";
import FabaCore from "fabalous-core/core/FabaCore";
import {log} from "util";

describe("A suite", function() {
    beforeEach(()=> {
        var elem = document.createElement("div");
        elem.id = "container";

        //console.log(elem);
        document.getElementsByTagName("body")[0].appendChild(elem);
    });

    it("contains spec with an expectation", function() {
        var web:A_Web = new A_Web();

       // console.log(FabaCore.mediators);
        expect(true).toBe(true);


    });
});