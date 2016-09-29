import FabaMediator from "@fabalous/core/FabaMediator";
import {IFabaMediator} from "@fabalous/core/IFabaMediator";

export default class CourseMediator extends FabaMediator implements IFabaMediator {

    constructor() {
        super();
    }

    registerCommands(): void {
        super.registerCommands();

        this.addCommand(require("./event/InitCourseEvent"), require("./command/InitCourseCommand.ts"));
        this.addCommand(require("./event/GetCourseDataEvent"), require("./command/GetCourseDataCommand.ts"));
    }

    registerServices(): void {
        super.registerServices();
        this.addSerivce(require("./event/GetCourseDataEvent"), require("./service/GetCourseDataService.ts"));
    }
}