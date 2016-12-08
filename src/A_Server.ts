import AccountMediator from "./account/AccountMediator";
import DashboardMediator from "./dashboard/DasboardMediator";
import FabaServer from "@fabalous/core/FabaServer";
import FabaCore from "@fabalous/core/FabaCore";
import * as r from 'rethinkdb';
import {Connection} from 'rethinkdb';
import {RDb} from "rethinkdb";
import PrepareTablesEvent from "./common/event/PrepareTablesEvent";
import ShopMediator from "./shop/ShopMediator";
import CourseMediator from "./course/CourseMediator";
import Login from "./account/view/Login";
import {ILoginProps} from "./account/view/Login";
import * as ReactDOM from "react-dom/server";
import * as React from "react";
import {LoginIm} from "./account/vo/LoginVo";
import A_Web from "./A_Web";
import {commonImStore, IcommonStore} from "./common/commonImStore";
import FabaStore from "@fabalous/core/FabaStore";
import Layout from "./layout/Layout";
import InitAccountCommand from "./account/command/InitAccountCommand";
import InitAccountEvent from "./account/event/InitAccountEvent";
import {css} from "typestyle";

export var dbConnection: Connection;
export var db: RDb;

class A_Server extends FabaServer {
    constructor() {
        FabaCore.addMediator(DashboardMediator);
        FabaCore.addMediator(AccountMediator);
        FabaCore.addMediator(ShopMediator);
        FabaCore.addMediator(CourseMediator);
        //FabaCore.addMediator(CourseOverviewMediator);

        super();
        console.log("Server start at: " + new Date(Date.now()).toLocaleString());

        //this.isomorphrendering();
        this.createDbConnection();
    }

    isomorphrendering() {
        const store = new FabaStore<IcommonStore>(commonImStore);

        const ev = new InitAccountEvent();
        ev.args = [];

        new InitAccountCommand(store).execute(ev);

        var k = React.createElement(Layout, {model: store.data, childs: ev.view});
        var h = ReactDOM.renderToString(k);
        var c = css();

        var testHtml = `<head><style>${c}</style><body>${h}</body>`;

        console.log(testHtml);
    }

    async createDbConnection(): Promise<void> {
        r.connect({host: 'localhost', port: 28015}, (err, conn) => {
            if (err) throw err;
            dbConnection = conn;

            r.dbCreate('lingua').run(conn, (er, rtr) => {
                //console.log(er);
            });


            db = r.db('lingua');

            new PrepareTablesEvent().dispatch();
        });
    }
}

new A_Server();