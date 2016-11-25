import FabaSerivce from "@fabalous/core/FabaService";
import FabaEvent from "@fabalous/core/FabaEvent";
import {RTable} from "rethinkdb";
import {db, dbConnection} from "../../A_Server";
import GetShopItemsEvent from "../event/GetShopItemsEvent";
import ShopItemVo from "../vo/ShopItemVo";

export default class GetShopItemsService extends FabaSerivce {
    table: RTable<any>;

    constructor() {
        super();
    }

    async getTable() : Promise<void> {
        this.table = await db.table("Shop");
    }

    async execute(event: GetShopItemsEvent) {
        try {
            await this.getTable();

            var query: ShopItemVo = new ShopItemVo();

            var result: Array<any>;

            result = await (await this.table.filter(query).orderBy("publishedData").limit(5).run(dbConnection)).toArray();

            event.result = result;
        } catch (e) {
            console.log(e);
        }

        for (var i = 0; i < 10; i++) {
            var test:ShopItemVo = new ShopItemVo();
            test.name = i + "dssdff" + Date.now().toString(10);
            test.id = i + "dfsdfdsf3423424";
            event.result.push(test);
        }


        super.sendToClient(event);
    }
}