import AccountMediator from "./account/AccountMediator";
import DashboardMediator from "./dashboard/DasboardMediator";
import FabaServer from "@fabalous/core/FabaServer";
import FabaCore from "@fabalous/core/FabaCore";
import * as r from 'rethinkdb';
import {Connection} from 'rethinkdb';
import {RDb} from "rethinkdb";
import PrepareTablesEvent from "./common/event/PrepareTablesEvent";
import ShopMediator from "./shop/ShopMediator";

require("babel-polyfill");

/**
 * Created by joerg on 07.04.2016.
 */

export var dbConnection:Connection;
export var db:RDb;

class A_Server extends FabaServer{
    constructor(){
        FabaCore.addMediator(DashboardMediator);
        FabaCore.addMediator(AccountMediator);
        FabaCore.addMediator(ShopMediator);
        super();
        console.log("Server start at: " + new Date(Date.now()).toLocaleString());

        this.createDbConnection();
    }

   async createDbConnection(){
        r.connect({host:'localhost', port:28015},(err,conn)=>{
            if (err) throw err;
            dbConnection = conn;

            r.dbCreate('lingua').run(conn, (er,rtr)=>{
                //console.log(er);
            });


            db = r.db('lingua');

            new PrepareTablesEvent().dispatch();
        });
    }
}

new A_Server();