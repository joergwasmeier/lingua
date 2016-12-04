import * as ReactPerf from 'react-addons-perf'

import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import FabaApiConnection from "@fabalous/runtime-web/transport/FabaApiConnection";
import FabaCore from "@fabalous/core/FabaCore";
import FabaStore from "@fabalous/core/FabaStore";

import MenuMediator from "./menu/MenuMediator";
import LayoutMediator from "./layout/LayoutMediator";
import {IcommonStore, commonImStore, IStore} from "./common/commonImStore";
import Routes from "./Routes";
import Layout from "./layout/Layout";
import "./layout/style/reset";

declare var module:any;

export default class A_Web extends FabaRuntimeWeb {
    constructor(store:IStore) {
        super(store, Routes, Layout, module);
        ReactPerf.start();

        try {
            let injectTapEventPlugin = require("react-tap-event-plugin");
            injectTapEventPlugin();
        } catch (e) {}


        let host: string = window.location.host + "/api/";
        if (host === "192.168.0.31:8080/api/") host = "192.168.0.31:3120/";
        if (host === "localhost:8080/api/") host = "localhost:3120/";

        FabaCore.addMediator(MenuMediator);
        FabaCore.addMediator(LayoutMediator);

        FabaRuntimeWeb.addServerEndPoint(new FabaApiConnection(window.location.protocol + "//" + host), "api");
    }
}
new A_Web(new FabaStore<IcommonStore>(commonImStore));