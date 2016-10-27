import FabaSerivce from "@fabalous/core/FabaService";
import PrepareTablesEvent from "../event/PrepareTablesEvent";

export default class PrepareTablesService extends FabaSerivce {

    async execute(event: PrepareTablesEvent) {
        super.sendToClient(event);


    }
}