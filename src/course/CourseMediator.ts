import FabaMediator from "@fabalous/core/FabaMediator";
import {IFabaMediator} from "@fabalous/core/IFabaMediator";

export default class CourseMediator extends FabaMediator implements IFabaMediator {

    constructor() {
        super();
    }

    registerCommands(): void {
        if (CLIENT) {
            super.registerCommands();

            this.addCommand(require("./event/InitCourseEvent"), require("./command/InitCourseCommand.ts"));
            this.addCommand(require("./event/GetCourseDataEvent"), require("./command/GetCourseDataCommand.ts"));
        }
    }

    registerServices(): void {
        if (SERVER){
            super.registerServices();

            this.addSerivce(require("./event/GetCourseDataEvent"), require("./service/GetCourseDataService.ts"));
            this.addSerivce(require("./../common/event/PrepareTablesEvent"), require("./service/PrepareTableService.ts"));
        }
    }
}