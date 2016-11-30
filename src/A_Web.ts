import FabaRuntimeWeb from "@fabalous/runtime-web/FabaRuntimeWeb";
import FabaApiConnection from "@fabalous/runtime-web/transport/FabaApiConnection";
import FabaCore from "@fabalous/core/FabaCore";
import MenuMediator from "./menu/MenuMediator";
import LayoutMediator from "./layout/LayoutMediator";
import {createHashHistory} from 'history'
import {IcommonStore, commonImStore} from "./common/commonImStore";
import {commonStore} from "./common/CommonStore";
import FabaStore from "@fabalous/core/FabaStore";
import Routes from "./Routes";
import Layout from "./layout/Layout";

require("./layout/style/reset");
require("./index.html");

declare var module;

export default class A_Web extends FabaRuntimeWeb {
    history = createHashHistory();
    listener: any;
    layout: any;
    
    constructor(store:IStore) {
        super(store);
        this.routes = Routes;
        console.log(store);
        FabaCore.store = store;
        this.rootComponent = Layout;

        if (FabaCore.mediators.length === 0) {
            try {
                let injectTapEventPlugin = require("react-tap-event-plugin");
                injectTapEventPlugin();
            } catch (e) {
                console.log("inject error");
            }
        }

        if (module.hot) {
            module.hot.accept();

            module.hot.dispose(() => {
                FabaCore.reset();
            });
        }

        let host: string = window.location.host + "/api/";
        if (host === "192.168.0.31:8080/api/") host = "192.168.0.31:3120/";
        if (host === "localhost:8080/api/") host = "localhost:3120/";

        const protocol = window.location.protocol;

        FabaCore.addMediator(MenuMediator);
        FabaCore.addMediator(LayoutMediator);

        if (!commonStore.hot) {
            FabaRuntimeWeb.addServerEndPoint(new FabaApiConnection(protocol + "//" + host), "api");

            this.listener = this.history.listen((location) => {
                this.handleRoutes(location.pathname);
            });
            
            console.log("this handle routes");

            this.handleRoutes();
        } else {
            this.handleRoutes();
        }
    }
}

export interface IStore extends FabaStore<IcommonStore>{}
new A_Web(new FabaStore<IcommonStore>(commonImStore));